import { jsx as _jsx } from "react/jsx-runtime";
import { Carousel } from "antd";
import './styles.scss';
export const MyCarousel = ({ images }) => {
    return (_jsx("div", { className: 'SCarouselWrapper', children: _jsx(Carousel, { autoplay: true, children: images.map((image, index) => (_jsx("div", { children: _jsx("img", { src: image, alt: `Slide ${index + 1}`, style: { width: '100%', height: '400px', objectFit: 'cover' } }) }, index))) }) }));
};
