import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        generateStars();    
    }, []);

    const generateStars = () => {
        const numberOfStars = 1000;
        /* calulation for number of stars based on screen size was broken
            calculatio always returned 0
        */
        // Math.floor(
        //     (window.innerWidth + window.innerHeight) / 10000
        // );
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 4 pixels
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1, so some are faint and some are bright
                animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
            });
        }
        setStars(newStars);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
             {console.log(stars)}
             {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                        // s addded to animationDuration to make it valid CSS and to note it as seconds
                    }}
                />
             ))}
        </div>
    );
}