import React from 'react';
import './App.css';
import Banner from './Component/Banner/Banner';
import Navbar from './Component/Navbar/Navbar';
import Rowpost from './Component/Rowpost/Rowpost';
import {Originals,Action,Horror,Comedy,Romance} from './url'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost urls={Originals} title='Netflix Originals'  />
      <Rowpost  urls={Action} title='Action' isSmall   />
      <Rowpost  urls={Horror} title='Horror' isSmall   />
      <Rowpost  urls={Comedy} title='Comedy' isSmall   />
      <Rowpost  urls={Romance} title='Romance' isSmall   />
      <div className="footer">
       
        <h4>Copyright@sj.com</h4>
      </div>

    </div>
  );
}

export default App;
