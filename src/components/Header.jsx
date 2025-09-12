import coreConceptImage from '../assets/react-core-concepts.png'

const getRandomNumber = () => {
  return Math.floor(Math.random() * 4) + 1;
}

const words = ['Apple', 'Banana', 'Cat', 'Dog', 'Elephant']

export default function Header() {
  return (
    <header>
      <img src={coreConceptImage} alt='React Essentials' />
      <h1>React Essentials</h1>
      <p><b>{words[getRandomNumber()]}</b>, React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}