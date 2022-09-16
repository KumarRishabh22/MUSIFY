// under progress

let song1 = new Audio("music/1.mp3");
// song.play();
let song2 = new Audio("music/2.mp3");
let song3 = new Audio("music/3.mp3");
let song4 = new Audio("music/4.mp3");
let songarr={"music/1.mp3","music/2.mp3","music/3.mp3","music/4.mp3"};

let audio;

function playsong(name){
   audio=new Audio("music/"+name+".mp3");
    audio.play();
    return this.name;
}

let playstatus=this.playsong();



// function one() {
//     song1.play();

// }

// function two() {
//     song2.play();
// }

// function three() {
//     song3.play();
// }

// function four() {
//     song4.play();
// }

// function lol(){
//     song1.pause();
// }

// function pause1(){
//     song1.pause();
// }
// function pause2(){
//     song2.pause();
// }
// function pause3(){
//     song3.pause();
// }
// function pause4(){
//     song4.pause();
// }

// function playsong(plysong){

//     plysong.play();
// }







function playpause(){
    // document.getElementById('masterplay').innerHTML = "hi";
    if(audio.paused||audio.currentTime<=0){
      audio.play();
    document.getElementById('masterplay').classList.remove('fa-play-circle');
    document.getElementById('masterplay').classList.add('fa-pause-circle');
}
    else {
        audio.pause();
    document.getElementById('masterplay').classList.remove('fa-pause-circle');
    document.getElementById('masterplay').classList.add('fa-play-circle');
    }
}

let count=0;

function forwardPlay(){

let musify={"1.mp3","2.mp3","3.mp3","4.mp3"};
if(playstatus==4){
  playsong(1);
}else{
playsong(playstatus+1);
}



}
