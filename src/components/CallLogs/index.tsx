import { KeyboardArrowLeft, PhoneCallback } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { callLogsData } from "./Data";

interface CallLogData {
  icon: JSX.Element;
  name: string;
  date: string;
  time: string;
}

const CallLogs = () => {
  return (
    <Box className="lg:container md:!container !h-96 lg:!max-w-xs md:!max-w-xs overflow-y-auto">
      <Box className="flex border-b p-6">
        <KeyboardArrowLeft className="text-purple-400" />
        <Typography className="text-purple-400 text-sm font-semibold">
          Recents
        </Typography>
      </Box>
      {callLogsData.length === 0 ? (
        <Box className="flex items-center flex-col gap-4 py-5 bg-gray-350">
          <PhoneCallback className="text-gray-100" />
          <Typography className="text-gray-100">Opss!</Typography>
          <Typography className="text-gray-100">
            Failed to fetch recent calls
          </Typography>
          <Button className="text-xs text-black">TRY AGAIN</Button>
        </Box>
      ) : (
        callLogsData.map((data: CallLogData, index: number) => (
          <Box
            key={index}
            className="flex items-center p-2 hover:bg-gray-200 transition-colors"
          >
            <Box className="mr-4">{data.icon}</Box>
            <Box>
              <Typography className="!text-sm !text-gray-150">{data.name}</Typography>
              <Typography className="!text-xs !text-gray-100">{data.date}</Typography>
              <Typography className="!text-xs !text-gray-100">{data.time}</Typography>
            </Box>
          </Box>
        ))
      )}
    </Box>
  );
};

export default CallLogs;
