// import React, { useState, useEffect } from "react";
// import throttle from "lodash.throttle";

// имитация запроса к серверу. просто получаем число асинхронно
// const fetchRandomNumber = () => Promise.resolve(Math.random());

// const useWindowScrollY = () => {
//   const [scroll, setScroll] = useState(window.scrollY); // 5 initial state

//   useEffect(() => {
//     const handleScroll = () => throttle(setScroll(window.scrollY), 50); // 3,4 добавили функцию  // 6 throttle

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []); // 1. Добавил зависимость

//   return scroll;
// };

// export const NumberAndScroll = () => {
//   const [number, setNumber] = useState(null);

//   const scroll = useWindowScrollY();

//   // раскидали логику useEffect
//   useEffect(() => {
//     fetchRandomNumber().then(setNumber); // 2. на then
//   }, []);

//   return (
//     <div>
//       <div> Number: {number} </div>
//       <div> Scroll: {scroll} </div>
//     </div>
//   );
// };

// export const NumberAndScroll = () => {
//   const [number, setNumber] = useState();
//   const [scroll, setScroll] = useState();

//   useEffect(() => {
//     fetchRandomNumber().then(setNumber);

//     window.addEventListener("scroll", () => setScroll(window.scrollY));

//     return () =>
//       window.removeEventListener("scroll", () => setScroll(window.scrollY));
//   }, []);

//   return (
//     <div>
//       <div> Number: {number} </div>
//       <div> Scroll: {scroll} </div>
//     </div>
//   );
// };
