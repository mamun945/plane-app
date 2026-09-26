import React from 'react';
import fLogo from '../../../public/footer.png'
import Image from 'next/image';
const FooterPage = () => {
    return (
        <div className='container mx-auto flex justify-between items-center my-6'>
            <div className='flex items-center gap-3'>
                <Image 
                src={fLogo}
                alt='logo'
                width={70}
                height={40}
                ></Image>
                 <h1 className='text-4xl font-bold'>FITLOG</h1>
            </div>

            <p className='text-gray-500'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
    );
};

export default FooterPage;