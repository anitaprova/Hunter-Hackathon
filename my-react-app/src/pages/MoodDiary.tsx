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
import ReactCanvasPaint from "react-canvas-paint";
import "react-canvas-paint/dist/index.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const MoodDiary = () => {
  const [mood, setMood] = useState<number | null>(2);
  const [files, setFiles] = useState<File[]>([]);

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

  console.log(files);

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
            /* <CreateIcon fontSize="large" />
            {/* { <ReactCanvasPaint />} */}
          </div>

          <div>
            <p>
              Notes <MicIcon />
            </p>
            <textarea
              className="bg-lightpink w-full rounded-xl text-lg"
              rows={8}
            />
          </div>

          <button
            className="bg-hotpink p-3 rounded-xl text-white"
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