import "./style.scss";
import InputUserInfo from "../../ui/InputUserInfo/InputUserInfo";
import Button from "../../ui/Button/Button";

export default function FormUserInfo({list}) {
    const listInputs = list.map(input => {
        if (input.label === "Date of Birth" ) {
            return (
                <InputUserInfo  className="form-user-info" label={input.label} id={input.id} type={input.type} value={input.value} >
                     <button className="form-user-info__date" type="button"></button>
                </InputUserInfo>
                )
        } else {
            return (
                <InputUserInfo className="form-user-info" label={input.label} id={input.id} type={input.type} value={input.value} />
                )
        }        
       
    });

    return(
        <form className="form-user-info">
            {listInputs}
            <Button className="form-user-info__btn" type="submit">Save</Button>
        </form>
    )
}