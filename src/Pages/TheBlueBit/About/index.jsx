import { Round1 } from "./Round1"
import { Round2 } from "./Round2"

export const About = () => {
    return (
        <>
            <div className="m-2 font-cairo flex flex-col justify-center items-center ">
                <div className="mt-6 text-2xl ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-5xl">About</div>
                    </div>
                    <div className="">
                        <div className="flex flex-col justify-center items-center">
                            <div className="m-3 text-4xl ">The Blue-BIT hackathon features a two-round event that challenges participants to develop innovative solutions on a selected topic</div>
                        </div>
                        <Round1 />
                        <Round2 />
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <div className="flex flex-col justify-center items-center">
                <div>About</div>
                <div>The Blue-BIT hackathon features a two-round event that challenges participants to develop innovative solutions on a selected topic</div>
            </div>
            <Round1/>
            <Round2 /> */}