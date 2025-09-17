import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { changeCartList } from "../../../State/Slice/CartListSlice";




export default function ProductItem({id,url,name,category,desc,price,brand}){
    const cartList = useSelector((state)=>state.cartList)
    const dispatch = useDispatch();
    function AddToCart(){
        try {
           const exist = cartList.filter((product)=>product.id == id) ;
           if(exist[0]){
              return alert("Item already have added")
           }

           //create new products
           const newProduct = {
            id,
            brand,
            url,
            name,
            category,
            desc,
            price,
            qty:1
           }


        //    increment new product in newlist 
           const newList = [newProduct,...cartList];

           //update newList in redux cartList
           dispatch(changeCartList(newList));
          
           alert("Product added sucessfully in cart")
        } catch (error) {
           console.log(error.message) 
        }
    }
    return (
        <article className="flex flex-col w-[300px] justify-between shadow-2xl p-3">
            <section>
            <img src={url} alt="product Image" />
            <h1 className="text-3xl font-bold">{name.slice(0,25)}...</h1>
            <h2 className="text-xl text-blue-300">{category}</h2>
            <p className="text-2xl">{desc.slice(0,30)}...</p>
            <div className="flex gap-3">
            <p>${price}</p>
            
            </div>
            </section>
                <section className="flex flex-col">
               <button className="bg-blue-800 text-[17px] mt-2.5 cursor-pointer text-white rounded p-1 hover:bg-blue-400"><Link to={`/productDetail/${id}`}>View Details</Link></button>
               <button className="bg-blue-800 text-[17px] mt-2.5 cursor-pointer text-white rounded p-1 hover:bg-blue-400" onClick={AddToCart}>Add to Cart</button>

                </section>
            
        </article>
    )
}