import { HomeButton } from "../Components/HomeButton"

export const Rules = () => {
    return (
        <>
            <div className="m-8 font-cairo flex flex-col justify-center items-center">      
                <div className="m-6 text-4xl ">
                    <div className="flex flex-col justify-center items-center">
                        <div className="m-12 text-5xl ">General Rules</div>
                    </div>
                    <div>
                        <div className="m-3">
                            1. The organizers reserve the right to make changes to the rules and regulations of the hackathon at any time.
                        </div>
                        <div className="m-3">
                            2. The decision of the judges will be final and binding.
                        </div>
                        <div className="m-3">
                            3. Participants must comply with all rules and regulations of the hackathon, including those related to the selection and implementation of their chosen topic.
                        </div>
                        <div className="m-3">
                            4. Participants must inform the organizers of their selected topic before the start of the first round.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <HomeButton/>
                    </div>
                </div>
            </div>
        </>
    )
}