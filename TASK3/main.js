const movies = {
  trending: [
    {
      id: 'stranger-things',
      title: 'Stranger Things',
      image: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'wednesday',
      title: 'Wednesday',
      image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'witcher',
      title: 'The Witcher',
      image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'crown',
      title: 'The Crown',
      image: 'https://images.unsplash.com/photo-1518134346374-184f9d21cea2?auto=format&fit=crop&w=500&q=80'
    }
  ],
  popular: [
    {
      id: 'bridgerton',
      title: 'Bridgerton',
      image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'squid-game',
      title: 'Squid Game',
      image: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'dark',
      title: 'Dark',
      image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 'money-heist',
      title: 'Money Heist',
      image: 'https://images.unsplash.com/photo-1618022325802-7e5e732d97a1?auto=format&fit=crop&w=500&q=80'
    }
  ]
};

function createMovieCard(movie) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}" />
  `;
  card.addEventListener('click', () => playVideo(movie.id));
  return card;
}

function renderMovies() {
  const trendingRow = document.getElementById('trending');
  const popularRow = document.getElementById('popular');

  movies.trending.forEach(movie => {
    trendingRow.appendChild(createMovieCard(movie));
  });

  movies.popular.forEach(movie => {
    popularRow.appendChild(createMovieCard(movie));
  });
}

window.playVideo = function(movieId) {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.classList.add('active');
  // In a real application, this would start actual video playback
}

window.closeVideo = function() {
  const videoPlayer = document.getElementById('videoPlayer');
  videoPlayer.classList.remove('active');
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  renderMovies();
});