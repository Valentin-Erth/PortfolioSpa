import * as React from "react";
import {SVGProps, Ref, forwardRef, memo} from "react";

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
        <path
            d="M31 7.82V25.2c0 1.14-.92 2.05-2.05 2.05h-4.77V15.66L16 21.8l-8.18-6.14v11.6H3.05A2.04 2.04 0 0 1 1 25.2V7.82a3.07 3.07 0 0 1 4.92-2.44v-.01L16 12.94l10.09-7.57a3.07 3.07 0 0 1 4.9 2.45z"/>
    </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export const Gmail = memo(ForwardRef);
