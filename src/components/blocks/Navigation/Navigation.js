import "./style.scss";
import Logo from "../../ui/Logo/Logo";
import HeaderButton from "../../ui/HeaderButton/HeaderButton";
import settingImage from "../../../assets/setting-button.svg"
import notificationImage from "../../../assets/notification.svg"
import avatarSmallImage from "../../../assets/avatar-small.jpg"
import Avatar from "../../ui/Avatar/Avatar";

export default function Navigation(props) {
    return (
        <nav className="header__nav nav">
            <Logo />
            <div className="nav__container">
                <button className="nav__menu-toggle">
                    <span className="nav__menu-toggle-line"></span>
                    <span className="nav__menu-toggle-line"></span>
                    <span className="nav__menu-toggle-line"></span>
                </button>
                <h2 className="nav__title">{props.title}</h2>
                <div className="nav__block">
                    <input className="nav__input" type="text" placeholder="Search for something" />
                    <HeaderButton 
                        text="Setting button." 
                        image={settingImage} />
                    <HeaderButton 
                        text="Notification button." 
                        image={notificationImage} />
                </div>
                <Avatar className="nav__avatar-image" width="60" height="60" url={avatarSmallImage} alt="Фотография пользователя" />
            </div>

        </nav>
    )
}