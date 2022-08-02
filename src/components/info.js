export default function Info(){
  return(
    <div className="info">
      <div className="container">
        <div className="info__top">
          <h4 className="info__title">Giới thiệu</h4>
          <h2 className="info__name">ANT Mỹ Phẩm</h2>
        </div>
        <div className="info__body">
          <div className="info__img">
            <img src="../assets/images/home/sb_1554688964_360.png"/>
          </div>
          <div className="info__left">
            <div className="info__item">
              <a className="info__icon" href="#"><img src="../assets/images/home/item1.png"/></a>
              <div className="info__content">
                <h3><a>Thiên Nhiên</a></h3>
                <p>Hoàn toàn từ nguyên liệu tự nhiên mang lại cảm giác thư thái an toàn</p>
              </div>
            </div>
            <div className="info__item">
              <a className="info__icon" href="#"><img src="../assets/images/home/item2.png"/></a>
              <div className="info__content">
                <h3><a>Sản phẩm chất lượng </a></h3>
                <p>hàng hóa chất lượng cao là giá trị cốt lõi tạo nên thương hiệu của Ant Mỹ phẩm</p>
              </div>
            </div>
            <div className="info__item">
              <a className="info__icon" href="#"><img src="../assets/images/home/item3.jpg"/></a>
              <div className="info__content">
                <h3><a>100% thiên nhiên</a></h3>
                <p>Tất cả các sản phẩm của chúng tôi đều có thể phân hủy được.</p>
              </div>
            </div>
          </div>
          <div className="info__right">
            <div className="info__item">
              <a href="#" className="info__icon2"><img src="../assets/images/home/item4.png"/></a>
              <div className="info__content2">
                <h3><a>100% tự nhiên</a></h3>
                <p>Không chứa sodium laureth sulfate, không chứa màu nhân tạo.</p>
              </div>
            </div>
            <div className="info__item">
              <a href="#" className="info__icon2"><img src="../assets/images/home/item5.png"/></a>
              <div className="info__content2">
                <h3><a>Thiên nhiên </a></h3>
                <p>hoàn toàn từ nguyên liệu tự nhiên mang lại cảm giác thư thái an toàn</p>
              </div>
            </div>
            <div className="info__item">
              <a href="#" className="info__icon2"><img src="../assets/images/home/item6.png"/></a>
              <div className="info__content2">
                <h3><a>Sản phẩm uy tín</a></h3>
                <p>hàng hóa chất lượng cao là giá trị cốt lõi tạo nên thương hiệu của Ant Mỹ phẩm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}