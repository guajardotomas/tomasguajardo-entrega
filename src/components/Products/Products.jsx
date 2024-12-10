import ItemList from "../ItemList/ItemList.jsx";
import NavCategory from '../NavCategory/NavCategory.jsx';

export  default function ProductPage(){
    return(
        <div className="container mx-auto justify-center py-32">
            <NavCategory/>
            <ItemList/>
        </div>
    )
}