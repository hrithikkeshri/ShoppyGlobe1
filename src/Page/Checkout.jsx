import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Checkout() {
    const [customerCart, setCustomerCart] = useState(true);   //visible state
    const [orderForm, setOrderForm] = useState(false)
    const cartList = useSelector((state) => state.cartList);   //visible 
    const [bill, setBill] = useState('');
    useEffect(() => {

        // calculate total bill 
        function getTotalPrice() {
            const totalBill = cartList.reduce((total, product) => {
                total += product.price * product.qty;
                return total;
            }, 0)
            setBill(totalBill);
        }

        //set state
        getTotalPrice()
    }, [])



    //handle when user click next button
    function handleNext() {
        setCustomerCart(false);
        setOrderForm(true);

    }

    //handle when user click prev button
    function handlePrev() {
        setCustomerCart(true);
        setOrderForm(false);
    }




    return (
        <main>
            {/* here are two step to checkout  */}

            

            {/* step-1  */}
            {customerCart && (
                <article className=" justify-center items-center">
                    <center>
                        <section className="flex justify-between w-[90%]">
                            <Link to='/cart'><button className="w-fit bg-red-500 hover:bg-red-400 text-white p-2 px-3.5 flex items-center gap-2 m-2.5 rounded cursor-pointer"><FaLongArrowAltLeft /> Back to Cart</button></Link>
                            <button className="w-fit bg-red-500 hover:bg-red-400 text-white p-2 px-3.5 flex items-center gap-2 m-2.5 rounded cursor-pointer" onClick={handleNext}>Next <FaLongArrowAltRight /></button>
                        </section>
                        <section className=" w-[90%] shadow-2xl  ">
                            <section className="flex justify-between p-3.5">
                                <strong>Payble Amount: </strong>
                                <span>${Number(bill).toFixed(2)}</span>
                            </section>
                            {
                                cartList.map((product, index) => {
                                    return (
                                        <article className="m-2.5">
                                            <div className="text-center p-5 ">S.No: {index + 1}</div>
                                            <div className="text-start p-5 "><strong>Product Name:</strong>{product.name}</div>
                                            <div className="text-start p-5 "><strong>Product Category:</strong>{product.category}</div>
                                            <div className="text-start p-5 "><strong>Product Brand:</strong>{product.brand}</div>
                                            <div className="text-start p-5 "><strong>Product Price:</strong>{product.price}</div>
                                            <div className="text-start p-5 "><strong>Product Quantity:</strong>{product.qty}</div>
                                            <div className="text-center "><strong>Total Price:</strong>${product.qty * product.price}</div>
                                        </article>
                                    )
                                })
                            }



                        </section>


                    </center>
                </article>
            )}
           



           {/* step-2  */}
            {orderForm && (
                <article className="flex flex-col justify-center items-center">


                    {/* implement prev button  */}
                     <section className=" w-[70%]">
                        <button onClick={handlePrev} className="w-fit bg-red-500 hover:bg-red-400 text-white p-2 px-3.5 flex items-center gap-2 m-2.5 rounded cursor-pointer "><FaLongArrowAltLeft /> Prev</button>
                    </section>



                    {/* order form  */}
                    <form className="flex flex-col gap-2 p-3.5 w-[70%] shadow-2xl">
                        <label htmlFor="fullName">Full Name</label>
                        <input className="p-2 border outline-none rounded" required minLength={3} id="fullName" type="text" name="fullName" placeholder="Enter your full name" />
                        <label htmlFor="email">Email</label>
                        <input id="email" className="p-2 border outline-none rounded" type="email" required placeholder="Enter your email id" />
                        <label htmlFor="phoneNo">Phone No</label>
                        <input id="phoneNo" className="p-2 border outline-none rounded" type="tel" pattern="[0-9]{10}" placeholder="Enter your Phone No" />
                        <button className="bg-green-700 text-white p-2 rounded cursor-pointer hover:bg-green-500">${Number(bill).toFixed(2)} Send Order</button>
                    </form>
                   
                </article>

            )}
        </main>
    )
}