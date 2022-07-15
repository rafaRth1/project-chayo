import Header from './Header/Header';
import Main from './Main';

interface Props {
   setModalActive: React.Dispatch<
      React.SetStateAction<{
         src: string;
         active: boolean;
      }>
   >;
}

const Layout = ({ setModalActive }: Props) => {
   return (
      <div className='relative'>
         <Header />
         <Main setModalActive={setModalActive} />
      </div>
   );
};

export default Layout;
