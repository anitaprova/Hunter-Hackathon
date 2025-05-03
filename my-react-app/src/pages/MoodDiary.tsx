import { useState } from "react";
import { styled } from "@mui/material/styles";
import Rating, { IconContainerProps } from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import MicIcon from "@mui/icons-material/Mic";
import Button from "@mui/material/Button";

const MoodDiary = () => {
  const [mood, setMood] = useState<number | null>(2);

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

  const handleFileChange = (event) => {
    console.log(event.target.files);
    // OR
  };

  return (
    <>
      <div className="bg-white flex flex-col ml-50 mr-50 mt-10 p-5 rounded-3xl shadow-light text-pink text-2xl">
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

          <label htmlFor="files">Upload your day</label>
          <input
            type="file"
            accept="image/*"
            name="files"
            id="files"
            onChange={handleFileChange}
            multiple
            className="text-sm bg-lightpink w-fit rounded-md p-2"
          />
          <div>
            <p>Notes <MicIcon /></p>
            <textarea className="bg-lightpink w-full rounded-xl text-lg" />
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