// =============================================
// FANDOM CLONE – AUTH MODULE
// Handles login state & session management
// =============================================

const Auth = {
  SESSION_KEY: 'fandom_session',

  // Get current user
  getCurrentUser() {
    const session = localStorage.getItem(this.SESSION_KEY);
    if (!session) return null;
    try {
      return JSON.parse(session);
    } catch {
      return null;
    }
  },

  // Set session
  setSession(user) {
    const safeUser = { ...user };
    delete safeUser.password;
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(safeUser));
  },

  // Clear session
  clearSession() {
    localStorage.removeItem(this.SESSION_KEY);
  },

  // Is logged in
  isLoggedIn() {
    return this.getCurrentUser() !== null;
  },

  // Update UI based on auth state
  updateAuthUI() {
    const user = this.getCurrentUser();
    const signInBtn = document.getElementById('signInBtn');
    const registerBtn = document.getElementById('registerBtn');
    const userLoggedIn = document.getElementById('userLoggedIn');
    const userAvatar = document.getElementById('userAvatar');
    const mobileMenu = document.getElementById('mobileMenu');

    if (user) {
      if (signInBtn) signInBtn.classList.add('hidden');
      if (registerBtn) registerBtn.classList.add('hidden');
      if (userLoggedIn) userLoggedIn.classList.remove('hidden');
      if (userAvatar) userAvatar.textContent = user.username.charAt(0).toUpperCase();
    } else {
      if (signInBtn) signInBtn.classList.remove('hidden');
      if (registerBtn) registerBtn.classList.remove('hidden');
      if (userLoggedIn) userLoggedIn.classList.add('hidden');
    }
  },

  // Logout
  logout() {
    this.clearSession();
    this.updateAuthUI();
    showToast('You have been signed out.', 'info');
    setTimeout(() => { window.location.href = 'index.html'; }, 800);
  },
};

// Initialize auth on every page
document.addEventListener('DOMContentLoaded', () => {
  Auth.updateAuthUI();

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      Auth.logout();
    });
  }
});

window.Auth = Auth;
