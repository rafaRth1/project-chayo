import useDarkMode from '../hooks/useDarkMode';
import { IoSunny } from 'react-icons/io5';

const Navigation = ({ toggleDark, settoggleDark }: any) => {
   const [isDarkMode, toggleDarkMode] = useDarkMode();
   const classLi = 'p-3 hover:text-neutral-300 transition-all';

   return (
      <div className='navigation'>
         <nav className='relative'>
            <ul className={`text-black dark:text-white z-50 flex `}>
               <li className={classLi}>
                  <a
                     href='#inicio'
                     onClick={(e: any) => {
                        e.preventDefault();
                        const seccionSroll = e.target?.attributes.href.value;
                        const seccion = document.querySelector(seccionSroll);

                        seccion.scrollIntoView({ behavior: 'smooth' });
                     }}
                  >
                     Inicio
                  </a>
               </li>

               <li className={classLi}>
                  <a
                     href='#vlog'
                     onClick={(e: any) => {
                        e.preventDefault();
                        const seccionSroll = e.target?.attributes.href.value;
                        const seccion = document.querySelector(seccionSroll);

                        seccion.scrollIntoView({ behavior: 'smooth' });
                     }}
                  >
                     Mi vlog
                  </a>
               </li>

               <li className={classLi}>
                  <a
                     href='#aboutme'
                     onClick={(e: any) => {
                        e.preventDefault();
                        const seccionSroll = e.target?.attributes.href.value;
                        const seccion = document.querySelector(seccionSroll);

                        seccion.scrollIntoView({ behavior: 'smooth' });
                     }}
                  >
                     Sobre Mi
                  </a>
               </li>

               <li className={classLi}>
                  <a href='#milife'>Mi vida</a>
               </li>

               <li className={classLi}>
                  <a
                     href='#follow'
                     onClick={(e: any) => {
                        e.preventDefault();
                        const seccionSroll = e.target?.attributes.href.value;
                        const seccion = document.querySelector(seccionSroll);

                        seccion.scrollIntoView({ behavior: 'smooth' });
                     }}
                  >
                     Sigueme
                  </a>
               </li>

               {/*  <li
                  className={classLi}
                  onClick={() => {
                     toggleDarkMode(isDarkMode), settoggleDark(!toggleDark);
                  }}
               >
                  <IoSunny size={25} />
               </li> */}
            </ul>
         </nav>
      </div>
   );
};

export default Navigation;
