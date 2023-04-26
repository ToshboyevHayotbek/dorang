'use strict'
const showBtn = document.querySelector('.data__btn'),
    modal = document.querySelector('.search__item');

    showBtn.addEventListener('click', () =>{
        modal.classList.add('show');
        modal.classList.remove('hide');
    });


const dataVid = document.querySelector('.vid'),
    youtube = document.querySelector('.you__vid');

    dataVid.addEventListener('click', () =>{
        youtube.classList.add('show');
        youtube.classList.remove('hide');
    });


    