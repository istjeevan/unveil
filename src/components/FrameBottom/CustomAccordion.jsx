import React, { useEffect, useState } from "react";
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
    if (expanded?.length == 1 && !isExpanded) {
      if (activeTab == "Meetings") {
        updateHeight(900)
      } else {
        updateHeight(600)
      }
    } else {
      updateHeight(1150)
    }
    setExpanded((prevExpanded) =>
      isExpanded ? [...prevExpanded, panel] : prevExpanded.filter((item) => item !== panel)
    );
  };

  useEffect(() => {
    // for (let i = 0; i < () ? 3 : activeTab == "Emails" ? 4 : 0; i++) {
    //   setExpanded((prev) => [...prev, i])
    // }

    if (activeTab == "Activity" || activeTab == "Meetings") {
      setExpanded([0, 1]);
    } else if (activeTab == "Emails") {
      setExpanded([0, 1, 2]);
    }
    updateHeight(1150)

  }, []);

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
                <ul className={`${label == "Transcript" ? 'space-y-8' : ''} `}>
                  {title && <span className="font-[500] text-[#232529]" style={{
                    fontSize: `0.95rem`,
                    marginLeft: `-4px`
                  }}>
                    {title}</span>}
                  {arrayData &&
                    arrayData.map((item, index) => {
                      let title = item.title || "";
                      let text = item.text || "";
                      return (
                        <li key={index} style={{ listStyleType: "none", display: "flex", alignItems: "center" }}>
                          <div className="flex items-start text-sm text-[#232529]">
                            <span className={`font-[500] mr-1 ${label == "Transcript" ? 'hidden' : ''} `}>{index + 1}.</span>
                            <span className="font-[500] tracking-tight leading-relaxed" style={{fontSize: 'small'}}>
                              {title} <span className="font-[400]">
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
                              <span className={`${message ? `` : `font-[500]`} tracking-tighter text-[#232529] text-sm`}>
                                {title}
                              </span>
                              <span className="font-[400] text-[#232529] text-sm">
                                {message}
                              </span>

                              {regards ?
                                <span className="flex flex-col">
                                  {regards.map((val) => (
                                    <span className="font-[400] text-[#232529] text-sm">
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
