function toggleNav() {
    document.querySelector('.nav__links').classList.toggle('show');
}

function smoothScroll(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function openDetails(button) {
    const detail = button.nextElementSibling;
    detail.classList.toggle('show');
}

// slider controls
const slider = document.querySelector('[data-slider]');
if (slider) {
    const track = slider.querySelector('.module__track');
    slider.querySelector('[data-next]').addEventListener('click', () => {
        track.scrollBy({ left: 320, behavior: 'smooth' });
    });
    slider.querySelector('[data-prev]').addEventListener('click', () => {
        track.scrollBy({ left: -320, behavior: 'smooth' });
    });
}

// stat animation
const stats = document.querySelectorAll('.stat__value');
const statObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = el.textContent;
        const numeric = parseInt(target.replace(/[^0-9]/g, ''), 10);
        if (Number.isNaN(numeric)) {
            observer.unobserve(el);
            return;
        }
        let current = 0;
        const duration = 1200;
        const step = 16;
        const increment = numeric / (duration / step);
        const interval = setInterval(() => {
            current += increment;
            if (current >= numeric) {
                el.textContent = target;
                clearInterval(interval);
                observer.unobserve(el);
            } else {
                el.textContent = Math.round(current) + target.replace(/[0-9]/g, '');
            }
        }, step);
    });
}, { threshold: 0.8 });

stats.forEach(stat => statObserver.observe(stat));

// intersection fade
const faders = document.querySelectorAll('section');
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

faders.forEach(section => fadeObserver.observe(section));
