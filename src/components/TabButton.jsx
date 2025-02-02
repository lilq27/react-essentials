export default function TabButton({ children, onSelect, isSelected }) {
    //children => 리액트에서 제공

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    );
}
