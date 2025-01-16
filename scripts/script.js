document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll("h1, h2, p, li");
  
    textElements.forEach((element) => {
      const links = element.querySelectorAll("a");
  
      let elementText = element.innerHTML;
  
      const linkData = [];
      links.forEach((link, index) => {
        linkData.push({
          index,
          href: link.href,
          text: link.textContent
        });
        elementText = elementText.replace(link.outerHTML, `{{link_${index}}}`);
      });
  
      const originalText = elementText;
      const textLength = originalText.length;
      let decodedText = Array(textLength).fill("");
  
      let interval = setInterval(() => {
        let isDecoding = false;
  
        for (let i = 0; i < textLength; i++) {
          if (decodedText[i] !== originalText[i]) {
            isDecoding = true;
  
            if (Math.random() < 0.3) {
              decodedText[i] = originalText[i];
            } else {
              decodedText[i] = String.fromCharCode(
                33 + Math.floor(Math.random() * 94)
              );
            }
          }
        }
  
        let decodedHTML = decodedText.join("");
  
        linkData.forEach((link, index) => {
          decodedHTML = decodedHTML.replace(`{{link_${index}}}`, `<a href="${link.href}">${link.text}</a>`);
        });
  
        element.innerHTML = decodedHTML;
  
        if (!isDecoding) {
          clearInterval(interval);
        }
      }, 150);
    });
  });
  