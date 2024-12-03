document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('textInput');
    const addButton = document.getElementById('addButton');
    const countButton = document.getElementById('countButton');
    const container = document.getElementById('paragraphContainer');

    addButton.addEventListener('click', () => {
      const text = input.value.trim();
      if (text) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        container.appendChild(paragraph);
        input.value = '';
      }
    });
  
    countButton.addEventListener('click', () => {
      const paragraphs = container.querySelectorAll('p').length;
      alert(`Número de parágrafos adicionados: ${paragraphs}`);
    });
  });
  