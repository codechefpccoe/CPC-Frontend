import { useNavigate } from 'react-router-dom'
import './index.css'

export const HomeButton = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="flex justify-center font-cairo text-3xl">
                <button className="button mt-12" onClick={() => { navigate("/the-blue-bit") }}>
                    HOME
                </button>
            </div>
        </>
    )
}