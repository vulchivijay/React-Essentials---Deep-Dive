import { useState } from 'react';
import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Tabs from './components/Tabs.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './raw-data.js';
import './App.css';

function App() {
  const [isTabSelected, setIsTabSelected] = useState();
  let tabContent = (<p>Please Select the Tab!!!</p>);

  const handleClick = (tab) => {
    setIsTabSelected(tab);
  }

  if (isTabSelected) {
    tabContent = (<>
      <h3>{EXAMPLES[isTabSelected].title}</h3>
      <code>{EXAMPLES[isTabSelected].code}</code>
    </>);
  }

  return (
    <>
      <Header />
      <main>
        <div id='core-concepts'>
          <ul>
            {CORE_CONCEPTS && CORE_CONCEPTS.map(item => {
              return <Card key={item.title} data={item} />
            })}
          </ul>
        </div>
        <div id='examples'>
          <h2>Examples:</h2>
          <menu>
            <Tabs onBtnClick={() => handleClick('components')} isSelected={isTabSelected === 'components'}>Components</Tabs>
            <Tabs onBtnClick={() => handleClick('jsx')} isSelected={isTabSelected === 'jsx'}>JSX</Tabs>
            <Tabs onBtnClick={() => handleClick('props')} isSelected={isTabSelected === 'props'}>Props</Tabs>
            <Tabs onBtnClick={() => handleClick('state')} isSelected={isTabSelected === 'state'}>State</Tabs>
          </menu>
          <div id='tab-content'>
            {tabContent}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
