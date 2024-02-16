import React, { useState } from "react";
import { Box } from "@mui/material";
import Tooltips from "../../Common/Tooltip";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import VoicemailOutlinedIcon from "@mui/icons-material/VoicemailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Contact from "../Contact";
import CallLogs from "../CallLogs";

const MenuButton: React.FC = () => {
  const [showContactPage, setShowContactPage] = useState<boolean>(false);
  const [showCallLogPage, setShowCallLogPage] = useState<boolean>(false);

  const handleContactClick = () => {
    setShowContactPage(true);
    
  };

  const handleCallLogClick =()=>{
    setShowCallLogPage(true)
  }

  return (
    <Box className="">
      <Box className=" !text-2xl !flex !justify-evenly !py-8">
        <Box onClick={handleContactClick}>
          <Tooltips
            title="Contacts"
            icons={<PermIdentityOutlinedIcon className="!text-purple-400"/>}
          />
        </Box>
        <Box onClick={handleCallLogClick}>
        <Tooltips
          title="Recent Calls"
          icons={<PhoneCallbackOutlinedIcon className="!text-purple-400"/>}
        />
        </Box>
        <Tooltips
          title="Voicemails"
          icons={<VoicemailOutlinedIcon className="!text-purple-400"/>}
        />
        <Tooltips
          title="Conversations"
          icons={<ChatBubbleOutlineOutlinedIcon className="!text-purple-400"/>}
        />
        <Tooltips
          title="Settings"
          icons={<SettingsOutlinedIcon className="!text-purple-400"/>}
        />
      </Box>
      {showContactPage && <Contact />} 
      {showCallLogPage && <CallLogs/>}
    </Box>
  );
};

export default MenuButton;
