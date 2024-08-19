import React, { useState } from 'react';
import '../styles/MyTable.css'; // Ensure this file contains the CSS for the .one and .zero classes
import csvData from '../data/output.json';

const MyTable: React.FC = () => {
  // State to control the visibility of additional rows
  const [showMore, setShowMore] = useState(false);

  // Toggle function to change showMore state
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="MyTable">
      <table>
        <caption>Do LLMs Reason?</caption>
        <thead>
          <tr>
            <th>Headline</th>
            <th>arXiv ID</th>
            <th>Do They Reason?</th>
          </tr>
        </thead>
        <tbody>
          {csvData.slice(0, showMore ? csvData.length : 5).map((row, index) => (
            <tr key={index}>
              <td>{row.Headline}</td>
              <td><a className={row.Reason === "1" ? 'green' : 'red'} href={row.Link} target="_blank" rel="noopener noreferrer">{row.ID}</a></td>
              <td>
                {/* Conditional rendering based on the Reason value */}
                <span className={row.Reason === "1" ? 'one' : 'zero'}></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="showAll" onClick={toggleShowMore}>
        {showMore ? 'Show Less' : 'Show All'}
      </button>
    </div>
  );
}

export default MyTable;

