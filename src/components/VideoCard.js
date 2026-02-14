


import React from "react";

const VideoCard = ({ info }) => {
  if (!info) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;


  return (
    <div className="w-80 p-2">
      <img
        className="rounded-lg"
        src={thumbnails.high.url}
        alt="thumbnail"/>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="text-gray-600">{channelTitle}</li>
        <li className="text-gray-600">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};


export default VideoCard;

