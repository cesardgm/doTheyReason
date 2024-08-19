import React from 'react';
import { BlockMath } from 'react-katex';
import '../styles/MiniBlog.css';

const MiniBlog: React.FC = () => {

  return (
    <div className="MiniBlog">
      <BlockMath math={"P(\\text{Doom}) = \\left(\\frac{\\color{green}{W_{Y}} \\color{black}{\\cdot} \\color{green}{Y}}{\\color{green}{W_{Y}} \\color{black}{\\cdot} \\color{green}{Y} \\: \\color{black}{+} \\: \\color{red}{W_{N}} \\color{black}{\\cdot} \\color{red}{N}}\\right)"}/>
      
<div className="explainer">
  <p>'No' responses are weighted more heavily than 'Yes' responses to mitigate overconfidence in the model.</p>
  <p>This is important because models, particularly those using machine learning, often have a tendency to overestimate positive outcomes due to biases in the training data or model design.</p>
  <p>By giving 'Yes' predictions a lower weight (0.5) and 'No' predictions a higher weight (4), the model requires stronger evidence before making a 'Yes' prediction.</p>
  <p>This conservative weighting helps to reduce the model's overconfidence, thereby lowering the risk of false positives.</p>
  <p>Prioritizing accuracy and skepticism leads to a more balanced and trustworthy model, particularly in scenarios where overconfidence could have serious consequences.</p>
</div>

    </div>
  );
}

export default MiniBlog;

