
import React from 'react'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const Sidebar = () => {

  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen); // ✅ useSelector at top level


  // early return to avoid rendering the sidebar when isMenuOpen is false
  if(!isMenuOpen) return null; // ✅ Conditional rendering based on isMenuOpen

  return (
  
        <div className= "fixed top-14 left-0 h-screen w-48 bg-white shadow-lg overflow-y-auto p-5">
         <ul>
       
        <li className="font-bold">
          <Link to="/">Home</Link></li>
        <li>Shorts</li>
        
        </ul>
      <h1 className="font-bold ">Subscription</h1>
      <ul>
       
        <li>Sports</li>
        <li>Gaming</li>
        <li>You</li>
        <li>Explore</li>
        <li>More from Youtube</li>
        </ul>
       


  <h1 className="font-bold ">You</h1>
      <ul>
       
        <li>History </li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Courses</li>
        </ul>

 <h1 className="font-bold">Explore</h1>
      <ul>
       
        <li>Shopping </li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        </ul>

      <h1 className="font-bold">More from Youtube</h1>
      <ul>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
        <li>YouTube Premium</li>
      </ul>

    </div>
  
     

     
   
  )
}

export default Sidebar