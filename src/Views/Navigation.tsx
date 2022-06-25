import { useState } from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navigation = ({ toggleDark, settoggleDark }: any) => {
   const [isDarkMode, toggleDarkMode] = useDarkMode();
   const classLi = 'p-2 hover:text-neutral-300 transition-all';

   return (
      <div className='navigation'>
         <nav>
            <ul className='text-black dark:text-white flex'>
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

               <li
                  className={classLi}
                  onClick={() => {
                     toggleDarkMode(isDarkMode), settoggleDark(!toggleDark);
                  }}
               >
                  Toogle Dark
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Navigation;
