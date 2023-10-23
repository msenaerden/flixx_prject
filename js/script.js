//Router bağlantı yolunu nesneye tanımlar
const global = {
    currentPage: window.location.pathname
};

//Highlight active link fonksiyon oluşturuldu eğer links değişkeni içinde html içindeki nav-link sınıfına ait element seçilir. links bir array dizi oluştururken link bu dizi içine girecek her bir elemanı ifade eder. link eğer bağlantıda güncel açık olan sayfaya eşitse href elemanının css özelliklerini active sınıfına göre yap.
function highlightActiveLink(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href')=== global.currentPage) {
            link.classList.add('active');
        }
    })
}

async function displayPopularMovies() {
    const {result} = await fetchAPIData('movie/popular');
    console.log(result);
}

//Fetch data from TMDB API SOORRR
async function fetchAPIData(endpoint) {
    const API_KEY = 'c053a9bd28108c4c9010b35dcaeb44e7';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(
        `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
    );

    const data = await response.json();

    return data;
}

//Inıt App fonksiyonu içine bir if else yazar eğer bağlantı linki / ile bitiyorsa konsola home yaz ya da bağlantı linkinde /shows.html yazıyorsa konsola shows yaz
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies;
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-datails.html':
            console.log('Tv Details');
            break;
        case '/search.html':
            console.log('Search');
            break;        
    }
    highlightActiveLink();
}
document.addEventListener('DOMContentLoaded',init);