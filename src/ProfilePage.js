import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');
  const [galleryImages, setGalleryImages] = useState([
    'logo512.png',
    'html.png',
    'js.png',
    'css.png',
    'logo512.png',
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const addImage = () => {
    const newImage = 'https://via.placeholder.com/100';
    setGalleryImages([...galleryImages, newImage]);
  };

  const nextImage = () => {
    if (currentImageIndex < galleryImages.length - 3) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const tabContent = {
    aboutMe: `Hello, I’m Abhilash Bartwal, a front-end developer dedicated to crafting seamless and visually compelling web experiences. With expertise in HTML, CSS, and JavaScript, I focus on creating responsive designs that enhance user engagement and functionality. I look forward to discussing how my skills can contribute to your projects and drive success.`,
    experiences: `As a front-end developer, I excel in creating responsive, high-performance websites using HTML, CSS, and JavaScript. My expertise includes leveraging frameworks such as React.js and Tailwind CSS to build intuitive and engaging user interfaces. I am dedicated to delivering projects that not only meet client specifications but also enhance overall user experience, ensuring modern and effective web solutions`,
    recommended: `I strongly recommend gaining expertise in front-end development tools such as React.js and Tailwind CSS. Keeping abreast of industry trends and emerging technologies will significantly enhance your capabilities and ensure you deliver top-notch, innovative web solutions. Mastering these tools will enable you to create effective and engaging user interfaces that stand out.`,
  };

  return (
    <div className="container">
      <div className="left-section">
        <h2>Welcome to my  page. </h2>
      </div>

      <div className="right-section">
        <div className="tabs-widget">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'aboutMe' ? 'active' : ''}`}
              onClick={() => setActiveTab('aboutMe')}
            >
              About Me
            </button>
            <button
              className={`tab ${activeTab === 'experiences' ? 'active' : ''}`}
              onClick={() => setActiveTab('experiences')}
            >
              Experiences
            </button>
            <button
              className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
              onClick={() => setActiveTab('recommended')}
            >
              Recommended
            </button>
          </div>
          <div className="tab-content">{tabContent[activeTab]}</div>
        </div>

        <div className="gallery-widget">
          <div className="gallery-header">
            <div className="gallery-title">Gallery</div>
            <button className="add-image-btn" onClick={addImage}>
              + Add Image
            </button>
          </div>
          <div className="gallery-content">
            <button className="gallery-nav left" onClick={prevImage}>
              &lt;
            </button>
            {galleryImages.slice(currentImageIndex, currentImageIndex + 3).map((image, index) => (
              <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
            ))}
            <button className="gallery-nav right" onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
