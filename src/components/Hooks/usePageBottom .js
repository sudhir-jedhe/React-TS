
import { useState, useEffect } from "react";

const usePageBottom = () => {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) <= 10;

      setReachedBottom(hasReachedBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return reachedBottom
};

export default usePageBottom;


/****************************** */
import styled from "styled-components";
import usePageBottom from "./usePageBottom";
const reachedBottom = usePageBottom();
console.log("reachedBottom", reachedBottom);
const MyPage = () => {
  return <Wrapper>Hello world!</Wrapper>;
};

export default MyPage;

const Wrapper = styled.div`
  height: 200vh;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
`;