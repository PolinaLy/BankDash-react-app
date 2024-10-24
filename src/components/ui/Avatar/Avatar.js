import "./style.scss";

export default function Avatar(props) {
    return (
        <img className={props.className + " avatar-img"} src={props.url} width={props.width} height={props.height} alt={props.alt} />
    )
}