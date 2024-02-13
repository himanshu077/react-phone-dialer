import { Box, IconButton, Tooltip } from "@mui/material"
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PhoneCallbackOutlinedIcon from '@mui/icons-material/PhoneCallbackOutlined';
import VoicemailOutlinedIcon from '@mui/icons-material/VoicemailOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

interface MenuButtonProps {
    className?: string;
}

const MenuButton: React.FC<MenuButtonProps> = ({ className }) => {
    const icons = [
        {icon:<PermIdentityOutlinedIcon/>,tooltip:"Contacts"},
       {icon: <PhoneCallbackOutlinedIcon/>,tooltip:"Recent Calls"},
        {icon: <VoicemailOutlinedIcon/>,tooltip:"Voicemails"},
        {icon: <ChatBubbleOutlineOutlinedIcon/>,tooltip:"Conversations"},
        {icon: <SettingsOutlinedIcon/>, tooltip:"Settings"}
    ];
    
    return (
        <Box className="!flex !flex-row !justify-evenly">
            {icons.map((row) => (
                <Tooltip title={row.tooltip} placement="top">
                    <IconButton className={className}>
                    {row.icon}
                </IconButton>
                </Tooltip>
            ))}
        </Box>
    );
}

export default MenuButton;
