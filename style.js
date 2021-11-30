const excuseStart = [
  'Sorry, I cant, because',
  'I wish I could, but',
  'Something came up, namely',
  'I double-booked myself and',
  'I am so sorry, but',
  'Hi, yeah, so the thing is',
  'Oh no, was that today? I am so sorry but',
];

const prepositions = [
  'I have plans with',
  'I forgot that',
  'I just remembered that',
  'I overslept and discovered that',
  'I just found out that',
  'I recently made the descovery that',
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
];

const events = [
  'drowned.',
  'died.',
  'broke its leg.',
  'got lost.',
  'disappeared.',
  'exploded.',
  'needed a glowup.',
  'asked me for a haircut.',
  'caught on fire.',
  'got launched into space.',
];

const excuseEnd = [
  'Maybe some other time?',
  'I will have to get back to you later.',
  'But lets catch up soon?',
  'I will let you know once the situation has changed.',
  'Thank you so much for your understanding',
  'I will have to do a raincheck this one time.',
  'Maybe next week instead?',
];

const theExcuse = document.querySelector('.the-excuse');
const generateButton = document.querySelector('.generate');

generateButton.addEventListener('click', () => {
  const randomExcuseStart = excuseStart.sort((a, b) => 0.5 - Math.random());
  const randomPreposition = prepositions.sort((a, b) => 0.5 - Math.random());
  const randomSubject = subjects.sort((a, b) => 0.5 - Math.random());
  const randomObject = objects.sort((a, b) => 0.5 - Math.random());
  const randomEvent = events.sort((a, b) => 0.5 - Math.random());
  const randomExcuseEnd = excuseEnd.sort((a, b) => 0.5 - Math.random());

  theExcuse.innerHTML = `${randomExcuseStart[0]} ${randomPreposition[0]} ${randomSubject[0]} ${randomObject[0]} ${randomEvent[0]} ${randomExcuseEnd[0]}`;
});
