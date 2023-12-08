//Constants
const pads = document.querySelectorAll('.pad');
const sounds = document.querySelectorAll('.sound');

//Window load
window.addEventListener('load', () => {

  //Setup the sequencer
  Initialize();

  
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

    //Setup click listeners for pads
    pads.forEach((pad, i) => {
      pad.addEventListener('click', function() {
        PlaySound(i);     
      });
    });

    //Setup click listeners for transport buttons
    document.getElementById("stopButton").addEventListener('click', function() {
      Stop();
    });

    document.getElementById("playButton").addEventListener('click', function() {
      Play();
    });

    Reset();
}

