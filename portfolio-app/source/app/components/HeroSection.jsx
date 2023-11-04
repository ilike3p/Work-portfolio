import React from 'react';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className='col-span-7'>
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
                    Whats up its Tray
                </h1>
                <p className="text-[#adb7be] text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;