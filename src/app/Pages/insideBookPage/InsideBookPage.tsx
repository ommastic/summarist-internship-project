import Sidebar from '../../components/Sidebar';
import MainHeader from '../../components/MainHeader';
import '../forYouPage/ForYouPage.css';
import InsideBookComponent from '../../components/insideBookPageComponent/InsideBookComponent';
import type { InsideBookPageProps } from '../props/AllPropsTypes';


export default function InsideBookPage(props: InsideBookPageProps) {
  return (
    <div className='selected-for-you__page'>
      <div>
        <Sidebar setIsLoginOpen={props.setIsLoginOpen} />
      </div>

      <div className='main__content'>
        <MainHeader {...props} />

        <main className='row for-you__wrapper'>
          <InsideBookComponent {...props} />
        </main>
      </div>
    </div>
  );
}
