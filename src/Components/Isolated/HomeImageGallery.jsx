import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/gr1.jpg";
const HomeImageGallery = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <h2 className="mx-10 md:mx-[305px] lg:mx-[480px] text-4xl font-bold text-primary pt-14 my-5">
          ইমেজ গ্যালারি
        </h2>
        {/* container desktop */}
        <div className="hidden lg:block relative">
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
                  <div className="text-white font-bold rotate-180 mt-[150px]">
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
                  <div className="text-white font-bold rotate-180 mt-[150px]">
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
                  <div className="text-white font-bold rotate-180 mt-[150px]">
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
                  <div className="text-white font-bold rotate-180 mt-[150px]">
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
                  <div className="text-white font-bold rotate-180 mt-[150px]">
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
                  <div className="text-white font-bold rotate-180 mt-[150px]">
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
                  <div className="text-white font-bold rotate-180 mt-[150px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* tablets */}
        <div className="hidden lg:hidden md:flex md:justify-center md:items-center">
          <div className="">
            {/* item 1 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
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
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[190px] h-[190px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="text-white font-bold rotate-180 mt-[90px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* item 2 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
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
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[190px] h-[190px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="text-white font-bold rotate-180 mt-[90px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* item 1 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
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
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[190px] h-[190px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="text-white font-bold rotate-180 mt-[90px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            {/* item 1 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
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
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[190px] h-[190px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="text-white font-bold rotate-180 mt-[90px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* item 1 */}
            <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
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
                <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[190px] h-[190px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                  <div className="text-white font-bold rotate-180 mt-[90px]">
                    <h2>SR.Journalist</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="mx-10 md:hidden">
          {/* item 1 */}
          <div className="group relative cursor-pointer grayscale hover:grayscale-0 hover:bg-[#F3B004] bg-white w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] transition-all duration-500 delay-75  p-2">
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
              <div className="transition-all duration-500 delay-1000  group-hover:-rotate-180 absolute left-[275px] group-hover:-left-[3px] -bottom-[3px] -right-[4px]  bg-[#f40a5c] w-[190px] h-[190px] p-10 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]">
                <div className="text-white font-bold rotate-180 mt-[90px]">
                  <h2>SR.Journalist</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/gallery"
          className="block md:mx-[270px] lg:mx-[450px] my-10  py-2 border-2 border-[#d89f17] hover:bg-[#d89f17] w-[290px] text-center rounded-full text-[#fff] font-bold text-xl"
        >
          আরও দেখুন
        </Link>
      </div>
    </div>
  );
};

export default HomeImageGallery;
