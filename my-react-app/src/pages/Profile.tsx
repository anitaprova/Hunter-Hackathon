import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";

const Profile = () => {
  const [value, setValue] = React.useState("1");

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="flex gap-x-5 ml-50 mr-50 mt-10 p-5 rounded-3xl text-pink text-2xl mb-15">
        <div className="bg-white rounded-3xl w-[50%]">
          <img src="src/assets/img/base.png" />
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
                <Tab label="Eyes" value="2" />
                <Tab label="Mouth" value="3" />
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
              }}
            >
              <TabPanel value="1">
                <img src="src/assets/img/pigtails.PNG" />
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
            </Box>
          </TabContext>
        </div>
      </div>
    </>
  );
};

export default Profile;
