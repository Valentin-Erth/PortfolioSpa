import s from './About.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Title} from "../../common/commonComponents/Title/Title";
// import myImage from '../../assets/image/imgAbout/portret.jpg'
// import Tilt from "react-parallax-tilt";
import {Fade} from "react-awesome-reveal";
import {useAppSelector} from "../../bll/store.ts";
import {AboutType} from "../../bll/app-reducer.ts";


export const About = () => {
    const aboutData = useAppSelector<AboutType>(state => state.app.about)

    return (
        <Fade triggerOnce duration={1500}>
            <div className={s.aboutBlock} id={'about'}>
                <div className={`${styleContainer.container} ${s.container}`}>
                    <Title title={aboutData.title} text={aboutData.description}/>
                    <div className={s.wrapper}>

                        {/*<Tilt tiltMaxAngleY={5} tiltMaxAngleX={5}>*/}
                        {/*    <div className={s.photo}>*/}
                        {/*        <img src={myImage} alt="#"/>*/}
                        {/*    </div>*/}
                        {/*</Tilt>*/}

                        <div className={s.aboutMe}>
                            {/*<h3 className={s.title}>About Me</h3>*/}
                            <p className={s.text}>{aboutData.textMe}</p>
                            <div className={s.list}>
                                <ul className={s.listUL}>
                                    <li>
                                        <span>Name</span>
                                        <p>Valentin Kozlov</p>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <span>Age</span>*/}
                                    {/*    <p>35</p>*/}
                                    {/*</li>*/}
                                    <li>
                                        <span>Location</span>
                                        <p>Perm, Russia</p>
                                    </li>
                                </ul>
                                <ul className={s.listUL}>
                                    <li>
                                        <span>Email</span>
                                        <p>kozlov0020@gmail.com</p>
                                    </li>
                                    <li>
                                        <span>Phone</span>
                                        <p>+7 (904) 84-34-624</p>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <span>Work</span>*/}
                                    {/*    <p>Yes</p>*/}
                                    {/*</li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
