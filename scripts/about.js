document.addEventListener("DOMContentLoaded", function() {
  let element = document.getElementById("words");
  let txt = element.innerHTML; // Get the original text
  let i = 0;
  let speed = 50;

  function typeWriter() {
    if (i < txt.length) {
      element.innerHTML = txt.substring(0, i + 1); // Add one character at a time
      i++;
      setTimeout(typeWriter, speed); // Call the function again after `speed` ms
    }
  }

  // Clear the text initially
  element.innerHTML = ""; 
  typeWriter(); // Start the typewriter effect
});

