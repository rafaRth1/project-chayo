import { IoLogoFacebook } from 'react-icons/io5';
import { IoLogoDiscord } from 'react-icons/io5';

const SectionFollowMe = () => {
   return (
      <section className='section-followMe container-two' id='follow'>
         <h2 className='text-black dark:text-white text-5xl text-center my-5'>{'Sigueme ;*)'}</h2>
         <div className='red-socials'>
            <div className='flex justify-between flex-wrap'>
               <div className='trovo flex items-center gap-3 p-5'>
                  <img src={'https://astatic.trovocdn.net/cat/favicon.ico'} alt='trovo-ico' />
                  <a href='https://trovo.live/s/ChayoGaming' className='text-black dark:text-white'>
                     Trovo/Chayogaming
                  </a>
               </div>

               <div className='facebook flex items-center gap-3 p-5'>
                  <IoLogoFacebook className='text-blue-700' size={34} />
                  <a href='https://www.facebook.com/ChayitoGaming' className='text-black dark:text-white'>
                     facebook.com/ChayitoGaming
                  </a>
               </div>

               <div className='discord flex items-center gap-3 p-5'>
                  <IoLogoDiscord className='text-purple-700' size={34} />
                  <a href='https://discord.gg/4ynSQX7q' className='text-black dark:text-white'>
                     Discord Chayolandia
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SectionFollowMe;
