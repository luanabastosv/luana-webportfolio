
// import { useEffect, useRef } from "react";


// export default function InteractiveBubble() {
//   const interactiveRef = useRef(null);

//   useEffect(() => {
//     const bubble = interactiveRef.current;
//     if (!bubble) return;

//     let curX = 0;
//     let curY = 0;
//     let tgX = 0;
//     let tgY = 0;

//     const move = () => {
//       curX += (tgX - curX) / 30;
//       curY += (tgY - curY) / 30;
//       bubble.style.transform = `translate(${curX}px, ${curY}px)`;
//       requestAnimationFrame(move);
//     };

//     const handleMouseMove = (e) => {
//       tgX = e.clientX;
//       tgY = e.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     move();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="gradient-bg">
//       <svg xmlns="http://www.w3.org/2000/svg">
//         <defs>
//           <filter id="goo">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10"
//               result="goo"
//             />
//             <feBlend in="SourceGraphic" in2="goo" />
//           </filter>
//         </defs>
//       </svg>

//       <div className="gradients-container">
//         <div className="g1"></div>
//         <div className="g2"></div>
//         <div className="g3"></div>
//         <div className="g4"></div>
//         <div className="g5"></div>
//         <div ref={interactiveRef} className="interactive"></div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useRef } from "react";


export default function InteractiveBubble() {
  const bubbleRef = useRef(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 10; // velocidade da bolha que segue o mouse
      curY += (tgY - curY) / 10;
      bubble.style.transform = `translate(${curX}px, ${curY}px)`;
      requestAnimationFrame(move);
    };

    const handleMouseMove = (e) => {
      tgX = e.clientX;
      tgY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="g6"></div>
        <div className="g7"></div>
        <div ref={bubbleRef} className="interactive"></div>
      </div>
    </div>
  );
}
