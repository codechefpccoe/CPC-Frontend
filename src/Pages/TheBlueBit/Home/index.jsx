import TableRound1 from "../Components/TableRound1"
import TableRound2 from "../Components/TableRound2"

export const Home = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <img src="thebluebitlogo.png"></img>
                <div>Think Twice Code Once</div>
            </div>
            <TableRound1 />
            <TableRound2 />
        </> 
    )
}

