import { Box } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import CloseIcon from "@mui/icons-material/Close";
import Tooltips from "../../Common/Tooltip";

const Navbar = () => {
  return (
    <Box className="!bg-transparent ">
      <Box className="!flex !justify-between">
        <Box className="!flex !flex-row">
          <Tooltips
            title="Un-dock to enable dragging"
            icons={
              <DragIndicatorIcon className="!text-xs !cursor-not-allowed" />
            }
          />
          <Tooltips
            title="Un-dock Widget"
            icons={<FolderCopyIcon className="!text-xs !cursor-pointer" />}
          />
        </Box>
        <Box>
          <CloseIcon className="!text-xs !cursor-pointer !mr-2" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
