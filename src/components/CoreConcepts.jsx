import Card from './Card.jsx';
import Section from './Section.jsx';
import { CORE_CONCEPTS } from './../raw-data.js';

export default function CoreConcepts() {
  return (
    <Section id='core-concepts' title='Core Concepts' ChildWrapper='ul'>
      {CORE_CONCEPTS && CORE_CONCEPTS.map(item => {
        return <Card key={item.title} {...item} />
      })}
    </Section>
  )
}