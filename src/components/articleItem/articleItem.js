import img from "./react.svg";
import { BiTimeFive } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
function ArticleItem(props) {
  return (
    <>
      <div className="flex w-full flex-col rounded-md shadow-md  hover:border border-[#fffad6] transition hover:scale-105 duration-200">
        {/* image container */}
        <div className="flex-1">
          <img
            src={props.image}
            className="w-full h-full  bg-opacity-10  rounded-t-lg object-cover"
            alt=""
          />
        </div>
        {/*  <!-- Content Container --> */}
        <div className="flex-3 flex-col w-full ">
          <div className="flex flex-col p-4  ">
            <h4 className="text-2xl capitalize text-[#1d3557] mb-2">
              {props.title}
            </h4>
            <p className="text-sm font-thin ">{props.description}</p>
            <Link to={`article/${props.id}`}>
              <div className="text-[#1d3557] hover:text-[#e63946]">
                <span>read more</span>
                <IoArrowForward className="cursor-pointer inline" />
              </div>
            </Link>
          </div>
          {/* writter  and time to read div */}
          <div className="flex items-center justify-between p-4  capitalize bg-[#f1faee]  border-t border-[#f1faee] text-xs">
            <span>writter:{props.writter}</span>
            <span>
              <BiTimeFive className="inline" title="time" />
              {props.readingTime} minutes
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default ArticleItem;
