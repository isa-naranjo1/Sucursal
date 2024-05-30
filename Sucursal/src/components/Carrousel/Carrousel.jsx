import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Carrousel.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}>
                        <Link to="/proyectos">
                            <img
                                src={image}
                                alt={`Image ${index}`}
                                className="carousel-image"
                            />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const CarrouselContainer = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const querySnapshot = await getDocs(collection(db, 'documentos'));
            const projectsData = querySnapshot.docs.map(doc => doc.data().imageUrl);
            setImages(projectsData);
        };

        fetchProjects();
    }, []);

    return <Carousel images={images} />;
};

export default CarrouselContainer;
