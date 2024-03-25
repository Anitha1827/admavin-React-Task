import React, { useEffect, useState } from "react";
import "./InfiniteScroll.css";

const imageUrls = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150/0000FF/808080",
  "https://via.placeholder.com/150/FF0000/FFFFFF",
  "https://via.placeholder.com/150/008000/FFFFFF",
  "https://via.placeholder.com/150/FFFF00/000000",
  "https://via.placeholder.com/150/00FFFF/000000",
  "https://via.placeholder.com/150/800080/FFFFFF",
  "https://via.placeholder.com/150/FFA500/FFFFFF",
  "https://via.placeholder.com/150/800000/FFFFFF",
  "https://via.placeholder.com/150/FF00FF/FFFFFF",
  "https://via.placeholder.com/150/008080/FFFFFF",
  "https://via.placeholder.com/150/000080/FFFFFF",
  "https://via.placeholder.com/150/808000/FFFFFF",
  "https://via.placeholder.com/150/00FF00/000000",
  "https://via.placeholder.com/150/C0C0C0/000000",
  "https://via.placeholder.com/150/FFFFFF/000000",
  "https://via.placeholder.com/150/FFD700/000000",
  "https://via.placeholder.com/150/ADFF2F/000000",
  "https://via.placeholder.com/150/FF6347/000000",
  "https://via.placeholder.com/150/2E8B57/000000",
];

const InfiniteScroll = () => {
  const [items, setItems] = useState(imageUrls);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      const newItems = imageUrls;
      setItems([...items, ...newItems]);
      setLoading(false);
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="scrollcontainer">
        <h1>Infinite Scroll Example</h1>
        <div className="imagesbox">
          {items.map((item, index) => (
            <img className="images" key={index} src={item} alt="images" />
          ))}
        </div>

        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default InfiniteScroll;
