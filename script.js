const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberindicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;

function update(direction) {
    // Remove classes ativas
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    // Atualiza índice
    if (direction > 0) {
        active = (active + 1) % total;
    } else if (direction < 0) {
        active = (active - 1 + total) % total;
    }

    // Adiciona classes ativas
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualiza o indicador de número (apenas o número: 1, 2, 3)
    numberindicator.textContent = active + 1;
}

// Inicializa o primeiro item/dot como ativo
items[active].classList.add('active');
dots[active].classList.add('active');
numberindicator.textContent = active + 1;

prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
    update(1);
});