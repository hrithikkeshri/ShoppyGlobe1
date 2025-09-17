import { Link, useParams } from "react-router"
import useFatch from "../utils/useFatch";
import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeCartList } from "../State/Slice/CartListSlice";



export default function ProductDetail() {
    const { id } = useParams();    
    const cartList = useSelector((state) => state.cartList)
    const [detail,setDetail] = useState([])
    const { data, error, loading } = useFatch(`https://dummyjson.com/products/${id}`);
    const disptach = useDispatch();

    useEffect(() => {
       setDetail(data)
    }, [data])



    function handleAddToCart() {

        //check this id of product alread added or not in cartList
        const exist = cartList.filter((product) => product.id == id);
        //if yes return alert
        if (exist[0]) {
            return alert("Item already have added")
        }


        //if not create new product
        const newProduct = {
            id: detail.id,
            brand: detail.brand,
            url: detail.thumbnail,
            name: detail.title,
            category: detail.category,
            desc: detail.description,
            price: detail.price,
            qty: 1
        }
        
        // add new product in list and list store in templist to update cartList in redux
        const newList = [newProduct, ...cartList];
        disptach(changeCartList(newList));
       

        // show success message
        alert("Product added sucessfully in cart")

    }

    return (
        <>

            <main className=" h-[89vh] flex flex-col justify-center items-center">
                {loading && <p className="text-3xl font-bold">Product loading ....</p>}
                {error && <p className="text-2xl">{error} problem in loading</p>}


                {(!loading && !error) && (


                    <article className="m-64  flex flex-col shadow-2xl lg:flex-row shadow- gap-2 p-3 w-[90%] sm:w-[70%]">
                        <section className="flex justify-center shadow-2xl ">
                            <img className="h-[250px] w-[300px]" src={detail.thumbnail} alt="product_Image" />
                        </section>
                        <section className="lg:w-[70%] p-2.5">
                            <h2>Brand:{detail.brand}</h2>
                            <h1 className="text-3xl lg:text-4xl font-bold">{detail.title}</h1>
                            <h2 className="text-xl text-blue-500">{detail.category}</h2>
                            <p className=" text-xl md:text-2xl">{detail.description}</p>
                            <section className="flex gap-2.5">
                                <span className="text-2xl">${detail.price}</span>
                                <span>{detail.discountPercentage}% OFF</span>
                            </section>
                            <button className="bg-blue-800 text-[17px] mt-2.5 cursor-pointer text-white rounded p-2 hover:bg-blue-400" onClick={handleAddToCart}>Add to Cart</button>
                        </section>
                    </article>

                )}
            </main>
        </>
    )
}