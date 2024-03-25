import { useEffect, useState } from "react";
import "./App.css";
import BucketProblem from "./Components/BucketProblem";
import Game from "./Components/Game";
import InfiniteScroll from "./Components/InfiniteScroll";
import NestedList from "./Components/NestedList";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="Appstore">
      <BucketProblem />
      <NestedList />
      <Game />
      <InfiniteScroll />
      {isVisible && (
        <button onClick={scrollToTop} className="scrolltop">
          top
        </button>
      )}
    </div>
  );
}

export default App;
