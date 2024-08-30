import React from "react";

function LoginFooter() {
  return (
    <>
      {/* Footer */}
      <div className="w-full grid grid-cols-3 gap-2 text-sm text-gray-500 mt-10 items-center justify-items-center ">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <span>
            <a href="">About</a>
          </span>
          <span>
            <a href="">Terms of Service</a>
          </span>
          <span>
            <a href="">Privacy Policy</a>
          </span>
          <span>
            <a href="">Accessibility</a>
          </span>
          <span>
            <a href="">Ads info</a>
          </span>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center ">
          <span>
            <a href="">Download the X app</a>
          </span>
          <span>
            <a href="">Blog</a>
          </span>
          <span>
            <a href="">Careers</a>
          </span>
          <span>
            <a href="">Brand Resources</a>
          </span>
          <span>
            <a href="">Advertising</a>
          </span>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col items-center ">
          <span>
            <a href="">Help Center</a>
          </span>
          <span>
            <a href="">Marketing</a>
          </span>
          <span>
            <a href="">X for Business</a>
          </span>
          <span>
            <a href="">Developers</a>
          </span>
          <span>
            <a href="">Directory</a>
          </span>
          <span>
            <a href="">Settings</a>
          </span>
        </div>

        {/* Footer Note - Full Width */}
        <div className="col-span-3 text-center mt-4">
          <p>©️ 2024 X Corp</p>
        </div>
      </div>
    </>
  );
}

export default LoginFooter;
