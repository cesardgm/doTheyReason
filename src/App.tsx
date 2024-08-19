import React from 'react';
import './styles/App.css';
import MyTable from './components/MyTable.tsx';
import PDoom from './components/PDoom.tsx';
import MiniBlog from './components/MiniBlog.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
	<MyTable />
        <PDoom />
        <MiniBlog />
    </div>
  );
}

export default App;
