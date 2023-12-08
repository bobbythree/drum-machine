//Constants
const pads = document.querySelectorAll('.pad');
const sounds = document.querySelectorAll('.sound');

//Variables
var isPlaying = false;

//Window load
window.addEventListener('load', () => {

  //Setup the sequencer
  Initialize();

  //Setup click listeners for pads
  pads.forEach((pad, i) => {
    pad.addEventListener('click', function() {
      PlaySound(i);     
    });
  });
}); 

//Play the sound
function PlaySound(soundIndex)
{
  console.debug("Playing sound index: " + soundIndex);
  if(soundIndex >= 0)
  {
    sounds[soundIndex].currentTime = 0;
    sounds[soundIndex].play();      
  }
}

function Initialize()
{
    console.debug("Initializing");

    Stop();
    Update();
}

