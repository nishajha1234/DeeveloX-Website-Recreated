import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Services.css';
import resultsDrivenDigitalMarketingImg from './assets/Results driven digital marketing.jpg';
import creativeContentCreationImg from './assets/Creative content creation.jpg';
import strategicSocialMediaManagementImg from './assets/Strategic social media management.jpg';
import stunningAdCreationImg from './assets/Stunning ad creation.jpg';
import comprehensiveSoftwareSolutionsImg from './assets/Comprehensive software solutions.jpg';
import Client1 from './assets/Client 1.png';
import Client2 from './assets/Client 2.png';
import Client3 from './assets/Client 3.png';
import Client4 from './assets/Client 4.png';
import Client5 from './assets/Client 5.png';
import Client6 from './assets/Client 6.png';
import Clienta from './assets/clienta.webp';
import Clientb from './assets/clientb.webp';
import Clientc from './assets/clientc.webp';



const Services = () => {
  const [visibleBox, setVisibleBox] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleBox(prevBox => (prevBox % 3) + 1);
    }, 3000); // Change the number 3000 to your desired interval in milliseconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (num) => {
    setVisibleBox(num);
  };

  return (
    <div>
      <section className="additional-content">
        <h2>Services</h2>
        <div className="additional-services">
          <div className="additional-service">
            <div className="service-image">
              <img src={resultsDrivenDigitalMarketingImg} alt="Results-Driven Digital Advertising" />
            </div>
            <div className="service-text">
              <h3>Results-Driven Digital Advertising</h3>
              <p>Designing, executing, and optimizing digital ad campaigns across various platforms to maximize ROI, drive targeted traffic, and achieve your business objectives.</p>
              <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button>Learn More</button>
        </Link>
            
            </div>
          </div>
          <div className="additional-service">
            <div className="service-text">
              <h3>Creative Content Creation</h3>
              <p>Crafting engaging, high-quality content including blog posts, articles, videos, and graphics that resonate with your audience and align with your brand’s voice and messaging.</p>
              <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button>Learn More</button>
        </Link>
            </div>
            <div className="service-image">
              <img src={creativeContentCreationImg} alt="Creative Content Creation" />
            </div>
          </div>
          <div className="additional-service">
            <div className="service-image">
              <img src={strategicSocialMediaManagementImg} alt="Strategic Social Media Management" />
            </div>
            <div className="service-text">
              <h3>Strategic Social Media Management</h3>
              <p>Developing and implementing comprehensive social media strategies to grow your online presence, increase engagement, and foster a loyal community around your brand.</p>
              <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button>Learn More</button>
        </Link>
            </div>
          </div>
          <div className="additional-service">
            <div className="service-text">
              <h3>Stunning Ad Creation</h3>
              <p>Producing visually compelling and impactful advertisements that capture attention, communicate your message effectively, and drive higher conversion rates.</p>
              <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button>Learn More</button>
        </Link>
            </div>
            <div className="service-image">
              <img src={stunningAdCreationImg} alt="Stunning Ad Creation" />
            </div>
          </div>
          <div className="additional-service">
            <div className="service-image">
              <img src={comprehensiveSoftwareSolutionsImg} alt="Comprehensive Software Solutions" />
            </div>
            <div className="service-text">
              <h3>Comprehensive Software Solutions</h3>
              <p>Providing tailored software and app development services to streamline your business processes, enhance productivity, and deliver seamless user experiences across platforms.</p>
              <Link
          to="services"
          spy={true}
          smooth={true}
          offset={-70} // Adjust offset as needed to accommodate your fixed header
          duration={500}
          className="navigation__link"
        >
          <button>Learn More</button>
        </Link>
            </div>
          </div>
        </div>
      </section>    

      <section className="interactive-content">
        <div className="black-box">
          <div className="white-box-container">
            <div className={`white-box ${visibleBox === 1 ? 'visible' : 'hidden'} effect-left`}>
              <p>DeeveloX built an amazing website for us. It's easy to use, looks great, and has increased our online visitors by 30%. The team was professional and very responsive. Highly recommend!</p>
              <div class="client-name">
              <img src={Clienta} alt="Client a" />
              <div class="name">Anuj J.</div>
              </div>
            </div>
            <div className={`white-box ${visibleBox === 2 ? 'visible' : 'hidden'} `}>
              <p>DeeveloX built a stunning portfolio website and planned my social media strategy. Thanks to them, I’ve gained more clients and speaking opportunities!</p>
              <div class="client-name">
                <img src={Clientb} alt="Client b" />
              <div class="name">Rishabh B.</div>
              </div>
            </div>
            <div className={`white-box ${visibleBox === 3 ? 'visible' : 'hidden'} effect-right` }>
              <p>DeeveloX developed a fantastic app for us. It's user-friendly and our customers love it. The team was knowledgeable and efficient, making the process smooth. The app has been a big hit!</p>
              <div class="client-name">
              <img src={Clientc} alt="Client c" />
              <div class="name">Lakshay K.</div>
              </div>
            </div>
          </div>
          <div className="dot-container">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`dot ${visibleBox === num ? 'active' : ''}`}
                onClick={() => handleDotClick(num)}
              ></div>
            ))}
          </div>
        </div>
      </section>
      <section className='clients'>
      <h2>Our Happy Clients</h2>
      <p>We are good company.</p>
      <div className='icons'>
      <img src={Client1} alt=""/>
      <img src={Client2} alt=""/>
      <img src={Client3} alt=""/>
      <img src={Client4} alt=""/>
      <img src={Client5} alt=""/>
      <img src={Client6} alt=""/>
      </div>
      </section>
</div>
  );
};

export default Services;
