import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <BottomNavigation sx={{ width: "100%", backgroundColor: "dark-grey", minHeight:"15%" }}>
            <Container width="100%" sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

                <Typography id="modal-modal-title" variant="h6" component="h2" color={"black"}>
                    © 2022 Andresa Alves Ribeiro
                </Typography>

                <Link href="https://github.com/andresa-alves-ribeiro">
                    <GitHubIcon fontSize="large"/>
                </Link>

                <Link href="email: andresa_15ga@hotmail.com" >
                    <EmailIcon fontSize="large"/>
                </Link>

                <Link href="https://www.linkedin.com/in/andresa-alves-ribeiro/">
                    <LinkedInIcon fontSize="large"/>
                </Link>

            </Container>
        </BottomNavigation>
    )
}