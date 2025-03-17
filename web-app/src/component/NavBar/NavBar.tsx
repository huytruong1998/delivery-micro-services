import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import styles from "./NavBar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AcUnitIcon from "@mui/icons-material/AcUnit";

const NavBar = () => {
  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        {/* Left Icon (Menu or Logo) */}
        <IconButton edge="start" color="inherit" aria-label="menu">
          <AcUnitIcon />
        </IconButton>

        {/* Search Bar (Centered) */}
        <Box className={styles.searchContainer}>
          <InputBase
            placeholder="Search..."
            className={styles.searchInput}
            sx={{ pl: 4, input: { color: "white" } }} // Add left padding for the search icon
          />
        </Box>

        {/* Right Cart Button */}
        <Button color="inherit" startIcon={<ShoppingCartIcon />}>
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
