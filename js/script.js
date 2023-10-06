//Router 
console glaboal = {
    currentPage: window.location.pathname
};

//Highlight active link
function highlightActiveLink(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href')=== global.currentPage) {
            link.classList.add('active');
        }
    })
}

//Inıt App
function init() {
    switch (global.currentPage) {
        case '/index.html':
            console.log('Home');
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