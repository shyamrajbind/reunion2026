const NUM_ARROWS = 20;
const arrows = [];

// Create arrows and add to DOM
for (let i = 0; i < NUM_ARROWS; i++) {
  const arrow = document.createElement('div');
  arrow.className = 'arrow';

  // Random initial positions around the screen
  arrow.style.top = `${Math.random() * window.innerHeight}px`;
  arrow.style.left = `${Math.random() * window.innerWidth}px`;

  document.body.appendChild(arrow);
  arrows.push(arrow);
}

// Update rotation on mouse move
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  arrows.forEach(arrow => {
    const rect = arrow.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
    arrow.style.transform = `rotate(${angle}rad)`;
  });
});
