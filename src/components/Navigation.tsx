import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Home as HomeIcon,
  Info as AboutIcon,
  ContactMail as ContactIcon,
  Menu as MenuIcon,
  Dock as DockIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import pandoraLogo from '../assets/pandora-logo.jpg'

const drawerWidth = 240;

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "docked",
})<{ docked: boolean }>(({ theme, docked }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid rgba(255, 99, 71, 0.1)",
  width: docked ? `calc(100% - ${drawerWidth}px)` : "100%",
  marginLeft: docked ? drawerWidth : 0,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: theme.spacing(1),
  transition: "all 0.3s ease-in-out",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(8px)",
  boxShadow: "0 4px 6px rgba(255, 87, 34, 0.1)",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 12px rgba(255, 87, 34, 0.2)",
    background: "rgba(255, 87, 34, 0.05)",
  },
}));

function Navigation() {
  const [open, setOpen] = useState(false);
  const [docked, setDocked] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About", icon: <AboutIcon />, path: "/about" },
    { text: "Contact", icon: <ContactIcon />, path: "/contact" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    if (!docked) setOpen(false);
  };

  const toggleDrawerMode = () => {
    setDocked(!docked);
    setOpen(false);
  };

  return (
    <>
      <StyledAppBar position="fixed" docked={docked}>
        <Toolbar>
          {!docked && (
            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={() => setOpen(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: "primary.main",
              fontWeight: 700,
              letterSpacing: "1px",
              fontSize: "1.3rem",
              fontFamily: "'Montserrat', sans-serif",
              textTransform: "uppercase",
              textShadow: "1px 1px 1px rgba(0, 0, 0, 0.1)",
            }}
          >
            PANDORA
          </Typography>
          <IconButton
            color="primary"
            onClick={toggleDrawerMode}
            sx={{
              transition: "transform 0.3s ease-in-out",
              transform: docked ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            <DockIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            borderRight: '1px solid rgba(255, 99, 71, 0.1)',
          },
        }}
        variant={docked ? "permanent" : "temporary"}
        anchor="left"
        open={docked || open}
        onClose={() => setOpen(false)}
      >
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            px: 2,
          }}
        >
          <Box
            component="img"
            src={pandoraLogo}
            alt="Pandora"
            sx={{
              width: '250px',
              height: '50px',              
              objectFit: 'cover',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <StyledListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemIcon sx={{ color: "primary.main" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{
                    color: "primary.main",
                    "& .MuiTypography-root": {
                      fontWeight: 600,
                      letterSpacing: "0.5px",
                      fontFamily: "'Montserrat', sans-serif",
                    },
                  }}
                />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navigation;
