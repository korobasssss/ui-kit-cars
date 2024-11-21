import { Carousel } from "antd"
import { FC } from "react"
import  './styles.scss'

export interface IMyCarousel {
    images: string[]
}

export const MyCarousel: FC<IMyCarousel> = (
    {
        images
    }
) => {
    return (
        <div className={'SCarouselWrapper'}>
            <Carousel 
                autoplay
                
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <img 
                            src={image}
                            alt={`Slide ${index + 1}`} 
                            style={{ width: '100%', height: '400px', objectFit: 'cover' }} 
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}