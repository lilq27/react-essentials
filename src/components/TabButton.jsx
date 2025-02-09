export default function TabButton({ children, isSelected, ...props }) {
    //children => 리액트에서 제공

    return (
        <li>
            {/* onClick={onSelect} => ...props */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}
