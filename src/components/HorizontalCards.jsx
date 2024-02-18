import { useNavigate } from "react-router-dom";
import { setvideo } from "../features/video/videoSlice";
import { useDispatch } from "react-redux";

function HorizontalCards({ data }) {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handleClick=()=>{
        dispatch(setvideo(data));
        navigate('/watch');
    }
    return (
        <div className="flex flex-col items-center my-3 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img onClick={handleClick} className="object-cover w-full rounded-t-lg h-90 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={data.thumb} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
                <p className="mb-3 font-normal text-gray-700">{data.subtitle}</p>
            </div>
        </div>

    )
}

export default HorizontalCards