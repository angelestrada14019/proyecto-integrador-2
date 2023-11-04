import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

const items: string[] = [
    'https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg',
    'https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg',
    'https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg',
    // Agrega más imágenes aquí
];

const ImageCarousel = () => {
    return (
        <Carousel>
            {items.map((item, index) => (
                <div key={index}
                    style={{ height: "600px" }}
                >
                    <Image src={item}
                        width={0}
                        height={0}
                        sizes="33vw"
                        objectFit='cover'
                        alt={`Imagen ${index + 1}`}
                    />
                </div>
            ))}
        </Carousel>
    );
}

export default ImageCarousel;