import React from "react";
import logo from "../../assets/logo/footer-logo.png";
import svg from "../../assets/SVGs/radiant-gradient-2.png";

const Footer = () => {
  return (
    <>
      <footer
        style={{ background: `url(${svg})`, backgroundSize: "cover" }}
        className="bg-primary text-[#222] py-8 "
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <div className="flex">
                <img src={logo} className="w-10 mr-3" alt="" />
                <h3 className="text-2xl font-bold">Golam Rabby</h3>
              </div>
              <p className="mt-5 mr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                impedit minima ut consequatur, officia fugiat praesentium
                temporibus beatae, illum in commodi natus voluptatem nostrum
                corporis rem pariatur accusantium ipsum dolore.
              </p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-[#222]">
              {/* <h3 className="text-lg font-bold mb-4"></h3> */}
              <p className="mb-2 cursor-pointer">মিডিয়া জব সার্কুলার</p>
              <p className="mb-2 cursor-pointer">অডিশন টিপস</p>
              <p className="mb-2 cursor-pointer">লাইফ হ্যাকস</p>
              <p className="mb-2 cursor-pointer">পেইড মেন্টরশীপ</p>
              <p className="mb-2 cursor-pointer">মক টেস্ট</p>
              <p className="mb-2 cursor-pointer">মিট আপ</p>
            </div>
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0 text-[#222]">
              <h3 className="text-lg font-bold mb-4">সার্ভিস</h3>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">সিভি রাইটিং</a>
                </li>
                <li className="mb-2">
                  <a href="#">বিজনেস আইডিয়া ডেভেলপমেন্ট</a>
                </li>
              </ul>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">ব্লগ</a>
                </li>
                <li className="mb-2">
                  <a href="#">ভিডিও</a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/4 text-[#222]">
              {/* <h3 className="text-lg font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#F69E16] text-[#222] placeholder-[#333] py-2 px-4 w-full mb-2 rounded-lg focus:outline-none focus:shadow-outline"
                />
                <button
                  type="submit"
                  className="bg-[#F69E16] text-[#222] py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                >
                  Subscribe
                </button>
              </form> */}
              <h3 className="text-lg font-bold mb-4">সার্ভিস</h3>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">সিভি রাইটিং</a>
                </li>
                <li className="mb-2">
                  <a href="#">বিজনেস আইডিয়া ডেভেলপমেন্ট</a>
                </li>
              </ul>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#">ব্লগ</a>
                </li>
                <li className="mb-2">
                  <a href="#">ভিডিও</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[1px] mx-5 lg:mx-20 bg-[#222] my-8"></div>
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Developed by Saleh Ahmed Mahin
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
