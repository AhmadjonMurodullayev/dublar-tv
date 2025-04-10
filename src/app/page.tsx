import Image from "next/image";
import { MovieData, SliderWrapper } from "./_components/silider/siler-wrapper";
import kino from "/public/kono.jpg";

export default function Home() {

  
 
  return (
  <>
   <div className="container">
    <SliderWrapper img={kino} title="Yangi qisimlar"/>
   </div>
  
  </>
  );
}
