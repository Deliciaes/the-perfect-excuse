const footer = document.querySelector('footer');
const emma = document.getElementById('emma');
const about = document.querySelector('.about');

about.addEventListener('click', () => {
  footer.style.display = 'block';
  about.style.display = 'none';
});

emma.addEventListener('load', () => {
  const svgContent = emma.contentDocument;
  const zeros = svgContent.querySelectorAll('.zero');
  const ones = svgContent.querySelectorAll('.one');
  footer.addEventListener('mouseenter', () => {
    ones.forEach((one) => {
      one.classList.add('one-animation');
    });
  });

  footer.addEventListener('mouseenter', () => {
    zeros.forEach((zero) => {
      zero.classList.add('zero-animation');
    });
  });

  footer.addEventListener('mouseleave', () => {
    zeros.forEach((zero) => {
      zero.classList.remove('zero-animation');
    });
  });

  footer.addEventListener('mouseleave', () => {
    ones.forEach((one) => {
      one.classList.remove('one-animation');
    });
  });
});
