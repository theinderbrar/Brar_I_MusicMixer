
sound1 = document.querySelector('#sound1');
sound2 = document.querySelector('#sound2');
sound3 = document.querySelector('#sound3');
sound4 = document.querySelector('#sound4');	
sound5 = document.querySelector('#sound5');	
sound6 = document.querySelector('#sound6');	

isplaying = true;
activeSong = [];
activeinstrument = [];


function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(data);

    //play audio
    let track = document.querySelector(`audio[data-audioref="${data}"]`);
    activeinstrument.push(track);
    if(isplaying == true)
    {
      track.play();  
      document.getElementById("manimg").setAttribute("style", "animation: bounce 1s infinite ;");
    }
           
}


function toggle()
{   
    
    if(isplaying == false)
    {
        document.getElementById("pauseButton").src="assets/svg/non-audio-svg/pause.svg"; 
        activeinstrument.forEach(sound => {sound.play();});
        // if (!activeSong[0] == '') {
		// 	activeSong[0].play();
		// }
        document.getElementById("manimg").setAttribute("style", "animation: bounce 1s infinite ;");
        isplaying = true;
    }
    else if(isplaying == true)
    {
       document.getElementById("playButton").src="assets/svg/non-audio-svg/play.svg"; 
        sound1.pause();  
        sound2.pause();  
        sound3.pause();  
        sound4.pause();  
        sound5.pause();  
        sound6.pause(); 
        

        document.getElementById("manimg").setAttribute("style", " "); 
        isplaying = false;  
    }
         
}