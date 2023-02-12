import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  background: "#24242B",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "70vh",
  overflow: "auto",
  color: "white",
  padding : "20px"
};

export const Process = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <div
          onClick={handleOpen}
          className="rounded-lg bg-sky-600 px-10 py-3 w-fit cursor-pointer shadow-2xl shadow-slate-600"
        >
          Process
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="text-3xl py-5 text-center">Process</div>
            <div className="text-2xl py-5">Round 1 (Online)</div>
            <ol>
              <div className="text-md">
                <p>
                  1. Participants will be given 2 hours prior to the start of
                  the first round to choose their preferred topic from a list of
                  options provided by the organizers.{" "}
                </p>
                <p>
                  2. The first round will be an online event lasting 36 hours,
                  during which participants must work on their selected topic.
                </p>
                <p>
                  3. Participants must create a public Github repository after
                  fixing their topic for their project and add “codechefpccoe”
                  as a collaborator. All code and progress must be shared in
                  this repository.
                </p>
                <p>
                  4. All submissions must be made within the 36-hour time frame,
                  and any submissions made after the deadline will not be
                  accepted.
                </p>
                <p>
                  5. Participants must make regular commity requests every 6
                  hours during the first round of the hackathon i.e. 12 pm, 6
                  pm, 12 am, 6 am, 12 pm, 6pm, 11:59pm
                </p>
                <p>
                  6. Commits are also allowed in between of 6 hours but the
                  commit every 6 hours are mandatory
                </p>
                <p>
                  7. The top participants from the first round will be selected
                  to advance to the second round.
                </p>
                <p>8. This is going to be managed in Discord.</p>
                <p>
                  9. There is a technically strong panel member commit which
                  will be present in the first 2 hours of problem deciding phase
                  or clearing doubts of the participants
                </p>
                <p>
                  10. There are 3 Panels of 4 members each covering all the
                  domains in the hackathon which will be present for every 12
                  hours for solving the issues of the participants.
                </p>
              </div>
            </ol>
            <div className="text-2xl py-5">Round 2 (Offline)</div>
            <ol>
              <div className="text-md">
                <p>1. The second round will be an offline event.</p>
                <p>
                  2. Participants will receive specific advancement to their
                  project from the judges, which they must implement within the
                  next 6 hours.
                </p>
                <p>
                  3. At the end of this period, panel members will come to each
                  participant to review their work and receive an explanation of
                  their idea and project.
                </p>
                <p>
                  4. You will be provided with Internet access and electricity,
                  we prefer bringing your personal laptop for the contest since
                  you can easily access the code.
                </p>
              </div>
            </ol>
          </Box>
        </Modal>
      </div>
    </>
  );
};
