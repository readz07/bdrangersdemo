import Image from 'next/image';
import React from 'react';
import banner from '/public/fb-banner.png'
const Banner = () => {
    return (
        <div>
            <Image src={banner} alt="banner main"/>
        </div>
    );
};

export default Banner;