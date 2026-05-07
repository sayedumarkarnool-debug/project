// =============================================
// FANDOM CLONE – MAIN JS
// Global utilities, nav, search, toast
// =============================================

// ---- TOAST ----
function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.className = `toast ${type} show`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.classList.remove('show'); }, 3200);
}
window.showToast = showToast;

// ---- NAV SCROLL ----
const globalNav = document.getElementById('global-nav');
if (globalNav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      globalNav.classList.add('scrolled');
    } else {
      globalNav.classList.remove('scrolled');
    }
  });
}

// ---- HAMBURGER ----
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open');
  });
}

// ---- SEARCH TOGGLE ----
const searchToggle = document.getElementById('searchToggle');
const searchExpand = document.getElementById('searchExpand');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

if (searchToggle && searchExpand) {
  searchToggle.addEventListener('click', () => {
    searchExpand.classList.toggle('open');
    if (searchExpand.classList.contains('open')) {
      searchInput && searchInput.focus();
    }
  });
}

// Search autocomplete
if (searchInput) {
  let searchDebounce;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchDebounce);
    const q = e.target.value.trim();
    if (!q) {
      searchResults.innerHTML = '';
      return;
    }
    searchDebounce = setTimeout(() => {
      const results = FandomDB.searchWikis(q).slice(0, 6);
      if (!results.length) {
        searchResults.innerHTML = `<div class="search-result-item" style="color:var(--color-text-muted)">No results found for "${q}"</div>`;
        return;
      }
      searchResults.innerHTML = results.map(w => `
        <div class="search-result-item" onclick="window.location='wiki.html?wiki=${w.slug}'">
          <div style="width:36px;height:36px;border-radius:6px;background:var(--color-surface-2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${w.icon}</div>
          <div class="result-info">
            <div class="result-title">${w.title}</div>
            <div class="result-cat">${capitalize(w.category)} • ${formatNumber(w.articles)} articles</div>
          </div>
        </div>
      `).join('');
    }, 200);
  });

  // Close search on outside click
  document.addEventListener('click', (e) => {
    if (!searchExpand?.contains(e.target) && e.target !== searchToggle) {
      searchExpand?.classList.remove('open');
      if (searchResults) searchResults.innerHTML = '';
    }
  });
}

// ---- DROPDOWN NAV ----
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  dropdown.addEventListener('mouseenter', () => dropdown.classList.add('open'));
  dropdown.addEventListener('mouseleave', () => dropdown.classList.remove('open'));
});

// ---- HELPERS ----
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}
window.formatNumber = formatNumber;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
window.capitalize = capitalize;

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
window.getParam = getParam;

function createWikiCard(wiki) {
  return `
    <a href="wiki.html?wiki=${wiki.slug}" class="wiki-card" style="text-decoration:none">
      <div class="wiki-card-img">
        ${wiki.banner
          ? `<img src="${wiki.banner}" alt="${wiki.title}" onerror="this.parentNode.innerHTML='<div class=\\"wiki-card-img-placeholder\\">${wiki.icon}</div>'" />`
          : `<div class="wiki-card-img-placeholder">${wiki.icon}</div>`}
      </div>
      <div class="wiki-card-body">
        <span class="wiki-card-tag tag-${wiki.category}">${capitalize(wiki.category)}</span>
        <div class="wiki-card-title">${wiki.title}</div>
        <div class="wiki-card-desc">${wiki.description.substring(0, 90)}...</div>
        <div class="wiki-card-meta">
          <span>📄 ${formatNumber(wiki.articles)}</span>
          <span>❤️ ${formatNumber(wiki.followers)}</span>
          <span>✏️ ${formatNumber(wiki.editors)}</span>
        </div>
      </div>
    </a>
  `;
}
window.createWikiCard = createWikiCard;

function createNewsCard(article) {
  return `
    <div class="news-card" onclick="window.location='news.html'">
      <div class="news-card-img">
        <div class="news-card-img-placeholder">${article.icon}</div>
      </div>
      <div class="news-card-body">
        <span class="news-card-tag tag-${article.category}">${capitalize(article.category)}</span>
        <div class="news-card-title">${article.title}</div>
        <div class="news-card-excerpt">${article.excerpt}</div>
        <div class="news-card-meta">${article.date} • ${article.readTime}</div>
      </div>
    </div>
  `;
}
window.createNewsCard = createNewsCard;
