// SCROLL
const lenis = new Lenis({
  duration: 1.2, // Тривалість анімації (чим більше, тим повільніше)
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Функція плавності
  wheelMultiplier: 1, // Чутливість миші
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GAME-WINDOW
// const openBtns = document.querySelectorAll('.openGame');
// const closeBtn = document.getElementById('closeGame');
// const modal = document.getElementById('modalOverlay');
// const frame = document.getElementById('gameFrame');
// const modalContent = document.getElementById('modalContent');

// const gameUrl = "./magic-cat-academy-Google/index.html";

// function scaleGame() {
//     // Отримуємо поточну ширину контейнера модалки
//     const containerWidth = modalContent.clientWidth;
//     // Оригінальна ширина гри в коді Google
//     const originalWidth = 1224; 
//     // Вираховуємо коефіцієнт
//     const scale = containerWidth / originalWidth;

//     // Застосовуємо масштаб до iframe
//     frame.style.transform = `scale(${scale})`;
    
//     // Коригуємо висоту контейнера відповідно до масштабу, 
//     // щоб не було порожнього місця знизу
//     modalContent.style.height = (690 * scale) + "px";
// }

// openBtns.forEach(btn => {
//     btn.onclick = function() {
//         modal.style.display = 'flex';
//         frame.src = gameUrl;
        
//         // Викликаємо масштабування після невеликої затримки, щоб встигли прорахуватися розміри
//         setTimeout(scaleGame, 50);
//     }
// });

// closeBtn.onclick = function() {
//     modal.style.display = 'none';
//     frame.src = "";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//         frame.src = "";
//     }
// }

// // Перераховуємо масштаб, якщо користувач змінює розмір вікна браузера
// window.onresize = scaleGame;

// GAME-WINDOW DEMO
const openBtns = document.querySelectorAll('.openGame');
const closeBtn = document.getElementById('closeGame');
const modal = document.getElementById('modalOverlay');

// Відкриття модалки
openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Закриття по кнопці
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закриття при кліку поза контентом
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
