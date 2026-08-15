
   
const fortunes = [
  "A spontaneous adventure will find you tonight. Say yes!",
  "Beware of extra toppings... they might steal your heart (or your appetite).",
  "An unexpected message will make you smile before midnight.",
  "Tonight is the perfect night to finish that project you've been putting off.",
  "A mysterious stranger will cross your path—or maybe just a very friendly cat.",
  "Your night holds deep, uninterrupted sleep. A rare and powerful gift!",
  "Great joy will come from a very small snack."
];


// Background Music Setup
const bgMusic = new Audio('leberch-creepy-spooky-piano-262593.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3; 

const startBgMusic = () => {
  bgMusic.play().then(() => {
    
    document.removeEventListener('click', startBgMusic);
  }).catch(err => console.log(err));
};


document.addEventListener('click', startBgMusic);