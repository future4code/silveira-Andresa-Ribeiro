import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../Assets/logo.png";
import { goToLogin, goToList } from './../Routes/coordinator';
import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import Orders from './Orders';

const HeaderBar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const navigate = useNavigate();

    const handleOpenNav = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUser = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNav = () => {
        setAnchorElNav(null);
    };

    const handleCloseUser = () => {
        setAnchorElUser(null);
    };

    const logout = () => {
        localStorage.removeItem("token");
        goToLogin(navigate);
    }

    const [modalOpen, setModalOpen] = React.useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
        setAnchorElNav(null);
    };

    const handleModalClose = () => setModalOpen(false);


    const [OrderModalOpen, setOrderModalOpen] = React.useState(false);

    const handleOrderModalOpen = () => {
        setOrderModalOpen(true);
        setAnchorElUser(null);
    };
    
    const handleOrderModalClose = () => setOrderModalOpen(false);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xs: 110, md: 127 },
                            maxWidth: { xs: 350, md: 250 },
                            p: 1,
                            display: { xs: 'none', md: 'flex' }, mr: 1
                        }}
                        alt="Pizzaria Artesanal"
                        src={Logo}
                    />
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNav}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNav}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key={"Pizzas"} onClick={() => { goToList(navigate) }}>
                                <Typography textAlign="center">Pizzas</Typography>
                            </MenuItem>
                            <MenuItem key={"About us"} onClick={handleModalOpen}>
                                <Typography textAlign="center">Sobre</Typography>
                            </MenuItem>
                            <AboutUs
                                open={modalOpen}
                                handleClose={handleModalClose}
                            />
                        </Menu>
                    </Box>
                    
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xs: 110, md: 127 },
                            maxWidth: { xs: 350, md: 250 },
                            p: 1,
                            display: { xs: 'flex', md: 'none' },
                            marginRight: "33%"
                        }}
                        alt="Pizzaria Artesanal"
                        src={Logo}
                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Button
                            key={"Pizzas"}
                            onClick={() => { goToList(navigate) }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Pizzas
                        </Button>
                        <Button
                            key={"About us"}
                            onClick={handleModalOpen}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            Sobre
                        </Button>
                        <AboutUs
                            open={modalOpen}
                            handleClose={handleModalClose}
                        />
                    </Box>

                    <Box >
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUser} sx={{ p: 0 }}>
                                <Avatar sx={{ bgcolor: '#212121' }} src="/broken-image.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUser}
                        >
                            <MenuItem key="Orders" onClick={handleOrderModalOpen}>
                                <Typography textAlign="center">Orders</Typography>
                            </MenuItem>
                            <Orders
                            open={OrderModalOpen}
                            handleClose={handleOrderModalClose}
                            />
                            <MenuItem key="Logout" onClick={logout}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HeaderBar;