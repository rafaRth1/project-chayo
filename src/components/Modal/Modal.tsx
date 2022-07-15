import React from 'react';
import './modal.css';

interface Props {
   modalActive: {
      src: string;
      active: boolean;
   };
   setModalActive: React.Dispatch<
      React.SetStateAction<{
         src: string;
         active: boolean;
      }>
   >;
}

const Modal = ({ modalActive, setModalActive }: Props) => {
   return (
      <div className='modal fixed flex justify-center items-center z-50 w-full h-full'>
         <div className='modal-content'>
            <img src={modalActive.src} alt='' />
         </div>

         <div
            className='absolute w-full h-full'
            onClick={() => setModalActive({ ...modalActive, active: false })}
         ></div>
      </div>
   );
};

export default Modal;
