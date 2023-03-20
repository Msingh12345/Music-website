console.log("dfghjk");
let songindex=0;
let audioElement=new Audio('/project6/audio/1.mp3')
let masterpaly=document.getElementById('masterPlay')
let myprogerssbar=document.getElementById('myprogressbar')
let songItem=Array.from(document.getElementsByClassName('songitem'))
// let songs=[
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"},
//     {songName:"gatividhi",filePath:"/project6/audio/01 Salamat - Sarbjit (Arijit Singh) 190Kbps.mp3"}
// ]

masterpaly.addEventListener('click',()=>{
    if(audioElement.paused ){
        audioElement.play();
        masterpaly.classList.remove('fa-play-circle')
        masterpaly.classList.add('fa-pause-circle')
    }else{
        audioElement.pause();
        masterpaly.classList.remove('fa-pause-circle')
        masterpaly.classList.add('fa-play-circle')        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogerssbar.value=progress;
    console.log('timeupdate')
})
myprogerssbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogerssbar.value*audioElement.duration)/100;
    console.log('change')
})


const followback=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((e)=>{    
        e.classList.remove('fa-pause-circle')
        e.classList.add('fa-play-circle')
    })
    console.log('followback')
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{    
    element.addEventListener('click',(e)=>{
        followback();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src=`/project6/audio/${songindex+1}.mp3`
        audioElement.currentTime='0'
        audioElement.play();
        masterpaly.classList.remove('fa-play-circle')
        masterpaly.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=14){
        songindex=0;
    }else{
        songindex+=1;
    }
    audioElement.src=`/project6/audio/${songindex+1}.mp3`
    audioElement.currentTime='0'
    audioElement.play();
    masterpaly.classList.remove('fa-play-circle')
    masterpaly.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=14;
    }else{
        songindex-=1;
    }
    audioElement.src=`/project6/audio/${songindex+1}.mp3`
    audioElement.currentTime='0'
    audioElement.play();
    masterpaly.classList.remove('fa-play-circle')
    masterpaly.classList.add('fa-pause-circle')
})



