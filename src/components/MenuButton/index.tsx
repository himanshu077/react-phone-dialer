import { Box } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneCallbackOutlinedIcon from "@mui/icons-material/PhoneCallbackOutlined";
import VoicemailOutlinedIcon from "@mui/icons-material/VoicemailOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Tooltips from "../../Common/Tooltip";

const MenuButton = () => {
  const icons = [
    {
      icon: <PermIdentityOutlinedIcon className="!text-purple-400" />,
      tooltip: "Contacts",
    },
    {
      icon: <PhoneCallbackOutlinedIcon className="!text-purple-400" />,
      tooltip: "Recent Calls",
    },
    {
      icon: <VoicemailOutlinedIcon className="!text-purple-400" />,
      tooltip: "Voicemails",
    },
    {
      icon: <ChatBubbleOutlineOutlinedIcon className="!text-purple-400" />,
      tooltip: "Conversations",
    },
    {
      icon: <SettingsOutlinedIcon className="!text-purple-400" />,
      tooltip: "Settings",
    },
  ];

  return (
    <Box className="!flex !flex-row !justify-evenly">
      {icons.map((row, index) => (
        <Box key={index} className=" !my-8 !text-2xl">
          <Tooltips title={row.tooltip} icons={row.icon} />
        </Box>
      ))}
    </Box>
  );
};

export default MenuButton;
