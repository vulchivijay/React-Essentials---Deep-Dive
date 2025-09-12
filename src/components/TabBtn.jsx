export default function TabButton({ isSelected, children, ...props }) {
  return (
    <button {...props} className={isSelected ? 'active' : ''}>{children}</button>
  );
}