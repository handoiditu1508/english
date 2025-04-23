import { BreakpointsContext } from "@/contexts/breakpoints";
import { Box, Tab, Tabs, useTheme } from "@mui/material";
import React, { ReactNode, useContext, useId, useState } from "react";
import { useTranslation } from "react-i18next";

type ExampleTabsProps = {
  englishExample: ReactNode;
  vietnameseExample: ReactNode;
};

function ExampleTabs({ englishExample, vietnameseExample }: ExampleTabsProps) {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const { xs } = useContext(BreakpointsContext);
  const { t } = useTranslation();
  const englishTabId = useId();
  const vietnameseTabId = useId();
  const englishTabPanelId = useId();
  const vietnameseTabPanelId = useId();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box
      sx={{
        border: theme.shape.largeBorder,
      }}>
      <Box sx={{
        borderBottom: 1,
        borderColor: theme.palette.divider,
      }}>
        <Tabs
          value={tabValue}
          aria-label="result clause examples"
          variant={xs ? "fullWidth" : "standard"}
          onChange={handleTabChange}>
          <Tab label={t("English")} id={englishTabId} aria-controls={englishTabPanelId} />
          <Tab label={t("Vietnamese")} id={vietnameseTabId} aria-controls={vietnameseTabPanelId} />
        </Tabs>
      </Box>
      <Box
        role="tabpanel"
        hidden={tabValue !== 0}
        id={englishTabPanelId}
        aria-labelledby={englishTabId}
        sx={{
          padding: 2,
        }}
      >
        {tabValue === 0 && englishExample}
      </Box>
      <Box
        role="tabpanel"
        hidden={tabValue !== 1}
        id={vietnameseTabPanelId}
        aria-labelledby={vietnameseTabId}
        sx={{
          padding: 2,
        }}
      >
        {tabValue === 1 && vietnameseExample}
      </Box>
    </Box>
  );
}

export default ExampleTabs;
