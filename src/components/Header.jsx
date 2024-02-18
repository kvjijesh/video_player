import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-[70px] bg-black">
            <div className="max-w-[90%] flex  mx-auto">
                <h1 onClick={() => { navigate('/') }} className="text-3xl font-bold m-3 md:text-4xl cursor-pointer text-red-600 ">VIDEO PLAYER</h1>
            </div>
        </div>
    )
}

export default Header