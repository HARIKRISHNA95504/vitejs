function Products(){
    const products=[
        {
            id:1,
            imgSrc:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/y/c/-original-imah4sssdf9pgz3e.jpeg?q=70",
            name:"SAMSUNG Galaxy A14 5G (Dark Red, 128 GB)",
            rating:"62,060 Ratings & 2,959 Reviews",
            price:10999,
            specifications:[
                "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
                "16.76 cm (6.6 inch) Full HD+ Display",
                "50MP + 2MP + 2MP | 13MP Front Camera",
                "5000 mAh Lithium Ion Battery",
                "Exynos 1330 Processor",
                "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for In-Box Accessories"
            ]
        }
        
    ]
    const AddToCart = (productsInfo)=>{
        console.log('it is addToCart function...',productsInfo)
    }
    return(
        <div className="container font-sans border-b-2 pb-3" >
            <div className="flex justify-between pt-5 " >
                <div className="w-1/4 pl-5 ">
                    <img src={products[0].imgSrc}/>
                </div>
                <div className="w-2/4">
                    <p className="font-semibold text-lg ">{products[0].name}</p>
                    <p className="text-gray-400 font-semibold text-lg"><span className="rounded text-white bg-green-500 px-2.5 mr-2">4.2</span>{products[0].rating}</p>
                    <ul className=" pt-4">
                        {products[0].specifications.map(specification =>(
                            <li key={specification}>{specification}</li>

                        ))}

                    </ul>
                </div>
                <div className="w-1/4">
                    <p className="font-semibold ">{products[0].price}</p>
                    <button className="rounded bg-blue-600 text-white font-semibold text-lg px-3 py-1 mt-2" onClick={()=>AddToCart(products)}>AddtoCart</button>
                </div>
            </div>
        </div>
    )
}
export default Products;