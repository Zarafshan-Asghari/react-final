import axios from "axios";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

function AddArticle() {
  const [formValue, setFormValue] = useState({});
  const addArticleFun = () => {
    axios
      .post(`http://localhost/react/api/articles/`, formValue)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          Swal.fire({
            title: "Article Successfully Added !",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        }
        Navigate("/");
      })
      .catch((error) =>
        Swal.fire({
          title: "Error",
          icon: "error",
          timer: 6000,
          timerProgressBar: true,
          showConfirmButton: true,
        })
      );

    resetForm();
  };
  // to reset form after press button
  const resetForm = () => {
    setFormValue({
      title: "",
      description: "",
      time: "",
      image: "",
      catagory: "",
      writter: "",
    });
  };
  const setValue = (e, propertyName) => {
    setFormValue({ ...formValue, [propertyName]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="py-10 px-4 max-w-2xl md:max-w-4xl  mx-auto">
        <form className="flex flex-col space-y-2 bg-[#fefae0] p-4 rounded-lg shadow-md hover:shadow-lg transition duration-75">
          {/* title */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="title"
              className="text-[#e63946] capitalize font-thin "
            >
              article title
            </label>
            <input
              onChange={(e) => setValue(e, "title")}
              name="title"
              type="text"
              placeholder="enter article title"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* text */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="text"
              className="text-[#e63946] capitalize font-thin "
            >
              article text
            </label>
            <input
              onChange={(e) => setValue(e, "text")}
              id="text"
              type="text"
              placeholder="enter article text"
              className="outline-none py-1 px-4 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* writter */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="title"
              className="text-[#e63946] capitalize font-thin "
            >
              writter
            </label>
            <input
              onChange={(e) => setValue(e, "writter")}
              id=""
              type="text"
              placeholder="writter"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* subject */}
          <span className="flex flex-col space-y-1">
            <label htmlFor="" className="text-[#e63946] capitalize font-thin ">
              article catagory
            </label>
            <input
              onChange={(e) => setValue(e, "catagory")}
              id=""
              type="text"
              placeholder="enter article catagory"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* image */}
          <span className="flex flex-col space-y-1">
            <label
              htmlFor="image"
              className="text-[#e63946] capitalize font-thin "
            >
              article Image
            </label>
            <input
              onChange={(e) => setValue(e, "image")}
              id="image"
              type="url"
              placeholder="enter article image"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          {/* time */}
          <span className="flex flex-col space-y-1">
            <label htmlFor="" className="text-[#e63946] capitalize font-thin ">
              article time
            </label>
            <input
              onChange={(e) => setValue(e, "time")}
              id=""
              type="number"
              placeholder="time to study"
              className="outline-none py-1 px-2 rounded-lg placeholder:capitalize placeholder:text-sm placeholder:font-thin border border-gray-200"
            />
          </span>
          <div className="mt-6">
            <button
              onClick={addArticleFun}
              className="px-10 py-2 outline-none bg-[#1d3557] capitalize text-white rounded-lg shadow-lg hover:bg-opacity-75"
            >
              sava
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddArticle;
