document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const title = document.getElementById('page-title');
    const imageContainer = document.getElementById('image-container');
    const mainImage = document.getElementById('main-image');
  
    const imageContainerRect = imageContainer.getBoundingClientRect();
  
    // Function to move the "No" button to a random position
    function moveNoButton() {
      const containerWidth = window.innerWidth;
      const containerHeight = window.innerHeight;
  
      // Generate random positions but ensure the "No" button doesn't appear on the image
      let newX, newY;
      do {
        newX = Math.random() * (containerWidth - 100);
        newY = Math.random() * (containerHeight - 100);
      } while (
        newX > imageContainerRect.left &&
        newX < imageContainerRect.right &&
        newY > imageContainerRect.top &&
        newY < imageContainerRect.bottom
      );
  
      noButton.style.left = `${newX}px`;
      noButton.style.top = `${newY}px`;
    }
  
    // Event listener for "No" button click
    noButton.addEventListener('click', () => {
      noButton.classList.add('moving');
      moveNoButton();
    });
  
    // Event listener for "Yes" button click
    yesButton.addEventListener('click', () => {
      // Change the title and remove the buttons
      title.textContent = 'TE AMO MI CIELO HERMOSO, ERES LO MEJOR QUE ME HA PASADO EN LA VIDA, GRACIAS POR AGUANTARME, VOY A MEJORAR PARA NO COMETER TANTOS ERRORES, TE AMO';
      yesButton.style.display = 'none';
      noButton.style.display = 'none';
  
      // Replace the image with a carousel
      imageContainer.innerHTML = `
        <div class="carousel">
            <img id='img-carousel' src="Public/SEYO1.jpeg" alt="SEYO 1" class="active">
            <img id='img-carousel' src="Public/SEYO2.jpeg" alt="SEYO 2">
            <img id='img-carousel' src="Public/SEYO3.jpeg" alt="SEYO 3">
            <img id='img-carousel' src="Public/SEYO4.jpeg" alt="SEYO 4">
            <img id='img-carousel' src="Public/SEYO5.jpeg" alt="SEYO 5">
            <img id='img-carousel' src="Public/SEYO6.jpeg" alt="SEYO 6">
            <img id='img-carousel' src="Public/SEYO7.jpg" alt="SEYO 7">
            <img id='img-carousel' src="Public/SEYO8.jpg" alt="SEYO 8">
            <img id='img-carousel' src="Public/SEYO9.jpg" alt="SEYO 9">
            <img id='img-carousel' src="Public/SEYO10.jpg" alt="SEYO 10">
            <img id='img-carousel' src="Public/SEYO11.jpg" alt="SEYO 11">
            <img id='img-carousel' src="Public/SEYO12.jpg" alt="SEYO 12">
            <img id='img-carousel' src="Public/SEYO13.jpg" alt="SEYO 13">
            <img id='img-carousel' src="Public/SEYO14.jpg" alt="SEYO 14">
            <img id='img-carousel' src="Public/SEYO15.jpg" alt="SEYO 15">
            <img id='img-carousel' src="Public/SEYO16.jpg" alt="SEYO 16">
            <img id='img-carousel' src="Public/SEYO17.jpg" alt="SEYO 17">
            <img id='img-carousel' src="Public/SEYO18.jpg" alt="SEYO 18">
            <img id='img-carousel' src="Public/SEYO19.jpg" alt="SEYO 19">
            <img id='img-carousel' src="Public/SEYO20.jpg" alt="SEYO 20">
        </div>
      `;
  
      // Add the hearts GIF background to the body
      document.body.classList.add('show-hearts');
  
      // Implement automatic sliding functionality
      const carouselImages = document.querySelectorAll('.carousel img');
      let currentIndex = 0;
      const slideInterval = 250; // Time in milliseconds before the next slide
  
      function updateCarousel() {
        // Hide the current image
        carouselImages[currentIndex].classList.remove('active');
  
        // Calculate the next index, wrapping around if necessary
        currentIndex = (currentIndex + 1) % carouselImages.length;
  
        // Show the new image
        carouselImages[currentIndex].classList.add('active');
      }
  
      // Start the automatic sliding
      setInterval(updateCarousel, slideInterval);
    });
  });
  