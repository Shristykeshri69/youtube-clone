import React, { useEffect, useState } from "react";
import { youtubeapi } from "../utils/constants";
import VideoCard from "./VideoCard";
import {Link} from 'react-router-dom';

const Videocontent = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    
      const data = await fetch(youtubeapi);
      const json = await data.json();

      console.log(json);

      setVideos(json.items ); // ✅ Always array
   
  };

  return (
    

    <div className="grid gap-6 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-4 
    xl:grid-cols-5 
    ml-40
    p-6">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" +video.id}>
            <VideoCard  info={video} />
        </Link>
      
      ))}
    </div>
  );
};

export default Videocontent;
