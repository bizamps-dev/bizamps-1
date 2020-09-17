import React from 'react';

const CarouselArrow = () => {
    return(
        <>
          <svg width="30" height="44" viewBox="0 0 30 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <path d="M20.8117 15.6649L24 18.8628L7.27727 35.6364L4.08898 32.4384L20.8117 15.6649Z" fill="white"/>
            <path d="M7.18828 2L24 18.8628L20.8117 22.0607L4 5.19797L7.18828 2Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d" x="0" y="0" width="30" height="43.6364" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dx="1" dy="3"/>
            <feGaussianBlur stdDeviation="2.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>


        </>
    )
}

export default CarouselArrow;