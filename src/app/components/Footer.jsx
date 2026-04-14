import Image from 'next/image';
import React from 'react';
import Logo from '../assets/logo-xl.png'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#244D3F] pt-20 pb-7.5'>
                <div className='flex flex-col items-center text-center'>
                    <Image src={Logo} alt="Logo" width={180} height={40} />

                    <p className='mt-4 text-white'>
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    <p className='mt-4 text-white text-xl font-semibold'>Social Links</p>

                    <div className='flex gap-5 mt-2'>
                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='text-white text-3xl' />
                        </a>
                        <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className='text-white text-3xl' />
                        </a>
                        <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-white text-3xl' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;