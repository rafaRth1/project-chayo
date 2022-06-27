import './sectionInicio.css';

const SectionInicio = () => {
   return (
      <section className='section-inicio relative' id='inicio'>
         <div className=' flex flex-col items-center justify-center'>
            <div className='img-section-inicio relative'>
               <div className='content-section-inicio absolute flex flex-col justify-center items-center'>
                  <h3 className='text-white text-9xl text-center font-bold'>Erik Daniel</h3>
                  <p className='bg-white w-1/2 h-1'></p>
                  <p className='text-white text-base text-center font-medium'>
                     Hago Stream, gano 3k dolares y lo gasto en mierda z z z
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SectionInicio;
