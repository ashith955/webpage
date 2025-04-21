// Get all "Buy Now" links
const buyLinks = document.querySelectorAll('.card a');

// Add a click event to each link
buyLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    alert('You are being redirected to the official website to buy this watch.');
  });
});
