//Constants
const MAX_BEATS = 16;

//Variables
var isPlaying = false;
var currentBeat = 0;
var startTime = 0;

function Reset() {
    console.debug("Resetting sequencer");
    window.setInterval("Update()", 1);
    currentBeat = 0;
}

//Reset the sequencer
function Stop() {
    if(isPlaying) {
        console.debug("Stopping sequencer");        
        isPlaying = false;
        document.getElementById("playButton").style.backgroundColor="#a3a3a3";

        Reset();
    }
}

function Play() {
    startTime = performance.now(); //Time since start in ms
    console.debug("Starting sequencer at: " + startTime);

    isPlaying = true;
    document.getElementById("playButton").style.backgroundColor="green";

    // while(isPlaying)
    // {
    //     Update();
    //     yield;
    // }
    
}

function Update() {
    //console.debug("Updating sequencer");

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