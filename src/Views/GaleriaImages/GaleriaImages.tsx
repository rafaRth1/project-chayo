import { images } from '../../utilities/images';
import './galeriaImages.css';

const GaleriaImages = () => {
   console.log(images);
   return (
      <section className='section-galeria-images contenedor-two'>
         <div className='content-galeria'>
            {images.map((image) => (
               <div className='card-galeria-images' key={image.id}>
                  <img src={image.img} alt='Images Chayo' className='transition-all' />
               </div>
            ))}
         </div>
      </section>
   );
};

export default GaleriaImages;
