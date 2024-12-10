import {useEffect, useState} from "react";
import {getProducts} from "../../Data/asyncMock.jsx";
import Loading from "../Loading/Loading.jsx";
import Item from "../Item/Item.jsx";

export default function ItemList({ products: initialProducts }){
    const [ products, setProducts ] = useState(initialProducts || []);
    const [ loading, setLoading ] = useState(!initialProducts);

    useEffect(() =>{
        if(!initialProducts){
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    },[initialProducts]);

    return(
        <>
            {loading?(
                <div>
                    <Loading/>
                </div>
            ):(
                <div className="flex flex-wrap justify-center py-20">
                    {products.map((prod) =>(
                        <Item {...prod} key={prod.id}/>
                    ))}
                </div>
            )}

        </>
    )
}
