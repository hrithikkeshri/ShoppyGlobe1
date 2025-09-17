import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeFilterList } from "../../../State/Slice/FiilterProductSlice";
import { changeList } from "../../../State/Slice/ProductsSlice";
import useFatch from "../../../utils/useFatch";



//check box for each category
export default function CategoryCheckbox({category}){
    const [status,setStatus] = useState(false);
    const [productList,setProductList] = useState([]);
     const { data } = useFatch('https://dummyjson.com/products');
    const filterList = useSelector((state)=>state.filterCategory)
    const dispatch = useDispatch();
    

    useEffect(()=>{
      function collectList(){
          setProductList(data.products)
      }
      collectList()
    },[data])



    function handleChange(){
        let newList = filterList;
        if(status){
            newList = filterList.filter((item)=>item != category.toLowerCase());  
        }else{
            newList = [...newList,category.toLowerCase()];
        }
        console.log(newList)
        let filterProdut = productList;
        if(newList.length != 0){
            filterProdut = productList.filter((product)=>newList.includes(product.category));
            console.log(filterProdut)
        }
        dispatch(changeFilterList(newList));
        dispatch(changeList(filterProdut));
        setStatus(status?false:true);
    }
    
    return (
       <li className="text-2xl flex items-center gap-2">
        <input className="w-[20px] h-[25px]"  value={status} onChange={handleChange} type="checkbox" />
        <span>{category}</span>
       </li>
    )
}