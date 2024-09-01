// Import GSAP library for animations
gsap.fromTo(
    "#coming-soon",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
  );
  
  // Define a function to cycle background colors
  const colors = ['#1e3a8a', '#4b5563', '#7f1d1d', '#9d174d'];
  let colorIndex = 0;
  
  function changeBackgroundColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    gsap.to('#background', { backgroundColor: colors[colorIndex], duration: 8, onComplete: changeBackgroundColor });
  }
  
  changeBackgroundColor();
  
  // Function to follow cursor with animations
  const gamingAnimation = document.getElementById('gaming-animation');
  const moneyAnimation = document.getElementById('money-animation');
  
  document.addEventListener('mousemove', (e) => {
      const { clientX: mouseX, clientY: mouseY } = e;
  
      // Adjust the animations based on cursor position
      gsap.to(gamingAnimation, {
          x: mouseX - gamingAnimation.offsetWidth / 2,
          y: mouseY - gamingAnimation.offsetHeight / 2,
          duration: 0.5,
          ease: 'power2.out'
      });
  
      gsap.to(moneyAnimation, {
          x: mouseX - moneyAnimation.offsetWidth / 2,
          y: mouseY - moneyAnimation.offsetHeight / 2,
          duration: 0.5,
          ease: 'power2.out'
      });
  });
  
  // Animation to bring icons from the bottom
  gsap.fromTo(
      "#gaming-animation",
      { y: "100vh", opacity: 0 },
      { y: "50px", opacity: 1, duration: 3, repeat: -1, yoyo: true, ease: 'power2.inOut' }
  );
  
  gsap.fromTo(
      "#money-animation",
      { y: "100vh", opacity: 0 },
      { y: "50px", opacity: 1, duration: 3, repeat: -1, yoyo: true, ease: 'power2.inOut' }
  );
  


  document.addEventListener('DOMContentLoaded', function() {
    var splashScreen = document.getElementById('splash');
    var loadingAnimation = document.getElementById('loading');

    // Show the splash screen with the logo
    setTimeout(function() {
        // Transition from logo to loading animation
        document.querySelector('.logo').style.opacity = 0;
        loadingAnimation.style.display = 'flex';
        setTimeout(function() {
            // After 3 seconds, show loading animation and start content transition
            splashScreen.style.opacity = 0;
            setTimeout(function() {
                splashScreen.style.display = 'none';
                document.querySelector('.content').style.display = 'block'; // Show content
            }, 1000); // Allow time for the fade-out effect
        }, 3000); // Show logo for 3 seconds
    }, 0);
});
