import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="col-span-3 p-4 flex justify-center mt-10 ">
          <nav className="space-y-4 fixed">
            {/* Home */}
            <a href="#" className=" text-lg font-semibold hover:text-blue-400 inline-block ">
              <span className=" flex items-center gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Home
              </span>
            </a>
            {/* Explore  */}
            <a href="#" className=" block text-lg font-semibold hover:text-blue-400">
              <span className=" flex items-center  gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                Explore
              </span>
            </a>
            <a href="#" className=" block text-lg font-semibold hover:text-blue-400">
              <span className=" flex items-center  gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
                Notifications
              </span>
            </a>
            <a href="#" className=" block text-lg font-semibold hover:text-blue-400">
              <span className=" flex items-center  gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                Messages
              </span>
            </a>
            <a href="#" className=" block text-lg font-semibold hover:text-blue-400">
              <span className=" flex items-center  gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                  />
                </svg>
                Grok
              </span>
            </a>
            <a href="#" className=" block text-lg font-semibold hover:text-blue-400">
              <span className=" flex items-center  gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                Communities
              </span>
            </a>
            <a href="#" className=" block text-lg font-semibold hover:text-blue-400">
              <span className=" flex items-center  gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Profile
              </span>
            </a>
            <a href="#" className=" block text-lg font-semibold hover:text-blue-400">
              <span className=" flex items-center  gap-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                More
              </span>
            </a>
            <button className="mt-6 bg-blue-600 text-white py-4 px-20 rounded-full hover:bg-blue-700 relative right-12">
              Post
            </button>
          </nav>
        </div>

        {/* Middle Column */}
        <div className="col-span-6 p-4 border-collapse border-l border-r">
          <div className="flex justify-between mb-4">
            <button className="text-lg font-semibold hover:text-blue-400">For You</button>
            <button className="text-lg font-semibold hover:text-blue-400">Following</button>
          </div>
          <div className="space-y-4">
            {/*  Post */}
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Vijay</h3>
              <p>Thalapathy & Ilayathalapathy are OUT NOW</p>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2024/08/20240815134522_sdfv.jpg?impolicy=website&width=1600&height=900"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">marvel</h3>
              <p>Deadpool and Wolverine</p>
              <img
                src="https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Devara</h3>
              <p>Part one is going to fire 🔥🔥🔥</p>
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00310216-yyucvmkrwl-portrait.jpg"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Kanguva</h3>
              <p>One and only Kanguva ✨✨✨✨✨</p>
              <img
                src="https://images.moneycontrol.com/static-mcnews/2024/07/20240702054657_WhatsApp-Image-2024-07-01-at-19.24.16-278x435.jpeg"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            {/*  posts here */}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 p-4 space-y-4">
          <div className="flex items-center bg-black rounded-3xl  gap-2 border border-blue-400 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 relative left-2 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input type="text" placeholder="Search" className="w-full p-2 bg-black rounded-3xl focus:outline-none " />
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Subscribe to Premium</h3>
            <p className="text-gray-400">Subscribe to unlock new features and receive a share of ads revenue.</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700">
              Subscribe
            </button>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">What's happening</h3>
            <ul className="mt-4 space-y-2">
              <li>#TheGreatestAllTime</li>
              <li>#Jailer2</li>
              <li>#AllEyesOnIndianMuslims</li>
              {/* Add more trending topics here */}
            </ul>
          </div>
          <Link to={"/login"}>
            <button className="mt-6 bg-violet-600 text-white py-4 px-20 rounded-full hover:bg-blue-700 relative right-1">
              Login Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
