//Constants

//Variables
var isPlaying = false;
var currentBeat = 0;

//Reset the sequencer
function Stop()
{
    console.debug("Stopping sequencer");
    currentBeat = 0;
    isPlaying = false;
}

function Play()
{
    console.debug("Starting sequencer");
    isPlaying = true;
}

function Pause()
{
    console.debug("Pausing sequencer");
    isPlaying = false;
}

function Update() {
    console.debug("Updating sequencer");

    //TODO: If time to move along to next beat, loop arounnd etc
    currentBeat++;
    document.getElementById("sb01").style.backgroundColor="darkred";
  }