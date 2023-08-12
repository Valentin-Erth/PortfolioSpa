
import {Telegram} from "../../assets/image/icons/telegram.tsx";
import {Linkedin} from "../../assets/image/icons/linkedin.tsx";
import {Gmail} from "../../assets/image/icons/gmail.tsx";
import {Git} from "../../assets/image/icons/github.tsx";

type IconProps = {
    className: string
}

export const Icons = ({className}: IconProps) => {
    return (
        <>
            <a
                href={'https://github.com/Valentin-Erth'}
                target='_blank'
            >
                <Git className={className}/>
            </a>
            <a
                href={'mailto:kozlov0020@gmail.com'}
                target='_blank'
            >
                <Gmail className={className}/>
            </a>
            <a
                href={'https://t.me/Atom_Val'}
                target='_blank'
            >
                <Telegram className={className}/>
            </a>
            <a
                href={''}
                target='_blank'
            >
                <Linkedin className={className}/>
            </a>
        </>
    )
}