import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import DialButton from "./components/DialButton";
import DialerScreen from "./components/DialerScreen";
import { Box } from "@mui/material";

function App() {
  const [isCardsOpen, setIsCardsOpen] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsCardsOpen(!isCardsOpen);
  };

  return (
    <>
      <Box >
        {" "}
        {isCardsOpen && <DialerScreen />}
        <DialButton icon={<PhoneIcon />} onClick={handleIconClick} />
      </Box>
    </>
  );
}

export default App;
