export const initMagnetEffect = () => {
  document.addEventListener('mousemove', (e) => {
    const magnets = document.querySelectorAll('.magnet');

    magnets.forEach((magnet) => {
      const rect = magnet.getBoundingClientRect();

      // Mouse position relative to the center of the magnet element
      const mouseX = e.clientX - (rect.left + rect.width / 2);
      const mouseY = e.clientY - (rect.top + rect.height / 2);

      // Distance between mouse and element
      const distance = Math.sqrt(mouseX ** 2 + mouseY ** 2);

      const magnetDistance = 100; // Magnet activation distance
      const magnetStrength = 0.3; // Magnet strength

      if (distance < magnetDistance) {
        // Calculate magnet movement
        const offsetX = mouseX * magnetStrength;
        const offsetY = mouseY * magnetStrength;

        // Apply transform
        magnet.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      } else {
        // Reset transform if out of range
        magnet.style.transform = '';
      }
    });
  });

  document.addEventListener('mouseleave', (e) => {
    const magnets = document.querySelectorAll('.magnet');
    magnets.forEach((magnet) => (magnet.style.transform = ''));
  });
};
