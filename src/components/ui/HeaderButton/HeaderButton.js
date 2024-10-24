import "./style.scss";

export default function HeaderButton (props) {
    return (
        <button className="button" type="button">
            <span className="visually-hidden">{props.text}</span>
            <img src={props.image} alt={props.text}/>
        </button>
    )
}

