//Constants
const MAX_BEATS = 16;

//Variables
var isPlaying = false;
var currentBeat = 0;

//Reset the sequencer
function Stop() {
    console.debug("Stopping sequencer");
    currentBeat = 0;
    isPlaying = false;
}

function Play() {
    console.debug("Starting sequencer");
    isPlaying = true;
}

function Pause() {
    console.debug("Pausing sequencer");
    isPlaying = false;
}

function Update() {
    console.debug("Updating sequencer");

    //TODO: If time to move along to next beat 

    if(currentBeat >= MAX_BEATS - 1) //loop arounnd if we are at end of sequence
    {
        currentBeat = 0;
    }
    else
    {
        currentBeat++;
    }

    //Update sequencer UI
    for(var i = 0; i < MAX_BEATS; i++)
    {
        var sequencerButtonID = "sb" + currentBeat;

        if(i === currentBeat)
        {
            document.getElementById(sequencerButtonID).style.backgroundColor="#570000";
        }
        else
        {
            var sequencerButtonID = "sb" + currentBeat;
            document.getElementById(sequencerButtonID).style.backgroundColor="#bbb";
        }
    }
  }

  function CheckTiming(){

  }