import React from "react";
import Achievement1 from "../assets/Achievement-1.svg";
import Conversation1 from "../assets/Conversation-1.svg";
import Doc from "../assets/Doc.svg";
import Money1 from "../assets/Money.svg"
import Mail from "../assets/Mail.svg"
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
    image: Conversation1,
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
    title: "SEO Tags, Sitemaps, Google Analyics & WebConsole",
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
  return (
    <div className="py-12 md:py-20" style={{
      background: 'linear-gradient(180deg, #000000 0%, #030E22 50%, #000000 100%)'
    }}>
      <div className="w-full py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="font-outfit text-4xl md:text-5xl font-normal text-center"
            style={{
              background: 'linear-gradient(88.72deg, #FFFFFF 0.7%, #B4B2B2 95.77%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2',
              margin: '0 auto',
              maxWidth: '100%',
              wordWrap: 'break-word'
            }}
          >
            Comez Feature Highlights
          </h2>
        </div>
      </div>
    <div className="from-gray-900 to-gray-800 text-white py-5 px-4 md:px-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center md:justify-between mb-16 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <img 
                  src={feature.icon} 
                  alt="" 
                  className={`${feature.title.includes('SEO') ? 'w-16 h-16' : 'w-12 h-12'}`}
                />
              </div>
              <h2 
                className="text-2xl font-outfit font-medium text-center"
                style={{
                  background: 'linear-gradient(88.72deg, #FFFFFF 0.7%, #B4B2B2 95.77%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {feature.title}
              </h2>
            </div>
            <p className="text-[#C1C1C1] font-outfit text-lg md:text-xl leading-normal text-justify">
              {feature.description}
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center px-4 md:px-0">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-3/4 md:w-full max-w-md h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
    <div className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-black to-[#0a0f1f] text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logos */}
        <div className="flex gap-8 mb-12 md:mb-0">
          <img src={Android} alt="Android" className="w-30 h-30 object-contain" />
          <img src={Apple} alt="Apple" className="w-30 h-30 object-contain" />
          <img src={Cloud} alt="Cloud" className="w-30 h-30 object-contain" />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 
            className="font-outfit text-4xl md:text-5xl font-normal mb-6 leading-tight md:leading-normal"
            style={{
              background: 'linear-gradient(88.72deg, #FFFFFF 0.7%, #B4B2B2 95.77%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: '1.2',
              ...(window.innerWidth >= 768 && { lineHeight: '75px' })
            }}
          >
            Available on <em className="not-italic">All your Devices</em>
          </h2>
          <p 
            className="text-[#C1C1C1] font-outfit text-lg md:text-2xl  leading-normal md:leading-relaxed max-w-2xl mx-auto md:mx-0 px-4 md:px-0 text-justify"
            style={{
              fontFamily: 'Outfit',
              fontStyle: 'normal',
              fontWeight: 400
            }}
          >
            The question lies upon your mind that the way we provide application at low cost. 
            We developed using Google&apos;s <strong>Flutter</strong> Framework, which converts 
            single code into two platforms of different applications. So that we can provide both 
            Android APK and iOS App. We developed Website on Facebook&apos;s Framework{' '}
            <strong>ReactJS</strong>.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeatureSection;
