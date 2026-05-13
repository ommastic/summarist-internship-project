import SelectedForYou from '../components/ForYouPageComponents/SelectedForYou';
import RecommendedBooks from '../components/ForYouPageComponents/RecommendedBooks';

export default function ForYouPage() {
  return (
    <section>
      <div className='row'>
        <div className='container'>
          <SelectedForYou/>
          <RecommendedBooks />
        </div>
      </div>
    </section>
  );
}
    