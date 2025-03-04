const ScrollRevealEffect = (() => {
    let items = [];

    const init = () => {
        items = document.querySelectorAll('.fade-up, .zoom-in');
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    };

    const handleScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        items.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;

            if(itemTop < triggerBottom) {
                item.classList.add('visible');
            }else{
                item.classList.remove('visible');
            }
        });
    };
    return { init };
})();
document.addEventListener('DOMContentLoaded', ScrollRevealEffect.init);