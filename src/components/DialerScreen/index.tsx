import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Box, IconButton, Tooltip } from "@mui/material";
import DialerSipIcon from "@mui/icons-material/DialerSip";
import DialButton from "../DialButton";
import Phone from "@mui/icons-material/Phone";
import { data } from "./Data";
import MenuButton from "../MenuButton";

const DialerScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleButtonClick = (digit: string) => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + digit);
  };

  const handleBackspace = () => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
  };

  return (
    <Box className="!container !shadow-lg !rounded-md !max-w-xs !mx-auto">
      <TextField
        variant="outlined"
        value={phoneNumber}
        fullWidth
        disabled
        className="mb-4 !bg-gray-250"
        sx={{ width: 320 }}
        InputProps={{
          endAdornment: (
            <Button
              onClick={handleBackspace}
              sx={{ color: "#a9a9a9 ", minWidth: 0 }}
            >
              <BackspaceIcon />
            </Button>
          ),
        }}
      />
      <Box className="grid grid-cols-3 gap-2 w-[320px] text-center">
        {data.map((row) => (
          <Button
            className="!flex !flex-col !text-3xl !font-bold !text-purple-400"
            key={row.label}
            onClick={() => handleButtonClick(row.label)}
          >
            {row.label}
            <span className="!text-xs !font-extrabold !text-gray-300 ">
              {row.value}
            </span>
          </Button>
        ))}
        <Button className="!ml-4 !mb-2 ">
          <Tooltip title="Dialer" placement="top">
            <IconButton>
              <DialerSipIcon className="!text-purple-400" />
            </IconButton>
          </Tooltip>
        </Button>
        <Box className="!ml-6 !mb-4">
          <DialButton icon={<Phone />} onClick={handleBackspace} />
        </Box>
      </Box>
      <div className="!border-b !border-gray-300"></div>
      <Box>
        <MenuButton className={"!text-purple-400 !my-8 !text-2xl"} />
      </Box>
    </Box>
  );
};

export default DialerScreen;
