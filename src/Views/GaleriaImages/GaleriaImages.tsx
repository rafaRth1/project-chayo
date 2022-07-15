import { images } from '../../utilities/images';
import './galeriaImages.css';

interface Props {
   setModalActive: React.Dispatch<
      React.SetStateAction<{
         src: any;
         active: boolean;
      }>
   >;
}

const GaleriaImages = ({ setModalActive }: Props) => {
   const handleZoom = (e: any) => {
      setModalActive({ src: e.target.src, active: true });
   };

   return (
      <section className='section-galeria-images contenedor-two'>
         <div className='content-galeria'>
            {images.map((image) => (
               <div className='card-galeria-images' key={image.id}>
                  <img src={image.img} alt='Images Chayo' className='transition-all' onClick={(e) => handleZoom(e)} />
               </div>
            ))}
         </div>
      </section>
   );
};

export default GaleriaImages;
