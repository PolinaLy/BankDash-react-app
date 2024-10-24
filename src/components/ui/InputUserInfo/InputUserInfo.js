import "./style.scss"

export default function InputUserInfo(props) {
    return (
        <div className={props.className + "__block-input"}>
        <label className={props.className + "__label"}>{props.label}
            <input  key={props.id} className={props.className + "__input input-user-info"} type={props.type} value={props.value}/>
        </label>
        {props.children}
        </div>
    )
}