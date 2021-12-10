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
  /*const ones = svgContent.querySelectorAll('.one');

  footer.addEventListener('click', () => {
    ones.forEach((one) => {});
  }); */

  footer.addEventListener('click', () => {
    zeros.forEach((zero) => {
      zero.style.animation = '';
      console.log(`${zero.style.animation}`);
      zero.style.animation = 'test';
      console.log(`${zero.style.animation}`);
    });
  });
});
