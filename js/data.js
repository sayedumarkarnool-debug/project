// =============================================
// FANDOM CLONE – DATA STORE (Backend simulation)
// =============================================

const FandomDB = {

  wikis: [
    {
      id: 'minecraft',
      title: 'Minecraft Wiki',
      slug: 'minecraft',
      category: 'games',
      icon: '⛏️',
      banner: 'assets/wiki-minecraft.jpg',
      description: 'The most comprehensive wiki for everything Minecraft – crafting recipes, biomes, mobs, updates, and beyond.',
      articles: 62340,
      followers: 1240000,
      editors: 48200,
      created: '2009',
      language: 'English',
      color: '#5cb85c',
      trending: true,
      featured: true,
      tags: ['Sandbox', 'Survival', 'Microsoft'],
    },
    {
      id: 'pokemon',
      title: 'Pokémon Wiki',
      slug: 'pokemon',
      category: 'games',
      icon: '⚡',
      banner: 'assets/wiki-pokemon.jpg',
      description: 'Your ultimate resource for Pokémon – all generations, moves, types, regions and competitive strategies.',
      articles: 28190,
      followers: 980000,
      editors: 31500,
      created: '2005',
      language: 'English',
      color: '#ffcb05',
      trending: true,
      tags: ['RPG', 'Nintendo', 'Game Freak'],
    },
    {
      id: 'fortnite',
      title: 'Fortnite Wiki',
      slug: 'fortnite',
      category: 'games',
      icon: '🔫',
      banner: '',
      description: 'All chapters, seasons, weapons, skins and battle royale strategies for Fortnite documented here.',
      articles: 14200,
      followers: 750000,
      editors: 22100,
      created: '2017',
      language: 'English',
      color: '#7b2fd4',
      trending: false,
      tags: ['Battle Royale', 'Epic Games', 'FPS'],
    },
    {
      id: 'marvel',
      title: 'Marvel Database',
      slug: 'marvel',
      category: 'movies',
      icon: '🦸',
      banner: 'assets/wiki-marvel.jpg',
      description: 'The ultimate Marvel Universe wiki covering all heroes, villains, comics, and MCU films.',
      articles: 185400,
      followers: 2100000,
      editors: 95000,
      created: '2006',
      language: 'English',
      color: '#e23636',
      trending: true,
      featured: true,
      tags: ['Superheroes', 'MCU', 'Comics'],
    },
    {
      id: 'dc',
      title: 'DC Comics Database',
      slug: 'dc',
      category: 'comics',
      icon: '🦇',
      banner: '',
      description: 'Everything about the DC universe – from Batman to Superman, all comics, films, and shows.',
      articles: 142000,
      followers: 1600000,
      editors: 72000,
      created: '2005',
      language: 'English',
      color: '#0074e4',
      trending: true,
      tags: ['Superheroes', 'DCEU', 'Comics'],
    },
    {
      id: 'got',
      title: 'Game of Thrones Wiki',
      slug: 'got',
      category: 'tv',
      icon: '⚔️',
      banner: '',
      description: 'The definitive wiki for Game of Thrones covering characters, houses, locations, lore, and episodes.',
      articles: 25600,
      followers: 890000,
      editors: 28400,
      created: '2011',
      language: 'English',
      color: '#8B4513',
      trending: false,
      tags: ['Fantasy', 'HBO', 'Drama'],
    },
    {
      id: 'strangerthings',
      title: 'Stranger Things Wiki',
      slug: 'strangerthings',
      category: 'tv',
      icon: '🌀',
      banner: '',
      description: 'All about the Upside Down – characters, monsters, seasons, and lore from Stranger Things.',
      articles: 8900,
      followers: 620000,
      editors: 15200,
      created: '2016',
      language: 'English',
      color: '#cc0000',
      trending: true,
      tags: ['Sci-Fi', 'Netflix', 'Horror'],
    },
    {
      id: 'starwars',
      title: 'Wookieepedia',
      slug: 'starwars',
      category: 'movies',
      icon: '⭐',
      banner: '',
      description: 'The Star Wars encyclopedia that covers the entire expanded universe, films, series, and legends.',
      articles: 179000,
      followers: 1850000,
      editors: 84000,
      created: '2004',
      language: 'English',
      color: '#ffe81f',
      trending: false,
      tags: ['Sci-Fi', 'Disney', 'Films'],
    },
    {
      id: 'lotr',
      title: 'The One Wiki to Rule Them All',
      slug: 'lotr',
      category: 'movies',
      icon: '💍',
      banner: '',
      description: 'The most complete wiki for Tolkien\'s Middle-earth – characters, lore, places, and adaptations.',
      articles: 21300,
      followers: 540000,
      editors: 19000,
      created: '2005',
      language: 'English',
      color: '#a67c52',
      trending: false,
      tags: ['Fantasy', 'Tolkien', 'Films'],
    },
    {
      id: 'breakingbad',
      title: 'Breaking Bad Wiki',
      slug: 'breakingbad',
      category: 'tv',
      icon: '🧪',
      banner: '',
      description: 'Full coverage of Breaking Bad and Better Call Saul with episode guides, characters, and trivia.',
      articles: 4200,
      followers: 410000,
      editors: 9800,
      created: '2008',
      language: 'English',
      color: '#2ecc71',
      trending: false,
      tags: ['Drama', 'AMC', 'Crime'],
    },
    {
      id: 'demonslayer',
      title: 'Kimetsu no Yaiba Wiki',
      slug: 'demonslayer',
      category: 'anime',
      icon: '🗡️',
      banner: '',
      description: 'The complete resource for Demon Slayer – characters, arcs, breathing styles, and demons.',
      articles: 6800,
      followers: 720000,
      editors: 18500,
      created: '2019',
      language: 'English',
      color: '#e040fb',
      trending: true,
      tags: ['Shonen', 'Ufotable', 'Action'],
    },
    {
      id: 'zelda',
      title: 'Zelda Wiki',
      slug: 'zelda',
      category: 'games',
      icon: '🗡️',
      banner: '',
      description: 'Everything about the Legend of Zelda – games, characters, items, and the history of Hyrule.',
      articles: 18400,
      followers: 820000,
      editors: 29000,
      created: '2006',
      language: 'English',
      color: '#5cb85c',
      trending: false,
      tags: ['Action-Adventure', 'Nintendo', 'RPG'],
    },
  ],

  news: [
    {
      id: 1,
      title: 'Minecraft Tricky Trials Update – Everything You Need to Know',
      excerpt: 'The latest Minecraft update brings new chambers, mobs, and the legendary Trial Key. Here\'s what changed.',
      category: 'games',
      wiki: 'Minecraft Wiki',
      date: 'May 6, 2026',
      icon: '⛏️',
      readTime: '4 min read',
    },
    {
      id: 2,
      title: 'Avengers: Secret Wars Official Trailer Breakdown',
      excerpt: 'Marvel Studios just released the first teaser for the next Avengers film. We\'ve analyzed every frame.',
      category: 'movies',
      wiki: 'Marvel Database',
      date: 'May 5, 2026',
      icon: '🦸',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Stranger Things Season 5 – Final Cast Confirmed',
      excerpt: 'Netflix has announced the complete cast list and episode count for the final season of Stranger Things.',
      category: 'tv',
      wiki: 'Stranger Things Wiki',
      date: 'May 4, 2026',
      icon: '🌀',
      readTime: '3 min read',
    },
    {
      id: 4,
      title: 'Demon Slayer: Infinity Castle Arc Release Date Announced',
      excerpt: 'Ufotable confirms the long-awaited arc will premiere in 2026. Fans go wild on social media.',
      category: 'anime',
      wiki: 'Kimetsu no Yaiba Wiki',
      date: 'May 3, 2026',
      icon: '🗡️',
      readTime: '3 min read',
    },
    {
      id: 5,
      title: 'Pokémon Presents – New Region and Legends Game Revealed',
      excerpt: 'A new Pokémon Presents broadcast unveiled two new games and a glimpse at a brand-new region.',
      category: 'games',
      wiki: 'Pokémon Wiki',
      date: 'May 2, 2026',
      icon: '⚡',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'Game of Thrones Prequel "Sea Snake" Officially Greenlit by HBO',
      excerpt: 'HBO confirms another Game of Thrones spinoff, this time following Corlys Velaryon on his legendary voyages.',
      category: 'tv',
      wiki: 'Game of Thrones Wiki',
      date: 'May 1, 2026',
      icon: '⚔️',
      readTime: '4 min read',
    },
  ],

  hotArticles: [
    { title: 'Trial Chambers', wiki: 'Minecraft Wiki', slug: 'minecraft', icon: '⛏️' },
    { title: 'Kang the Conqueror', wiki: 'Marvel Database', slug: 'marvel', icon: '🦸' },
    { title: 'Eleven', wiki: 'Stranger Things Wiki', slug: 'strangerthings', icon: '🌀' },
    { title: 'Tanjiro Kamado', wiki: 'Kimetsu no Yaiba Wiki', slug: 'demonslayer', icon: '🗡️' },
    { title: 'Pikachu', wiki: 'Pokémon Wiki', slug: 'pokemon', icon: '⚡' },
  ],

  // Simulated user database
  users: JSON.parse(localStorage.getItem('fandom_users') || '[]'),

  // Save users
  saveUsers() {
    localStorage.setItem('fandom_users', JSON.stringify(this.users));
  },

  // Register user
  registerUser(username, email, password) {
    if (this.users.find(u => u.email === email)) {
      return { success: false, error: 'An account with this email already exists.' };
    }
    if (this.users.find(u => u.username.toLowerCase() === username.toLowerCase())) {
      return { success: false, error: 'This username is already taken.' };
    }
    const user = {
      id: Date.now().toString(),
      username,
      email,
      password: btoa(password), // Very basic encoding (not for production!)
      avatar: username.charAt(0).toUpperCase(),
      created: new Date().toISOString(),
      wikisJoined: [],
      edits: 0,
      following: 0,
    };
    this.users.push(user);
    this.saveUsers();
    return { success: true, user };
  },

  // Login user
  loginUser(email, password) {
    const user = this.users.find(u => u.email === email && u.password === btoa(password));
    if (!user) return { success: false, error: 'Invalid email or password.' };
    return { success: true, user };
  },

  // Get wiki by slug
  getWiki(slug) {
    return this.wikis.find(w => w.slug === slug) || null;
  },

  // Search wikis
  searchWikis(query) {
    const q = query.toLowerCase();
    return this.wikis.filter(w =>
      w.title.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      w.tags.some(t => t.toLowerCase().includes(q))
    );
  },

  // Filter wikis by category
  filterByCategory(cat) {
    if (cat === 'all') return this.wikis;
    return this.wikis.filter(w => w.category === cat);
  },

  // Get trending wikis
  getTrending() {
    return this.wikis.filter(w => w.trending);
  },
};

// Freeze top-level methods but allow data mutation
window.FandomDB = FandomDB;
