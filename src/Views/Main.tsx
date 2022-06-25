import GaleriaImages from './GaleriaImages/GaleriaImages';
import SectionAboutMe from './SectionAboutMe/SectionAboutMe';
import SectionFollowMe from './SectionFollowMe/SectionFollowMe';
import SectionInicio from './SectionInicio/SectionInicio';
import SectionVlog from './SectionVlog/SectionVlog';

const Main = () => {
   return (
      <main className='flex flex-col justify-center'>
         <SectionInicio />
         <SectionVlog />
         <SectionAboutMe />
         <GaleriaImages />
         <SectionFollowMe />
      </main>
   );
};

export default Main;
