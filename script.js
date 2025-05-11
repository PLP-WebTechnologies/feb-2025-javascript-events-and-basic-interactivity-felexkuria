// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
    alert('You clicked the button! 🎉');
});

document.getElementById('hoverBox').addEventListener('mouseover', () => {
    hoverBox.style.transition = 'background-color 0.3s ease';
    hoverBox.style.backgroundColor = 'gold';
});
document.getElementById('hoverBox').addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = 'lightblue';
});

document.getElementById('keyInput').addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Secret Action: Double click
document.getElementById('clickBtn').addEventListener('dblclick', () => {
    document.body.style.backgroundColor = '#f5f5dc';
    alert('🌟 Secret action activated!');
});

// Interactive: Toggle color
const colorBtn = document.getElementById('colorToggleBtn');
colorBtn.addEventListener('click', () => {
    colorBtn.classList.toggle('highlight');
});
colorBtn.classList.add('highlight');

// Slideshow
let galleryImages = document.querySelectorAll('.gallery-img');
let currentImg = 0;
setInterval(() => {
    galleryImages[currentImg].classList.remove('active');
    currentImg = (currentImg + 1) % galleryImages.length;
    galleryImages[currentImg].classList.add('active');
}, 2000);

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(tab => {
            tab.style.display = 'none';
            tab.style.opacity = '0';
        });
        const activeTab = document.getElementById(`tab${btn.dataset.tab}`);
        activeTab.style.display = 'block';
        setTimeout(() => (activeTab.style.opacity = '1'), 50);
    });
});

// Form Validation
const form = document.getElementById('signupForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
});
