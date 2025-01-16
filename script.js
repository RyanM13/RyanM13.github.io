document.addEventListener("DOMContentLoaded", () => {
    
    const textElements = document.querySelectorAll("h1, h2, h3, p, li");
  
    textElements.forEach((element) => {
      const originalText = element.textContent; 
      const textLength = originalText.length; 
      let decodedText = Array(textLength).fill(""); 
  
      let interval = setInterval(() => {
        let isDecoding = false;
  
        for (let i = 0; i < textLength; i++) {
          if (decodedText[i] !== originalText[i]) {
            isDecoding = true;
  
            if (Math.random() < 0.2) {
              
              decodedText[i] = originalText[i];
            } else {
              
              const randomChar = String.fromCharCode(
                65 + Math.floor(Math.random() * 26) 
              );
              decodedText[i] = randomChar;
            }
          }
        }
  
        element.textContent = decodedText.join("");
  
        if (!isDecoding) {
          clearInterval(interval);
        }
      }, 150); 
    });
  });
  