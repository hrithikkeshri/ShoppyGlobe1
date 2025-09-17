import { useState } from "react"
import { MdEdit } from "react-icons/md";
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeCartList, qtyDecrement, qtyIncrement } from "../../../State/Slice/CartListSlice";

import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

export default function CartCard({ id, url, name, category, desc, price, qty, brand }) {
    const cartList = useSelector((state) => state.cartList)
    
    const dispatch = useDispatch();

    function handleDelete() {
        alert("Item deleted")

        const deletedList = cartList.filter((product) => product.id != id); //filter new array where given item have deleted
      
        dispatch(changeCartList(deletedList)); //update in redux where given element have deleted
    }



   //handleEdit function is reusable for increment and decrement qty functionality
   function handleEdit(type){
    //deep copy of cart list because we have to update new list
    let list = structuredClone(cartList);
    let editList = [];
    if(type=='increment'){

        //if handleEdit function invoked for increment qty 
          editList = list.map((product)=>{
            if(product.id == id){
                product.qty += 1;
            }
            return product;
         })
    }else{
         //if handleEdit function invoked for decrement qty 
        editList = list.map((product)=>{
            if(product.id == id && product.qty != 1){
                product.qty -= 1
            }
            return product;
        })
    }

      //finaly update updated qty  list 
      dispatch(changeCartList(editList));
   }






    return (
        <article className=" shadow-xl w-[300px] flex flex-col items-center gap-3.5 p-2.5">

            {/* implement delete button  */}
            <div className="flex justify-end  w-full text-3xl ">
                <span className="cursor-pointer" onClick={handleDelete}><BsTrashFill /></span>
            </div>
            <img className="w-[100px] h-[100px]" src={url} alt="CartItemImage" />
            <section className=" w-full">

                <h2><b>Brand</b>:{brand}</h2>
                <h1 className="text-2xl font-bold">{name}</h1>
                <h2 className="text-xl text-blue-400">{category}</h2>
                <p className="text-xl"><strong>${price}</strong></p>

                <section className="flex gap-2">
                    <button className="text-xl cursor-pointer font-bold bg-green-600 text-white p-2 px-5 rounded" onClick={() => handleEdit('decrement')}><FaMinus /></button>
                    <span className="text-3xl">{qty}</span>
                    <button className="text-xl cursor-pointer font-bold bg-green-600 text-white p-2 px-5 rounded" onClick={() => handleEdit('increment')}><IoMdAdd /></button>
                </section>


            </section>
        </article>
    )
}