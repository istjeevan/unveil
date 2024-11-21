import React from "react";
import { overviewData } from "./data";
const Overview = () => {
  const { heading, headingLabel, paragraph, listHeading, listData } = overviewData;

  return (
    <div className="md:flex md:gap-6">
      <div className="flex-1 bg-white shadow-lg rounded-t-lg p-6 border-b-2">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl font-bold">{heading}</h2>
          <span className="text-gray-400 text-sm">{headingLabel}</span>
        </div>
        <p className="text-gray-700">{paragraph}</p>
        <p className="text-lg font-medium mt-4">{listHeading}</p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          {listData.map((item, index) => (
            <li key={index} className="mt-2">
              <strong>{item.title}:</strong> {item.data}
              {item.ul && (
                <ul className="list-disc list-inside ml-6">
                  {item.ul.map((subItem, subIndex) => (
                    <li key={subIndex}>{subItem}</li>
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
