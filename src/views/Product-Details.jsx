import { useEffect,useState } from "react";
import { Link, useParams,useSearchParams} from "react-router-dom";
function ProductDetails(){
    const params = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    const [productInfo,setProductInfo] = useState({})
    
    useEffect(()=>{
        getProductInfo()
    },[])
    const getProductInfo = ()=>{
        fetch('http://localhost:4000/Products/' + params.productId)
        .then((response) =>response.json())
        .then(parsedResponse =>{
            setProductInfo(parsedResponse)
        })
    }
    return(
        <>
        <div>
            <h1 className="text-center font-semibold pb-5 pt-4">Product details page</h1>
            <div className="flex justify-between">
                <div className="w-1/4 pl-5">
                    <img src={productInfo.imgSrc}/>
                </div>
                <div className="w-2/4">
                    <h1 className="font-semibold text-lg">{productInfo.name}</h1>
                    <p className="text-gray-400 font-semibold text-lg"><span className="rounded text-white bg-green-500 px-2.5 mr-2">4.2</span>{productInfo.rating}</p>
                    <ul>
                        {productInfo?.specifications?.map((specification)=>{
                            <li key={specification}>{specification}</li>
                        })}
                    </ul>
                </div>
                <div className="w-1/4">
                    <h1>{productInfo.price}</h1>
                    <button className="rounded bg-green-600 text-white font-semibold text-lg px-3 py-1 mt-2">AddtoCart</button>
                </div>
            </div>
            <button className="text-center ms-5 mt-5 text-white  border-none rounded px-5 py-2 bg-blue-400"><Link to={`/products`}>Back</Link></button>
        </div>
        </>
    )
}
export default ProductDetails;