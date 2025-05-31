import React from 'react';
import logo from '../../../../images/more/logo1.png'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import footerImage from "../../../../images/more/13.jpg"
const Footer = () => {
    return (
        <div className='md:flex mt-18 p-10 lg:pl-35 gap-60 items-center justify-center' style={{backgroundImage: `url(${footerImage})`}}>
            <div className='lg:w-6/12'>
                <img className='h-[90px] w-[70pxs] text-center' src={logo} alt="" />
                <h1 className='text-[#331A15] text-4xl font-bold'>Espresso Emporium</h1>
                <p className='text-[#1B1A1A] text-xl mt-8'>Always ready to be your friend. Come & Contact with us <br /> to share your memorable moments,  to share with your best companion.</p>
                <div className='flex gap-2 text-4xl text-[#331A15] mt-8'>
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
                <h1 className='text-[#331A15] text-4xl font-bold mt-8'>Get in Touch</h1>
                <div className=' flex items-center gap-2 mt-8'>
                    <div>
                        <FaPhoneAlt />
                        <MdEmail  className='mt-2' />
                        <IoLocation  className='mt-2' />
                    </div>
                    <div>
                        <p>+88 01533 333 333</p>
                        <p>info@gmail.com</p>
                        <p>72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-6/12'>
                <h1 className='text-[#331A15] text-4xl font-bold'>Connect with Us</h1>
                <input type="text" placeholder="name" className="input mt-3 " />
                <input type="text" placeholder="email" className="input block mt-5 " />
                <input type="text" placeholder="message" className="textarea mt-5  h-[70px]" />
                <button className="btn btn-soft hover:bg-[#331A15] bg-white mt-5 lg:block md:block text-[#331A15] hover:text-white border-[#331A15] rounded-2xl">Send Message</button>
            </div>

        </div>
    );
};

export default Footer;