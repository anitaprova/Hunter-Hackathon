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

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex gap-x-5 ml-50 mr-50 mt-10 p-5 rounded-3xl text-pink text-2xl mb-15">
        <div className="bg-white rounded-3xl w-[50%] relative">
          <img src="src/assets/img/base.png" className="w-full" />{" "}
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
              <TabList onChange={handleChange}>
                <Tab label="Hair" value="1" />
                <Tab label="Eyebrows" value="2" />
                <Tab label="Eyes" value="3" />
                <Tab label="Mouth" value="4" />
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
              <div className="grid grid-cols-2 grid-rows-2">
                <TabPanel
                  value="1"
                  onClick={() => setHair("pigtails")}
                  className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                >
                  <img src="src/assets/img/hair/pigtails.PNG" />
                </TabPanel>
                <TabPanel
                  value="1"
                  onClick={() => setHair("ponytail")}
                  className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                >
                  <img src="src/assets/img/hair/ponytail.PNG" />
                </TabPanel>
                <TabPanel
                  value="1"
                  onClick={() => setHair("short")}
                  className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                >
                  <img src="src/assets/img/hair/short.PNG" />
                </TabPanel>
                <TabPanel
                  value="1"
                  onClick={() => setHair("bob")}
                  className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                >
                  <img src="src/assets/img/hair/bob.PNG" />
                </TabPanel>
              </div>

              <div className="grid grid-cols-2 ">
                <TabPanel value="2">
                  <img
                    src="src/assets/img/eyebrows/normal.PNG"
                    onClick={() => setEyebrow("normal")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
                <TabPanel value="2">
                  <img
                    src="src/assets/img/eyebrows/bushy.PNG"
                    onClick={() => setEyebrow("bushy")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
                <TabPanel value="2">
                  <img
                    src="src/assets/img/eyebrows/sad.PNG"
                    onClick={() => setEyebrow("sad")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
              </div>

              <div className="grid grid-cols-2 ">
                <TabPanel value="3">
                  <img
                    src="src/assets/img/eyes/excited.PNG"
                    onClick={() => setEyes("excited")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
                <TabPanel value="3">
                  <img
                    src="src/assets/img/eyes/happy.PNG"
                    onClick={() => setEyes("happy")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
                <TabPanel value="3">
                  <img
                    src="src/assets/img/eyes/sad.PNG"
                    onClick={() => setEyes("sad")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
              </div>

              <div className="grid grid-cols-2 ">
                <TabPanel value="4">
                  <img
                    src="src/assets/img/mouth/sad.PNG"
                    onClick={() => setMouth("sad")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
                <TabPanel value="4">
                  <img
                    src="src/assets/img/mouth/happy.PNG"
                    onClick={() => setMouth("happy")}
                    className="cursor-pointer hover:border hover:border-solid hover:rounded-3xl hover:border-3"
                  />
                </TabPanel>
              </div>
            </Box>
          </TabContext>
        </div>
      </div>
    </>
  );
};

export default Profile;
