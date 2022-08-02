import ProductCard from "./productCard"

export default function Product_List({data}){
  return(
    <div className="hot">
      <div className="container">
        <h2 className="hot__title">Sản phẩm bán chạy</h2>
        <div className="hot__content">
          <div className="hot__body">
            {data.map((item, index) =>(
              <ProductCard key={index} data={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}