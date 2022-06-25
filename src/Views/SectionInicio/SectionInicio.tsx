import image1 from '../../assets/chayo-two.jpg';
import './sectionInicio.css';

const SectionInicio = () => {
   return (
      <section className='section-inicio' id='inicio'>
         <div className=' flex flex-col items-center justify-center'>
            <div className='img-section-inicio relative'>
               <div className='absolute flex flex-col justify-center items-center'>
                  <h3 className='text-white text-9xl text-center'>Erik Daniel</h3>
                  <hr />
                  <p className='text-white text-sm text-center'>
                     Hago Stream, gano 3k dolares y lo gasto en mierda z z z
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SectionInicio;
