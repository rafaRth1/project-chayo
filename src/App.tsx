import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Layout from './Views/Layout';

function App() {
   const [modalActive, setModalActive] = useState({ src: '', active: false });

   return (
      <div className='App bg-slate-200 dark:bg-neutral-800 transition-all '>
         <div className='contenedor'>
            {modalActive.active && <Modal modalActive={modalActive} setModalActive={setModalActive} />}{' '}
            <Layout setModalActive={setModalActive} />
         </div>
      </div>
   );
}

export default App;
