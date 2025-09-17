import { useState } from 'react';
import { EXAMPLES } from './../raw-data.js';
import TabButton from './TabBtn.jsx';
import Section from './Section.jsx';
import TabContent from './TabContent.jsx';

const Tabs = ['components', 'jsx', 'props', 'state'];

export default function Examples() {
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
  else {
    handleClick('components');
  }

  return (
    <Section id='examples' title='Examples' ChildWrapper='menu' component={<TabContent id='tab-content'>{tabContent}</TabContent>}>
      {Tabs && Tabs.map(tab => {
        return (
          <TabButton key={tab} onClick={() => handleClick(tab)} isSelected={isTabSelected === tab}>{tab}</TabButton>
        );
      })}
    </Section>
  );
}