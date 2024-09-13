import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1)); // Remove the `#` symbol

            if (element) {
                const targetPosition = element.getBoundingClientRect().top; // Get the position of the target element
                const currentPosition = window.pageYOffset || document.documentElement.scrollTop; // Get the current scroll position

                console.log('target position ', targetPosition);


                if (Math.abs(targetPosition) <= 0) {
                    // If the distance is less than or equal to 500px, smoothly scroll to the element
                    window.scrollTo({
                        top: currentPosition + targetPosition,
                        behavior: 'smooth', // Smooth scroll
                    });
                } else {
                    // If the distance is greater than 500px, jump instantly
                    window.scrollTo({
                        top: currentPosition + targetPosition,
                        behavior: 'auto', // Instant jump (default behavior)
                    });
                }
            }
        }
    }, [location]);

    return null;
}

export default ScrollToHashElement;
