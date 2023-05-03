import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 1",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 1",
    editor: "গোলাম রাব্বী",
    date: "২ এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 2,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 2",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 2",
    editor: "গোলাম রাব্বী",
    date: "২৬ এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 3,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 4,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 5,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 6,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 7,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
  {
    id: 8,
    heading: "প্রথম সন্দেশ, সবচেয়ে সেরা 3",
    headline: "বিশ্বের এক নম্বর কারখানা এখন বাংলাদেশে 3",
    editor: "গোলাম রাব্বী",
    date: "12 এপ্রিল ২০২৩",
    subHeading:
      " লিড তালিকার শীর্ষ ১০০টি কোম্পানির মধ্যে ৫২টি বাংলাদেশের, অর্থাৎ তালিকায় থাকা সবচেয়ে বেশি কোম্পানি এখন বাংলাদেশের। এরপর সবচেয়ে বেশিবেশি কোম্পানি আছে চীনের। তাদের আছে ১০টি কারখানা। এরপর পাকিস্তানের আছে৯টি কারখানা। শ্রীলঙ্কা ও ভারতের আছে ৬টি করে কারখানা। ভিয়েতনাম ওতাইওয়ানের আছে ৪টি করে কারখানা।",
    blogContent:
      " বিশ্বসেরা পরিবেশবান্ধব কারখানার স্বীকৃতি পেয়েছে বাংলাদেশের গ্রিনটেক্সটাইল লিমিটেড ইউনিট-৪। লিড সনদে সর্বোচ্চ নম্বর পেয়ে সবুজ কারখানা শীর্ষস্থান দখল করে নিয়েছে কারখানাটি। ১১০ নম্বরের মধ্যে প্রতিষ্ঠানটিপেয়েছে ১০৪। আর তাই বিশ্বের সবচেয়ে পরিবেশবান্ধব ১০টি কারখানার ৮টিইবাংলাদেশের। আর বিশ্বসেরা ১০০ কারখানার মধ্যে বাংলাদেশের ৫২টি। শনিবার লিড সনদের এই তালিকা প্রকাশিত হলে বিজিএমইএ এ খবর নিশ্চিত করে।",
  },
];
const PersonalBlogs = () => {
  return (
    <div className=" lg:py-20 py-10 lg:mx-20 mx-5">
      <h2 className="text-center text-4xl font-bold text-primary py-14 my-5">
        পার্সোনাল ব্লগ
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        {data.map((a) => (
          <Link to={`/blogs/${a?.id}`}>
            <div className="relative text-basic ">
              <img
                className="opacity-50 rounded-md"
                src="https://images.unsplash.com/photo-1484766280341-87861644c80d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                alt=""
              />
              <div className="absolute bottom-[20px] mx-5">
                <h3 className="text-2xl font-bold">{a.headline}</h3>
                <p>
                  পড়ুন আজকের আবহাওয়ার খবর, ঢাকা সহ এই মুহুর্তের বাংলাদেশের
                  আবহাওয়ার খবর। জেনে নিন আবহাওয়ার পূর্বাভাস...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PersonalBlogs;
