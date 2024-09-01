import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="col-span-3 p-4">
          <nav className="space-y-4">
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              Home
            </a>
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              Explore
            </a>
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              Notifications
            </a>
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              Messages
            </a>
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              Grok
            </a>
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              Communities
            </a>
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              Profile
            </a>
            <a href="#" className="block text-lg font-semibold hover:text-blue-400">
              More
            </a>
            <button className="mt-6 bg-pink-600 text-white py-2 px-4 rounded-full hover:bg-pink-700">Post</button>
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
                src="https://pbs.twimg.com/media/GVBQEY9XMAAMHKt?format=jpg&name=small"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Vijay</h3>
              <p>Thalapathy & Ilayathalapathy are OUT NOW</p>
              <img
                src="https://pbs.twimg.com/media/GVBQEY9XMAAMHKt?format=jpg&name=small"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Vijay</h3>
              <p>Thalapathy & Ilayathalapathy are OUT NOW</p>
              <img
                src="https://pbs.twimg.com/media/GVBQEY9XMAAMHKt?format=jpg&name=small"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Vijay</h3>
              <p>Thalapathy & Ilayathalapathy are OUT NOW</p>
              <img
                src="https://pbs.twimg.com/media/GVBQEY9XMAAMHKt?format=jpg&name=small"
                alt="Post content"
                className="mt-4 rounded-lg"
              />
            </div>
            {/*  posts here */}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 p-4 space-y-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <input type="text" placeholder="Search" className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none" />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold">Subscribe to Premium</h3>
            <p className="text-gray-400">Subscribe to unlock new features and receive a share of ads revenue.</p>
            <button className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded-full hover:bg-pink-700">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
