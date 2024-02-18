import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setvideo } from "../features/video/videoSlice";

export const Card = ({ data }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setvideo(data));
        navigate('/watch');
    };

    return (
        <>
            <div className="max-w-sm  m-3 bg-white border border-gray-200 rounded-lg shadow shadow-slate-600">
                <img onClick={handleClick} className="rounded-t-lg cursor-pointer" src={data.thumb} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.subtitle}</p>
                </div>
            </div>
        </>
    );
};
