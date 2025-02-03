// --------------------------------Navabar-------------------------- //

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// --------------------------------Navabar-------------------------- //


// Grafik konteksni olish
const ctx = document.getElementById('trafficChart').getContext('2d');

// Gradient yaratilishi (grafik soyasi uchun)
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(138, 43, 226, 0.4)'); // Yuqorida to'q rang
gradient.addColorStop(1, 'rgba(138, 43, 226, 0)'); // Pastda shaffof

// Grafik ma'lumotlari
const trafficData = {
    labels: ['Jun 24', 'Jun 27', 'Jun 29', 'Jul 1', 'Jul 4', 'Jul 6', 'Jul 8', 'Jul 11', 'Jul 13', 'Jul 15', 'Jul 18', 'Jul 20'],
    datasets: [{
        label: 'Traffic',
        data: [2000, 3000, 3500, 3000, 3500, 3000, 3500, 4000, 4500, 3200, 3800, 3800], // Y o'qi qiymatlari
        borderColor: 'rgba(138, 43, 226, 1)', // Chiziq rangi
        backgroundColor: gradient, // Soyali fon
        borderWidth: 1,
        pointRadius: 1,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(138, 43, 226, 1)',
        fill: true, // Chiziq tagini to'ldirish
        tension: 0.1 // Chiziqni silliqlashtirish
    }]
};

// Chart.js yordamida grafik yaratish
const trafficChart = new Chart(ctx, {
    type: 'line',
    data: trafficData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }, // Legenda yashirish
            tooltip: {
                enabled: true, // Tooltipni yoqish
                callbacks: {
                    label: function(context) {
                        // Tooltipda aniqroq ma'lumot ko'rsatish
                        // return Traffic: $ { context.raw };
                    }
                },
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip foni
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: 'rgba(138, 43, 226, 1)',
                borderWidth: 1,
                padding: 10
            }
        },
        interaction: {
            mode: 'nearest', // Eng yaqin nuqta ma'lumotini ko'rsatish
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                ticks: { color: '#aaa' },
                grid: { display: false },
            },
            y: {
                beginAtZero: false, // Y o'q 0 dan boshlanadi
                ticks: { color: '#aaa' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' },
            }
        }
    }
});

// Modal Elements
const calendarBtn = document.getElementById('calendarBtn');
const calendarModal = document.getElementById('calendarModal');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

// Show Modal
calendarBtn.addEventListener('click', () => {
    calendarModal.style.display = 'block';
    modalOverlay.style.display = 'block';
});

// Close Modal
const closeModal = () => {
    calendarModal.style.display = 'none';
    modalOverlay.style.display = 'none';
};

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Generate Calendar Days
const calendarGrid = document.querySelector('.calendar-grid');
for (let i = 1; i <= 30; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day';
    day.textContent = i;
    calendarGrid.appendChild(day);
}

// ------------------------------------CHART-2-------------------------------------- // 
const ctx2 = document.getElementById('chart2').getContext('2d');

// Gradient for the chart
const gradient2 = ctx2.createLinearGradient(0, 0, 0, 300);
gradient2.addColorStop(0, 'rgba(138, 43, 226, 0.4)');
gradient2.addColorStop(1, 'rgba(128, 90, 213, 0)');

// Chart data
const data = {
    labels: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5", "Point 7", "Point 7", "Point 8"],
    datasets: [{
        label: 'Visibility',
        data: [6.8, 7.3, 6.8, 7, 6.5, 7.5, 6.1, 6.8],
        borderColor: 'rgba(138, 43, 226, 1)', // Chiziq rangi
        backgroundColor: gradient2, // Soyali fon
        borderWidth: 1,
        pointRadius: 0,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(8, 3, 17, .5)',
        fill: true, // Chiziq tagini to'ldirish
        tension: 0.1 // Chiziqni silliqlashtirish
    }]
};

// Chart options
const options2 = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
        duration: 1000, // Animation duration
        easing: 'easeOutQuart', // Smooth effect
    },
    plugins: {
        legend: {
            display: false
        }, // Hide legend
        tooltip: {
            enabled: false, // Disable tooltips
        }
    },
    scales: {
        x: {
            display: false, // Hide x-axis
        },
        y: {
            display: false, // Hide y-axis
        }
    }
};

// Initialize the chart
const chart2 = new Chart(ctx2, {
    type: 'line',
    data: data,
    options: options2
});

// Function to update the chart dynamically (for refresh effect)
function updateChart() {
    chart2.data.datasets[0].data = [6.8, 7.3, 6.8, 7, 6.5, 7.5, 6.1, 6.8]; // New data
    chart2.update();
}

// Trigger update after 3 seconds (simulate dynamic update)
setTimeout(updateChart, 1000);

// ------------------------------------CHART-2-------------------------------------- // 


// --------------------------------------Cursor-glowing---------------------------- //
document.addEventListener("mousemove", (event) => {
    let mousex = event.clientX - 15;
    let mousey = event.clientY - 15;
    let elem = document.querySelector('.cursor-glow');
    elem.style.left = mousex + 'px';
    elem.style.top = mousey + 'px';
});
// --------------------------------------Cursor-glowing---------------------------- //

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};

// Animation-text //
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["SEO efforts.", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
// Animation-text //

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
document.getElementById('moar').onclick = function() {
    var section = document.createElement('section');
    section.className = 'section--purple wow fadeInDown';
    this.parentNode.insertBefore(section, this);
};