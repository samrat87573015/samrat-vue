import { gsap } from 'gsap';

export const initMouseFollower = () => {
  // Check if the mouse follower already exists to avoid creating a new one
  let follower = document.querySelector('.mouse-follower');
  
  if (!follower) {
    // Only create a new mouse follower if it doesn't exist
    follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);
  }

  // Function to adjust size of the follower smoothly
  const adjustFollowerSize = (size = 15) => {
    follower.style.width = `${size}px`;
    follower.style.height = `${size}px`;
    follower.style.transition = 'width 0.3s ease, height 0.3s ease'; // Smooth transition
  };

  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    gsap.to(follower, {
      x: e.clientX,
      y: e.clientY,
      ease: 'power4.out',
    });
  });

  // Hover on .magnet class or its parent wrapper: increase follower size
  document.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('magnet') || e.target.closest('.magnet')) {
      adjustFollowerSize(80); // Increase size when hovering over any .magnet element or its wrapper
    }
  });

  // Reset size when mouse leaves .magnet element or its wrapper
  document.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('magnet') || e.target.closest('.magnet')) {
      adjustFollowerSize(15); // Reset to default size
    }
  });

  // Set initial size
  adjustFollowerSize(15); // Default size
};
