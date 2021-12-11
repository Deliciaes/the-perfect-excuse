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

/* function for randomizer formula */
function randomize(quote) {
  const randomized = quote.sort(() => 0.5 - Math.random());
  return randomized;
}
