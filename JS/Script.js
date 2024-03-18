function addBackgroundVideo() {
    const videoBg = document.createElement('video');
    videoBg.autoplay = true;
    videoBg.muted = true;
    videoBg.loop = true;
    videoBg.id = 'video-bg';

    const source = document.createElement('source');
    source.src = 'IMG/bg.mp4';
    source.type = 'video/mp4';

    videoBg.appendChild(source);

    document.body.insertBefore(videoBg, document.body.firstChild);
}

// Function to create and append the header
function createHeader() {
    const header = document.createElement('header');
    header.innerHTML = `
    <nav>
    <div class="left">
        Naman's Portfolio
        <div class="menu-toggle">
        <div class="hamburger"></div>
        <div class="hamburger"></div>
        <div class="hamburger"></div>
    </div>
    </div>
    <div class="right"></div>
    <ul class="menu">
        <li><a href="home.html">Home</a></li>
        <li><a href="Projects.html">Projects</a></li>
        <li><a href="Music.html">Music</a></li>
        <li id="games-dropdown"><a href="#">Games</a></li>
        <div class="dropdown-content">
                <div class="games-grid">
                    <div><a href="tic_tac_toe.html">
                        <i class="fa-solid fa-2x fa-trophy" style="color: #74C0FC;"></i>
                    </a></div>
                    <div><a href="#">
                        <i class="fa-solid fa-2x fa-chess-queen" style="color: #74C0FC;"></i>
                    </a></div>
                    <div><a href="#">
                        <i class="fa-solid fa-2x fa-puzzle-piece" style="color: #74C0FC;"></i>
                    </a></div>
                    <!-- Add more game links as needed -->
                </div>
            </div>
    </ul>
    </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
}

// Function to create and append the footer
function createFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="foot">
    <H3>Copyright © 2024 Naman Somani. All rights reserved.</H3>
    <p>Work in Progress.. Not the final Product</p>
    </div>
    `;
    document.body.appendChild(footer);
}

// Call the functions to append header and footer when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    addBackgroundVideo();
    createHeader();
    createFooter();
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const gamesdropdown = document.getElementById('games-dropdown');
    const dropdown = document.querySelector('.dropdown-content');
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        if (menu.style.display === "none" || menu.style.display === "") {
            menu.style.display = "flex";
        } else {
            menu.style.display = "none";
        }
    });

    gamesdropdown.addEventListener('click',function() {
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    });
});

