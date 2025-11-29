// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', 
        hamburger.classList.contains('active'));
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlight active section in navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightActiveSection() {
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);
window.addEventListener('load', highlightActiveSection);

// Fetch GitHub repository stars
async function fetchGitHubStars() {
    const repoCards = document.querySelectorAll('.repo-card[data-repo]');
    
    repoCards.forEach(async (card) => {
        const repo = card.getAttribute('data-repo');
        const starElement = card.querySelector('.star-count');
        
        if (!repo || !starElement) return;
        
        try {
            const response = await fetch(`https://api.github.com/repos/${repo}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch repository data');
            }
            
            const data = await response.json();
            const stars = data.stargazers_count;
            
            // Format star count with comma separator for thousands
            const formattedStars = stars.toLocaleString();
            
            starElement.textContent = formattedStars;
            starElement.parentElement.removeAttribute('data-loading');
        } catch (error) {
            console.error(`Error fetching stars for ${repo}:`, error);
            starElement.textContent = 'N/A';
            starElement.parentElement.removeAttribute('data-loading');
        }
    });
}

// Fetch stars when page loads
window.addEventListener('load', fetchGitHubStars);

// Form is now embedded as iframe - no client-side handling needed
