'use client'
import { Box, Container, styled, Typography } from "@mui/material";
import ContainerComp from "../Conatiners/ContainerComp";
import useMediaQuery, { UseMediaQueryOptions } from "@mui/material/useMediaQuery";
import { useTheme } from '@mui/material/styles';
import Link from "next/link";
import Image from "next/image";

const FooterContactsComponent = styled(Box,{
    name: 'FooterContactsComponent',
    slot: 'root',
})(({}) => ({
    //color: Colors.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}));

interface ContactsProps {
    data:{
        phones: {
            name: string;
            tel1: string;
            tel2: string;
            tel3: string;
          };
          social: {
            name: string;
            instagram: string;
            facebook: string;
            gmap: string;
            viber: string;
            telegram: string;
          };
    };
};


export default function FooterContacts(props: ContactsProps) {
    const theme = useTheme();
    const options: UseMediaQueryOptions = {
      noSsr: true, 
    };

    const formatPhoneNumber = (phoneNumber: string): string => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '');
        const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})$/);
        if (match) {
          return `+${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
        }
        return phoneNumber;
      };

      const tel1 = formatPhoneNumber(props.data.phones.tel1);

    return (
      <FooterContactsComponent>
        <Box>
            <Typography variant="title1" >{props.data.phones.name}</Typography>
            <Box className={"foo_contacts"} marginTop={'18px'}>
                <Box marginRight={'10px'}>
                    <Image src={"/assets/ico/foo_phone.svg"} alt="footer phone Logo" width={40} height={40} />
                </Box>
                <Box display={'flex'} flexDirection={'column'} marginRight={'30px'}>
                    <Link href={`tel:${props.data.phones.tel1}`}>{formatPhoneNumber(props.data.phones.tel1)}</Link>
                    <Link href={`tel:${props.data.phones.tel2}`}>{formatPhoneNumber(props.data.phones.tel2)}</Link>
                </Box>
                <Box>
                    <Link href={`tel:${props.data.phones.tel3}`}>{formatPhoneNumber(props.data.phones.tel3)}</Link>
                </Box>
            </Box>
        </Box>
        <Box marginTop={'26px'}>
            <Typography variant="title1" >{props.data.social.name}</Typography>
            <Box display={'flex'} justifyContent={'space-between'} marginTop={'18px'}>
                <Image src={"/assets/ico/foo_phone.svg"} alt="footer phone Logo" width={40} height={40} />
                <Image src={"/assets/ico/foo_phone.svg"} alt="footer phone Logo" width={40} height={40} />
                <Image src={"/assets/ico/foo_phone.svg"} alt="footer phone Logo" width={40} height={40} />
                <Image src={"/assets/ico/foo_phone.svg"} alt="footer phone Logo" width={40} height={40} />
                <Image src={"/assets/ico/foo_phone.svg"} alt="footer phone Logo" width={40} height={40} />
            </Box>
        </Box>


      </FooterContactsComponent>
    );
}