import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Box from "@mui/material/Box";

const CustomAccordion = ({ data, activeTab, updateHeight }) => {
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    if(expanded?.length == 1 && !isExpanded){
      updateHeight(544)
    }else{
      updateHeight(1100)
    }
    setExpanded((prevExpanded) =>
      isExpanded ? [...prevExpanded, panel] : prevExpanded.filter((item) => item !== panel)
    );
  };

  return (
    <div style={{ marginLeft: "-12px" }}>
      {data?.details.map((val, index) => {
        let label = val?.label || "";
        let title = val?.title || "";
        let arrayData = val?.arrayData || [];
        return (
          <Accordion
            key={index}
            expanded={expanded.includes(index)}
            onChange={handleChange(index)}
            sx={{
              border: "none",
              boxShadow: "none",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              aria-controls={`panel${index}a-content`}
              id={`panel${index}a-header`}
              sx={{
                display: "flex",
                alignItems: "center",
                "& .MuiAccordionSummary-content": {
                  color: "#45185A",
                  fontWeight: "400",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "24px",
                }}
              >
                {expanded.includes(index) ? (
                  <ExpandMoreIcon sx={{ color: "#45185A" }} />
                ) : (
                  <ExpandLessIcon sx={{ color: "#45185A" }} />
                )}
              </Box>
              <Typography>{label}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                marginTop: `-10px`,
                marginLeft: "20px"
              }}>
              {activeTab && (activeTab == "Activity" || activeTab == "Meetings")
                ?
                <ul>
                  {title && <span className="text-base font-semibold">{title}</span>}
                  {arrayData &&
                    arrayData.map((item, index) => {
                      let title = item.title || "";
                      let text = item.text || "";
                      return (
                        <li key={index} style={{ listStyleType: "none", display: "flex", alignItems: "center" }}>
                          <div className="flex items-start">
                            <span className="font-semibold mr-1">{index + 1}.</span>
                            <span className="font-semibold tracking-tighter">
                              {title} <span className="font-normal">
                                {text}
                              </span>
                            </span>
                          </div>
                        </li>
                      );
                    })
                  }
                </ul>
                : activeTab == "Emails"
                  ? <ul >
                    {arrayData &&
                      arrayData.map((item, index) => {
                        let title = item.title || "";
                        let message = item.message || "";
                        let regards = item.regards || "";
                        return (
                          <li key={index} style={{ listStyleType: "none", display: "flex", alignItems: "center" }} >
                            <div className={`${message ? `gap-4` : ``} flex flex-col items-start`}>
                              <span className={`${message ? `` : `font-semibold`} tracking-tighter`}>
                                {title}
                              </span>
                              <span className="font-normal">
                                {message}
                              </span>

                              {regards ?
                                <span className="flex flex-col">
                                  {regards.map((val) => (
                                    <span className="font-normal">
                                      {val}
                                    </span>
                                  ))
                                  }
                                </span> : null}
                            </div>
                          </li>
                        );
                      })
                    }
                  </ul>
                  : <></>
              }
            </AccordionDetails>
          </Accordion>
        )
      })}
    </div>
  );
};

export default CustomAccordion;
