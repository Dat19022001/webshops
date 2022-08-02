import Helmet from "../components/helmet";
import Paths from "../components/path";
import ProductCard from "../components/productCard";
import Siderbar from "../components/siderbar";

export default function Product({path,listproduct,brumb}){
  const crumbs = [
    {
      title: brumb,
      href: path,
    }
  ]
  return(
    <Helmet title={brumb}>
      <Paths crumbs ={crumbs} />
      
      <div className="container content">
        <Siderbar data={listproduct}/>
        <div className="content__list">
          <div className="content__title">
            <h1>{brumb}</h1>
          </div>
          <div className="content__product">
            {listproduct.map((item, index)=>(
              <ProductCard key={index} data={item}/>
            ))}
          </div>
        </div>
      </div>
    </Helmet>
  )
}