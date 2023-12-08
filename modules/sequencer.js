//Constants

//Variables
var isPlaying = false;

//Reset the sequencer
function Reset()
{
    console.debug("Resetting sequencer");
    isPlaying = false;
}

function Start()
{
    console.debug("Starting sequencer");
    isPlaying = true;
}

function Pause()
{
    console.debug("Pausing sequencer");
    isPlaying = false;
}