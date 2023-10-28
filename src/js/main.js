const skillsBlocks = document.querySelectorAll('.skills__block');

const observer = new IntersectionObserver(entries => {
    // перебор записей

    entries.forEach(entry => {
      // если элемент появился
      if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('animated');
      }
    });
  });
//   observer.observe(document.querySelector('.skills__block'));
skillsBlocks.forEach(block => observer.observe(block));
