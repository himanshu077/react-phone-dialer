import { Box, InputAdornment, InputBase, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import ContactList from "../ContactList";
import { contactData, letters } from "../ContactList/Data";
import Tooltips from "../../Common/Tooltip";

const Contact = () => {
  return (
    <Box className="z-40">
      <Box className="!p-7 !border-b">
        <Box className="!flex !justify-around">
          <KeyboardArrowLeftIcon className="!text-purple-400" />
          <Typography className="!text-purple-400 !font-semibold !text-sm !pt-1">
            Contacts
          </Typography>
          <Box className="!flex !flex-row">
            <Tooltips title="Edit" icons={<EditIcon className="!text-purple-400 !text-lg" />}/>
            <Tooltips title="Create a new Contact" icons={<AddIcon className="!text-purple-400 !font-bold !pb-1" />}/>
          </Box>
        </Box>
      </Box>
      <Box className="!my-6 !flex !justify-center !bg-transparent">
        <InputBase
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon className="!text-xl !ml-2" />
            </InputAdornment>
          }
          placeholder="Search"
          className="!py-1 !border-2 !bg-transparent !rounded-3xl !w-[80%] !text-[--text-color]"
        />
      </Box>
      <Box className="!bg-gray-350">
        <ContactList 
        letters={letters}
        contacts={contactData}
        />
      </Box>
    </Box>
  );
};

export default Contact;
