import { Collapse } from 'antd';
import { HomeButton } from '../Components/HomeButton';
const { Panel } = Collapse;

export const FAQs = () => {

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <div className="m-16 rounded-xl bg-white shadow-2xl">
                <Collapse defaultActiveKey={['1']} onChange={onChange}>
                    <Panel style={{ fontSize: "20px" }} header="Q: Will the organizers provide transportation cost for the second round ?" key="1">
                        <p>A: No, the organizers will not provide transportation cost for the second round of the hackathon. Participants must arrange their own transportation.</p>
                    </Panel>
                    <Panel style={{ fontSize: "20px" }} header="Q: Will internet access be provided during the second round?" key="2">
                        <p>A: Yes, internet access will be provided during the second round. However, it is preferred to bring your own laptop for the contest.</p>
                    </Panel>
                    <Panel style={{ fontSize: "20px" }} header="Q: What is the team size for the Blue-BIT hackathon?" key="3">
                        <p>A: The team size for the Blue-BIT hackathon should be 3-4 members.</p>
                    </Panel>
                    <Panel style={{ fontSize: "20px" }} header="Q: Am I eligible for the price if I participate only in round 1?" key="4">
                        <p>A: No, you can only get a prize after participating in the second round of the Blue-BIT hackathon and the winners of the Blue-BIT hackathon will be decided based on the evaluation of both rounds.</p>
                    </Panel>
                    <Panel style={{ fontSize: "20px" }} header="Q: Who will be the point of contact for any issues?" key="5">
                        <p>A: Panel members will be available to answer any questions and resolve any doubts during the entire 36 hours of the first round of the Blue-BIT hackathon.</p>
                    </Panel>
                    <Panel style={{ fontSize: "20px" }} header="Q: What if I am unable to commit the code in the allotted time?" key="6">
                        <p>A: You can contact the panel members, they will surely help you out with it.</p>
                    </Panel>
                </Collapse>
            </div>
            <HomeButton/>
        </>
        
    )
}
