const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const particles = [];
const colors = ['#ff4b1f', '#ff9068', '#74ebd5', '#acb6e5'];

window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// ایجاد ذرات با موقعیت و سرعت تصادفی
function createParticles(count) {
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

// رسم ذرات روی بوم
function drawParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // حرکت ذرات
        particle.x += particle.vx;
        particle.y += particle.vy;

        // چرخش ذرات در اطراف لبه‌ها
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
    });
}

// حلقه انیمیشن
function animate() {
    drawParticles();
    requestAnimationFrame(animate);
}

createParticles(200); // ایجاد 200 ذره
animate(); // شروع انیمیشن
