function TabButton(props) {
    return (
    <li>
        <button className={props.isClicked ? "active" : undefined} onClick={props.onSelect}>{props.children}</button>
    </li>
    )
}

export default TabButton;