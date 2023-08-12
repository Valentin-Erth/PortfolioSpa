import s from './Nav.module.scss'

type NavProps = {
    active: boolean
    editActive?: (isActive: boolean) => void
}

export const Nav = ({active, editActive}: NavProps) => {
    const editActiveHandler = () => editActive && editActive(false)

    return (
        <div className={`${s.nav} ${active ? s.active : ' '}`} onClick={editActiveHandler}>
            <div><a href='#main'>Home</a></div>
            <div><a href='#skills'>Skills</a></div>
            <div><a href='#about'>About</a></div>
            <div><a href='#projects'>Projects</a></div>
            <div><a href='#contact'>Contact</a></div>
        </div>
    );
}

