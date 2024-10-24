import "./style.scss";
import avatarImage from "../../../assets/avatar.jpg"
import Avatar from "../../ui/Avatar/Avatar";
import Tabs from "../../blocks/Tabs/Tabs";
import FormUserInfo from "../../blocks/FormUserInfo/FormUserInfo";
import { userInfoList } from "../../../mocks/userInfoList";


export default function Main () {
    return (
        <main className="main">
            <div className="main__container">
                <Tabs />

                <div className="main__user-info">
                    <div className="main__avatar-container">
                    <Avatar className="main__avatar-image" width="130" height="130" url={avatarImage} alt="Фотография пользователя" />
                    <button className="main__avatar-edit"></button>
                    </div>
                
                <FormUserInfo list={userInfoList}/>
                </div>
            </div>
        </main>
    )
}