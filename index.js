
const themeToggle = document.querySelector('.toggle');
const body = document.body;
const modeText = document.querySelector('.toggle-container span');

function toggleTheme() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    const isDarkMode = body.classList.contains('dark-mode');
    modeText.textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

themeToggle.addEventListener('click', toggleTheme);

function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeText.textContent = 'Light Mode';
    }
}

document.addEventListener('DOMContentLoaded', setInitialTheme);