import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
export default function Cart(){
      const totalCartItem = useSelector((state)=>state.cartList);
    
    return (

      // implement cart in nav
      <section className="flex flex-col-reverse relative bottom-1.5 items-center ">
        <BsCart4/>
        <span className=" text-[14px] relative top-1 text-2xl">{totalCartItem.length}</span>
      </section>
    )
}