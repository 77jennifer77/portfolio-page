import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();    
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }

        window.addEventListener("resize", handleResize);

        // cleanup listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 5000);
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1, // Size between 1 and 4 pixels
                x: Math.random() * 100, // Percentage across the screen
                y: Math.random() * 100, // Percentage down the screen
                opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1, so some are faint and some are bright
                animationDuration: Math.random() * 4 + 2, // Duration between 2s and 6s
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 5;

        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1, // Size between 1 and 3 pixels
                x: Math.random() * 100, // Meteors can start from anywhere horizontally
                y: Math.random() * 20, // Meteors start from the top 20% of the screen
                delay: Math.random() * 15, // Delay between 0s and 15s
                animationDuration: Math.random() * 3 + 3, // Duration between 3s and 6s
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
             {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 50}px`, 
                        height: `${meteor.size * 2}px`, 
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        delay: meteor.opacity,
                        animationDuration: `${meteor.animationDuration}s`,
                        // s addded to animationDuration to make it valid CSS and to note it as seconds
                    }}
                />
             ))}
        </div>
    );
}