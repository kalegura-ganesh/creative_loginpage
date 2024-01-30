
    function toggleForm() {
      const loginForm = document.getElementById('loginForm');
      const signupForm = document.getElementById('signupForm');

      loginForm.classList.toggle('signup-fields');
      signupForm.classList.toggle('signup-fields');
    }

    function toggleTheme() {
    const body = document.body;
    const themeSwitch = document.querySelector('.theme-switch');
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      themeSwitch.textContent = '🌜';
    } else {
      themeSwitch.textContent = '🌞';
    }
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    loginForm.classList.toggle('dark-mode');
    signupForm.classList.toggle('dark-mode');
  }
  