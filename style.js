const excuseStart = [
  'Sorry, I cant, because',
  'I wish I could, but',
  'Something came up, namely',
  'I double-booked myself and',
  'I am so sorry, but',
  'Hi, yeah, so the thing is',
  'Oh no, was that today?',
  'I am so sorry, but',
];

const prepositions = [
  'I did not forsee that',
  'I forgot that',
  'I just remembered that',
  'I overslept and discovered that',
  'I just found out that',
  'I recently made the discovery that',
  'Someone just told me',
  'I got a phone call about that',
];

const subjects = [
  'my',
  'my sisters',
  'my brothers',
  'my cousins',
  'my mothers',
  'my fathers',
  'my landlords',
  'my neighbours',
  'my aunts',
  'my uncles',
  'my relatives',
  'my close friends',
];

const objects = [
  'cat',
  'dog',
  'goldfish',
  'parrot',
  'house',
  'bed',
  'sofa',
  'bathroom',
  'bedroom',
  'car',
  'motorcycle',
  'office',
  'school',
  'rug',
  'door',
  'bicycle',
  'TV',
  'computer',
  'phone',
  'imaginary friend',
  'close friend',
  'family',
  'MP3 player',
  'garden gnome',
  'Xbox',
  'Playstation',
  'frying pan',
];

const events = [
  'drowned.',
  'died.',
  'broke a leg.',
  'got lost.',
  'disappeared.',
  'imploded.',
  'needed a glowup.',
  'asked me for a haircut.',
  'caught on fire.',
  'got launched into space.',
  'got their Hogwarts acceptance letter.',
  'said no.',
  'said I have to be home before 5.',
  'need to save the galaxy.',
  'need to go to to the vet.',
  'got stranded on a desert island.',
  'has quidditch practise.',
  'agreed that this is toxic.',
  'has a date and I am the chaperone.',
  'needed help with the laundry.',
  'already asked me out.',
];

const excuseEnd = [
  'Maybe some other time?',
  'I will have to get back to you later.',
  'But lets catch up soon?',
  'I will let you know once the situation has changed.',
  'Thank you so much for your understanding.',
  'I will have to do a raincheck this one time.',
  'Maybe next week instead?',
  'Let us circle back to this later?',
  'Touch base later?',
  'See where we are at next week instead?',
  'Wishing you all the best though!',
  'Regretably, me.',
  'But lets talk again soon!',
];

const theExcuse = document.querySelector('.the-excuse');
const generateButton = document.querySelector('.generate');
const excuseContainer = document.querySelector('.excuse-container');
const intro = document.querySelector('.intro');

generateButton.addEventListener('click', () => {
  const randomExcuseStart = excuseStart.sort((a, b) => 0.5 - Math.random());
  const randomPreposition = prepositions.sort((a, b) => 0.5 - Math.random());
  const randomSubject = subjects.sort((a, b) => 0.5 - Math.random());
  const randomObject = objects.sort((a, b) => 0.5 - Math.random());
  const randomEvent = events.sort((a, b) => 0.5 - Math.random());
  const randomExcuseEnd = excuseEnd.sort((a, b) => 0.5 - Math.random());

  const finishedExcuse = `${randomExcuseStart[0]} ${randomPreposition[0]} ${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]} ${randomExcuseEnd[0]}`;
  theExcuse.innerHTML = finishedExcuse;

  intro.style.display = 'none';

  const canvas = document.getElementById('card');
  const images = document.querySelectorAll('#gallery-img');
  const galleryContainer = document.querySelector('.gallery-container');
  const downloadButton = document.querySelector('.download');
  const hiddenDivs = document.querySelectorAll('#show-hide');
  const ctx = canvas.getContext('2d');
  const myFont = new FontFace('myFont', 'url(font/SpecialElite-Regular.woff)');

  canvas.style.display = 'block';
  galleryContainer.style.display = 'flex';
  downloadButton.style.display = 'inline';
  hiddenDivs.forEach((hiddenDiv) => {
    hiddenDiv.style.display = 'block';
  });

  myFont.load().then(function (font) {
    document.fonts.add(font);
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    let ratio = 1;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    images.forEach((image) => {
      ctx.fillStyle = 'black';
      ctx.drawImage(image, 0, 0);
      ctx.globalAlpha = 0.5;
      ctx.fillRect(0, 0, 300, 80);
      ctx.fillRect(0, 250, 300, 50);
      ctx.font = '18px myFont';
      ctx.fillStyle = 'white';
      ctx.globalAlpha = 1.0;
      ctx.fillText(`${randomExcuseStart[0]}`, 5, 25, 295);
      ctx.fillText(`${randomPreposition[0]}`, 5, 47, 295);
      ctx.fillText(
        `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
        5,
        69,
        295
      );
      ctx.fillText(`${randomExcuseEnd[0]}`, 5, 280, 295);
      const dataURL = canvas.toDataURL();
      const downloadURL = document.querySelector('.download-url');
      downloadURL.href = dataURL;

      images.forEach((image) => {
        image.addEventListener('click', () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'black';
          ctx.drawImage(image, 0, 0);
          ctx.globalAlpha = 0.5;
          ctx.fillRect(0, 0, 300, 80);
          ctx.fillRect(0, 250, 300, 50);
          ctx.font = '18px myFont';
          ctx.fillStyle = 'white';
          ctx.globalAlpha = 1.0;
          ctx.fillText(`${randomExcuseStart[0]}`, 5, 25, 295);
          ctx.fillText(`${randomPreposition[0]}`, 5, 47, 295);
          ctx.fillText(
            `${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]}`,
            5,
            69,
            295
          );
          ctx.fillText(`${randomExcuseEnd[0]}`, 5, 280, 295);
          const dataURL = canvas.toDataURL();
          const downloadURL = document.querySelector('.download-url');
          downloadURL.href = dataURL;
        });
      });
    });
  });
});

const footer = document.querySelector('footer');
const about = document.querySelector('.about');
const ones = document.querySelectorAll('#one');
const zeros = document.querySelectorAll('#zero');

about.addEventListener('click', () => {
  footer.style.display = 'block';
  about.style.display = 'none';
});

footer.addEventListener('mouseover', () => {
  ones.forEach((one) => {
    one.style.animation = 'bounceUp 2s linear infinite';
  });
});

footer.addEventListener('mouseover', () => {
  zeros.forEach((zero) => {
    zero.style.animation = 'bounceUp 1.6s linear infinite';
  });
});

footer.addEventListener('mouseleave', () => {
  ones.forEach((one) => {
    one.style.animation = 'none';
  });
});

footer.addEventListener('mouseleave', () => {
  zeros.forEach((zero) => {
    zero.style.animation = 'none';
  });
});
