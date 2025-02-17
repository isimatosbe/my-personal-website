import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to certain distance
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    return (
        <div>
            {isVisible && (
                <FaArrowCircleUp onClick={scrollToTop} className="fixed-button scroll-to-top" />
            )}
        </div>
    )

}