import {Link} from"react-router-dom";

import Helmet from "./helmet"

export default function NotFound(){
  return(
    <Helmet title="Lỗi 404">
      <div className="error">
        <h1 className="error__title">Không tìm thấy nội dung yêu cầu.</h1>
        <span><Link to="/">Quay về trang chủ</Link></span>
      </div>
    </Helmet>
  )
}