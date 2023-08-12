import s from './Title.module.scss'

type TitlePropsType = {
    title: string
    text: string
}

export const Title = ({title, text}: TitlePropsType) => {
    return (
        <div className={s.aboutBlockTitle}>
            <span>{title}</span>
            <h2>{text}</h2>
        </div>
    );
};

