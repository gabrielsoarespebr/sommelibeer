import { drinks } from './drinks.js'
drinks();

const ctx = document.getElementById("price-chart");

// var price = document.querySelector("#price");

// price = parseFloat(price.textContent.replace('R$', ''));

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Variação de preço',
            data: [9.20, 8.32, 7.80, 8.10, 7.60, 7.49],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});