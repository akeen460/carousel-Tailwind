import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function Carousel() {
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <> 
    <section >
         <div id="csr"  className=" w-[80%] m-auto mt-6">
         <Slider id="cli" {...settings} className="flex justify-center items-center ">
            <div className="w-full h-64 bg-gray-400 flex items-center justify-center">
            Slide 1
            </div>
            <div className="w-full h-64 bg-gray-500 flex items-center justify-center">
            Slide 2
            </div>
            <div className="w-full h-64 bg-gray-400 flex items-center justify-center">
            Slide 3
            </div>
            <div className="w-full h-64 bg-gray-500 flex items-center justify-center">
            Slide 4
            </div>
      </Slider>
      
    </div>
    </section>
   
   
       
    
    </>
  )
}

export default Carousel