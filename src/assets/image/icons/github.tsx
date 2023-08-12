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
            d="M16 1.38a15 15 0 0 0-4.85 29.19l.1.03c.76.14 1.03-.33 1.03-.72 0-.36 0-1.3-.02-2.55-4.17.9-5.05-2.01-5.05-2.01a4 4 0 0 0-1.65-2.19h-.02c-1.35-.94.1-.92.1-.92 1 .14 1.82.72 2.3 1.53v.02a3.2 3.2 0 0 0 4.39 1.23l-.02.01a3.2 3.2 0 0 1 .95-2c-3.33-.38-6.83-1.67-6.83-7.41v-.1c0-1.51.59-2.9 1.55-3.93a5.24 5.24 0 0 1 .14-4l-.01.03s1.25-.4 4.12 1.54a14.14 14.14 0 0 1 7.6.02l-.1-.02c2.85-1.94 4.1-1.54 4.1-1.54a5.4 5.4 0 0 1 .14 4.01l.01-.04a5.79 5.79 0 0 1 1.54 3.94v.1-.01c0 5.76-3.5 7.02-6.84 7.4a3.58 3.58 0 0 1 1 2.78v-.01l-.01 4.1c0 .4.26.87 1.03.72a14.98 14.98 0 0 0-4.68-29.2H16z"/>
    </svg>
);
const ForwardRef = forwardRef(SvgComponent);
export const Git = memo(ForwardRef);
