import { Link } from "react-router-dom"
export default function Item({id,name,price,img,}) {
    return (
        <div className="flex flex-col my-10 mx-10">
            <div
                className="aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link to={`/products/${id}`}><img src={img} alt="Imagen" className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"/></Link>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                    <Link to={`/products/${id}`} className="text-22px text-sm text-gray-600 flex inset-0 uppercase"> {name} </Link>
                    </h3>
                </div>
            </div>
            <h4 className="text-sm font-medium text-blue-500">CLP$ {price}</h4>
        </div>
    )
}