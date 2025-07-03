import { v4 as uuidv4 } from "uuid";

// input 공통조건
// {
//   "date": { "w": 60, "h": 30 },
//   "place": { "w": 220, "h": 36 },
//   "content": { "w": 220, "h": 60 }
// Pretendard, 16px
// line-height: 1.5 추천
// whiteSpace: "pre-wrap", // ← 줄바꿈 허용
// wordBreak: "break-word", // ← 단어가 길어도 줄바꿈
// }

export const imageData = [
  {
    id: 1,
    src: "/frame1.png",
    alt: "Example Image 1",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
      "https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap",
    ],
    date: {
      position: { top: "289px", left: "220px" },
      fontSize: "18px",
      fontFamily: "Arial, sans-serif",
      color: "black",
      fontWeight: "bold",
    },
    time: {
      position: { top: "150px", left: "100px" },
      fontSize: "15px",
      fontFamily: "Arial, sans-serif",
      color: "yellow",
      fontWeight: "bold",
    },
    address: {
      position: { top: "375px", left: "210px" },
      fontSize: "15px",
      fontFamily: "Arial, sans-serif",
      color: "black",
      fontWeight: "bold",
    },
    content: {
      position: { top: "320px", left: "45px" },
      fontSize: "12px",
      fontFamily: "Arial, sans-serif",
      color: "black",
      fontWeight: "bold",
    },
  },
  {
    id: 2,
    src: "/frame2.png",
    alt: "Example Image 2",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
      "https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap",
    ],
    date: {
      position: { top: "330px", left: "90px" },
      fontSize: "45px",
      fontFamily: "Arial, sans-serif",
      color: "#E52D83",
      fontWeight: "bold",
    },
    time: {
      position: { top: "150px", left: "100px" },
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      color: "#050100",
      fontWeight: "bold",
    },
    address: {
      position: { top: "396px", left: "110px" },
      fontSize: "14px",
      fontFamily: "Arial, sans-serif",
      color: "#5C5C5C",
      fontWeight: "bold",
    },
    content: {
      position: { top: "435px", left: "110px" },
      fontSize: "14px",
      fontFamily: "Arial, sans-serif",
      color: "#5C5C5C",
      fontWeight: "bold",
    },
  },
  {
    id: 3,
    src: "/frame3.png",
    alt: "Example Image 3",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
      "https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap",
    ],
    date: {
      position: { top: "301px", left: "126px" },
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      color: "#5C5C5C",
      fontWeight: "bold",
    },
    time: {
      position: { top: "150px", left: "100px" },
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      color: "#5C5C5C",
      fontWeight: "bold",
    },
    address: {
      position: { top: "331px", left: "136px" },
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      color: "pink",
      fontWeight: "bold",
    },
    content: {
      position: { top: "362px", left: "139px" },
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      color: "#5C5C5C",
      fontWeight: "bold",
    },
  },
  {
    id: 4,
    src: "/frame4.png",
    alt: "Example Image 4",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap",
    ],
    date: {
      position: { top: "275px", left: "100px" },
      fontSize: "20px",
      fontFamily: "Reenie Beanie, sans-serif",
      color: "#A32828",
      fontWeight: "regular",
    },
    time: {
      position: { top: "150px", left: "82px" },
      fontSize: "30px",
      fontFamily: "Reenie Beanie, sans-serif",
      color: "yellow",
      fontWeight: "regular",
    },
    address: {
      position: { top: "306px", left: "100px" },
      fontSize: "14px",
      fontFamily: "Reenie Beanie, sans-serif",
      color: "#A32828",
      fontWeight: "regular",
    },
    content: {
      position: { top: "347px", left: "100px" },
      fontSize: "14px",
      fontFamily: "Reenie Beanie, sans-serif",
      color: "#A32828",
      fontWeight: "regular",
    },
  },
  {
    id: 5,
    src: "/frame5.png",
    alt: "Example Image 5",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Luxurious+Script&display=swap",
      "https://fonts.googleapis.com/css2?family=Song+Myung&display=swap",
    ],
    date: {
      position: { top: "115px", left: "124px" },
      fontSize: "22px",
      fontFamily: "Luxurious Script",
      color: "black",
      fontWeight: "regular",
    },
    time: {
      position: { top: "150px", left: "82px" },
      fontSize: "30px",
      fontFamily: "Luxurious Script",
      color: "yellow",
      fontWeight: "regular",
    },
    address: {
      position: { top: "270px", left: "14px" },
      fontSize: "12px",
      fontFamily: "Song Myung, sans-serif",
      color: "black",
      fontWeight: "regular",
    },
    content: {
      position: { top: "320px", left: "14px" },
      fontSize: "12px",
      fontFamily: "Song Myung, sans-serif",
      color: "black",
      fontWeight: "regular",
    },
  },
  {
    id: 6,
    src: "/frame6.png",
    alt: "Example Image 6",
    fontLinks: [
      "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'",
    ],
    date: {
      position: { top: "0px", left: "130px" },
      fontSize: "35px",
      fontFamily: "Inter, sans-serif",
      color: "black",
      fontWeight: "bold",
    },
    time: {
      position: { top: "150px", left: "83px" },
      fontSize: "30px",
      fontFamily: "Reenie Beanie, sans-serif",
      color: "yellow",
      fontWeight: "regular",
    },
    address: {
      position: { top: "172px", left: "97px" },
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      color: "black",
      fontWeight: "regular",
    },
    content: {
      position: { top: "220px", left: "97px" },
      fontSize: "14px",
      fontFamily: "Inter, sans-serif",
      color: "black",
      fontWeight: "regular",
    },
  },
];
