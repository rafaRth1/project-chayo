import imageThree from '../../assets/chayo-four.jpeg';
import chayoFive from '../../assets/chayo-five.webp';
import chayoSix from '../../assets/chayo-six.webp';
import chayoSeven from '../../assets/chayo-seven.webp';
import chayoEight from '../../assets/chayo-eigth.webp';
import one from '../../assets/chayo-one.jpeg';
import './sectionVlog.css';

const SectionVlog = () => {
   return (
      <section className='section-vlog container-two' id='vlog'>
         <div className='flex flex-col items-center my-10'>
            <h2 className='text-black dark:text-white text-5xl text-center my-16'>Mi Vlog</h2>
            <div className='flex justify-center flex-col'>
               <div className='image-main '>
                  <img src={imageThree} alt='image-three' className='w-full h-full bg-cover' />
               </div>
               <input
                  type='text'
                  placeholder='Buscar Imagen'
                  className='w-full dark:bg-neutral-800 bg-neutral-200 p-2 outline-none my-3 transition-all text-black dark:text-white 
                  focus-visible:bg-neutral-300 dark:focus-visible:bg-neutral-700'
               />

               <div className='mini-galeria flex flex-wrap'>
                  <div className='box-one-image  basis-full md:basis-1/2 lg:basis-1/4 p-1'>
                     <img src={chayoFive} alt='image-one' className='w-full h-40 bg-cover' />
                     <h4 className='text-black dark:text-white'>Chayo Risueño</h4>
                  </div>
                  <div className='box-two-image basis-full md:basis-1/2 lg:basis-1/4 p-1'>
                     <img src={chayoSix} alt='image-one' className='w-full h-40 bg-cover' />
                     <h4 className='text-black dark:text-white'>Chayo Agg</h4>
                  </div>
                  <div className='box-three-image basis-full md:basis-1/2 lg:basis-1/4 p-1'>
                     <img src={chayoSeven} alt='image-one' className='w-full h-40 bg-cover' />
                     <h4 className='text-black dark:text-white'>Chayo Yara</h4>
                  </div>
                  <div className='box-four-image basis-full md:basis-1/2 lg:basis-1/4 p-1'>
                     <img src={chayoEight} alt='image-one' className='w-full h-40 bg-cover' />
                     <h4 className='text-black dark:text-white'>Chayo ZZZ</h4>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SectionVlog;
