import { Box, InputAdornment, InputBase, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const Contact = () => {
  return (
    <Box>
      <Box className="!p-7 !border-b">
        <Box className="!flex !justify-around">
          <KeyboardArrowLeftIcon className="!text-purple-400" />
          <Typography className="!text-purple-400 !font-semibold !text-sm">
            Contacts
          </Typography>
          <Box>
            <EditIcon className="!text-purple-400 !text-lg !mr-3" />
            <AddIcon className="!text-purple-400 !font-semibold" />
          </Box>
        </Box>
      </Box>
      <Box className="!mt-6">
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
    </Box>
  );
};

export default Contact;
