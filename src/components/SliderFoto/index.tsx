'use client';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
//import bgImage from '../../assets/images/intro_bg.jpg'
import styles from './styles.module.scss'
import Head from 'next/head';

const API_KEY = 'AIzaSyA2fkCoH5QqdBMD6sbaHtlEHJr7u4O0www';

//const YouTubeFeed = () => {
interface Video {
    id: { videoId: string };
    snippet: { title: string; thumbnails: { medium: { url: string } } };
}

export default function LifeChurch() {
    //const YouTubeFeed = () => {
    const [videos, setVideos] = useState<Video[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&order=date&maxResults=4&channelId=UCIo_0VG0E1I-7L0F7hMINEQ`,
                );
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const sliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div >
        <link
        rel="stylesheet"
        type="text/css"
        // charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
            {/* <Head> */}
  {/* <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />  */}
  {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
{/* </Head> */}
            {/* style={{ backgroundImage: `url(${bgImage.src})` }} */}
            <h2 >Posljednje propovijedi:</h2>
            <div >
                <Slider {...sliderSettings}>
                {/* <div className={styles.places}> */}
                
                {videos &&
                    videos.map((video) => (
                    //videos.slice(0, 4).map((video) => (
                        <div  key={video.id.videoId}>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {video.snippet.title}
                                <Image src={video.snippet.thumbnails.medium.url} alt='dads' width={320} height={180} />
                            </a>
                        </div>
                    ))}
                {/* </div> */}
            </Slider>

            </div>
            
                
            
            
        </div>
    );
}

//export default YouTubeFeed;
