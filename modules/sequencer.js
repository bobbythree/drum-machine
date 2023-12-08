//Constants
const MAX_BEATS = 16;

//Variables
var isPlaying = false;
var currentBeat = 0;
var startTime = 0;

//Reset the sequencer
function Stop() {
    console.debug("Stopping sequencer");
    currentBeat = 0;
    isPlaying = false;
}

function Play() {
    startTime = performance.now(); //Time since start in ms
    console.debug("Starting sequencer at: " + startTime);
    
    isPlaying = true;
}

function Update() {
    console.debug("Updating sequencer");

    //Update transport UI

    
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
            stopButton.style.backgroundColor="#bbb";
        }
    }
  }

  function CheckTiming(){

  }