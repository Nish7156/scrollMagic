import ScrollDrawing from "../components/ScrollDrawing";
import Test from "../components/Test";
import HorizontalScroll from "../components/HorizontalScroll";
import RoundedScroll from "../components/RoundedScroll";
import ScrollWithContent from "../components/ScrollWithContent";
import ScrollAnimation from '../components/ScrollAnimation'
import Video from '../components/Video'
import MainAnimation from '../components/MainAnimation'
import { useState } from "react";
export default function Home() {

  return (
    <>
      <h1 className="py-5 text-lg font-bold text-center text-white underline bg-primary ">
        Next js + Tailwind
      </h1>
     <div className="container py-20 mx-auto">
      <MainAnimation/>
     </div>
    </>
  );
}
