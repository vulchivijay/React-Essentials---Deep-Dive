export default function Card({ data }) {
  return (
    <li>
      <img src={data.image} alt={data.title} />
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </li>
  )
}