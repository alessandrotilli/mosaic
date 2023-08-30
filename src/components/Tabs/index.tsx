import React, { FC } from "react";
import Box from "@mui/material/Box";
import MUITab from "@mui/material/Tab";
import MUITabs from "@mui/material/Tabs";

import { TabsType } from "../../types/Tabs";
import Typography from "../Typography";

export const DATA_CY_DEFAULT = "tabs";

const Tabs: FC<TabsType> = ({ dataCy = DATA_CY_DEFAULT, labelList, color = "primary", orientation = "horizontal" }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={orientation === "vertical" ? { display: "flex" } : { display: undefined }}>
      <MUITabs
        data-cy={dataCy}
        value={value}
        onChange={handleChange}
        textColor={color}
        indicatorColor={color}
        orientation={orientation}
        variant={orientation === "vertical" ? "scrollable" : "standard"}
      >
        {labelList.map((i, index) => {
          return <MUITab label={i.label} wrapped={i.wrapped} key={index} />;
        })}
      </MUITabs>
      {labelList[value].children && (
        <div role="tabpanel" id={`simple-tabpanel-${value}`} aria-labelledby={`${orientation}-tab-${value}`}>
          <Box sx={{ p: 3 }}>
            <Typography>{labelList[value].children}</Typography>
          </Box>
        </div>
      )}
    </Box>
  );
};

export default Tabs;