import React, { useEffect } from "react";

// Add Google Fonts
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap');
`;
import Achievement1 from "../assets/Achievement-1.svg";
import Conversation1 from "../assets/Conversation-1.svg";
import Doc from "../assets/Doc.svg";
import Money1 from "../assets/Money.svg"
import Mail from "../assets/Mailchimp 1.svg"
import Survey from "../assets/Survey 2 1.svg"
import Transaction from "../assets/Transaction 1.svg"
import Rocket from "../assets/Rocket.svg"
import Social from "../assets/Social.svg"
import Notification from "../assets/Scrolling on Phone 1 1.svg"
import Order from "../assets/Order.svg"
import Message from "../assets/Message.svg"
import Online from "../assets/Online.svg"
import Spark from "../assets/Spark.svg"
import Logistics from "../assets/Logistics.svg"
import Audit from "../assets/Audit.svg"
import Android from "../assets/Android.svg"
import Apple from "../assets/Apple.svg"
import Cloud from "../assets/Cloud.svg"
import Fcard1 from "../assets/fcard1.svg"
import Fcard2 from "../assets/fcard2.svg"
import logo from "../assets/logo.svg"
import MoneyTransfer from "../assets/Money Transfer.svg"

// List of features
const features = [
  {
    title: "Customer Management",
    description:
      "Track every customer and reward them. Has the right to end the customer's malicious activity.",
    image: Audit,
    icon: Spark
  },
  {
    title: "Dynamic Tax Rates",
    description:
      "A Dynamic E-commerce tax model is provided. Customers may request GST invoices for their billings.",
    image: MoneyTransfer,
    icon: Spark
  },
  {
    title: "Product organization",
    description:
      "We have planned, implemented an excellent architecture for managing the  products available at your store by providing a brief description and  detailed specifications.",
    image: Online,
    icon: Spark
  },
  {
    title: "Returns & Refunds",
    description:
      "E-commerce returns and refunds are good practices for building trust between customers and also a law.",
    image: Money1,
    icon: Spark
  },
  {
    title: "Inventory Management",
    description:
      "The complexity increases tenfold when companies choose to use more than  one warehouse.We alert you when products are low in stock.",
    image: Logistics,
    icon: Spark
  },
  {
    title: "SEO Tags & Google Analytics",
    description:
      "We also support your Google ranking. SEO is carried out through good  website traffic to your store. Keywords, Description, altTags,  schemas,and sitemaps supports Indexing on Google.",
    image: Rocket,
    icon: Spark
  },
  {
    title: "Reports & Analytics",
    description:
      "Measure your supply chain, analyze purchasing activity, re-order a  low-selling product and give the user a better purchasing decision.",
    image: Survey,
    icon: Spark
  },
  {
    title: "Social Media Integration",
    description:
      "Increase a customer's ridership by adding social media integration. Has  the ability to attract a market, demonstrate commitment, engage with  them and build a sense of community.",
    image: Social,
    icon: Spark
  },
  {
    title: "Push Notifications",
    description:
      "Reach your customer through a single button hit. Notify a Sale/Offers, Wish them on their Birthdays it makes them delighted.",
    image: Notification,
    icon: Spark
  },
  {
    title: "Unlimited Bandwidth",
    description:
      "There is really no such thing as unlimited bandwidth. Assume Your Store  gets 5000 visitors per month, with each visitor viewing about 4 pages.  Let’s assume the size of each page is approximately 5 MB. This results  in your per month bandwidth being 1,00,000MB (100 GB). Bandwidth = Average Page Size * Average Monthly Visitors * Average Pages Viewed Per Visitor.",
    image: Achievement1,
    icon: Spark
  },
  {
    title: "Email Notifications",
    description:
      "Emails are the most reliable and trustworthy source of communication. It offers you complete ownership, control, privacy, and a sense of  belonging that's missing on social media..",
    image: Mail,
    icon: Spark
  },
  {
    title: "SSL Certificate",
    description:
      "SSL certificates keep online interactions private even though they  travel across the public Internet, and they help customers gain the  confidence to provide personal information on your website.With this  protection, Store owners have an extra layer of security when it comes  to accessing and storing sensitive information.",
    image: Doc,
    icon: Spark
  },
  {
    title: "Abandoned Order & Order Again",
    description:
      "Any item that goes into the shopping cart but never goes through the  transaction is considered as abandoned order. We have developed with the support of Re-order & Order Again",
    image: Order,
    icon: Spark
  },
  {
    title: "Ticket Support",
    description:
      "Contact us via the E-mail,Mobile or Inbuilt Ticket-system available on  the Administration Panel. We will provide support and resolve your  inconvenience instantly.",
    image: Conversation1,
    icon: Spark
  },
  {
    title: "Business E-mails",
    description:
      "SSL certificates keep online interactions private even though they  travel across the public Internet, and they help customers gain the  confidence to provide personal information on your website.With this  protection, Store owners have an extra layer of security when it comes  to accessing and storing sensitive information.",
    image: Message,
    icon: Spark
  },
  {
    title: "Flexible Shipping Rates",
    description:
      "Calculate shipping costs according to shipping costs and manage the price in a dynamic manner.",
    image: Transaction,
    icon: Spark
  },

];

const FeatureSection = () => {
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = fontStyles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  return (
    <div className="w-full md:pt-2 px-4 md:px-0">
      {/* Header Section */}
      <div className="w-full pt-20 pb-10 md:pb-20 px-4">
        <div className="max-w-4xl mx-auto">

          <h2
            className="text-5xl md:text-8xl font-regular text-center 
                     bg-gradient-to-r from-white via-[#B4B2B2] to-[#B4B2B2] 
                     bg-clip-text text-transparent leading-tight mx-auto max-w-full break-words font-metal pb-2"
          >
            Feature Highlights
          </h2>
        </div>
      </div>

      {/* Features Grid */}

      <div className="w-full overflow-hidden mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center px-4 justify-between ${index % 2 === 1 ? "md:flex-row-reverse" : ""
              } ${index === 0 ? 'pt-6 pb-4' : 'py-6'} md:py-10  w-full  overflow-hidden ${index === features.length - 1 ? 'rounded-b-3xl' : ''
              } bg-cover bg-center bg-no-repeat m-0 max-w-full min-h-[300px] md:min-h-[350px] md:h-[600px]`}
            style={{
              backgroundImage: `url(${index % 2 === 0 ? Fcard1 : Fcard2})`
            }}
          >
            {/* Semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 -z-10"></div>

            <div
              className={`w-full flex flex-col md:flex-row items-center justify-between max-w-7xl md:max-w-9xl mx-auto
    ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Text Content */}
              <div className="w-full md:w-7/12 z-10">
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-3">
                    <div className="mr-3">
                      <div
                        className= "flex items-center justify-center mt-6 w-14 h-14 md:w-20 md:h-20"
                          
                      >
                        <img
                          src={feature.icon}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                    <h2
                      className="text-2xl md:text-4xl font-outfit text-left
                     bg-gradient-to-r from-white to-[#B4B2B2]
                     bg-clip-text text-transparent font-[100px]"
                    >
                      {feature.title}
                    </h2>
                  </div>
                  <p className="text-[#C1C1C1] text-center md:text-left text-1xl md:text-2xl md:w-5/8 mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Feature Image */}
              <div
                className={`w-full md:w-7/12 flex items-center ${index % 2 === 0 ? "md:justify-end md:pl-34" : "md:justify-start md:pr-3"
                  }`}
              >
                <div className="w-full max-w-md">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className={`w-[450px] h-[300px] md:w-[600px] md:h-[800px] transition-transform duration-300 hover:scale-110 ${index === 0 ? "scale-90" : "scale-100"
                      } max-w-full max-h-[450px]`}
                  />
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Available on All Devices Section */}
      <div className="relative pt-16 pb-28 pl-4 pr-4 md:pl-15 md:pr-12 text-white overflow-hidden rounded-b-[120px] md:bg-[url('../src/assets/Storebg.svg')] md:bg-cover md:h-[500px] md:bg-center md:bg-no-repeat">
        {/* Background Image */}


        <div className="md:container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-left justify-between gap-10">
            {/* Logos */}
            <div className="flex gap-6 md:gap-12 justify-left align-left md:justify-left w-full md:w-auto md:pl-32">
              <img src={Android} alt="Android" className="w-24 h-24 md:w-36 md:h-36 object-contain" />
              <img src={Apple} alt="Apple" className="w-20 h-20 md:w-32 md:h-32 object-contain" />
              <img src={Cloud} alt="Cloud" className="w-24 h-24 md:w-36 md:h-36 object-contain" />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-3/6 text-center md:text-left">
              <h2
                className="text-4xl md:text-5xl font-normal mb-6 leading-tight
                         bg-gradient-to-r from-white to-[#B4B2B2]
                         bg-clip-text text-transparent justify-center "
              >
                Available on <span className="font-metal ml-2 whitespace-nowrap">All your Devices</span>
              </h2>
              <p className="text-[#C1C1C1] text-xl md:text-2xl max-w-2xl mx-auto md:mx-0 text-center md:text-left">
                We deliver applications that run seamlessly across all your devices at an affordable cost by using modern frameworks:{" "}
                <strong>Flutter</strong> for <strong>Android and iOS</strong>, enabling a single codebase for both platforms, and{" "}
                <strong>ReactJS with Node.js</strong> for powerful, scalable web solutions - ensuring high performance, faster updates,
                and consistent user experiences everywhere.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
