document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".notion-card");

    function revealOnScroll() {
        let triggerBottom = window.innerHeight * 0.85;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});



