import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel className="text-center">
      <div className="">
        <img src="https://i.postimg.cc/VLQnzRj1/pexels-mikael-blomkvist-6483579.jpg" />
      </div>
      <div className="">
        <img src="https://i.postimg.cc/K8McB46L/pexels-mikael-blomkvist-6476587.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/NMrZPrx7/pexels-mikael-blomkvist-6483582.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/ZRWp5s7Y/pexels-mikael-blomkvist-6476584.jpg" />
      </div>
      <div>
        <img src="https://i.postimg.cc/13GtbfvS/pexels-tima-miroshnichenko-7567595.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
