import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from "../../common/styles/Container.module.css";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import {Icons} from "../Icon/Icons";
import {useScrollDirection} from "../../hooks/scrollDirection";
import {useEffect, useState} from "react";

export const Header = () => {
    const [nav, setNav] = useState(false)
    const scroll = useScrollDirection()

    useEffect(() => {
        nav && (document.body.style.overflow = 'hidden')
        !nav && (document.body.style.overflow = 'unset')
    }, [nav]) // отключает прокрутку при открытом меню


    return (
        <div className={`${s.header} ${scroll === 'down' ? s.hide : ''}`} id={'header'}>
            <div className={`${styleContainer.container} ${s.container}`}>
                <Nav active={nav} editActive={setNav}/>

                <div className={s.slash}>X</div>

                <div className={s.wrapperIcon}>
                    <Icons className={s.icon}/>
                </div>

                <div className={s.mobileBtn} onClick={() => setNav(!nav)}>
                    {nav
                        ? <div><AiOutlineClose color={'#fff'} size={30}/></div>
                        : <AiOutlineMenu color={'#fff'} size={30}/>
                    }
                </div>
            </div>
        </div>
    );
}

