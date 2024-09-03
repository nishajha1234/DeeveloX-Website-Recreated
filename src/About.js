import React from 'react';
import './About.css';
import ourMission from './assets/Our Mission.jpg';
import ourStory from './assets/Our Story.jpg';
import ourValues from './assets/Our Values.jpg';
import founder1 from './assets/Founder 1.jpg';
import founder2 from './assets/Founder 2.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="header-wrapper">
        <h1>About Us</h1>
      </div>
      <div className="content-box">
        <p>
          Welcome to deeveloxcom! We are dedicated to empowering your digital future with cutting-edge solutions and innovative technology. Our team of experts is committed to providing top-notch services to help you achieve your goals. Our mission is to drive success through strategic innovation, ensuring that your business stays ahead of the curve in today's rapidly evolving digital landscape. We pride ourselves on our ability to adapt and tailor our services to meet the unique needs of each client, fostering a culture of excellence and continuous improvement.
        </p>
        <p>
          At deeveloxcom, we believe in the power of technology to transform businesses and create new opportunities. Our comprehensive suite of services includes web development, mobile app development, cloud solutions, and digital marketing, all designed to maximize your potential and deliver measurable results. Our dedicated team works collaboratively with you to understand your vision and objectives, leveraging our expertise to turn your ideas into reality. Whether you are looking to enhance your online presence, streamline your operations, or launch a new product, we have the skills and experience to help you succeed.
        </p>
        <p>
          Join us on this journey to digital excellence, and let's build a brighter, more connected future together. Contact us today to learn more about how we can help you achieve your digital goals.
        </p>
      </div>
      <div className="content-section">
        <div className="content-box-alt left">
          <h2>Our Mission</h2>
          <p>
          At Deevelo X, our mission is to empower businesses to thrive in the digital landscape. Through innovative solutions, creative content, and strategic marketing, we aim to elevate your brand from inception to industry leader. We are dedicated to delivering excellence and driving success for our clients.
</p>
        </div>
        <div className="image-box right">
          <img src={ourMission} alt="" />
        </div>
      </div>
      <div className="content-section">
        <div className="image-box left">
          <img src={ourStory} alt="" />
        </div>
        <div className="content-box-alt right">
          <h2>Our Story</h2>
          <p>
          Deevelo X was founded on the principle of blending development and marketing to create powerful digital solutions. We specialize in developing cutting-edge software, mobile apps, and websites, as well as implementing impactful digital marketing strategies. Our journey began with a vision to help brands grow and succeed in a competitive market, and today, we continue to innovate and excel in delivering exceptional results for our clients.
          </p>
        </div>
      </div>
      <div className="content-section">
        <div className="content-box-alt left">
          <h2>Our Values</h2>
          <p>
          At Deevelo X, our core values are innovation, integrity, and client satisfaction. We believe in developing comprehensive digital solutions that not only meet but exceed our clients' expectations. Our commitment to quality and excellence ensures that we build strong, lasting relationships with our clients. We strive to foster a loyal community around your brand, driving engagement and growth through effective strategies and creative content.
            </p>
        </div>
        <div className="image-box right">
          <img src={ourValues} alt="" />
        </div>
      </div>

      <div className="founders">
      <h2>Founders</h2>
      <div className="founder-section">
        <div className="founder-card">
          <div className="founder-image">
            <img src={founder1} alt="Founder 1" />
          </div>
          <div className="founder-content">
            <h3>Arham Banthia</h3>
            <p>
            Founder and chief visionary, Arham is the driving force behind the company. He loves to keep his hands full by participating in the development of software, marketing, and customer experience strategies. His relentless passion for innovation continues to inspire the entire team.
            </p>
          </div>
        </div>
        <div className="founder-card">
          <div className="founder-image">
            <img src={founder2} alt="Founder 2" />
          </div>
          <div className="founder-content">
            <h3>Harsh Khandelwal</h3>
            <p>
            Harsh loves taking on challenges. With a wealth of experience in personal branding, digital marketing, and software development, Harsh has helped the company to get where it is today. His innovative approach and dedication make him among the best minds in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};

export default AboutUs;
