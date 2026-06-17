import {
  Box, Typography, Card, CardContent, TextField, Switch, FormControlLabel,
  Button, Divider, Stack, Select, MenuItem, InputLabel, FormControl,
} from "@mui/material";
import {
  Settings as SettingsIcon, Person, Lock, Notifications, Palette, Language,
  Security, CloudUpload, Save, VpnKey, Email, Phone, Public, DarkMode,
} from "@mui/icons-material";

export default function Settings() {
  return (
    <Box sx={{ maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom><SettingsIcon sx={{ verticalAlign: "middle", mr: 1 }} />Settings</Typography>
      <Card sx={{ mb: 3 }}><CardContent>
        <Typography variant="h6"><Person sx={{ verticalAlign: "middle", mr: 1 }} />Profile</Typography>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <TextField label="Name" defaultValue="Acme Admin" fullWidth />
          <TextField label="Email" defaultValue="admin@acme.com" fullWidth InputProps={{ startAdornment: <Email sx={{ mr: 1 }} /> }} />
          <FormControl fullWidth>
            <InputLabel>Language</InputLabel>
            <Select defaultValue="en" label="Language" startAdornment={<Language sx={{ mr: 1 }} />}>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="fr">Français</MenuItem>
              <MenuItem value="de">Deutsch</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </CardContent></Card>
      <Card><CardContent>
        <Typography variant="h6"><Security sx={{ verticalAlign: "middle", mr: 1 }} />Preferences</Typography>
        <Stack sx={{ mt: 1 }}>
          <FormControlLabel control={<Switch defaultChecked />} label="Email notifications" />
          <FormControlLabel control={<Switch />} label="Dark mode" />
          <FormControlLabel control={<Switch defaultChecked />} label="Two-factor auth" />
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Button variant="contained" startIcon={<Save />}>Save changes</Button>
      </CardContent></Card>
    </Box>
  );
}
