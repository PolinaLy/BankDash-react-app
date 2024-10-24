import "./style.scss";

export default function Button(props) {
    return (
        <button className={props.className + " btn"} type="props.type">{props.children}</button>
    )
}