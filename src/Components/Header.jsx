import { useState } from "react"
import Cart from "./SubComponent/Cart/Cart";
import { Link } from "react-router";


export default function Header() {
    const [home, setHome] = useState(true)
    const [product, setProduct] = useState(false)


    function handleClick(navItemName) {
        if (navItemName === "home") {
            setHome(true);
            setProduct(false)
        } else {
            setHome(false);
            setProduct(true)
        }
    }


    return (
        <nav className="sticky top-0 w-full flex flex-col gap-3 md:flex-row items-center text-2xl text-white bg-black justify-between p-3 px-7">
            {/* add logo for applicaiton */}
            <section className="font-bold  text-3xl">
                <span >ShoppyGlobe</span>
            </section>


            {/* implement navlist home,products,cart */}
            <section>
                <ul className="flex gap-11">
                    <Link to='/' onClick={() => handleClick("home")}><li className={`cursor-pointer  ${home ? "border-t-2" : "border-none"} `} >Home</li></Link>
                    <Link to='/products' onClick={() => handleClick("product")}><li id="product" className={`cursor-pointer  ${product ? "border-t-2" : "border-none"}`} >Products</li></Link>
                    <Link to='/cart'> <li className="cursor-pointer"><Cart /></li></Link>
                </ul>
            </section>

        </nav>
    )
}