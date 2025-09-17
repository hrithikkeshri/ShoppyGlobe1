import { useSelector } from "react-redux";
import CartCard from "../Components/SubComponent/Cart/CartCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";



//cart list component
export default function CartList() {
    
    const cartList = useSelector((state) => state.cartList)
    const [total,setTotal] = useState(0);

    useEffect(()=>{
         getTotalPrice()
    },[cartList])

    function getTotalPrice(){
        const totalPrice = cartList.reduce((accu,cur)=>accu+(cur.price*cur.qty),0);
       
        setTotal(totalPrice)
    }


    return (
        <main className="flex  flex-col-reverse  md:flex-row-reverse  justify-center gap-6  p-11    ">

            <section className="flex  w-full sm:w-[70%] flex-col   justify-center items-center">

            {(cartList.length != 0)?cartList.map((product)=>{
                return <CartCard 
                id = {product.id}
                url = {product.url}
                name = {product.name}
                category = {product.category}
                price ={product.price}
                qty = {product.qty}
                brand ={product.brand}
                key={product.id}
                />
            }):(
               <article>
                <center>
                    <img 
                    src="data:image/png;base64,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" 
                    alt="emtyCartImage" />
                    <h1 className="text-4xl font-bold ">Cart is Empty </h1>
                    <p>I think you have not added anything till now</p>
                     </center>
               </article>
            )}
            </section>
            <section className="flex flex-col justify-center items-center shadow-2xl h-fit p-10">
                <h1 className="text-2xl flex"><strong>Total Price:</strong> ${Number(total.toFixed(2))}</h1>
                <br />
                <hr className="bg-black border w-full " />
                <br />
                {(total>0)&& <Link to='/checkout'> <button className="bg-blue-700 hover:bg-blue-400 cursor-pointer h text-white p-1.5 w-full" >Checkout</button></Link> }
             
            </section>
        </main>
    )



   
}    
    
