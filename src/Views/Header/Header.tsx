import { useState } from 'react';
import Logo from '../../components/Logo';
import RedSocials from '../../components/RedSocials/RedSocials';
import Navigation from '../Navigation';
import './header.css';

const Header = () => {
   const [toggleDark, settoggleDark] = useState(false);

   return (
      <header>
         <div className='content-header md:fixed w-full z-50 top-0 left-0'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
               <Logo toggleDark={toggleDark} />
               <Navigation toggleDark={toggleDark} settoggleDark={settoggleDark} />
               <RedSocials />
            </div>
         </div>
      </header>
   );
};

export default Header;
