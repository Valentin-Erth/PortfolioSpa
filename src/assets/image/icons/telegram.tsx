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
        <path d="M29.92 6.16 25.69 26.1c-.31 1.4-1.15 1.75-2.33 1.1l-6.43-4.75-3.11 2.99c-.34.34-.63.63-1.3.63L13 19.5 24.92 8.72c.52-.46-.11-.72-.8-.26l-14.76 9.3-6.35-2c-1.38-.43-1.4-1.38.3-2.04l24.83-9.57c1.15-.43 2.15.26 1.78 2.01z" />
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const Telegram = memo(ForwardRef)
