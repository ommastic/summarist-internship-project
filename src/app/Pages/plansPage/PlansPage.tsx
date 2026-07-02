import Footer from "../../components/homeComponents/Footer";
import { useState, useEffect } from 'react';
import { initFirebase, auth } from "../../../firebase";
import Login from "../../components/authUtil/Login";
import pricingTop from '../../assets/pricing-top.png';
import { IoIosArrowDown, IoIosArrowUp, IoMdDocument } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
import { RiPlantFill } from "react-icons/ri";
import './PlansPage.css';
import { getCheckoutUrl } from "../account/stripePayment";
import { getPremiumStatus } from "../account/getPremiumStatus";
import type { MainProps } from "../props/AllPropsTypes";


export default function ChoosePlan(props: MainProps) {
  const app = initFirebase();
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const checkPremium = async () => {
      const newPremiumStatus = auth.currentUser
        ? await getPremiumStatus()
        : false;
      setIsPremium(newPremiumStatus);
    };
    checkPremium();
  }, [app]);


  const upgradeToNinetyNine = async () => {
    if (!auth.currentUser) {
      props.setIsLoginOpen(true);
      return;
    }
    const priceId = "price_1TmEYgDMshVT28gw1g3BzdSi";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    window.location.assign(checkoutUrl);
  };

  const upgradeToNine = async () => {
    if (!auth.currentUser) {
      props.setIsLoginOpen(true);
      return;
    }
    const priceId = "price_1TmEc3DMshVT28gwbzgpZRl5";
    const checkoutUrl = await getCheckoutUrl(app, priceId);
    window.location.assign(checkoutUrl);
  };


  const faqs = [
    {
      question: 'How does the free 7-day trial work?',
      answer: 'Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.'
    },
    {
      question: 'Can I switch subscriptions from monthly to yearly, or yearly to monthly? ',
      answer: 'While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.'
    },
    {
      question: "What's included in the Premium plan?",
      answer: "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle."
    },
    {
      question: "Can I cancel during my trial or subscription?",
      answer: "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day."
    }
  ];


  return (
    <div>
      <div className="main__wrapper">
        <div className="main__wrapper--text">
          <div className="main__title">Get Unlimited access to many amazing books to read</div>
          <div className="sub__title">Turn ordinary moments into amazing learning opportunities</div>
          <div>
            <img className='pricing-top--image' src={pricingTop} alt="pricing" />
          </div>
        </div>
      </div>
      <div className="row main__header" >
        <div className='sales__main--wrapper'>
          <div className=''>
            <IoMdDocument className='sales__image' />
            <div><span className="main__ideas">Key ideas in few min</span>  with many books to read</div>
          </div>
          <div>
            <RiPlantFill className="sales__image" />
            <div><span className="main__ideas">3 million</span> people growing with Summarist everyday</div>
          </div>
          <div>
            <FaHandshakeSimple className='sales__image' />
            <div><span className="main__ideas">Precise recommendations</span> collections curated by experts</div>
          </div>
        </div>

        <div className='plan__title'>Choose the plan that fits you</div>
        <div className={`plan__wrapper ${selectedPlan === "yearly" && 'plan__wrapper--active'}`} onClick={() => setSelectedPlan("yearly")}>
          <div className="main__plan">
            <div className={`radio__button ${selectedPlan === 'yearly' && 'radio__button--active'}`} />
            <div>
              <div className='plan__sub-title'>Premium Plus Yearly</div>
              <div className="plan__cost">$99.99/year</div>
              <div className="plan__info">7-day free trial included</div>
            </div>
          </div>
        </div>
        <div className="divider__section">
          <div className='plan__divider'></div>
          <span>or</span>
          <div className='plan__divider'></div>
        </div>
        <div className={`plan__wrapper ${selectedPlan === 'monthly' && 'plan__wrapper--active'}`} onClick={() => setSelectedPlan('monthly')}>
          <div className="main__plan">
            <div className={`radio__button ${selectedPlan === 'monthly' && 'radio__button--active'}`} />
            <div>
              <div className='plan__sub-title'>Premium Monthly</div>
              <div className="plan__cost">$9.99/month</div>
              <div className="plan__info">No trial included</div>
            </div>
          </div>
        </div>
        <div className="button__wrapper">
          {props.isLoginOpen && <Login {...props} />}

          {isPremium ?
            (<button className="register__button">Already subscribed</button>)
            : selectedPlan === 'monthly' ?
              (
                <>
                  <button className="register__button" onClick={upgradeToNine}>Start your first month</button>
                  <div className='contract__details'>30-day money back guarantee, no question asked.</div>
                </>) :
              (<>
                <button className="register__button" onClick={upgradeToNinetyNine}>Start your free 7-day trial</button>
                <div className='contract__details'>Cancel your trial at any time before it ends, and you wont be charged.</div>
              </>)
          }
        </div>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() =>
              setOpenQuestion(openQuestion === index ? null : index)}>
              <span className='faq-question'>{faq.question}</span>
              {openQuestion === index ? <IoIosArrowUp /> : <IoIosArrowDown />
              }
            </button>

            {openQuestion === index && (
              <p className={`faq-answer ${openQuestion === index && 'faq-answer--open'}`}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}