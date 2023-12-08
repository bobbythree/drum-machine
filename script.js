const pads = document.querySelectorAll('.pad');
const sounds = document.querySelectorAll('.sound');

window.addEventListener('load', () => {
  pads.forEach((pad, i) => {
    pad.addEventListener('click', function() {
      PlaySound(i);     
    });
  });
}); 

function PlaySound(soundIndex)
{
  console.debug("play sound");
  if(soundIndex >= 0)
  {
    sounds[soundIndex].currentTime = 0;
    sounds[soundIndex].play();      
  }
}

// function Reset()
// {

// }
