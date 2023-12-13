//Constants
const MAX_BEATS = 16;
const MAX_TRACKS = 8;
const TRACKS = [MAX_TRACKS];

const BASS01_BEATS = [MAX_BEATS];
const SNARE01_BEATS = [MAX_BEATS];
const HIHAT01_BEATS = [MAX_BEATS];
const RIDE_BEATS = [MAX_BEATS];
const BASS02_BEATS = [MAX_BEATS];
const SNARE02_BEATS = [MAX_BEATS];
const HIHAT02_BEATS = [MAX_BEATS];
const CRASH_BEATS = [MAX_BEATS];

//Variables
var isPlaying = false;
var currentBeat = 0;
var tempo = 120;  //Beats per minute - TODO: adjust this from UI
var timer;

//Reset the sequencer, clearing it all and resetting the timing
function Reset() {
    console.debug("Resetting sequencer");
    clearInterval(timer);
    timer = window.setInterval("Update()", TempoToMillis(tempo));  
    currentBeat = 0;

    //Reset and the tracks to the collection
    TRACKS[0] = BASS01_BEATS;
    TRACKS[1] = SNARE01_BEATS;
    TRACKS[2] = HIHAT01_BEATS;
    TRACKS[3] = RIDE_BEATS;
    TRACKS[4] = BASS02_BEATS;
    TRACKS[5] = SNARE02_BEATS;
    TRACKS[6] = HIHAT02_BEATS;
    TRACKS[7] = CRASH_BEATS;

    //Setup click listeners for transport buttons
    document.getElementById("stopButton").addEventListener('click', function() {
        Stop();
      });
  
      document.getElementById("playButton").addEventListener('click', function() {
        Play();
      });
  

    //Setup the event handlers for clicking on the sequencer buttons
    //Since tracks are arrays stored in an array we can access each beat with i/j
    for(var i = 0; i < MAX_TRACKS; i++)
        {
            for(var j = 0; j < MAX_BEATS; j++)
            {
                var sequencerButtonID = "sb" + i + "_" + j;
                document.getElementById(sequencerButtonID).addEventListener('click', function() {
                    ToggleBeat(this.id); //Send the ID of the button clicked
                });
            }
        }

    //Clear the stored beats
    for(var i = 0; i < MAX_BEATS; i++) {
        BASS01_BEATS[i] = 0; 
        SNARE01_BEATS[i] = 0; 
        HIHAT01_BEATS[i] = 0; 
        RIDE_BEATS[i] = 0; 
        BASS02_BEATS[i] = 0; 
        SNARE02_BEATS[i] = 0; 
        HIHAT02_BEATS[i] = 0; 
        CRASH_BEATS[i] = 0; 
    }
}

//Stop the sequencer from playing
function Stop() {
    if(isPlaying) {
        console.debug("Stopping sequencer");        
        isPlaying = false;
        document.getElementById("playButton").style.backgroundColor="#a3a3a3";

        clearInterval(timer);
        timer = window.setInterval("Update()", TempoToMillis(tempo));  
        currentBeat = 0;
    }
}

//Play the sequencer
function Play() {
    console.debug("Starting sequencer");
    isPlaying = true;
    document.getElementById("playButton").style.backgroundColor="green";
}

//Called on the timer to play sounds and update the UI
function Update() {
    if(isPlaying) {
        //Update sequencer UI for position indicator, selected beats and default color
        for(var i = 0; i < MAX_TRACKS; i++) //Loop over each track
        {
            for(var j = 0; j < MAX_BEATS; j++) //Loop over each beat in each track
            {
                var sequencerButtonID = "sb" + i + "_" + j;
                if(j == currentBeat)
                {
                    document.getElementById(sequencerButtonID).style.backgroundColor="green"; //Position indicator
                }
                else
                {     
                    if(TRACKS[i][j] == 1) {
                        document.getElementById(sequencerButtonID).style.backgroundColor="darkred"; //Beats
                    }
                    else
                    {
                        if((j >= 0 && j < 4) || (j >= 8 && j < 12)){ //color buttons while playing
                        document.getElementById(sequencerButtonID).style.backgroundColor="#bbb"; //Default
                        } else {
                            document.getElementById(sequencerButtonID).style.backgroundColor="gray";
                        }
                    }
                }
            }
        }

        //Play sounds that are stored in the arrays as 1 (on) or 0 (off).  
        //This could be improved to use a volume instead of 0/1
        for(var trackIndex = 0; trackIndex < MAX_TRACKS; trackIndex++) {
            for(var beatIndex = 0; beatIndex < MAX_BEATS; beatIndex++) {
                if(beatIndex == currentBeat) {
                    if(TRACKS[trackIndex][beatIndex] > 0) {
                        PlaySound(trackIndex);
                        console.debug("Playing sound at: " + trackIndex + " " + beatIndex);
                    }
                }
            }
        }

        //loop arounnd if we are at end of sequence
        if(currentBeat >= MAX_BEATS - 1) 
        {
            currentBeat = 0;
        }
        else
        {
            currentBeat++;
        }
        console.debug("Current beat: " + currentBeat);   
    }
    else //Update the selected beats so we can edit without playing
    {
        for(var i = 0; i < MAX_TRACKS; i++) //Loop over each track
        {
            for(var j = 0; j < MAX_BEATS; j++) //Loop over each beat in each track
            {
                var sequencerButtonID = "sb" + i + "_" + j;
   
                if(TRACKS[i][j] == 1) {
                    document.getElementById(sequencerButtonID).style.backgroundColor="darkred"; //Beats
                }
                else
                {
                    if((j >= 0 && j < 4) || (j >= 8 && j < 12)){ //color buttons while not playing
                        document.getElementById(sequencerButtonID).style.backgroundColor="#bbb"; //Default
                        } else {
                            document.getElementById(sequencerButtonID).style.backgroundColor="gray";
                        }
                }
            }
        }
    }
  }

  //Return the ms to delay based on the bpm provided
  function TempoToMillis(bpm){
    return 1000.0 / (tempo / 60.0);
  }

//This would need to be refactored if we ever expanded to storing volume in the beat arrays
function ToggleBeat(buttonID)
{
    console.debug("Button clicked: " + buttonID);

    //Extract the track and beat numbers from the button ID
    var trackNum = buttonID.substring(buttonID.indexOf("sb") + 2, buttonID.lastIndexOf("_"));
    var beatNum = buttonID.substring(buttonID.indexOf("_") + 1, buttonID.length);

    //TODO: extract the indices from the passed track button ID
    if(TRACKS[trackNum][beatNum] <= 0) {
        TRACKS[trackNum][beatNum] = 1;
    }
    else
    {
        TRACKS[trackNum][beatNum] = 0;
    } 
}