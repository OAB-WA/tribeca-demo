$(document).ready(function () {
    // header

    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        const defaultLogo = document.querySelector('.default-logo');
        const stickyLogo = document.querySelector('.sticky-logo');

        if (window.scrollY > 0) {
            header.classList.add('sticky');
            defaultLogo.style.display = 'none';
            stickyLogo.style.display = 'flex';
        } else {
            header.classList.remove('sticky');
            defaultLogo.style.display = 'flex';
            stickyLogo.style.display = 'none';
        }
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) { // Adjust the scroll value as needed
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // search

    const myModal = document.getElementById('staticBackdrop');
    myModal.addEventListener('shown.bs.modal', () => {
        document.getElementById('searchInput').focus();
    });

    document.getElementById('searchInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const query = this.value;
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });

    document.getElementById('searchButton').addEventListener('click', function (event) {
        event.preventDefault();
        const query = document.getElementById('searchInput').value;
        window.location.href = `search.html?query=${encodeURIComponent(query)}`;
    });

});