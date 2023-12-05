window.addEventListener('load', () => {
  const pads = document.querySelectorAll('.pad');
  const sounds = document.querySelectorAll('.sound');

  pads.forEach((pad, i) => {
    pad.addEventListener('click', function() {
      sounds[i].currentTime = 0;
      sounds[i].play();      
    });
  });
}); 
