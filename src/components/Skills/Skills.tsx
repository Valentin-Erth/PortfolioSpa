import s from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../../common/commonComponents/Title/Title";
import {Fade} from "react-awesome-reveal";
import {useAppSelector} from "../../bll/store.ts";
import {SkillsType} from "../../bll/app-reducer.ts";



export const Skills = () => {
    const skillsData = useAppSelector<SkillsType>(state => state.app.skills)

    return (
        <Fade triggerOnce duration={1500}>
            <div className={s.skillsBlock} id={'skills'}>
                <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                    <Title title={skillsData.title} text={skillsData.description}/>
                    <div className={s.skills}>
                        {skillsData.data.map(el => {
                            return <Skill key={el.id} title={el.title} img={el.img}/>
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
};



