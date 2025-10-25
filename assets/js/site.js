// Basic site behaviors: nav highlighting, data rendering, contact form

const CONTACT_EMAIL = "user@example.com"; // change to your email
const FORMSPREE_ENDPOINT = ""; // e.g. https://formspree.io/f/xxxxxx

function preferActiveSource(sources) {
  if (!Array.isArray(sources)) return null;
  const active = sources.find((s) => s.active);
  return active || sources[0] || null;
}

async function fetchJson(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function renderPhotos(targetId, dataPath) {
  const container = document.getElementById(targetId);
  if (!container) return;
  fetchJson(dataPath)
    .then((items) => {
      container.innerHTML = items
        .map((p) => `
          <article class="box">
            <a class="image featured" href="${p.src}" target="_blank" rel="noopener">
              <img src="${p.thumb || p.src}" alt="${p.alt || p.title || ''}">
            </a>
            <header class="major">
              <h3>${p.title || ''}</h3>
            </header>
          </article>
        `)
        .join("");
    })
    .catch((e) => {
      container.innerHTML = `<p>Unable to load photos.</p>`;
      console.error(e);
    });
}

function renderVideos(targetId, dataPath) {
  const container = document.getElementById(targetId);
  if (!container) return;
  fetchJson(dataPath)
    .then((items) => {
      container.innerHTML = items
        .map((v) => {
          const chosen = preferActiveSource(v.sources || []);
          const thumb = v.thumbnail ? `<a href="${chosen?.url || '#'}" target="_blank" rel="noopener" class="image featured"><img src="${v.thumbnail}" alt="${v.title || ''}"></a>` : '';
          let body = '';
          if (chosen && chosen.type === 'youtube') {
            const ytUrl = new URL(chosen.url);
            const id = ytUrl.searchParams.get('v');
            if (id) {
              body = `<div class="video-wrapper"><iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
            }
          }
          if (!body && chosen?.url) {
            body = `<p><a class="button" href="${chosen.url}" target="_blank" rel="noopener">Watch</a></p>`;
          }
          return `
            <article class="box">
              ${thumb}
              <header class="major">
                <h3>${v.title || ''}</h3>
                ${v.publishedAt ? `<p>${v.publishedAt}</p>` : ''}
              </header>
              <p>${v.description || ''}</p>
              ${body}
            </article>
          `;
        })
        .join("");
    })
    .catch((e) => {
      container.innerHTML = `<p>Unable to load videos.</p>`;
      console.error(e);
    });
}

function renderPosts(targetId, dataPath) {
  const container = document.getElementById(targetId);
  if (!container) return;
  fetchJson(dataPath)
    .then((items) => {
      container.innerHTML = items
        .map((p) => `
          <article class="box excerpt">
            <header>
              <span class="date">${p.date || ''}</span>
              <h3><a href="${p.href || '#'}">${p.title || ''}</a></h3>
            </header>
            <p>${p.summary || ''}</p>
          </article>
        `)
        .join("");
    })
    .catch((e) => {
      container.innerHTML = `<p>Unable to load posts.</p>`;
      console.error(e);
    });
}

function renderCooking(targetId, dataPath) {
  const container = document.getElementById(targetId);
  if (!container) return;
  fetchJson(dataPath)
    .then((items) => {
      container.innerHTML = items
        .map((c) => `
          <article class="box">
            ${c.image ? `<a class="image featured" href="${c.href || '#'}"><img src="${c.image}" alt="${c.title || ''}"></a>` : ''}
            <header class="major"><h3>${c.title || ''}</h3></header>
            <p>${c.summary || ''}</p>
            ${c.href ? `<p><a class="button" href="${c.href}">Open</a></p>` : ''}
          </article>
        `)
        .join("");
    })
    .catch((e) => {
      container.innerHTML = `<p>Unable to load items.</p>`;
      console.error(e);
    });
}

function setupContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';

    const status = form.querySelector('[data-status]');
    if (status) status.textContent = '';

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: formData,
        });
        if (res.ok) {
          if (status) status.textContent = 'Thanks! Your message was sent.';
          form.reset();
        } else {
          if (status) status.textContent = 'Error sending message. Try again later.';
        }
      } catch (err) {
        if (status) status.textContent = 'Network error. Please try again later.';
      }
      return;
    }

    // Mailto fallback
    const params = new URLSearchParams({
      subject: `Website contact from ${name}`,
      body: `From: ${name} <${email}>\n\n${message}`,
    });
    window.location.href = `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  });
}

window.Site = {
  renderPhotos,
  renderVideos,
  renderPosts,
  renderCooking,
  setupContactForm,
};
