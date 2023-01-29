import { useState } from "react";
import { datatwo } from './datatwo';
import './App.css';
import { IoIosArrowBack } from "react-icons/io";
import {IoIosArrowForward } from "react-icons/io";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";




function Slides() {

    const [sliders, setSliders] = useState(0);

    const { id, locality, description, image } = datatwo[sliders];


    const previosSliders = () => {
    setSliders((slider => {
        slider --;
        if (slider < 0) {
        return datatwo.length-1;
    }
        return slider;
    }))
}

    const nextSliders = () => {
        setSliders((slider => {
        slider ++;
        if(slider > datatwo.length - 1) {
        slider = 0;
    }
    return slider;
    }))
}

const wavyTextRef = useRef(null);

    useEffect(() => {
    gsap.to("h1", { duration: 4, 
        scale: 1.5,
        ease: "bounce.out"
    });

    gsap.to(".btn", { delay: 2,
        duration: 3, 
        rotation: 720,
        ease: "bounce.out"
    });

    }, []);


    return (<div>

    <div className='container'>
    <h1 ref={wavyTextRef}>Едете в Крым? </h1>
    </div>

    <div className='container'>
    <img src={image} width='350px' height='480px' alt='slider' />
    </div>

    <div className='container'>
    <h3>{id}. {locality}</h3>
    </div>

    <div className='container'>
    <p>{description}</p>
    </div>

    <div className='btnTwo container'>
    <button className='btn' onClick={previosSliders}> <IoIosArrowBack/> Назад </button>
    <button className='btn' onClick={nextSliders}> Вперед <IoIosArrowForward/> </button>
    </div>

    </div>
);

}


export default Slides;