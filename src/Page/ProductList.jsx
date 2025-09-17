import { useEffect, useState } from "react";
import useFatch from "../utils/useFatch"
import ProductItem from "../Components/SubComponent/Product/ProductItem";
import CategoryCheckbox from "../Components/SubComponent/Product/CategoryChedkbox";
import { useDispatch, useSelector } from "react-redux";
import { changeList } from "../State/Slice/ProductsSlice";
import { IoIosSearch } from "react-icons/io";



export default function ProductList() {
    const { data, error, loading } = useFatch('https://dummyjson.com/products');
    const productList = useSelector((state) => state.productList);
    const [list,setList] = useState([]);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        function updateProductList() {
            setList(data.products)
            dispatch(changeList(data.products))
        }
        updateProductList();
    }, [data])

    function handleSearch(input) {

        //filter list by search input
        const searchList = list.filter((product) => {
            const matchField = input.toLowerCase().trim();
            const title = product.title?product.title.toLowerCase():''  //to store string  in each case
            const category = product.category?product.category.toLowerCase():''   //to store string  in each case
            const brand = product.brand?product.brand.toLowerCase():''  //to store string  in each case
            return (
               title.includes(matchField) ||
                category.includes(matchField) ||
                brand.includes(matchField) ||
                matchField == ''
            );
        });

        dispatch(changeList(searchList));
        setSearch(input);
    }


    return (
        <>
            {loading && <p className="text-3xl font-bold text-center w-[100%] h-[89vh] flex justify-center items-center">Product loading ....</p>}
            {error && <p className=" w-[100%] h-[89vh] flex justify-center items-center">{error} problem in loading</p>}
            

            {/* conditonal rendring base on state of data fatching */}
            {(loading || error) ? "" : (
                <main className="grid grid-cols-1 sm:grid-cols-[1fr_4fr]">

                    <section className="  p-3">
                        <h1 className=" text-2xl font-bold">Product Category</h1>
                        <ul>

                            <CategoryCheckbox category="Beauty" />
                            <CategoryCheckbox category="Fragrances" />
                            <CategoryCheckbox category="Furniture" />
                            <CategoryCheckbox category="Groceries" />

                        </ul>

                    </section>
                    <section className="flex flex-col  justify-center items-center">
                        <div className="border-b-2 flex w-[70%] gap-2 text-xl items-center m-8">
                            <IoIosSearch />
                            <input className=" outline-none w-full  " value={search} type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Searh product by category,name,brand....." />
                        </div>
                        <section className="flex justify-center items-center w-full flex-wrap gap-16 overflow-auto h-[80vh]  m-3 ">

                            {productList.map((product) => <ProductItem
                                id={product.id}
                                brand={product.brand}
                                name={product.title}
                                category={product.category}
                                desc={product.description}
                                price={product.price}
                                url={product.thumbnail}
                                key={product.id} />)}
                        </section>
                    </section>
                </main>
            )}

        </>
    )
}