import { Link } from "react-router-dom";

export default function NavCategory(){
    return(
        <div>
            <div className="container mx-auto max-w-1170">
                <h2 className="text-center text-20px font-semibold uppercase">
                ¿Que buscas?
                </h2>
                <ul className="flex justify-center">
                    <li className=" mx-15px text-14px uppercase px-5 hover:bg-slate-300 rounded-lg">
                        <Link to="/category/camisa">camisas</Link>
                    </li>
                    <li className="mx-15px text-14px uppercase px-5  hover:bg-slate-300 rounded-lg">
                        <Link to="/category/bermuda">bermudas</Link>
                    </li>
                    <li className="mx-15px text-14px uppercase px-5  hover:bg-slate-300 rounded-lg">
                        <Link to="/category/vestido">vestidos</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}