window.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-icon'),
    menu = document.querySelector('.header__nav'),
    stars = document.querySelectorAll('.rate-item')

    const toggleMenu = () => {
        menu.classList.toggle('active');
    };
    const setRate = (e) => {
        const id = e.target.getAttribute('data-id');
        stars.forEach((el, i) => {
            el.src = './assets/images/star-enabled.svg';
            if(!(i >= id)){
                el.src = './assets/images/star-active.svg';
            }else{
                return
            }
        })
        menu.classList.toggle('active');
    };

    menuBtn.addEventListener('click', toggleMenu);
    stars.forEach((el) => el.addEventListener('click', (e) => setRate(e)))
})