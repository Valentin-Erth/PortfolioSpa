import s from './Projects.module.scss'
import styleContainer from '../../common/styles/Container.module.css'
import {Project} from './Project/Project';
import {Title} from '../../common/commonComponents/Title/Title';
import {Fade} from "react-awesome-reveal";
import {useAppSelector} from "../../bll/store.ts";
import {ProjectsType} from "../../bll/app-reducer.ts";


export const Projects = () => {
    const projectsData = useAppSelector<ProjectsType>(state => state.app.projects)

    return (
        <Fade triggerOnce duration={1500}>
            <div className={s.projectsBlock} id={'projects'}>
                <div className={`${styleContainer.container} ${s.container}`}>
                    <Title title={projectsData.title} text={projectsData.description}/>
                    <div className={s.projects}>
                        {projectsData.data.map(el => {
                            return <Project
                                style={el.img}
                                key={el.id}
                                title={el.title}
                                description={el.description}
                                link={el.link}
                            />
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
};

