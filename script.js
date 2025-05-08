// Sample video URLs (You can replace them with your own links)
const videoData = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4", likes: 0 },
  { src: "https://www.w3schools.com/html/movie.mp4", likes: 0 }
];

const videoFeed = document.getElementById('video-feed');

videoData.forEach((video, index) => {
  const videoWrapper = document.createElement('div');
  videoWrapper.classList.add('video');

  videoWrapper.innerHTML = `
    <video src="${video.src}" autoplay muted loop></video>
    <div class="video-overlay">
      <div class="button like-btn" data-index="${index}">❤️ <span>0</span></div>
      <div class="button comment-btn">💬</div>
    </div>
  `;

  videoFeed.appendChild(videoWrapper);
});

// Like button functionality
document.querySelectorAll('.like-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const index = btn.getAttribute('data-index');
    videoData[index].likes += 1;
    btn.querySelector('span').textContent = videoData[index].likes;
  });
});

// Comment button functionality
document.querySelectorAll('.comment-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Comment button clicked!');
  });
});