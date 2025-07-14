import Link from 'next/link';
import styles from '../../styles/asian-master-city-page.module.css';
import React from 'react';

const AsianMasterArticlePage: React.FC = () => {
    return (
        <div className={styles.container} style={{ height: "100%" }}>
            <div className={styles.contentRow}>
                <div className={styles.leftColumn}>
                    <div className={styles.titleBox}>BEIJING, CHINA</div>
                    <div className={`${styles.textBlock} text-justify flex flex-col gap-[1rem] h-[100%]`}>
                        <div className='flex flex-col gap-[1rem] flex-1'>
                            <p>As well as being the seat of political power, Beijing is the historical and cultural heart of China and as such is a must-see when travelling to Asia,</p>
                            <p><b>Best time to visit:</b> If at all possible avoid Chinese national holidays when travelling to Beijing, as Chinese tourists flock there in the millions. Early spring and early fall are good times to go, as the weather is beautiful. Summers in Beijing can be oppressively hot and the winters are frigid by most people's standards.</p>
                            <p><b>Flight time:</b> 2 hours</p>
                            <p><b>Highlights:</b> The Forbidden City, the Great Wall, Tiananmen Square, Summer Palace, hutongs, Olympic Plaza, Imperial Gardens, the Bird’s Nest, Water Cube, Beijing Duck, Mao’s tomb, 798 Art District, museums, Yuyuantan Park.</p>
                            <p><b>5-star hotel:</b> USD120 and up</p>
                            <p><b>If you can afford it:</b> The Peninsula Beijing</p>
                        </div>
                        <div className={styles.iconsRow}>
                            <a href='#' className="inline-block text-white transition">
                                <img src="images/btn/tripadvisor_btn.jpg" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="images/btn/youtube_btn.jpg" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="images/btn/phone_btn.jpg" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="images/btn/globe_btn.jpg" alt="TripAdvisor" className='w-[40px] h-[40px]' />

                            </a>
                            <a href='#' className="inline-block text-white transition">
                                <img src="images/btn/point_btn.jpg" alt="TripAdvisor" className='w-[40px] h-[40px]' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className={styles.hotelSection}>
                        <div className={`${styles.hotelText} h-[100%] flex flex-row gap-[1rem]`}>
                            <div className='flex flex-col flex-1 text-justify'>
                                <b>The Waldorf Astoria Beijing</b>
                                <p>Opened in 2014, The Waldorf Astoria Beijing makes a strong case for the city’s most gorgeous hotel. Impeccably glam on the outside, the elegant interior whispers boutique and exclusive. Best of all, it’s just a short sedan chair ride away from the Forbidden City. From the outside, the hotel is an absolute stunner, a latticework box of glinting copper and bronze, designed to mellow with age via natural oxidation. Inside, the Waldorf Astoria exudes elegance: walls of Suzhou silk, a staircase of gold-flecked marble, sculptures, paintings, and tall doorways of black lacquered wood.</p>
                            </div>
                            <div className='flex flex-col flex-1 text-justify'>
                                <b>The Waldorf Astoria Beijing</b>
                                <p>Opened in 2014, The Waldorf Astoria Beijing makes a strong case for the city’s most gorgeous hotel. Impeccably glam on the outside, the elegant interior whispers boutique and exclusive. Best of all, it’s just a short sedan chair ride away from the Forbidden City. From the outside, the hotel is an absolute stunner, a latticework box of glinting copper and bronze, designed to mellow with age via natural oxidation. Inside, the Waldorf Astoria exudes elegance: walls of Suzhou silk, a staircase of gold-flecked marble, sculptures, paintings, and tall doorways of black lacquered wood.</p>
                            </div>
                        </div>
                        <div className={styles.hotelVideo}>
                            <div className={`${styles.videoArea} ${styles.bottomFixed}`}>
                                <div className="bg-black" style={{ height: "", bottom: 0 }}>
                                    <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[25%]">
                    <div className={styles.hotelSection}>
                        <div className={`${styles.hotelText} text-justify gap-[1rem] flex flex-col`}>
                            <div>
                                <b>The Waldorf Astoria Beijing</b>
                            </div>
                            <p>A latticework box of glinting copper and bronze, designed to mellow with age via natural oxidation. Inside, the Waldorf Astoria exudes elegance: walls of Suzhou silk, a staircase of gold-flecked marble, sculptures, paintings, and tall doorways of black lacquered wood. Eye-catching art knits the public areas together, especially Shandong painter Ling Jian’s an androgynous face, two meters across and gazing placidly at guests approaching the check-in desks, bar and restaurant. With 176 rooms, the Waldorf Astoria Beijing feels more boutique than big chain, but still manages to squeeze in a swimming pool, whirlpool, and spa. Beside the main hotel building, a separate structure offers ‘hutong’ guest suites in Qing Dynasty style, including a mammoth-sized villa with its own private pool and garden.</p>
                        </div>
                        <div className={styles.hotelVideo}>
                            <div className={`${styles.videoArea} ${styles.bottomFixed}`}>
                                <div className="bg-black" style={{ height: "", bottom: 0 }}>
                                    <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsianMasterArticlePage; 