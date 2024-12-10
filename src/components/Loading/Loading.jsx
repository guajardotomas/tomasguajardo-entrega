import {RingLoader} from "react-spinners";
export default function Loading(){
    return(
        <div className="container mx-auto flex justify-center h-50vh py-96">
            <RingLoader size={90}/>
        </div>
    )
}