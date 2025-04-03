const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

const categoryButtons = document.querySelectorAll('.category-button');
const productCardsContainers = document.querySelectorAll('.product-cards-container');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        productCardsContainers.forEach(container => container.classList.remove('active'));

        const category = button.dataset.category;
        const selectedContainer = document.getElementById(category);
        if (selectedContainer) {
            button.classList.add('active');
            selectedContainer.classList.add('active');
        }
    });
});