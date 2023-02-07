import { Round1 } from "./Round1"
import { Round2 } from "./Round2"

export const About = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div>About</div>
                <div>The Blue-BIT hackathon features a two-round event that challenges participants to develop innovative solutions on a selected topic</div>
            </div>
            <Round1/>
            <Round2 />
        </>
    )
}