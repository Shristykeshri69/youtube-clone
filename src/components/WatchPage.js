
import React, { useEffect } from 'react';
import { closeMenu } from "../utils/appslice";
import { useDispatch } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const [searchParams]=useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu()); // ✅ call the action creator
  }, [dispatch]); // ✅ include dispatch in dependencies

  return (
    <div className="flex flex-col">  
    <div className="px-5 flex">
      <div className="px-5 ml-70 ">

      <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div>
      <LiveChat />
      </div>
      </div>
     <CommentContainer />

    </div>
  
   
  );
};

export default WatchPage;
