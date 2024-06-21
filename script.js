document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const yearlyPrices = document.querySelectorAll('.price-yearly');

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            yearlyPrices.forEach(price => price.style.display = 'block');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'block');
            yearlyPrices.forEach(price => price.style.display = 'none');
        }
    });

    const buttons = document.querySelectorAll('.card button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Sign up button clicked!');
        });
    });
});
