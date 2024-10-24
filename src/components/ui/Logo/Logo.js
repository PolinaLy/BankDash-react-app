import "./style.scss";
import logoImage from "../../../assets/logo.svg";

export default function Logo() {
    return (
        <>
            <a className="header__logo logo"  href="#">
                <img src={logoImage} width="183" height="36" alt="Логотип BankDash." />
            </a>
        </>
    )
}