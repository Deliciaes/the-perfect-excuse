if (window.screen.width < 600) {
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
        ctx.fillRect(0, 0, 350, 80);
        ctx.fillRect(0, 305, 350, 50);
        ctx.font = '18px myFont';
        ctx.fillStyle = 'white';
        ctx.globalAlpha = 1.0;
        ctx.fillText(`${randomExcuseStart[0]}`, 3, 25, 347);
        ctx.fillText(`${randomPreposition[0]}`, 3, 47, 347);
        ctx.fillText(
          `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
          3,
          69,
          347
        );
        ctx.fillText(`${randomExcuseEnd[0]}`, 5, 335, 345);

        /* download button */
        const dataURL = canvas.toDataURL();
        const downloadURL = document.querySelector('.download-url');
        downloadURL.href = dataURL;

        /* this is what happens when you click on an image in the gallery. it generates a new canvas but uses the same excuse that was generated previously */
        images.forEach((image) => {
          image.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'black';
            ctx.drawImage(image, 0, 0);
            ctx.globalAlpha = 0.5;
            ctx.fillRect(0, 0, 350, 80);
            ctx.fillRect(0, 305, 350, 50);
            ctx.font = '18px myFont';
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 1.0;
            ctx.fillText(`${randomExcuseStart[0]}`, 3, 25, 347);
            ctx.fillText(`${randomPreposition[0]}`, 3, 47, 347);
            ctx.fillText(
              `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
              3,
              69,
              347
            );
            ctx.fillText(`${randomExcuseEnd[0]}`, 5, 335, 345);
            const dataURL = canvas.toDataURL();
            const downloadURL = document.querySelector('.download-url');
            downloadURL.href = dataURL;
          });
        });
      });
    });
  });
}
