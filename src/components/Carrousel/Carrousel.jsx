// import React from 'react';
// // import Slider from 'react-slick';

// // import 'slick-carousel/slick/slick.css';
// // import 'slick-carousel/slick/slick-theme.css';

// const settings = {
//   dots: true,           // Puntos de navegación
//   infinite: true,       // Bucle infinito
//   speed: 500,           // Velocidad de transición
//   slidesToShow: 4,      // Mostrar 4 imágenes
//   slidesToScroll: 1,    // Desplazar 1 imagen por transición
//   autoplay: true,       // Autoplay
//   autoplaySpeed: 2000,  // Velocidad del autoplay
//   responsive: [         // Configuración responsive
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       }
//     }
//   ]
// };

// const Carousel = () => {
//   return (
//     <div className="carousel">
//       <Slider {...settings}>
//         <div className="carousel-item">
//           <img 
//             src="https://i.ibb.co/VgTH0NP/Pos1.png" 
//             alt="Pos1" 
//             className="carousel-image"
//           />
//         </div>
//         <div className="carousel-item">
//           <img 
//             src="https://i.ibb.co/FYfsMRM/Post2.png" 
//             alt="Post2" 
//             className="carousel-image"
//           />
//         </div>
//         <div className="carousel-item">
//           <img 
//             src="https://i.ibb.co/9V77r3r/Post3.png" 
//             alt="Post3" 
//             className="carousel-image"
//           />
//         </div>
//         <div className="carousel-item">
//           <img 
//             src="https://i.ibb.co/ZNCw5f2/Post-4.png" 
//             alt="Post 4" 
//             className="carousel-image"
//           />
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Carousel;