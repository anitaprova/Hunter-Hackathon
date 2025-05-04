import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

const Profile = () => {
  const [value, setValue] = useState("1");
  const [hair, setHair] = useState<string>("");
  const [eyebrow, setEyebrow] = useState("");
  const [eyes, setEyes] = useState("");
  const [mouth, setMouth] = useState("");
  const [nose, setNose] = useState("");
  const [skin, setSkin] = useState("base");

  const allHair = [
    "afro",
    "bob",
    "pigtails",
    "ponytail",
    "short",
    "long",
    "dreads",
    "hijab",
  ];
  const allEyebrows = ["bushy", "normal", "sad"];
  const allEyes = ["droopy", "excited", "happy", "open", "pretty", "sad"];
  const allMouths = ["happy", "lipstick", "sad", "smile"];
  const allNoses = ["round", "shaded", "normal"];
  const allSkin = ["light", "tan", "medium", "dark"];

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex gap-x-5 ml-50 mr-50 mt-10 p-5 rounded-3xl text-pink text-2xl mb-15">
        <div className="bg-white rounded-3xl w-[50%] ">
          <div className="relative">
            <img src={`src/assets/img/skin/${skin}.PNG`} className="w-full" />{" "}
            {hair && (
              <img
                src={`src/assets/img/hair/${hair}.PNG`}
                className="absolute top-0 left-0 w-full"
              />
            )}
            {eyebrow && (
              <img
                src={`src/assets/img/eyebrows/${eyebrow}.PNG`}
                className="absolute top-0 left-0 w-full"
              />
            )}
            {eyes && (
              <img
                src={`src/assets/img/eyes/${eyes}.PNG`}
                className="absolute top-0 left-0 w-full"
              />
            )}
            {mouth && (
              <img
                src={`src/assets/img/mouth/${mouth}.PNG`}
                className="absolute top-0 left-0 w-full"
              />
            )}
            {nose && (
              <img
                src={`src/assets/img/nose/${nose}.PNG`}
                className="absolute top-0 left-0 w-full"
              />
            )}
          </div>
          <div className="ml-5 mr-5">
            <p>Skin colors:</p>
            <div className="flex gap-x-5 justify-around">
              {allSkin.map((skin) => (
                <p
                  className="cursor-pointer"
                  onClick={() => setSkin(skin)}
                >
                  {skin}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                bgcolor: "white",
                borderRadius: 5,
                boxShadow: 5,
                p: 4,
                fontFamily: "Itim",
              }}
            >
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#FF4E50",
                  },
                }}
              >
                <Tab
                  label="Hair"
                  value="1"
                  sx={{
                    fontFamily: "Itim",
                    color: "#FB8DA0",
                    "&.Mui-selected": {
                      color: "#FB4570",
                    },
                  }}
                />
                <Tab
                  label="Eyebrows"
                  value="2"
                  sx={{
                    fontFamily: "Itim",
                    color: "#FB8DA0",
                    "&.Mui-selected": {
                      color: "#FB4570",
                    },
                  }}
                />
                <Tab
                  label="Eyes"
                  value="3"
                  sx={{
                    fontFamily: "Itim",
                    color: "#FB8DA0",
                    "&.Mui-selected": {
                      color: "#FB4570",
                    },
                  }}
                />
                <Tab
                  label="Mouth"
                  value="4"
                  sx={{
                    fontFamily: "Itim",
                    color: "#FB8DA0",
                    "&.Mui-selected": {
                      color: "#FB4570",
                    },
                  }}
                />
                <Tab
                  label="Nose"
                  value="5"
                  sx={{
                    fontFamily: "Itim",
                    color: "#FB8DA0",
                    "&.Mui-selected": {
                      color: "#FB4570",
                    },
                  }}
                />
              </TabList>
            </Box>

            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                bgcolor: "white",
                borderRadius: 5,
                boxShadow: 5,
                p: 4,
                fontFamily: "Itim",
                marginTop: "20px",
                width: "full",
              }}
            >
              <div className="grid grid-cols-3 grid-rows-2">
                {allHair.map((hair) => (
                  <TabPanel
                    value="1"
                    onClick={() => setHair(hair)}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  >
                    <img src={`src/assets/img/hair/${hair}.PNG`} />
                  </TabPanel>
                ))}
              </div>

              <div className="grid grid-cols-2 ">
                {allEyebrows.map((eyebrow) => (
                  <TabPanel
                    value="2"
                    onClick={() => setEyebrow(eyebrow)}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  >
                    <img src={`src/assets/img/eyebrows/${eyebrow}.PNG`} />
                  </TabPanel>
                ))}
              </div>

              <div className="grid grid-cols-3">
                {allEyes.map((eyes) => (
                  <TabPanel
                    value="3"
                    onClick={() => setEyes(eyes)}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  >
                    <img src={`src/assets/img/eyes/${eyes}.PNG`} />
                  </TabPanel>
                ))}
              </div>

              <div className="grid grid-cols-2 ">
                {allMouths.map((mouths) => (
                  <TabPanel
                    value="4"
                    onClick={() => setMouth(mouths)}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  >
                    <img src={`src/assets/img/mouth/${mouths}.PNG`} />
                  </TabPanel>
                ))}
              </div>
              <div className="grid grid-cols-2 ">
                {allNoses.map((noses) => (
                  <TabPanel
                    value="5"
                    onClick={() => setNose(noses)}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  >
                    <img src={`src/assets/img/nose/${noses}.PNG`} />
                  </TabPanel>
                ))}
              </div>
            </Box>
          </TabContext>
        </div>
      </div>
    </>
  );
};

export default Profile;
