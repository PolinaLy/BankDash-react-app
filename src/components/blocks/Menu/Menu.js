import image from "../../../assets/sprite.svg"
import "./style.scss"

export default function Menu({list}) {

    const listItems = list.map(item => {        

        if ( item.active ) {
            return ( <li className="menu__item menu__item_active" key={item.id}>
                        <svg className="menu__item-img" width="25" height="25" aria-label={item.title} focusable="false">
                            <use href={`${image}${item.image}`}></use>
                         </svg>
                        <a className="menu__item-link" href={item.link}>{item.title}</a>
                    </li>)
            }
        return (
            <li className="menu__item" key={item.id}>
                <svg className="menu__item-img" width="25" height="25" aria-label={item.title} focusable="false">
                    <use href={`${image}${item.image}`}></use>
                </svg>
                <a className="menu__item-link" href={item.link}>{item.title}</a>
            </li>
        )
    })

    return (
        <div className="header__menu menu">
                {list?.length ? (
                    <ul className="menu__list">
                        {listItems}
                    </ul>
                ): null} 
        </div>
    )
}