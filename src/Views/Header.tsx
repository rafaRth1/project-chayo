import Logo from '../components/Logo';
import useResize from '../hooks/useResize';
import Navigation from './Navigation';

import { IoMenuOutline } from 'react-icons/io5';
import { useState } from 'react';

const Header = () => {
   const [toggleDark, settoggleDark] = useState(false);
   const { width } = useResize();

   return (
      <header>
         <div className='flex justify-between items-center'>
            <Logo toggleDark={toggleDark} />
            {width < 650 ? (
               <IoMenuOutline className='text-black dark:text-white' size={35} />
            ) : (
               <Navigation toggleDark={toggleDark} settoggleDark={settoggleDark} />
            )}
         </div>
      </header>
   );
};

export default Header;
