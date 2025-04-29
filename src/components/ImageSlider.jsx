import { useState } from "react"
import "./ImageSlider.css"

export default function ImageSlider({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className="slide-holder">
            <div className="left-arrow" onClick={goToPrevious}>←</div>
            <div className="right-arrow" onClick={goToNext}>→</div>
            <div className="slider-styles" style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        </div>
    )
}

// {{backgroundImage: `url(${slides[currentIndex]})`}}