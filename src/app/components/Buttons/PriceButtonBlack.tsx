'use client'
import { Colors } from "@/app/theme/colors";
import { Box, Button, Container, styled } from "@mui/material";
import Image from 'next/image'
import Link from "next/link";

const PriceButtonBlackComponent = styled(Button,{
    name: 'PriceButtonBlackComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    'svg': {
        marginLeft: 5,
    }
}));
interface ButtonProps{
    buttonProps: {
        price: number,
        url: string,
    }
}


export default function PriceButtonBlack(props: ButtonProps) {
    const formattedPrice = props.buttonProps.price.toLocaleString('en-US').replace(/,/g, ' ');
    return (
        <Link href={props.buttonProps.url}>
            <PriceButtonBlackComponent>
                {formattedPrice}
                <svg width="18" height="22" viewBox="0 0 18 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_35_84)">
                    <path d="M1.26415 13.1306C1.65791 12.3804 2.24611 11.7533 2.96533 11.317C3.6539 10.8794 4.38093 10.5075 5.13715 10.2059C5.98268 9.88818 6.84459 9.6174 7.71912 9.39461L9.73631 8.8833C10.7952 8.61255 11.8099 8.18766 12.7487 7.622C13.0684 7.4269 13.3315 7.14932 13.511 6.81758C13.6905 6.48585 13.7801 6.11182 13.7707 5.73355C13.7778 5.28561 13.6798 4.84233 13.4845 4.44046C13.2892 4.03858 13.0024 3.68972 12.6478 3.42249C12.0747 2.97453 11.4074 2.66654 10.6979 2.52254C10.1644 2.41689 9.61962 2.38257 9.07737 2.42035L8.16293 2.46112C7.86304 2.47232 7.56424 2.5043 7.26863 2.55666C5.58818 2.84984 4.04075 3.67004 2.84426 4.90183L1.1902 2.95879C2.63917 1.52477 4.48535 0.573383 6.48194 0.231795C9.60857 -0.368143 13.2597 0.0614315 15.4248 2.52254C16.0841 3.2672 16.4916 4.20584 16.588 5.20176C16.7087 6.12919 16.5761 7.07242 16.2047 7.92875C15.9612 8.47658 15.6192 8.97374 15.1961 9.39461C14.7147 9.83355 14.1678 10.1924 13.5757 10.458C12.989 10.7465 12.3849 10.997 11.767 11.208C11.2492 11.3784 10.5701 11.5694 9.74977 11.7807L7.73258 12.3193C6.63107 12.5875 5.58431 13.049 4.63959 13.6828C4.29024 13.9336 4.00822 14.2687 3.81916 14.658C3.6301 15.0473 3.53996 15.4784 3.557 15.912C3.5625 16.354 3.65517 16.7905 3.82954 17.1956C4.00391 17.6007 4.25646 17.9663 4.57232 18.271C5.19763 18.8676 5.98427 19.2616 6.8316 19.4026C7.33852 19.5048 7.85458 19.5527 8.37137 19.5458H9.17825C9.56081 19.5493 9.94301 19.522 10.3213 19.464C12.3881 19.1404 14.285 18.1139 15.7004 16.553L17.3209 18.5573C17.4487 18.7072 15.5727 20.0843 15.3777 20.207C14.6095 20.6992 13.7795 21.0846 12.91 21.3525C9.74305 22.341 4.88834 22.4091 2.42065 19.8798C1.8685 19.3357 1.43123 18.6835 1.13533 17.9627C0.839425 17.242 0.691065 16.4678 0.699323 15.6871C0.679926 14.8011 0.873807 13.9236 1.26415 13.1306Z" fill="currentColor"/>
                    <path d="M0 8.55594L0 10.4989L18 10.4989V8.55594L0 8.55594Z" fill="currentColor"/>
                    <path d="M0 11.5011L0 13.4441L18 13.4441V11.5011L0 11.5011Z" fill="currentColor"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_35_84">
                    <rect width="18" height="22" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </PriceButtonBlackComponent>
        </Link>
    );
}