import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
    
import '../App.css';

const pages = ['Solutions', 'Pricing', 'Resources', 'Enterprise', "What's new"];
const dropdowns = ['Solutions', 'Resources', "What's new"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [megaMenu, setMegaMenu] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false); // Track scroll state

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleMegaMenuToggle = (menu) => {
    console.log('Toggling mega menu for:', menu);
    if (megaMenu === menu) {
      setMegaMenu(null); // Close menu
    } else {
      setMegaMenu(menu); // Open the selected menu
    }
  };

  const handleScroll = () => {
    console.log('Scrolling...', window.scrollY);
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    console.log('Adding scroll event listener...');
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('Removing scroll event listener...');
      window.removeEventListener('scroll', handleScroll); // Clean up on unmount
    };
  }, []);

  React.useEffect(() => {
    console.log('Current scrolled state:', scrolled);
    console.log('Mega menu state:', megaMenu);
  }, [scrolled, megaMenu]);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled || megaMenu ? 'black' : 'transparent', // Black if scrolled or megaMenu is open
        boxShadow: 'none',
        transition: 'background-color 0.3s ease', // Smooth transition for background color change
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>

          {/* LOGO */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <i className="fa-brands fa-apple"><svg height="44" viewBox="0 0 14 44" fill="white" width="44" xmlns="http://www.w3.org/2000/svg"><path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path></svg></i>
          </a>

          {/* DESKTOP NAV */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            {pages.map((page) => (
              <Box key={page} sx={{ display: 'flex', alignItems: 'center', position: 'relative', mr: 3 }}>
                <Button
                  className='nav-link'
                  onClick={() => dropdowns.includes(page) && handleMegaMenuToggle(page)}
                  sx={{
                    color: 'white',
                    fontSize: '16px',
                    textTransform: 'none',
                    '&:hover': { color: '#ccc' },
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {page}
                  {/* Custom rotating icon */}
                  {dropdowns.includes(page) && (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Smooth rotation
                        transform: megaMenu === page ? 'rotate(270deg)' : 'rotate(90deg)',
                      }}
                    >
                      <svg
                        fill="#ffffff"
                        height="13px"
                        width="15px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve"
                        stroke="#ffffff"
                        strokeWidth="13.2"
                      >
                        <path
                          id="XMLID_222_"
                          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
                          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394
                          c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,
                          90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,
                          4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                        />
                      </svg>
                    </Box>
                  )}
                </Button>
              </Box>
            ))}
          </Box>

          {/* MEGA MENU */}
          {megaMenu && (
            <Box
              sx={{
                position: 'fixed',
                top: '64px',
                left: 0,
                width: '100%',
                backgroundColor: 'black',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                p: 4,
                zIndex: 10,
                animation: 'fadeIn 0.35s ease',
                '@keyframes fadeIn': {
                  from: { opacity: 0, transform: 'translateY(-10px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
                {megaMenu} - Mega Menu Content
              </Typography>
              <Typography variant="body1" sx={{ color: '#fff' }}>
                This is sample content for the <strong>{megaMenu}</strong> mega menu.
              </Typography>
            </Box>
          )}

          {/* LOGIN / FREE TRIAL */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#1a73e8',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f2f2f2',
                },
              }}
            >
              Start Free Trial
            </Button>
          </Box>

          {/* MOBILE NAV */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;