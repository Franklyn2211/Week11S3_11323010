import React, { useState } from 'react';

function ColorChange() {
    const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    const [color, setColor] = useState('black');

    const handleTextClick = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    };

    return (
        <div>
            <h1 style={{ color: color }} onClick={handleTextClick}>Pencet Abangkuhh🔥🚀❤️</h1>
        </div>
    );
}

export default ColorChange;
