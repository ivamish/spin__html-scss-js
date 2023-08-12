export default function modal(params = {description: false, image: false, count: false, title: false}) {
    
    const modalEl = document.getElementById('modal');

    if(params['count']) {
        const img = document.createElement('img');
        img.src = `/public/assets/images/${params['image']}`;

        const countEl = document.createElement('div');
        countEl.classList.add('spin-modal__count');
        countEl.innerHTML = `<span>x${params['count']}</span>`;

        modalEl.querySelector('.spin-modal__img').append(countEl);
        modalEl.querySelector('.spin-modal__img').append(img);

        modalEl.querySelector('.spin-modal__text').innerText = `You got ${params['count']} ${params['description']}`;

    }
    
    else {

        modalEl.querySelector('h2').innerText = "Sorry!";
        modalEl.querySelector('.spin-modal__text').innerText = "We have no prizes. See you later!";
    }

    modalEl.classList.add('show');
}