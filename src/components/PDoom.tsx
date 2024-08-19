import React from 'react';
import '../styles/PDoom.css';
import { BlockMath } from 'react-katex';
import csvData from '../data/output.json';

const PDoom: React.FC = () => {
  // Count the number of '1' and '0' in the Reason field
  const yesCount = csvData.filter(row => row.Reason === "1").length;
  const noCount = csvData.filter(row => row.Reason === "0").length;

  // Calculate P_Doom
  const pDoom = (0.5 * yesCount / (0.5 * yesCount + 4 * noCount)).toFixed(2);

  return (
    <div className="PDoom">
      <BlockMath math={`P(\\text{Doom}) \\approx ${pDoom}`}/>
    </div>
  );
}

export default PDoom;

