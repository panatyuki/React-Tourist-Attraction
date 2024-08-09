import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
import AttractionCard from "./AttractionCard";

function TouristLocations() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const getTouristAttractionData = async () => {
    try {
      let response = await axios.get(
        `http://localhost:4001/trips?keywords=${searchText}`,
      );
      setData(response.data.data);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  useEffect(() => {
    getTouristAttractionData();
  }, [searchText]);

  return (
    <div>
      {/* Render input bar */}
      <SearchInput searchText={searchText} setSearchText={setSearchText} />

      <hr />
      {/* Attraction locations */}
      <div>
        {data.map((item) => (
          <AttractionCard
            key={item.id}
            photos={item.photos}
            title={item.title}
            description={item.description}
            url={item.url}
            tags={item.tags}
            setSearchText={setSearchText} // ส่งฟังก์ชัน setSearchText ไปยัง AttractionCard เพื่อใช้ในการอัปเดตค่าเมื่อคลิก tag
          />
        ))}
      </div>
    </div>
  );
}

export default TouristLocations;

