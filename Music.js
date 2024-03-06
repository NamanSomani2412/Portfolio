const Party_songs = [
    {
        id: 1,
        imageSrc: 'Songs/Badtameez-Dil.jpg',
        name: 'Badtameez Dil',
        timestamp: '4:13',
        link: 'Songs/Badtameez-Dil.mp3'
    },
    {
        id: 2,
        imageSrc: 'Songs/Kala-Chashma.jpg',
        name: 'Kala Chashma',
        timestamp: '4:13',
        link: 'Songs/Badtameez-Dil.mp3'
    },
    {
        id: 3,
        imageSrc: 'Songs/Abhi-Toh-Party-Shuru-Hui-Ha.jpg',
        name: 'Abhi Toh Party Shuru Hui Hai',
        timestamp: '3:00',
        link: 'Songs/Abhi-Toh-Party-Shuru-Hui-Ha.mp3'
    },
    {
        id: 4,
        imageSrc: 'Songs/Party-All-Night.jpg',
        name: 'Party All Night',
        timestamp: '4:43',
        link: 'Songs/Party-All-Night.mp3'
    },
    {
        id: 5,
        imageSrc: 'Songs/Gallan-Goodiyaan.jpg',
        name: 'Gallan Goodiyaan',
        timestamp: '4:57',
        link: 'Songs/Gallan-Goodiyaan.mp3'
    },
    {
        id: 6,
        imageSrc: 'Songs/Dilliwaali-Girlfriend.jpg',
        name: 'Dilliwaali Girlfriend',
        timestamp: '4:21',
        link: 'Songs/Dilliwaali-Girlfriend.mp3'
    },
    {
        id: 7,
        imageSrc: 'Songs/Dhating-Naach.jpg',
        name: 'Dhating Naach',
        timestamp: '3:11',
        link: 'Songs/Dhating-Naach.mp3'
    },
    {
        id: 8,
        imageSrc: 'Songs/Chammak-Challo.jpg',
        name: 'ChammakChallo',
        timestamp: '3:58',
        link: 'Songs/Chammak-Challo.mp3'
    },
    {
        id: 9,
        imageSrc: 'Songs/Bang-Bang.jpg',
        name: 'Bang Bang',
        timestamp: '5:20',
        link: 'Songs/Bang-Bang.mp3'
    },
    {
        id: 10,
        imageSrc: 'Songs/Aankh-Marey.jpg',
        name: 'Aankh Marey',
        timestamp: '3:33',
        link: 'Songs/Aankh-Marey.mp3'
    },
];

function populateSongslist() {
    const SongslistDiv = document.querySelector('.Songslist');
    Party_songs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song');
        songDiv.id = song.id;

        const image = document.createElement('img');
        image.src = song.imageSrc;
        songDiv.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = song.name;
        songDiv.appendChild(name);

        const timestamp = document.createElement('p');
        timestamp.textContent = song.timestamp + ' sec';
        songDiv.appendChild(timestamp);

        const button = document.createElement('button');

        const leftArrowSpan = document.createElement('span');
        leftArrowSpan.textContent = '<';
        leftArrowSpan.classList.add('left-arrow');

        const buttonTextSpan = document.createElement('span');
        buttonTextSpan.textContent = 'Play';
        buttonTextSpan.classList.add('button-text');

        const rightArrowSpan = document.createElement('span');
        rightArrowSpan.textContent = '>';
        rightArrowSpan.classList.add('right-arrow');

        button.appendChild(leftArrowSpan);
        button.appendChild(buttonTextSpan);
        button.appendChild(rightArrowSpan);

        songDiv.appendChild(button);

        SongslistDiv.appendChild(songDiv);
    });
}

populateSongslist();

function formatTime(durationInSeconds) {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.round(durationInSeconds % 60);

    // Add leading zeros if necessary
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
}


console.log("Welcome to my Music");
let songIndex = 1;
let audioElement = new Audio('Songs/Badtameez-Dil.mp3');
let Masterplay = document.getElementById("Masterplay");
let MyProgressBar = document.getElementById("SongProgress");
let songtime = document.getElementById('currenttime');
//let SongName = document.getElementById('SongName');
//let Songimage = document.getElementsById('Songimage');


// add event Listners
Masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        Masterplay.classList.remove('fa-circle-play');
        Masterplay.classList.add('fa-circle-pause');
    }
    else {
        audioElement.pause();
        Masterplay.classList.remove('fa-circle-pause');
        Masterplay.classList.add('fa-circle-play');
    }

})

audioElement.addEventListener('timeupdate', () => {
    progress = parseFloat((audioElement.currentTime / audioElement.duration) * 100).toFixed(2);

    MyProgressBar.value = progress;
    let time = formatTime(audioElement.duration * (progress / 100));
    songtime.innerText = time + ' sec';
    //SongName.innerText = Party_songs[parseInt(songIndex) - 1].name;
    //Songimage.src = Party_songs[parseInt(songIndex) - 1].imageSrc;
})

MyProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ((MyProgressBar.value * audioElement.duration) / 100);
})

const MakeAllDefault = () => {
    Array.from(document.getElementsByClassName('song')).forEach((songElement) => {
        const targetButton = songElement.querySelector('.button-text');
        const targetStyle = songElement.style;
        targetButton.innerText = 'Play';
        targetStyle.backgroundColor = "rgba(255, 255, 255, 0.2)";
    });
}

Array.from(document.getElementsByClassName('song')).forEach((songElement) => {
    songElement.addEventListener('click', (e) => {
        const songIndex = e.currentTarget.id;
        const targetButton = songElement.querySelector('.button-text');
        const targetStyle = songElement.style;

        MakeAllDefault();

        if (targetButton.innerText === 'Play') {
            targetButton.innerText = 'Pause';
        } else {
            targetButton.innerText = 'Play';
        }
        targetStyle.backgroundColor = "rgb(208, 255, 255, 0.5)";
        audioElement.src = Party_songs[parseInt(songIndex) - 1].link;
        audioElement.currentTime = 0;
        audioElement.play();
        Masterplay.classList.remove('fa-circle-play');
        Masterplay.classList.add('fa-circle-pause');
        updateSong(songIndex-1);
    });
});

document.getElementById('next').addEventListener('click', () => {
    if (songIndex < 10) { songIndex += 1; }
    else { songIndex = 1 };
    audioElement.src = Party_songs[parseInt(songIndex) - 1].link;
    audioElement.currentTime = 0;
    audioElement.play();
    Masterplay.classList.remove('fa-circle-play');
    Masterplay.classList.add('fa-circle-pause');
    updateSong(songIndex-1);
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 1) { songIndex -= 1; }
    else { songIndex = 10 };
    audioElement.src = Party_songs[parseInt(songIndex) - 1].link;
    audioElement.currentTime = 0;
    audioElement.play();
    Masterplay.classList.remove('fa-circle-play');
    Masterplay.classList.add('fa-circle-pause');
    updateSong(songIndex-1);
})

function updateSong(songIndex) {
    var updatetosong = Party_songs[songIndex];
    document.getElementById("Songimage").style.backgroundImage = "url('" + updatetosong.imageSrc + "')";
    document.getElementById("SongName").innerHTML = '<i class="fa-solid fa-music fa-beat" style="color: #63E6BE; margin-right: 10px;"></i>' + updatetosong.name;
}

updateSong(songIndex-1);