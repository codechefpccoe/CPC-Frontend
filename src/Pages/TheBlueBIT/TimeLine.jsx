import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import FeaturedPlayListRoundedIcon from "@mui/icons-material/FeaturedPlayListRounded";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ReportRoundedIcon from "@mui/icons-material/ReportRounded";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import ContentPasteSearchRoundedIcon from "@mui/icons-material/ContentPasteSearchRounded";
import Fade from "react-reveal/Fade";

export const TimeLine = () => {
  return (
    <>
      <div className="flex flex-col" id="timeline">
        <div className="mb-6 mt-24 text-3xl text-center">TIMELINE</div>
        <h1 className="text-center p-4 font-bold size-4">Round 1</h1>
        <Timeline position="alternate">
          <Fade left>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 1 (11 March at 10:00 AM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FeaturedPlayListRoundedIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#80D9FF" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Release of Problem Statement
                </Typography>
                <Typography>Selection of a topic </Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade right>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 1 (11 March at 12:00 PM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#80D9FF" }} />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Lock the Options + Hackathon starts
                </Typography>
                <Typography>Online Event Starts!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade left>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 2 (12 March at 11:59 PM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary">
                  <EventAvailableRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Hackathon Ends
                </Typography>
                <Typography>End of Submissions</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
        </Timeline>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-bold">Round 2</h1>
        <Timeline position="alternate">
          <Fade right align="right">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 3 (16 March at 08:30 AM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <ReportRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Reporting Time
                </Typography>
                <Typography>Offline Event Starts...</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade left>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 3 (16 March at 09:00 AM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "primary" }} />
                <TimelineDot color="primary" variant="outlined">
                  <ContactSupportRoundedIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#80D9FF" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Release of Problem Statement
                </Typography>
                <Typography>Instructed Changes discussion...</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade right>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 3 (16 March at 09:30 AM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#80D9FF" }} />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Hackathon Starts
                </Typography>
                <Typography>Implementation starts...</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade left>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 3 (16 March at 04:00 PM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary">
                  <EventAvailableRoundedIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "#80D9FF" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Offline round ends
                </Typography>
                <Typography>End of Submissions...</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade right>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 3 (16 March at 04:00 PM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "#80D9FF" }} />
                <TimelineDot color="primary" variant="outlined">
                  <ContentPasteSearchRoundedIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Evaluation Starts
                </Typography>
                <Typography>Judges starts to Evaluate...</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
          <Fade left>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#80D9FF"
              >
                Day 3 (16 March at 06:00 PM)
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary" variant="outlined">
                  <ContentPasteSearchRoundedIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Tentative Evaluation Ends
                </Typography>
                <Typography>End of Evaluation...</Typography>
              </TimelineContent>
            </TimelineItem>
          </Fade>
        </Timeline>
      </div>
    </>
  );
};
