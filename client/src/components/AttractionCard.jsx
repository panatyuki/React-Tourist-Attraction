import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";

function AttractionCard({
  title,
  url,
  description,
  tags,
  photos,
  setSearchText,
}) {
  const [clipboard, setClipboard] = useState(false);

  const clipboardHandle = () => {
    setClipboard(true);
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setClipboard(false);
    }, 5000);
  };

  // ฟังก์ชันสำหรับจัดการการคลิก tag
  const handleTagClick = (tag) => {
    setSearchText(tag); // เรียกใช้ setSearchText เพื่ออัปเดตค่าในช่อง input
  };

  return (
    <div className="flex flex-wrap w-full justify-center my-6">
      <div className="rounded-3xl border-2 border-gray-400 shadow-xl py-3 flex items-center justify-between w-[1250px] h-fit">
        {/* left image */}
        <div className="flex justify-center w-1/2">
          <img
            src={photos[0]}
            className="w-[400px] h-[275px] object-cover rounded-3xl justify-center items-center"
            alt="Attraction"
          />
        </div>

        {/* right contents */}
        <div className="flex flex-col w-1/2 justify-center">
          {/* Attraction title */}
          <h2
            className="text-black text-3xl font-extrabold cursor-pointer"
            onClick={() => {
              window.open(url);
            }}
          >
            {title}
          </h2>

          {/* Each attraction description */}
          <p className="mt-4">{description?.slice(0, 100) + "..."}</p>

          {/* Continue to read */}
          <a
            href={url}
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            อ่านต่อ
          </a>

          {/* Tags */}
          <ul className="flex items-center gap-2 text-[#7c7c7c]">
            Tag:
            {tags.map((tag, index) => (
              <li key={index}>
                {index === tags.length - 1 && (
                  <span className="no-underline">และ</span>
                )}{" "}
                <button
                  onClick={() => handleTagClick(tag)}
                  className="underline underline-offset-1"
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>

          {/* Sub 3 images */}
          <div className="flex flex-row space-x-4 mt-3">
            <img
              src={photos[1]}
              className="w-[30%] rounded-3xl"
              alt="Sub Attraction 1"
            />
            <img
              src={photos[2]}
              className="w-[30%] rounded-3xl"
              alt="Sub Attraction 2"
            />
            <img
              src={photos[3]}
              className="w-[30%] rounded-3xl"
              alt="Sub Attraction 3"
            />
          </div>

          {/* Clipboard */}
          <div className="text-blue-600 mt-3 flex">
            <button onClick={clipboardHandle} className=" text-2xl ">
              {clipboard ? <FaClipboardCheck /> : <FaClipboard />}
            </button>
            {clipboard && <h1>Copied Link</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

AttractionCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  photos: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default AttractionCard;

