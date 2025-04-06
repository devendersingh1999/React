
import React, { useEffect, useRef, useState } from 'react';
import Canvasimages from './Canvasimages';
import gsap from 'gsap';

const Canvas = ({details}) => {
    const {startIndex, numImages, duration, size, top, left, zIndex} = details;
    const [index, setIndex] = useState({value : startIndex}); // Index is a simple number now
    const canvasRef = useRef(null);


    useEffect(() => {
        // GSAP animation starts on component mount
        gsap.to( index , {
            value: startIndex + numImages -1, // Target the last index of the array
            duration: duration,
            ease: 'linear',
            repeat: -1, // Infinite repeat
            onUpdate: () => {
                setIndex(Math.round(index.value)); // Update state with the animated value
            },
        });

        //     gsap.from(canvasRef.current, {
        // opacity: 0,
        // duration: 1,
        // ease: "power2.inOut",
        // });

    }, [startIndex, numImages, duration]); 

    

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = Canvasimages[index]; // Use the current index to get the image
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height = canvas.offsetHeight + "px";
            // ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
        };
    }, [index]); // Re-render canvas every time index changes

    return (
        <canvas
          data-scroll
          data-scroll-speed={Math.random().toFixed(1)}
          ref={canvasRef}
          className="absolute"
          style={{
            width: `${size * 1.4}px`,
            height: `${size * 1.4}px`,
            top: `${top}%`,
            left: `${left}%`,
            zIndex: `${zIndex}`,
          }}
          id="canvas"
        ></canvas>
      );
    }
    
    export default Canvas;


    // or=========================================================

//     import React, { useEffect, useRef, useState } from 'react';
// import Canvasimages from './Canvasimages';
// import gsap from 'gsap';

// const Canvas = ({ details }) => {
//     const { startIndex, numImages, duration, size, top, left, zIndex } = details;
//     const [index, setIndex] = useState(startIndex); // Index is now a simple number
//     const canvasRef = useRef(null);

//     useEffect(() => {
//         // GSAP animation for updating index
//         const gsapAnim = gsap.to({ value: startIndex }, {
//             value: startIndex + numImages - 1,
//             duration,
//             ease: 'linear',
//             repeat: -1,
//             onUpdate: function () {
//                 setIndex(Math.round(this.targets()[0].value)); // Update index
//             },
//         });

//         // Cleanup GSAP animation on component unmount
//         return () => gsapAnim.kill();
//     }, [startIndex, numImages, duration]);

//     useEffect(() => {
//         const scale = window.devicePixelRatio;
//         const canvas = canvasRef.current;
//         const ctx = canvas.getContext('2d');
//         const img = new Image();

//         // Check if Canvasimages[index] is valid
//         if (!Canvasimages || !Canvasimages[index]) return;

//         img.src = Canvasimages[index]; // Use the current index to get the image
//         img.onload = () => {
//             canvas.width = canvas.offsetWidth * scale;
//             canvas.height = canvas.offsetHeight * scale;
//             canvas.style.width = `${canvas.offsetWidth}px`;
//             canvas.style.height = `${canvas.offsetHeight}px`;
//             ctx.scale(scale, scale);
//             ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame
//             ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
//         };
//     }, [index]); // Re-render when index changes

//     return (
//         <canvas
//             data-scroll
//             data-scroll-speed={Math.random().toFixed(1)}
//             ref={canvasRef}
//             className="absolute"
//             style={{
//                 width: `${size * 1.4}px`,
//                 height: `${size * 1.4}px`,
//                 top: `${top}%`,
//                 left: `${left}%`,
//                 zIndex: zIndex,
//             }}
//             id="canvas"
//         ></canvas>
//     );
// };

// export default Canvas;
