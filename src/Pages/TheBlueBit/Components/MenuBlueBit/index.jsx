import { useNavigate } from 'react-router-dom'
import './index.css'

export const MenuBlueBit = () => {

    const navigate = useNavigate()

    return(
        <>
            <div className="flex justify-center font-cairo text-3xl">
                <button className="button" onClick={()=>{navigate("/the-blue-bit/about")}}>
                    ABOUT
                </button>
                <button className="button mx-10" onClick={() => { navigate("/the-blue-bit/rules") }}>
                    RULES
                </button>
                <button className="button" onClick={() => { navigate("/the-blue-bit/faqs") }}>
                    FAQs
                </button>
            </div>
        </>
    )
}