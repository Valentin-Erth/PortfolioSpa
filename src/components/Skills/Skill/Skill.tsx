import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    img: string
}

export const Skill = ({title, img}: SkillPropsType) => {
    return (
        <div className={s.skill} >
            <div className={s.icon}>
                <img src={img} alt="image"/>
            </div>
            <h3 className={s.title}>{title}</h3>
        </div>
    );
};
