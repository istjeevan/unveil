import React from "react";
import { overviewData } from "./data";
const Overview = () => {
  const { heading, headingLabel, paragraph, listHeading, listData } = overviewData;

  return (
    <div className="md:flex md:gap-6">
      <div className="flex-1 bg-white shadow-lg rounded-t-lg p-6 border">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold">{heading}</h2>
          <span className="text-gray-400 text-xs">{headingLabel}</span>
        </div>
        <p className="text-gray-400 mt-8 mb-6"
          style={{
            fontSize: `0.84rem`,
            lineHeight: `1rem`
          }}>
          {paragraph}</p>
        <p className="text-lg font-medium mt-4">{listHeading}</p>
        <ul className="list-disc text-gray-700 mt-4 ml-6">
          {listData.map((item, index) => (
            <li key={index} className="mt-4 text-sm tracking-wide">
              <strong>{item.title}:</strong>
              <span style={{
                fontSize: `0.76rem`,
                lineHeight: `1rem`
              }}>
                {item.data}
              </span>
              {item.ul && (
                <ul className="list-disc ml-6 space-y-[-2px]">
                  {item.ul.map((subItem, subIndex) => (
                    <li key={subIndex}  style={{
                      fontSize: `0.76rem`,
                      lineHeight: `1rem`
                    }}>{subItem}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Overview;
