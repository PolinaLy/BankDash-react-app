import "./style.scss"
import TabsButton from "../../ui/TabsButton/TabsButton";

export default function Tabs() {
    return (
                <ul className="tabs">
                    <TabsButton className="tabs-button__active">Edit Profile</TabsButton>
                    <TabsButton>Preferences</TabsButton>
                    <TabsButton>Security</TabsButton>
                </ul>
    )
}