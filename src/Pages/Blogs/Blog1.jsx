import React from "react";
import BlogsHeading from "../../Components/Isolated/BlogsComponents/BlogsHeading";
import BlogsSubHeading from "../../Components/Isolated/BlogsComponents/BlogsSubHeading";
import BlogContent from "../../Components/Isolated/BlogsComponents/BlogContent";
import BlogsAdd from "../../Components/Isolated/BlogsComponents/BlogsAdd";
import MoreBlogsVertical from "../../Components/Isolated/BlogsComponents/MoreBlogsVertical";
import CommentBox from "../../Components/Isolated/BlogsComponents/CommentBox";
import SocialMedia from "../../Components/Isolated/SocialMedia";
import { Link, useParams } from "react-router-dom";

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
];

function Blog1() {
  const { id } = useParams();

  const found = data.find((obj) => {
    return obj.id === parseInt(id);
  });
  const filteredData = data.filter((obj) => {
    return obj.id !== parseInt(id);
  });
  console.log(filteredData);
  return (
    <div className="lg:py-24 lg:mx-20 mx-5">
      <BlogsHeading
        heading={found?.heading}
        headline={found?.headline}
        editor={found?.editor}
        date={found?.date}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="pb-14 lg:my-0">
          <BlogsSubHeading subHeading={found?.subHeading} />

          <BlogContent blogContent={found.blogContent} />
        </div>
        <div>
          <div className="mb-5 flex flex-col items-end lg:mx-24 mx-5">
            <BlogsAdd />
            <div className="my-5">
              <h3 className="text-basic text-xl font-bold text-left my-5">
                আরও পড়ুন
              </h3>
              {filteredData?.map((data) => (
                <Link to={`/blogs/${data?.id}`}>
                  {" "}
                  <MoreBlogsVertical data={data} />
                </Link>
              ))}
            </div>

            {/* <Link to={`/blogs/`}>
              {" "}
              <MoreBlogsVertical />
            </Link> */}
          </div>
        </div>
      </div>
      <CommentBox />
      <SocialMedia />
    </div>
  );
}

export default Blog1;
