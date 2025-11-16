// SMOOTH SCROLLING
function scrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// PRODUCT TABS
let currentTab = 0;

function switchTab(tabIndex) {
    const tabs = document.querySelectorAll('.product-tab');
    const buttons = document.querySelectorAll('.tab-btn');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    tabs[tabIndex].classList.add('active');
    buttons[tabIndex].classList.add('active');
    currentTab = tabIndex;
}

// TEAM CARD TOGGLE
function toggleTeam(index) {
    const cards = document.querySelectorAll('.team-card');
    const card = cards[index];
    const content = card.querySelector('.team-content');
    
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// SERVICE CARD TOGGLE
function toggleService(index) {
    const cards = document.querySelectorAll('.service-card');
    const card = cards[index];
    const details = card.querySelector('.service-details');
    const button = card.querySelector('.expand-btn');
    
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = '−';
    } else {
        details.style.display = 'none';
        button.textContent = '+';
    }
}

// CONTACT MODAL
function showContact() {
    alert(`Get in touch with Genesis AI!\n\n📧 Email: s.genise50@studenti.poliba.it\n📱 Phone: +39 392 5772357\n💬 WhatsApp/Telegram/Signal\n\nSend a message and we'll respond within 24 hours.`);
}

// SHARE FUNCTIONS
function shareWhatsapp() {
    const url = window.location.href;
    const text = "Check out Genesis AI - The Ecosystem Advantage! 🚀 AI Platform, Tax Optimization, and Consulting Services.";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
    window.open(whatsappUrl, '_blank');
}

function shareTelegram() {
    const url = window.location.href;
    const text = "Check out Genesis AI - The Ecosystem Advantage! 🚀";
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(telegramUrl, '_blank');
}

function shareEmail() {
    const url = window.location.href;
    const subject = "Check out Genesis AI - The Ecosystem Advantage";
    const body = `I found this amazing AI platform and wanted to share it with you:\n\n${url}\n\nIt's built on 15 years of preparation with real results. Definitely worth checking out!`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// NAVIGATION HIGHLIGHTING
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ANIMATIONS ON SCROLL
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item, .ecosystem-card, .team-card, .service-card, .financial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// EXPAND BUTTONS DEFAULT STATE
document.addEventListener('DOMContentLoaded', function() {
    const serviceDetails = document.querySelectorAll('.service-details');
    serviceDetails.forEach(detail => {
        detail.style.display = 'none';
    });
});

// COUNTER ANIMATION
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 30;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 30);
    });
}

// TRIGGER COUNTERS ON SCROLL
observer.observe(document.querySelector('.hero'));
