import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box } from "@mui/material";
import Navbar from "../Navbar";
import DialerScreen from "../DialerScreen";
import DialButton from "../DialButton";

const Dashboard = () => {
  const [isCardsOpen, setIsCardsOpen] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsCardsOpen(!isCardsOpen);
  };

  return (
    <>
      <Box className="lg:!container md:!container md:max-w-sm lg:!max-w-xs !relative">
        {" "}
        {isCardsOpen && (
          <Box className="!mt-12">
            {" "}
            <Navbar />
            <DialerScreen />
          </Box>
        )}
        <Box className="!fixed !top-2/3 left-4">
          <DialButton icon={<PhoneIcon />} onClick={handleIconClick} />
        </Box>
        {/* <Contact /> */}
        {/* <CallLogs />  */}
      </Box>
    </>
  );
};

export default Dashboard;