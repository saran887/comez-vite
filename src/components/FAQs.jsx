import { useState } from 'react';
import Navbar from './Navbar.jsx';
import { FiPlus } from 'react-icons/fi';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {   
      question: 'How do I Receive My Payments',
      answer: 'We apply for a PaymentGateway, the thing is that you have to provide your Aadhar, PAN, GST and your contact details such as e-mail, mobile number. We generate Terms & Conditions, Privacy Policy. The payment gateway verification process takes approximately three to four days, and we will be on track.We safeguard your Information.'
    },
    {
      question: 'How da I Publish My app on Play Store & App Store',
      answer: "We'll help you set up an account for your Store App. It's a sort of technicality. During the process, you have enough time to upload and organize and run a trial for your store. Google charges about 25$ OneTime and Apple Store charges about 99$/year. We do not charge for this we support your work so that you can freely think about promoting your store. Even you can publish your app without our support and you just need to share your login for onetime to generate links. But we love standing up for our customers."
    },
    {
      question: 'How will I renew my plan',
      answer: "We'll let you know on the dashboard of the admin panel. And we will turn on the Renew/Upgrade Plan button. You will be redirected to Login. Simply log in using the same identifying information provided for the admin panel. Choose the payment method and complete transaction. You may even keep a record of your payout history."
    },
  ];

  return (
    <div className="bg-black relative overflow-hidden">
      {/* <Navbar/> */}
      <div className="relative z-10">
        {/* Gradient Effect */}
        <div 
          className="absolute -right-40 -bottom-40 w-[367.76px] h-[102.84px] bg-gradient-to-b from-[#0754E3]/100 via-[#0754E3]/10 to-[#042E7D]/100 blur-[150px] -rotate-[18.11deg] z-0 opacity-70"
        />
        
        <div className="bg-black pt-8 pb-20 sm:pt-16 sm:pb-32 md:pt-20 md:pb-40 relative z-10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
              FAQ's
            </h2>
            
            <div className="space-y-4 sm:space-y-6 w-full max-w-7xl mx-auto px-6 sm:px-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-black/90 overflow-hidden border-2 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 w-full relative px-5 sm:px-6 py-3 rounded-2xl`}
                >
                  {/* Gradient Effect for all FAQ cards */}
                  <div 
                    className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none w-[200px] h-[300px] bg-gradient-to-r from-[#0754E3]/60 via-[#0754E3]/10 to-transparent blur-[80px] z-0"
                  />
                  
                  <div className="relative z-10">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-2 text-left flex items-center justify-between focus:outline-none transition-colors duration-200"
                    >
                      <span className="text-white text-base sm:text-lg font-medium pr-4">{faq.question}</span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-white/40 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <FiPlus className={`w-4 h-4 text-white transition-transform duration-300 ${activeIndex === index ? 'transform rotate-45' : ''}`} />
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-2' : 'max-h-0'}`}
                    >
                      <div className="pt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;