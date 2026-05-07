// =============================================
// HOME PAGE JS
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // --- HERO SLIDER ---
  let currentSlide = 0;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slide-dot');

  function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }
  window.goToSlide = goToSlide;

  // Auto-slide
  setInterval(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, 5000);

  // --- WIKIS GRID ---
  const wikisGrid = document.getElementById('wikisGrid');
  let activeTab = 'all';

  function renderWikis() {
    if (!wikisGrid) return;
    let list = activeTab === 'all' ? FandomDB.getTrending() : FandomDB.filterByCategory(activeTab).slice(0, 8);
    wikisGrid.innerHTML = list.slice(0, 8).map(createWikiCard).join('');
    // Animate in
    wikisGrid.querySelectorAll('.wiki-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 60);
    });
  }

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      renderWikis();
    });
  });

  renderWikis();

  // --- HOT ARTICLES ---
  const hotArticlesList = document.getElementById('hotArticlesList');
  if (hotArticlesList) {
    hotArticlesList.innerHTML = FandomDB.hotArticles.map((article, i) => `
      <li>
        <a href="wiki.html?wiki=${article.slug}" class="hot-article-link">
          <span class="hot-article-num">0${i + 1}</span>
          <div class="hot-article-info">
            <div class="hot-article-title">${article.title}</div>
            <div class="hot-article-wiki">${article.icon} ${article.wiki}</div>
          </div>
        </a>
      </li>
    `).join('');
  }

  // --- NEWS GRID ---
  const newsGrid = document.getElementById('newsGrid');
  if (newsGrid) {
    newsGrid.innerHTML = FandomDB.news.slice(0, 3).map(createNewsCard).join('');
  }

  // --- SCROLL ANIMATION ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = '.section.visible { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);
});
