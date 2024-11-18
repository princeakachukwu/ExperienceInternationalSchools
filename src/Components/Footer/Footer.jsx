// import React from 'react'
import { NavLink } from 'react-router-dom'
import FooterLogo from '../../assets/IMAGES/EXPERIENCE footer LOGO.png';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-darkBlue min-h-[70vh] w-full flex flex-col md:flex-row gap-5 items-center lg:items-start justify-between text-white p-8 md:p-16 box-border ">
      <div className='socials flex flex-col gap-10 md:gap-5 box-border items-start lg:w-[45%]  h-[100%]'>
        <NavLink to={'/'} className='lg:flex w-full hidden  items-center justify-center md:h-[25vh] pt-5 box-border ' > <img src={FooterLogo} alt="Logo white" className='logo-flip flex items-center justify-center w-[300px] md:w-[200px] ' /></NavLink>
        {/* <img src={FooterLogo } alt="School logo"  />  */}
        <p className='lg:text-xl md:text-lg text-justify w-full'> <span className='text-textOrange'> Experience International School, Aba. </span> A citadel of learning committed to setting high expectations and standards for learners.  </p>
        <div className='flex gap-4'>
          <NavLink to="https://web.facebook.com/profile.php?id=100053946435834" target='blank'> <FaFacebookF className='text-3xl md:text-2xl text-lightBlue hover:text-textOrange' /></NavLink>
          <NavLink to=""><BsTwitter className='text-3xl md:text-2xl text-lightBlue hover:text-textOrange'  /></NavLink>
          <NavLink to="https://wa.me/2348056628345" target='blank'><FaWhatsapp className='text-3xl md:text-2xl text-lightBlue hover:text-textOrange'  /></NavLink>
          <NavLink to="https://www.youtube.com/@experienceacademytv9500" target='blank'> <CiYoutube className='text-3xl md:text-2xl text-lightBlue hover:text-textOrange'  /></NavLink>
          <NavLink><BsInstagram className='text-3xl md:text-2xl text-lightBlue hover:text-textOrange'  /></NavLink>
        </div>
      </div>
      <div className='mx-auto w-full md:ps-6  gap-6 box-border flex flex-col  justify-start items-center md:w-[25%]  h-[100%]'>
          <h1 className=' w-full lg:text-xl text-lightBlue cursor-pointer hover:text-textOrange'>SITE MAP</h1>
          <div className='flex flex-col gap-2 w-full'>
            <div className='flex gap-4  items-center justify-start w-full '>
              <IoIosArrowForward  className='text-lightBlue md:text-textOrange text-lg hover:text-lightBlue  ' />
              <h1 className='lg:text-xl md:text-lg hover:text-lightBlue '> <NavLink to={"/"}>Home</NavLink> </h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange hover:text-lightBlue text-lg h-[100%]'  />
              <h1 className='lg:text-xl md:text-lg hover:text-lightBlue'> <NavLink to={"/About"}> About </NavLink> </h1>
            </div>
            <div className=' flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue hover:text-lightBlue md:text-textOrange text-lg h-[100%]'  />
              <h1 className='lg:text-xl md:text-lg cursor-pointer hover:text-lightBlue '>Campuses</h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange hover:text-lightBlue text-lg h-[100%]' />
              <h1 className='lg:text-xl md:text-lg hover:text-lightBlue '> <NavLink to={"/Programs"}> Programs</NavLink> </h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full '>
              <IoIosArrowForward className='text-lightBlue md:text-textOrange hover:text-lightBlue text-lg h-[100%]' />
              <h1 className='lg:text-xl md:text-lg hover:text-lightBlue '> <NavLink to={"/Staff"}> Staff</NavLink> </h1>
            </div>
            <div className='flex gap-4 items-center justify-start w-full  '>
              <IoIosArrowForward className='text-lightBlue hover:text-lightBlue md:text-textOrange text-lg h-[100%]' />
              <h1 className='lg:text-xl md:text-lg hover:text-lightBlue '> <NavLink to={"/Blog"}> Blog </NavLink> </h1>
            </div>
          </div>
      </div>
      <div className='w-full mx-auto  gap-6 box-border flex flex-col  justify-start items-start md:items-center md:w-[25%]  h-[100%]'>
        <h1 className='lg:text-xl text-lightBlue cursor-pointer hover:text-textOrange'>CONTACT US</h1>
        <div className='flex gap-5 items-center  '>
          <IoCall className=' h-[100%] text-lg text-lightBlue hover:text-textOrange ' />
          <p className='lg:text-xl md:text-lg cursor-pointer hover:text-textOrange ' >+2348039387345 <br />+2348032543732</p>
        </div>
      </div>
      <div className='w-full md:w-[55%] hidden bg-lightBlue h-[50vh] lg:flex items-start justify-center'>
        {/* <iframe src="https://maps.app.goo.gl/pwHjw7yMF42EnVNZA"  className='w-[100%] h-[100%]' 
        loading='lazy'
        allowFullScreen=""
        referrerPolicy='no-referrer-when-downgrade'>

          
        </iframe> */}

        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15895.650364153595!2d7.374414926073732!3d5.117787490066445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x104299237410b6a7%3A0x5649ca84890ef04f!2sEgege%20Street%2C%20Ogbor%20Hill%2C%20Aba%20450102%2C%20Abia!3m2!1d5.1177662!2d7.3847147!4m0!5e0!3m2!1sen!2sng!4v1717677067054!5m2!1sen!2sng" 
        
        allowfullscreen="" 
        loading="lazy" 
        className='w-[100%] h-[100%]'></iframe>
      </div>
    </div>
  )
}

export default Footer