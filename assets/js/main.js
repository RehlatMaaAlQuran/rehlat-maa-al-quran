// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_HcdKqPvo8ISZFZ44iGnE1ADhH8nGa-Q",
  authDomain: "filesmanager-41b96.firebaseapp.com",
  projectId: "filesmanager-41b96",
  storageBucket: "filesmanager-41b96.appspot.com",
  messagingSenderId: "1095479761545",
  appId: "1:1095479761545:web:cbb1823d298876a8990458",
  measurementId: "G-6HK790FXN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);  // Initialize Firebase Storage

// Fetch video URL and assign it to the video element
const fetchVideo = async () => {
    try {
        // Reference to the video in Firebase Storage
        const videoRef = ref(storage, 'videos/سورة النجم تلاوة الشيخ ياسر الدوسري.mp4');
        
        // Get the download URL
        const videoURL = await getDownloadURL(videoRef);
        
        // Assign the URL to the video element
        const videoElement = document.getElementById('Video1');
        if (videoElement) {
            videoElement.src = videoURL;
            console.log('Video URL assigned:', videoURL); // Debugging info
        } else {
            console.error('Video element not found.');
        }
    } catch (error) {
        console.error('Error fetching video:', error);
    }
};

// Call the function to fetch and assign the video URL
fetchVideo();


// Select the mobile menu toggle button and the navigation menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.navmenu');

// Add a click event listener to the toggle button
mobileMenuToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navigation menu
    navMenu.classList.toggle('active');
    
    // Toggle the icon between "bars" and "times"
    const toggleIcon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        toggleIcon.classList.remove('fa-bars');
        toggleIcon.classList.add('fa-times');
    } else {
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
    }
});


function openVideo(videoId) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.style.display = 'flex';
}

function closeVideo() {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('videoFrame');
    frame.src = '';
    modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#SearchBar input[name="search"]');
    const videoCards = document.querySelectorAll('.video-card');

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase().trim();

        videoCards.forEach(card => {
            const title = card.querySelector('h4').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();

            // Match search value with title or description
            if (title.includes(searchValue) || description.includes(searchValue)) {
                card.style.display = ''; // Show matching video
            } else {
                card.style.display = 'none'; // Hide non-matching video
            }
        });
    });
});
