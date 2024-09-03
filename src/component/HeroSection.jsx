"use client"

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/HeroSection.module.css';
import { useRouter } from 'next/navigation'; 

const HeroSection = () => {

    const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('/about');
  };

  const handleContactClick = () => {
    router.push('/contact');
  };

    return (
        <section className={styles.hero}>
            <div className={styles.textContainer}>
                <span className={styles.tagline}>WE ARE DIFFERENT</span>
                <h1 className={styles.title}>
                    We're Create a Website
                </h1>
                <p className={styles.description}>
                    We specialize in crafting high-quality websites that empower businesses to grow and thrive.
                    Our services cater to everyone, from small businesses to large corporations, with a wide range of tailored solutions.
                    We understand your unique needs and deliver
                    <span style={{ background: "black", color: "#FFFFFF", padding: "5px" }}>Safe, Fast, Secure, Beautiful, and Modern designs.</span>
                    Whether you're launching a new site or revamping an existing one, our expertise ensures a seamless experience.
                    Let us help you elevate your online presence and drive success in the digital world.
                </p>
                <div className={styles.buttons}>
                    <button className={styles.primaryButton} onClick={handleLearnMoreClick}>Learn More</button>
                    <button className={styles.secondaryButton} onClick={handleContactClick}>Contact</button>
                </div>
            </div>
            <div className={styles.imageContainer}>
                {/* Replace with your image */}
                <Image
                    src="/ll.jpg"
                    alt="Person on the phone"
                    width={500}
                    height={500}
                    className={styles.heroImage}
                />
            </div>
        </section>
    );
};

export default HeroSection;
