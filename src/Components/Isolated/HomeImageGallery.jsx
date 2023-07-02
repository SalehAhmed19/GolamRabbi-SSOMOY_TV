import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/gr1.jpg";
import hafCircle from "../../assets/images/half-circle.png";
const HomeImageGallery = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto m-20 ">
        <h2 className="lg:mx-[480px] text-4xl font-bold text-primary pt-14 my-5">
          ইমেজ গ্যালারি
        </h2>
        {/* container desktop */}
        <div className="hidden lg:block">
          {/* first row */}
          <div className="flex space-x-[15px]">
            {/* item 1 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[280px] h-[280px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
              {/* image  */}
              <div class="">
                <img
                  class="[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                  src={img1}
                  alt="work-1"
                />
              </div>
              {/* hover info */}
              <div className="relative">
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[270px] h-[270px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* item 2 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[280px] h-[280px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
              {/* image  */}
              <div class="">
                <img
                  class="[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                  src={img1}
                  alt="work-1"
                />
              </div>
              {/* hover info */}
              <div className="relative">
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[270px] h-[270px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* item 3 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[280px] h-[280px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
              {/* image  */}
              <div class="">
                <img
                  class="[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                  src={img1}
                  alt="work-1"
                />
              </div>
              {/* hover info */}
              <div className="relative">
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[270px] h-[270px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* item 4 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[280px] h-[280px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
              {/* image  */}
              <div class="">
                <img
                  class="[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                  src={img1}
                  alt="work-1"
                />
              </div>
              {/* hover info */}
              <div className="relative">
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[270px] h-[270px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="mx-[150px] -mt-[57px] flex space-x-[15px]">
            {/* item 1 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[280px] h-[280px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
              {/* image  */}
              <div class="">
                <img
                  class="[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                  src={img1}
                  alt="work-1"
                />
              </div>
              {/* hover info */}
              <div className="relative">
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[270px] h-[270px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* item 2 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[280px] h-[280px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
              {/* image  */}
              <div class="">
                <img
                  class="[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                  src={img1}
                  alt="work-1"
                />
              </div>
              {/* hover info */}
              <div className="relative">
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[270px] h-[270px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* item 3 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[280px] h-[280px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
              {/* image  */}
              <div class="">
                <img
                  class="[clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]"
                  src={img1}
                  alt="work-1"
                />
              </div>
              {/* hover info */}
              <div className="relative">
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[270px] h-[270px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/gallery"
          className="block lg:mx-[450px] my-10 py-2 border-2 border-[#d89f17] hover:bg-[#d89f17] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          আরও দেখুন
        </Link>
      </div>
    </div>
  );
};

export default HomeImageGallery;
