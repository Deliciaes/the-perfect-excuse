if (window.screen.width > 600) {
  /* Canvas doesn't seem to like responsive HTML, so I chose to add the desktop pictures via javascript instead */
  const corgi = document.getElementById('corgi');
  corgi.src = 'images/corgi.png';

  const cat = document.getElementById('cat');
  cat.src = 'images/cat.png';

  const possum = document.getElementById('possum');
  possum.src = 'images/possum.png';

  const raccoon = document.getElementById('raccoon');
  raccoon.src = 'images/raccoon.png';

  const road = document.getElementById('road');
  road.src = 'images/road.png';

  const sadDog = document.getElementById('sad-dog');
  sadDog.src = 'images/sad-dog.png';

  /* generate the excuse */
  generateButton.addEventListener('click', () => {
    const randomExcuseStart = randomize(excuseStart);
    const randomPreposition = randomize(prepositions);
    const randomSubject = randomize(subjects);
    const randomObject = randomize(objects);
    const randomEvent = randomize(events);
    const randomExcuseEnd = randomize(excuseEnd);

    const finishedExcuse = `${randomExcuseStart[0]} ${randomPreposition[0]} ${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]} ${randomExcuseEnd[0]}`;
    theExcuse.innerHTML = finishedExcuse;

    intro.style.display = 'none';
    const canvas = document.getElementById('card');
    const images = document.querySelectorAll('.gallery-img');
    const galleryContainer = document.querySelector('.gallery-container');
    const downloadButton = document.querySelector('.download');
    const hiddenDivs = document.querySelectorAll('#show-hide');
    const ctx = canvas.getContext('2d');
    const myFont = new FontFace(
      'myFont',
      'url(font/SpecialElite-Regular.woff)'
    );

    canvas.style.display = 'block';
    galleryContainer.style.display = 'flex';
    downloadButton.style.display = 'inline';
    hiddenDivs.forEach((hiddenDiv) => {
      hiddenDiv.style.display = 'block';
    });

    /* load the font first before generating the canvas containing the excuse (I have tried declaring the font via css styling but it does not work on canvas it seems)*/
    myFont.load().then(function (font) {
      document.fonts.add(font);
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = canvas.getBoundingClientRect().height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      images.forEach((image) => {
        ctx.fillStyle = 'black';
        ctx.drawImage(image, 0, 0);
        ctx.globalAlpha = 0.5;
        ctx.fillRect(0, 0, 600, 100);
        ctx.fillRect(0, 550, 600, 50);
        ctx.font = '28px myFont';
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 1.0;
        ctx.fillText(`${randomExcuseStart[0]}`, 5, 25, 595);
        ctx.fillText(`${randomPreposition[0]}`, 5, 55, 595);
        ctx.fillText(
          `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
          5,
          85,
          595
        );
        ctx.fillText(`${randomExcuseEnd[0]}`, 5, 580, 595);

        /* download button */

        const dataURL = canvas.toDataURL();
        const downloadURL = document.querySelector('.download-url');
        downloadURL.href = dataURL;

        /* this is what happens when you click on an image in the gallery. it generates a new canvas but uses the same excuse that was generated previously */
        images.forEach((image) => {
          image.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            /*the numbers in the rows below inside the brackets are coordinates*/
            ctx.drawImage(image, 0, 0);
            ctx.globalAlpha = 0.5;
            ctx.fillRect(0, 0, 600, 100);
            ctx.fillRect(0, 550, 600, 50);
            ctx.font = '28px myFont';
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 1.0;
            ctx.fillText(`${randomExcuseStart[0]}`, 5, 25, 595);
            ctx.fillText(`${randomPreposition[0]}`, 5, 55, 595);
            ctx.fillText(
              `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
              5,
              85,
              595
            );
            ctx.fillText(`${randomExcuseEnd[0]}`, 5, 580, 595);
            const dataURL = canvas.toDataURL();
            const downloadURL = document.querySelector('.download-url');
            downloadURL.href = dataURL;
          });
        });
      });
    });
  });
}
