import Products from "./Products";
function Orders(){
    const restaurents =[
        {
            id:1,
            imgSrc:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1690979402/280790e130dd59bad6f5662807f8f2aa.jpg",
            title:"Old City - Taste Of Hyderabad",
            type:"Hyderabadi",
            price:"₹2000 for two",
            location:"Jubilee Hills, Hyderabad",
            distance:"0.3 km",
            tableTick:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
            offer:"Flat 20% off on pre-booking",
            bankOffer:"Up to 15% off with bank offers"
        },
        {
            id:2,
            imgSrc:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/12/2/ecfb100c-b7ea-4698-8063-f8d63232de7e_image26dcdc00b100a044a49abb93286456bd29.JPG",
            title:"Amoroso",
            type:"Continental,chinese",
            price:"₹800 for two",
            location:"Jubilee Hills, Hyderabad",
            distance:"0.3 km",
            offer:"Flat 20% off on pre-booking",
            bankOffer:"Up to 15% off with bank offers"
        },
        {
            id:3,
            imgSrc:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1691745931/d3ed83695ac6515f05af11628bb8b461.jpg",
            title:"Farasha C Lounge",
            type:"North Indian,Asian",
            price:"₹1800 for two",
            location:"Jubilee Hills, Hyderabad",
            distance:"0.3 km",
            offer:"Flat 20% off on pre-booking",
            bankOffer:"Up to 15% off with bank offers"
        },
        {
            id:4,
            imgSrc:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1672310174/dcf68dfd7b2cd3e166749122cc375d5a.jpg",
            title:"Makers Of Milkshakes",
            type:"Beverages,Desserts",
            price:"₹400 for two",
            location:"Jubilee Hills, Hyderabad",
            distance:"0.3 km",
            offer:"Flat 20% off on pre-booking",
            bankOffer:"Up to 15% off with bank offers"
        },
        {
            id:5,
            imgSrc:"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1690979402/280790e130dd59bad6f5662807f8f2aa.jpg",
            title:"Old City - Taste Of Hyderabad",
            type:"Hyderabadi",
            price:"₹2000 for two",
            location:"Jubilee Hills, Hyderabad",
            distance:"0.3 km",
            offer:"Flat 20% off on pre-booking",
            bankOffer:"Up to 15% off with bank offers"
        },
    ]
    return(
        <div className="flex flex-wrap gap-2 m-5 shadow-sm">
            {restaurents.map((restaurent)=>(
                <div className="border rounded max-w-sm text-gray-500">
                    <div className="p-2">
                        <img className="w-full h-36" src={restaurent.imgSrc}/>
                        <div className="flex justify-between ">
                            <div className=" text-white text-lg p-1 font-bold absolute top-32">{restaurent.title}</div>
                            {/* <div className="font-semibold  text-white text-lg p-1 font-bold absolute top-52">{restaurent.rating}</div> */}
                        </div>
                    </div>
                    <div className="p-2 text-sm">
                        <div className="flex justify-between ">
                            <div>{restaurent.type}</div>
                            <div>{restaurent.price}</div>
                        </div>
                        <div className="flex justify-between ">
                            <div>{restaurent.location}</div>
                            <div>{restaurent.distance}</div>
                        </div>
                    </div>
                    <button className="border-none rounded-full text-gray-500 px-2 py-1 bg-gray-300 mx-2"><span><i class="fa-regular fa-square-check"></i></span>TableBooking</button>
                    <div className="flex justify-between bg-green-700 text-white font-medium border-none rounded p-1 m-1">
                        <div>{restaurent.offer}</div>
                        <div>+2 More</div>
                    </div>
                    <div className="text-green-600 font-semibold bg-green-200 border-none rounded p-1 m-2 mb-3 ">{restaurent.bankOffer}</div>
                </div>
            ))}
        </div>
    )
}
export default Orders;