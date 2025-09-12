export default function Tabs({ onBtnClick, isSelected, children }) {
  return (
    <button onClick={onBtnClick} className={isSelected ? 'active' : ''}>{children}</button>
  );
}