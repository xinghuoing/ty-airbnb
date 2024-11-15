// import React, { useState, useRef, useEffect } from "react";

// const LazyImage = ({ src }) => {
//   const [srcLoaded, setSrcLoaded] = useState("/path/to/placeholder.jpg");
//   const imgRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setSrcLoaded(src);
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     if (imgRef.current) {
//       observer.observe(imgRef.current);
//     }

//     return () => {
//       if (imgRef.current) {
//         observer.unobserve(imgRef.current);
//       }
//     };
//   }, [src]);

//   return (
//     <div className="cover">
//       <img
//         ref={imgRef}
//         src={srcLoaded}
//         alt=""
//         style={{
//           opacity: srcLoaded === "/path/to/placeholder.jpg" ? 0 : 1,
//           transition: "opacity 0.5s",
//         }}
//       />
//     </div>
//   );
// };

// export default LazyImage;
