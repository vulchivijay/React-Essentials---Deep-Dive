export default function Section({ children, title, id, ChildWrapper = '', component = '' }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <ChildWrapper>
        {children}
      </ChildWrapper>
      {component}
    </section>
  );
}