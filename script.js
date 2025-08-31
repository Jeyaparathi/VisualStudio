document.addEventListener('DOMContentLoaded', function() {
    const animatedBox = document.getElementById('animatedBox');
    const animateButton = document.getElementById('animateButton');
    let isAnimating = false;
    
    // Click on box animation
    animatedBox.addEventListener('click', function() {
        if (!isAnimating) {
            animateBox();
        }
    });
    
    // Button click animation
    animateButton.addEventListener('click', function() {
        if (!isAnimating) {
            animateBox();
        }
    });
    
    function animateBox() {
        isAnimating = true;
        animatedBox.textContent = "Animating!";
        
        // Reset animation properties
        animatedBox.style.transform = 'rotate(0deg) scale(1)';
        animatedBox.style.backgroundColor = '#ff9a9e';
        
        // Create keyframe animation using JavaScript
        let start = null;
        const duration = 2000; // 2 seconds
        
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percent = Math.min(progress / duration, 1);
            
            // Apply various transformations
            const rotate = percent * 360 * 2; // Two full rotations
            const scale = 1 + Math.sin(percent * Math.PI) * 0.5; // Pulse effect
            
            // Color transition
            const r = Math.floor(150 + 100 * Math.sin(percent * Math.PI));
            const g = Math.floor(100 + 100 * percent);
            const b = Math.floor(150 + 100 * Math.cos(percent * Math.PI));
            
            animatedBox.style.transform = `rotate(${rotate}deg) scale(${scale})`;
            animatedBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            
            if (percent < 1) {
                requestAnimationFrame(step);
            } else {
                // Animation complete
                animatedBox.textContent = "Click me again!";
                animatedBox.style.transform = 'rotate(0deg) scale(1)';
                animatedBox.style.backgroundColor = '#ff9a9e';
                isAnimating = false;
            }
        }
        
        requestAnimationFrame(step);
    }
    
    // Additional animation: Background color pulse effect
    function pulseBackground() {
        const colors = [
            'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)',
            'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)',
            'linear-gradient(135deg, #00416a, #e4e5e6)',
            'linear-gradient(135deg, #000046, #1cb5e0)'
        ];
        
        let currentIndex = 0;
        
        setInterval(() => {
            document.body.style.background = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        }, 10000); // Change every 10 seconds
    }
    
    pulseBackground();
});