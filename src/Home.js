import React from 'react';
import './Home.css';
import personalBrandingImg from './assets/Personal Branding.jpg';
import digitalMarketingImg from './assets/Digital Marketing.jpg';
import softwareDevelopmentImg from './assets/Software Development.jpg';
import metaAdsImg from './assets/Meta Ads.jpg';
import contentCreationImg from './assets/Content creation and Social media management.jpg';
import contentProductionImg from './assets/Content Production.jpg';
import { Link } from 'react-scroll';


const Home = () => (
  <div className="home">
    <div className="full-screen-image">
      <div className="header-content">
        <header className="hero">
          <h1>We Exist To Empower Your Digital Future</h1>
          <p>Every exceptional business deserves exceptional branding solutions.</p>
          <Link
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button className="hero-button">Let's Talk</button>
        </Link>
        </header>
      </div>
    </div>

    <section className="services">
      <ServiceCard 
        title="Personal Branding" 
        description="Build a compelling personal brand that resonates with your audience. Professional headshot sessions and personal website development. Social media profile optimization and content strategy. Engage with your audience through tailored content and consistent messaging."
        img={personalBrandingImg}
        alt="Personal Branding"
      />
      <ServiceCard 
        title="Digital Marketing" 
        description="SEO (Search Engine Optimization) to boost your online presence. PPC (Pay-Per-Click) campaigns for targeted traffic and leads. Social Media Marketing to engage with your audience. Content Marketing that drives engagement and conversions. Email Marketing campaigns for effective communication."
        img={digitalMarketingImg}
        alt="Digital Marketing"
      />
      <ServiceCard 
        title="Software Development" 
        description="Custom Software Solutions tailored to your business needs. Mobile App Development for iOS and Android platforms. Web Development with modern technologies and frameworks. E-commerce Solutions for seamless online transactions. UI/UX Design to enhance user experience."
        img={softwareDevelopmentImg}
        alt="Software Development"
      />
      <ServiceCard 
        title="Meta Ads" 
        description="Meta Ads involve crafting creative ad copy and compelling visual designs strategically aimed at capturing audience attention. These ads are meticulously designed with ROI-focused strategies to ensure maximum impact and effectiveness. They undergo continuous optimization and rigorous performance tracking to refine targeting, messaging, and placement, thereby maximizing the return on advertising spend (ROAS) over time."
        img={metaAdsImg}
        alt="Meta Ads"
      />
      <ServiceCard 
        title="Content Creation & Social Media Management" 
        description="Creative content writing for blogs, websites, and social media platforms. Social Media Management to grow your following and increase engagement. Video Production and Editing for compelling visual storytelling. Graphic Design for branded visuals and marketing materials. Analytics and Reporting to measure campaign effectiveness."
        img={contentCreationImg}
        alt="Content Creation"
      />
      <ServiceCard 
        title="Content Production" 
        description="Crafting visually compelling advertisements that resonate with your target audience. Focus on creating ads that drive higher conversion rates and maximize Return on Advertising Spend (ROAS). Brainstorming and developing unique concepts and storyboards for ad campaigns. Professional filming and editing services to produce high-quality video content for ads. Tailoring content for various platforms to ensure maximum impact and engagement."
        img={contentProductionImg}
        alt="Content Production"
      />
    </section>

    <section className="process">
      <h2>Our Process</h2>
      <div className="process-icons">
        <div className="process-step">
          <img src="https://img.icons8.com/?size=80&id=vYc644GtbJPf&format=png" alt="Icon 1" />
          <h3>Initial Consultation</h3>
          <p>Meet and understand your needs.</p>
        </div>
        <div className="process-step">
          <img src="https://img.icons8.com/?size=64&id=2GGUALTcH5Mj&format=png" alt="Icon 2" />
          <h3>Strategy Development</h3>
          <p>Create a tailored plan based on insights.</p>
        </div>
        <div className="process-step">
          <img src="https://img.icons8.com/?size=80&id=IDAScu20JGEZ&format=png" alt="Icon 3" />
          <h3>Execution</h3>
          <p>Kick off with a project alignment meeting.</p>
        </div>
        <div className="process-step">
          <img src="https://img.icons8.com/?size=80&id=CCzZboUTmqqX&format=png" alt="Icon 4" />
          <h3>Review and Optimization</h3>
          <p>Evaluate performance against goals.</p>
        </div>
      </div>
    </section>
    </div>
);

const ServiceCard = ({ title, description, img, alt }) => (
  <div className="service-card">
  <img src={img} alt={alt} />
    <div className="service-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <Link
          to="contact-us"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button className="service-button">Learn More</button>
        </Link>
    </div>
  </div>
);

export default Home;
