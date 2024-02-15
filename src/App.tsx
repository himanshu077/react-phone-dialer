import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import DialButton from "./components/DialButton";
import DialerScreen from "./components/DialerScreen";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  const [isCardsOpen, setIsCardsOpen] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsCardsOpen(!isCardsOpen);
  };

  return (
    <>
      <Box className="!container !max-w-xs !relative">
        {" "}
        {isCardsOpen && (
          <Box className="!mt-12">
            {" "}
            <Navbar/>
            <DialerScreen />
          </Box>
        )}
        <Box className="!fixed !top-2/3 left-4">
          <DialButton icon={<PhoneIcon />} onClick={handleIconClick} />
        </Box>
        {/* <Contact/> */}
      </Box>
    </>
  );
}

export default App;
