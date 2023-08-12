import s from './Footer.module.scss'
import styleContainer from "../../common/styles/Container.module.css";
import {Icons} from "../Icon/Icons";
import {Fade} from "react-awesome-reveal";

export const Footer = () => {
    return (
        <Fade triggerOnce duration={1500}>
            <div className={s.footerBlock}>
                <div className={`${styleContainer.container} ${s.container}`}>
                    <h4 className={s.title}>You can find me here:</h4>
                    <div className={s.wrapper}>
                        <Icons className={s.icon}/>
                    </div>
                    <span>© 2023 All rights reserved</span>
                </div>
            </div>
        </Fade>
    );
};
