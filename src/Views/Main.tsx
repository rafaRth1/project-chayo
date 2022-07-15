import GaleriaImages from './GaleriaImages/GaleriaImages';
import SectionAboutMe from './SectionAboutMe/SectionAboutMe';
import SectionFollowMe from './SectionFollowMe/SectionFollowMe';
import SectionInicio from './SectionInicio/SectionInicio';
import SectionVlog from './SectionVlog/SectionVlog';

interface Props {
   setModalActive: React.Dispatch<
      React.SetStateAction<{
         src: string;
         active: boolean;
      }>
   >;
}

const Main = ({ setModalActive }: Props) => {
   return (
      <main className='flex flex-col justify-center'>
         <SectionInicio />
         <SectionVlog />
         <SectionAboutMe />
         <GaleriaImages setModalActive={setModalActive} />
         <SectionFollowMe />
      </main>
   );
};

export default Main;
