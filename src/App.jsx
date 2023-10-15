import { Box, Button, Stack, Typography } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import StopIcon from "@mui/icons-material/Stop";
import "./App.css";
import useSpeechRecognition from "./hook/useSpeechRecognition";

function App() {
  const {
    text,
    startListening,
    stopListening,
    isListenit,
    hasRecognitionSupport,
  } = useSpeechRecognition();
  console.log(text, "text");
  return (
    <>
      {hasRecognitionSupport ? (
        <>
          <Stack direction="column" spacing={2} justifyContent="space-between">
            <Box p={2}>
              <Typography variant="body1" sx={{ color: (theme) => theme.palette.grey[500] }}>
                Transcript of voice will show here...
                {text}
              </Typography>
            </Box>
            <Box
              textAlign="center"
              p={2}
              sx={{
                bottom: "0",
                position: "absolute",
                transform: " translateX(-50%)",
                left: "50%",
              }}
            >
              {isListenit ? (
                <>
                  <Typography mb={2} sx={{ color: (theme) => theme.palette.grey[500] }}>
                    Press here to stop
                  </Typography>
                </>
              ) : (
                <>
                  <Typography mb={2} sx={{ color: (theme) => theme.palette.grey[500] }}>
                    Press here to start
                  </Typography>
                </>
              )}

              <Box
                m="auto"
                width="70px"
                height="70px"
                color="black"
                sx={{ border: "2px solid #411D5F" }}
                p={1}
                borderRadius="50%"
              >
                {isListenit ? (
                  <>
                    <Button
                      size="large"
                      variant="text"
                      sx={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "primary.light",
                        color: "black",
                        borderRadius: "50%",
                        "&:hover": {
                          backgroundColor: "primary.main",
                        },
                      }}
                      onClick={stopListening}
                    >
                      <StopIcon sx={{ fontSize: "2.5rem" }} />
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size="large"
                      variant="text"
                      sx={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "primary.light",
                        color: "black",
                        borderRadius: "50%",
                        "&:hover": {
                          backgroundColor: "primary.main",
                        },
                      }}
                      onClick={startListening}
                    >
                      <MicIcon sx={{ fontSize: "2.5rem" }} />
                    </Button>
                  </>
                )}
              </Box>
            </Box>
          </Stack>
        </>
      ) : (
        <>
          <h1>No</h1>
        </>
      )}
    </>
  );
}

export default App;
