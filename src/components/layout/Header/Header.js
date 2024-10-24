import "./style.scss"
import Navigation from "../../blocks/Navigation/Navigation.js";
import Menu from "../../blocks/Menu/Menu.js";
import { menuList } from "../../../mocks/menuList.js";

export default function Header(){
    return (
        <header className="header">
            <Navigation title="Setting"/>
            <Menu list={menuList}/>
        </header>
    )
}