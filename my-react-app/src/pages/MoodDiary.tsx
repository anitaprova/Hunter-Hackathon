import { useState } from "react";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import MicIcon from "@mui/icons-material/Mic";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import CreateIcon from "@mui/icons-material/Create";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { useRef } from "react";
import { ReactMediaRecorder } from "react-media-recorder";

const MoodDiary = () => {
  const [mood, setMood] = useState<number | null>(2);
  const [files, setFiles] = useState<File[]>([]);
  const [video, setVideo] = useState<string>("");
  const [openCanvas, setOpenCanvas] = useState(false);
  const [openRecording, setOpenRecording] = useState(false);
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [image, setImage] = useState<string>("");
  const [text, setText] = useState<string>("");
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  
  const recognition = new SpeechRecognition();

  recognition.onresult = (event: any) => {
    const transcript = event.results[0][0].transcript;
    setText(transcript);
  };

  function submitForm() {
    alert(`You entered the form`);
  }

  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));

  const customIcons: {
    [index: string]: {
      icon: React.ReactElement<unknown>;
      label: string;
    };
  } = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: "Satisfied",
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: "Very Satisfied",
    },
  };

  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    console.log(selectedFiles);
    setFiles(Array.from(selectedFiles));
  };

  return (
    <>
      <div className="bg-white flex flex-col ml-50 mr-50 mt-10 p-5 rounded-3xl shadow-light text-pink text-2xl mb-15">
        <form action={submitForm} className="flex flex-col gap-y-5">
          <p>How are you today?</p>
          <StyledRating
            name="highlight-selected-only"
            value={mood}
            onChange={(event, newValue) => {
              setMood(newValue);
            }}
            getLabelText={(value: number) => customIcons[value].label}
            slots={{ icon: IconContainer }}
            sx={{ "& svg": { fontSize: 75 } }}
          />

          <p>Upload your day</p>
          <div className="flex flex-col gap-x-5">
            <div>
              <label
                htmlFor="files"
                className="cursor-pointer flex items-center gap-2 bg-lightpink p-2 rounded-md w-fit"
              >
                <FileUploadIcon /> <p>Choose file(s)</p>
              </label>
              <input
                type="file"
                accept="image/*"
                name="files"
                id="files"
                onChange={handleFileChange}
                multiple
                className="hidden"
              />
            </div>
            <div className="text-sm">
              {files.length > 0 && (
                <ul>
                  {files.map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setOpenCanvas(true)}
              className="flex items-center gap-2 bg-lightpink p-2 rounded-md w-fit"
            >
              <CreateIcon /> <p>Draw</p>
            </button>

            <Modal open={openCanvas} onClose={() => setOpenCanvas(false)}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "white",
                  borderRadius: 5,
                  boxShadow: 24,
                  p: 4,
                  fontFamily: "Itim",
                }}
                className="flex flex-col justify-center"
              >
                <h2 className="text-xl mb-4">Draw your day ✏️</h2>
                <ReactSketchCanvas
                  ref={canvasRef}
                  width="650px"
                  height="400px"
                  strokeWidth={4}
                  strokeColor="hotpink"
                  style={{ border: "1px solid #FB4570", borderRadius: "5px" }}
                />

                <button
                  onClick={async () => {
                    if (!canvasRef.current) return;
                    const image = await canvasRef.current.exportImage("png");
                    console.log(image);
                    setImage(image);
                    setOpenCanvas(false);
                  }}
                  className="mt-4 bg-hotpink text-white p-2 rounded-sm"
                >
                  Save Drawing
                </button>
              </Box>
            </Modal>

            {image && (
              <img
                src={image}
                alt="Your drawing"
                className="border border-solid rounded-xl mt-5"
              />
            )}
          </div>

          <div>
            <p className="mb-5">
              Write or record your thoughts{" "}
              <span
                onClick={() => setOpenRecording(true)}
                className="border border-solid border-3 p-1 rounded-full cursor-pointer"
              >
                <MicIcon />
              </span>
            </p>

            <Modal open={openRecording} onClose={() => setOpenRecording(false)}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "white",
                  borderRadius: 5,
                  boxShadow: 24,
                  p: 4,
                  fontFamily: "Itim",
                  width: "650px",
                  minHeight: "250px",
                }}
              >
                <ReactMediaRecorder
                  audio
                  render={({
                    status,
                    startRecording,
                    stopRecording,
                    mediaBlobUrl,
                  }) => (
                    <div className="flex flex-col justify-center">
                      <p className="text-pink text-2xl">Status: {status}</p>
                      <div className="flex justify-around gap-x-5 mb-5 mt-5">
                        <button
                          onClick={() => {
                            startRecording();
                            recognition.start();
                          }}
                          className="bg-pink p-2 rounded-xl text-white cursor-pointer"
                        >
                          Start Recording
                        </button>
                        <button
                          onClick={stopRecording}
                          className="bg-fushia p-2 rounded-xl text-white cursor-pointer"
                        >
                          Stop Recording
                        </button>
                      </div>

                      {mediaBlobUrl && (
                        <video
                          src={mediaBlobUrl}
                          controls
                          className="h-fit p-0 mt-0"
                        />
                      )}

                      <button
                        onClick={() => {
                          if (mediaBlobUrl) setVideo(mediaBlobUrl);
                          setOpenRecording(false);
                        }}
                        className="mt-4 bg-hotpink text-white p-2 rounded-sm cursor-pointer"
                      >
                        Save Recording
                      </button>
                    </div>
                  )}
                />
              </Box>
            </Modal>

            <textarea
              className="bg-lightpink w-full rounded-xl p-3 text-lg text-fushia"
              rows={8}
              value={text}
              onChange={(event) => setText(event.target.value)}
            />

            {video && (
              <div className="flex justify-center">
                <video src={video} controls className="p-0 mt-0" />
              </div>
            )}
          </div>

          <button
            className="bg-hotpink p-3 rounded-xl text-white cursor-pointer"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default MoodDiary;
