import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoDiscord } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';

import './redSocials.css';

const RedSocials = () => {
   return (
      <div className='red-socials flex items-center'>
         <div className='fb-chayo p-1'>
            <IoLogoFacebook size={25} className='text-blue-500' />
         </div>
         <div className='ins-chayo p-1'>
            <IoLogoInstagram size={25} className='text-white' />
         </div>
         <div className='yt-chayo p-1'>
            <IoLogoYoutube size={25} className='text-red-500' />
         </div>
         <div className='trovo-chayo p-1'>
            <img src={'https://astatic.trovocdn.net/cat/favicon.ico'} alt='trovo-ico' className='w-5 h-5' />
         </div>
         <div className='discord-chayo p-1'>
            <IoLogoDiscord size={25} className='text-purple-600' />
         </div>
      </div>
   );
};

export default RedSocials;
