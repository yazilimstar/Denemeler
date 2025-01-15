// Film verileri (gerçek bir API yerine sabit veri kullanıyoruz)
const movies = [
    {
        title: "Yıldızlar Arası",
        year: "2014",
        genre: "Bilim Kurgu",
        image: "https://via.placeholder.com/300x450.png?text=Yildizlar+Arasi",
    },
    {
        title: "Inception",
        year: "2010",
        genre: "Aksiyon, Gizem",
        image: "https://via.placeholder.com/300x450.png?text=Inception",
    },
    {
        title: "Parasite",
        year: "2019",
        genre: "Drama, Komedi",
        image: "https://via.placeholder.com/300x450.png?text=Parasite",
    },
    {
        title: "The Matrix",
        year: "1999",
        genre: "Aksiyon, Bilim Kurgu",
        image: "https://via.placeholder.com/300x450.png?text=The+Matrix",
    },
    // Daha fazla film verisi eklenebilir
];

// Film listesi görüntüleme
function displayMovies(filteredMovies) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = ""; // Önceki filmleri temizle

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="info">
                <h3>${movie.title}</h3>
                <p>${movie.genre}</p>
                <p class="release-date">Yıl: ${movie.year}</p>
            </div>
        `;

        movieList.appendChild(movieCard);
    });
}

// Film arama fonksiyonu
function searchMovies() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query) || 
        movie.genre.toLowerCase().includes(query)
    );
    displayMovies(filteredMovies);
}

// Sayfa yüklendiğinde tüm filmleri göster
document.addEventListener("DOMContentLoaded", function () {
    displayMovies(movies);
});
