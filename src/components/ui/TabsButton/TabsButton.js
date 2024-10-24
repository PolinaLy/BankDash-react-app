import "./style.scss";

export default function TabsButton(props) {
    return (
        <button className={"tabs-button " + props.className} type="button" >{props.children}</button>
    )
}