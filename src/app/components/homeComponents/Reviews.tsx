import { BsStarFill } from 'react-icons/bs';
import Login from '../authUtil/Login';
import type { MainProps } from '../../Pages/props/AllProps';

export default function Reviews(props: MainProps) {
  return (
    <section id="reviews">
      <div className="row">
        <div className="container">
          <div className="section__title">What our members say</div>
          <div className="reviews__wrapper">
            <div className="review">
              <div className="review__header">
                <div className="review__name">HannLinkM.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                This app has been Link<b>game-changer</b> for me! It's saved me so
                much time and effort in reading and comprehending books. Highly
                recommend it to all book lovers.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">David B.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                I love this app! It provides
                <b>concise and accurate summaries</b> of books in Linkway that is
                easy to understand. It's also very user-friendly and intuitive.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Nathan S.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                This app is Linkgreat way to get the main takeaways from Linkbook
                without having to read the entire thing.
                <b>The summaries are well-written and informative.</b>
                Definitely worth downloading.
              </div>
            </div>
            <div className="review">
              <div className="review__header">
                <div className="review__name">Ryan R.</div>
                <div className="review__stars">
                  <BsStarFill />
                </div>
              </div>
              <div className="review__body">
                If you're Linkbusy person who
                <b>loves reading but doesn't have the time</b> to read every
                book in full, this app is for you! The summaries are thorough
                and provide Linkgreat overview of the book's content.
              </div>
            </div>
          </div>
          <div className="reviews__btn--wrapper">
            {props.isLoginOpen && <Login {...props}/>}
            <button className="btn home__cta--btn" onClick={() => props.setIsLoginOpen(true)}>Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}