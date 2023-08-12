import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="#fff"
        viewBox="0 0 32 32"
        ref={ref}
        {...props}
    >
        <path d="M28.78 1H3.19C2 1 1.02 1.97 1 3.16v25.68C1.02 30.04 2 31 3.2 31h25.6a2.2 2.2 0 0 0 2.2-2.16V3.17A2.2 2.2 0 0 0 28.8 1h-.03zM9.9 26.56H5.45v-14.3H9.9zM7.67 10.3a2.58 2.58 0 1 1 2.58-2.58 2.58 2.58 0 0 1-2.57 2.58zm18.89 16.27h-4.44V19.6c0-1.66-.04-3.8-2.32-3.8-2.31 0-2.67 1.81-2.67 3.68v7.08H12.7v-14.3h4.27v1.94H17a4.69 4.69 0 0 1 4.23-2.3h-.01c4.5 0 5.33 2.95 5.33 6.8v7.86z" />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const Linkedin = memo(ForwardRef)
