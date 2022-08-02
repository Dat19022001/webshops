import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Baner({data}){
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return(
    <div className="baner">
      <div className="baner__show">
        <Slider {...settings}>
          {data.map((item, index) =>(
            <div className="baner__item" key={index}>
              <a href="#"><img src={item.img}/></a>
              <div className="baner__content">
                <div className="baner__body">
                  <h2 className="baner__title">
                    <span>{item.title}</span>
                  </h2>
                  <h3 className="baner__subTitle">
                    <span>{item.subTitle}</span>
                  </h3>
                </div>
                <div  className="baner__btn">
                  <a href="#" className="btn">Xem Ngay</a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}