import s from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import mainImg from '../../assets/image/imgMainPage/mainimg.jpg'
import cv from "../../assets/CV_KozlovVA.pdf"
import Tilt from 'react-parallax-tilt';
import {useWindowSize} from "../../hooks/windowSize";
import {Fade} from "react-awesome-reveal";
import {useAppSelector} from "../../bll/store.ts";
import {MainType} from "../../bll/app-reducer.ts";
import ReactTypingEffect from "react-typing-effect";






export const Main = () => {
    const mainData = useAppSelector<MainType>(state => state.app.main)
    const windowSize = useWindowSize()

    return (
        <Fade triggerOnce duration={0}>
            <div className={s.mainBlock} id={'main'}>
                <div className={`${styleContainer.container} ${s.container}`}>
                    <div className={s.text}>
                        <h1 className={s.name}>{mainData.firstName} <span>{mainData.lastName}</span></h1>

                        {
                            windowSize > 500
                                ? <ReactTypingEffect
                                    text={mainData.description} speed={50} typingDelay={1000}
                                    className={s.description}/>
                                : <p className={s.description}>{mainData.description}</p>
                        }

                        <div className={s.btnWrapper}>
                            <a href='#contact'>
                                <div className={s.btnGet}>Get Connected</div>
                            </a>
                            <a href={cv} download >
                                <div className={s.btnCv}>Download CV</div>
                            </a>
                        </div>
                    </div>

                    <Tilt tiltMaxAngleY={6} tiltMaxAngleX={6}>
                        <div className={s.photo}>
                            <img src={mainImg} alt="#"/>
                        </div>
                    </Tilt>
                </div>
            </div>
        </Fade>
    );
}

