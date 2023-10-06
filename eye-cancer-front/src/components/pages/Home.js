import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import ImageUploader from '../ImageUploader';
import ChatbotInterface from '../ChatbotInterface';




function Home() {
  return (
    <>
      <HeroSection />
      <ImageUploader />
      <ChatbotInterface />
    </>
  );
}

export default Home;

