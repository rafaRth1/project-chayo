import './sectionAboutMe.css';

const SectionAboutMe = () => {
   return (
      <section className='section-about-me' id='aboutme'>
         <div className='flex flex-col md:flex-row gap-3 my-10 w-full'>
            <div className='description w-full md:w-1/2'>
               <h2 className='text-black dark:text-white text-4xl my-5 uppercase text-center'>Quien chucha soy</h2>
               <div className='text-black dark:text-white w-full h-96 flex flex-col items-center'>
                  <p className='w-80 text-justify'>
                     Me llamo Erik Daniel Luna Melgarejo con DNI 74822114 pero llaman Chayo. Me gusta streamer y jugar
                     juegos como Dota 2, Fornite, Lol; Mi juego favorito es R2Beat. Trabajo en TROVO y gano como mierda.
                     Me considero un chico bueno y por supuesto con CHICO VANS sino alamos no te conozco.
                  </p>
                  <p className='w-80 text-justify'>
                     Cabe Resaltar que me puse triste por una relación de un juego muerto. Me hicieron Cachudo por un
                     pelao pipipi. Bueno Soy cholo nativo, color dorado y antisocial. Tengo mi comunidad ChayoLandia y
                     los amo a todos
                  </p>
               </div>
               <button className='bg-indigo-700 py-2 px-3 w-full text-white'>
                  <a href='https://trovo.live/s/ChayoGaming' target='_blank' className='block w-full'>
                     Sigueme
                  </a>
               </button>
            </div>
            <div className='w-full md:w-1/2'>
               <div className='image-about-me'></div>
            </div>
         </div>
      </section>
   );
};

export default SectionAboutMe;
