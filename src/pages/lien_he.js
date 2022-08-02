import Helmet from "../components/helmet";
import Paths from "../components/path";

export default function Lien_he(){
  const crumbs =[
    {
      title: "Liên Hệ",
      path:"lien_he"
    }
  ]
  return(
    <Helmet title="Liên Hệ">
      <Paths crumbs={crumbs}/>
      <div className="container">
        <div className="contact">
          <div className="contact__row">
            <div className="contact__iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.267888318623!2d105.80160261437749!3d20.981896094753644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc3e224b60d%3A0x9c3a6cf6cc59a07e!2zTmcuIDExMSBUcmnhu4F1IEtow7pjLCBUcmnhu4F1IEtow7pjLCBUw6JuIFRyaeG7gXUsIFRoYW5oIFRyw6wsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1659407680107!5m2!1svi!2s" width="100%" height="300"></iframe>
            </div>
            <div className="contact__info">
              <h1 className="contact__title">Thông tin Liên Hệ</h1>
              <h5 className="contact__name">ANT Mỹ phẩm</h5>
              <ul className="contact__list">
                <li>
                  <strong>Địa chỉ:</strong>
                  <i>Ngõ 111 Triều Khúc, Tân Triều, Thanh Trì, TP.Hà Nội</i>
                </li>
                <li>
                  <strong>Điện Thoại:</strong>
                  <i><a>0869394765</a></i>
                </li>
                <li>
                  <strong>Email:</strong>
                  <i><a>nguyenthedat1902@gmail.com</a></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact__form">
            <h3>Liên hệ ANT Consmetic</h3>
            <h6>Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.</h6>
            <form>
              <div className="contact__body">
                <div className="contact__input contact__width">
                  <input type="text" name="name" placeholder="Họ và tên"/>
                </div>
                <div className="contact__input contact__width">
                  <input type="text" name="email" placeholder="Email"/>
                </div>
                <div className="contact__input contact__width">
                  <input type="text" name="sdt" placeholder="Số Điện Thoại"/>
                </div>
                <div className="contact__input contact__width">
                  <input type="text" name="dia_chi" placeholder="Địa Chỉ"/>
                </div>
                <div className="contact__input contact__width1">
                  <textarea name="noi_dung" placeholder="Nội Dung"></textarea>
                </div>
              </div>
              <button type="submit" className="contact__buttom">Gửi Tin Nhắn</button>
            </form>
          </div>
        </div>
      </div>
    </Helmet>
  )
}