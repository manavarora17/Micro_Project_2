window.onscroll = function() {
    const icon = document.getElementById('socialicons');
    const stickyPosition = window.innerHeight / 3;

    if (window.scrollY > stickyPosition) {
        icon.classList.add('sticky');
    } else {
        icon.classList.remove('sticky');
    }
};