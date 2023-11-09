import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';

const items: string[] = [
    'https://www.unifranz.edu.bo/wp-content/uploads/2023/04/Captura-de-pantalla-2023-04-15-a-las-07.48.24-1024x580.png',
    'https://www.acumar.gob.ar/wp-content/uploads/2023/10/Juntamos-libros-infantiles_Boletin_Web-Mail.png',
    'https://www.campanario.es/wp-content/uploads/2018/03/Campa%C3%B1a-Ambiental-2018.jpg',
    // Agrega más imágenes aquí
];

const ImageCarousel = () => {


    const handleLabelClick = (index: any) => {
        console.log(index);

    };
    return (
        <Carousel showThumbs={false} showStatus={false} autoPlay stopOnHover infiniteLoop={true} swipeable>
            {items.map((item, index) => (
                <div key={index}
                    style={{ height: "700px" }}
                >
                    <Image src={item}
                        width={1920}
                        height={700}
                        alt={`Imagen ${index + 1}`}
                    />
                    <p style={{
                        position: 'absolute',
                        bottom: '40px',
                        left: '0%',
                        // marginLeft: '-45%',
                        width: '100%',
                        borderRadius: '10px',
                        background: '#09ac8bcf',
                        padding: '8px',
                        fontSize: '12px',
                        textAlign: 'center',
                        opacity: '1',
                    }}>
                        <NextLink href="/login" passHref>
                            <MUILink variant="h6" style={{ color: "white", fontWeight: "bold" }}>croquetitas</MUILink>
                        </NextLink>
                    </p>
                </div>
            ))
            }
        </Carousel >
    );
}

export default ImageCarousel;