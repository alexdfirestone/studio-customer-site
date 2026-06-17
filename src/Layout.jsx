import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import {
  AppBar, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Toolbar, Typography, Avatar, Chip,
} from "@mui/material";
import {
  Dashboard as DashboardIcon, Insights, People, Settings as SettingsIcon,
  Bolt, Notifications, Search,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { renderBanner, version } from "@studio/sites";

const nav = [
  { to: "/", label: "Dashboard", icon: <DashboardIcon /> },
  { to: "/analytics", label: "Analytics", icon: <Insights /> },
  { to: "/customers", label: "Customers", icon: <People /> },
  { to: "/settings", label: "Settings", icon: <SettingsIcon /> },
];

const drawerWidth = 240;

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <Bolt sx={{ mr: 1 }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Acme Admin</Typography>
          <Search sx={{ mr: 2 }} />
          <Notifications sx={{ mr: 2 }} />
          <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" } }}
      >
        <Toolbar />
        <List>
          {nav.map((n) => (
            <ListItemButton key={n.to} component={RouterLink} to={n.to} selected={pathname === n.to}>
              <ListItemIcon>{n.icon}</ListItemIcon>
              <ListItemText primary={n.label} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ mt: "auto", p: 2 }}>
          <Chip size="small" label={`${renderBanner()} · v${version}`} />
        </Box>
      </Drawer>
      <Box component={motion.main} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
