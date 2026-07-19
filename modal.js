const projects = {
    portfolio: {
        title: "Personal Portfolio",
        tag: "Web Design",
        image: "img/projects/portfolio.png",
        desc: "A responsive personal portfolio built with HTML, CSS and JavaScript, featuring smooth scroll animations and a clean, modern layout.",
        points: [
            "Fully responsive across desktop, tablet and mobile",
            "Scroll-triggered animations using AOS",
            "Custom yellow/black visual theme"
        ],
        link: "#"
    },
    brandkit: {
        title: "Brand Identity Kit",
        tag: "Graphic Design",
        image: "img/projects/brandkit.png",
        desc: "A complete brand identity kit for a startup, including logo variations, color system and typography guidelines.",
        points: [
            "Primary, secondary and monochrome logo sets",
            "Defined color palette and usage rules",
            "Typography and spacing standards"
        ],
        link: "#"
    },
    dashboard: {
        title: "Analytics Dashboard",
        tag: "Web Development",
        image: "img/projects/dashboard.png",
        desc: "A data-driven analytics dashboard with interactive charts, live filtering and a dark user interface.",
        points: [
            "Interactive charts with real-time updates",
            "Filterable data tables",
            "Accessible, keyboard-friendly controls"
        ],
        link: "#"
    }
};

const params = new URLSearchParams(window.location.search);
const key = params.get('project');

const closeBtn = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTag = document.getElementById('modalTag');
const modalPoints = document.getElementById('modalPoints');
const modalLink = document.getElementById('modalLink');

function openModal(key) {
    const data = projects[key];
    if (!data) return;

    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalTag.textContent = data.tag;
    modalLink.href = data.link;

    modalPoints.innerHTML = '';
    data.points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        modalPoints.appendChild(li);
    });

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

openModal(key);
