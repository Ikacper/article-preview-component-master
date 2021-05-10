const cardBtn = document.querySelector('.card__btn');
const socialMedia = document.querySelector('.card__social-media');
const cardHero = document.querySelector('.card__hero');

cardBtn.addEventListener('click', () => {
    socialMedia.classList.toggle('social-media--active');
    cardBtn.classList.toggle('btn--active')
})

const socialMediaBtn = document.querySelector('.social-media__btn');

socialMediaBtn.addEventListener('click', () => {
    socialMedia.classList.toggle('social-media--active');
})

const arrow = document.createElement('div');
arrow.classList.add('arrow');
socialMedia.append(arrow);

