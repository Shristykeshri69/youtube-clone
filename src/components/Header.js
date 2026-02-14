

import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleMenu } from "../utils/appslice";
import { youtube_search_api } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [showsuggestion, setshowsuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch search suggestions
  const getSearchSuggestion = useCallback(async () => {
    if (!searchQuery.trim()) return;

    const data = await fetch(youtube_search_api + searchQuery);
    const json = await data.json();

    setsuggestion(json[1]);

    dispatch(
      cacheResult({
        [searchQuery]: json[1],
      })
    );
  }, [searchQuery, dispatch]);

  // Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!searchQuery.trim()) {
        setsuggestion([]);
        return;
      }

      if (searchCache[searchQuery]) {
        setsuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache, getSearchSuggestion]);

  // Toggle sidebar
  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };

  // Handle search
  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setshowsuggestion(false);
    navigate("/results?search_query=" + searchQuery);
  };

  return (
    <div className="flex items-center justify-between px-6 py-3 shadow-md">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          onClick={toggleSidebar}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/big-data-regular-monochrome-icon/sidebar-4.png"
        />

        <a href="/">
          <img
            alt="logo"
            className="h-8 cursor-pointer"
            src="https://www.pngplay.com/wp-content/uploads/9/Youtube-Logo-Transparent-Free-PNG.png"
          />
        </a>
      </div>

      {/* Center Search Box */}
      <div className="relative">
        <div className="flex w-50 max-w-xl">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowsuggestion(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            className="w-[37rem] px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none focus:border-blue-700"
          />
          <button
            onClick={handleSearch}
            className="px-5 py-2 border border-gray-400 rounded-r-full bg-gray-200 hover:bg-gray-300"
          >
            Search
          </button>
        </div>

        {showsuggestion && suggestion.length > 0 && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  onMouseDown={() => {
                    setSearchQuery(s);
                    setshowsuggestion(false);
                    navigate("/results?search_query=" + s);
                  }}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right User Icon */}
      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer">
        <img
          alt="user"
          className="w-6 h-6"
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        />
      </div>
    </div>
  );
};

export default Header;
