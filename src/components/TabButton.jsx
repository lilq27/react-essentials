export default function TabButton({ children, onSelect }) {
    //children => 리액트에서 제공

    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}
