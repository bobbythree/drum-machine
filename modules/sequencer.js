//Constants
const MAX_BEATS = 16;
const BASS01_BEATS = [MAX_BEATS];

//Variables
var isPlaying = false;
var currentBeat = 0;
var tempo = 120;  //Beats per minute - TODO: adjust this from UI
var timer;

function Reset() {
    console.debug("Resetting sequencer");
    clearInterval(timer);
    timer = window.setInterval("Update()", TempoToMillis(tempo));  
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
    console.debug("Starting sequencer");
    isPlaying = true;
    document.getElementById("playButton").style.backgroundColor="green";
}

function Update() {
    //console.debug("Updating sequencer");

    if(isPlaying) {

        //Update sequencer UI for playing indicator
        for(var i = 0; i < MAX_BEATS; i++)
        {
            var sequencerButtonID = "sb" + i;
            if(i == currentBeat)
            {
                document.getElementById(sequencerButtonID).style.backgroundColor="green";
            }
            else
            {
                document.getElementById(sequencerButtonID).style.backgroundColor="#bbb";
            }
        }

        if(currentBeat >= MAX_BEATS - 1) //loop arounnd if we are at end of sequence
        {
            currentBeat = 0;
        }
        else
        {
            currentBeat++;
        }
        console.debug("Current beat: " + currentBeat);   
        
        //TODO: Figure out which sound to play, for now HH
        PlaySound(2);

        
    }
  }

  //Return the ms to delay based on the bpm provided
  function TempoToMillis(bpm){
    return 1000.0 / (tempo / 60.0);
  }