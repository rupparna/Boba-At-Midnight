
   
const fortunes = [
  "A spontaneous adventure will find you tonight. Say yes!",
  "Beware of extra toppings... they might steal your heart (or your appetite).",
  "An unexpected message will make you smile before midnight.",
  "Tonight is the perfect night to finish that project you've been putting off.",
  "A mysterious stranger will cross your path—or maybe just a very friendly cat.",
  "Your night holds deep, uninterrupted sleep. A rare and powerful gift!",
  "Great joy will come from a very small snack."
];


const fortuneText = document.getElementById('fortune-text');
const fortuneBtn = document.getElementById('fortune-btn');


fortuneBtn.addEventListener('click', () => {
  
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  
  
  fortuneText.textContent = fortunes[randomIndex];
});