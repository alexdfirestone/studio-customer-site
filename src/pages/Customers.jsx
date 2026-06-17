import { Box, Typography, Chip, Stack, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  PersonAdd, Download, FilterAlt, Email, Edit, Delete, Block,
  Verified, Star, StarBorder, Business, Person, Groups,
} from "@mui/icons-material";
import { customers } from "../data";

const statusColor = { active: "success", trialing: "info", churned: "error" };

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "plan", headerName: "Plan", width: 130 },
  { field: "mrr", headerName: "MRR", width: 110, valueFormatter: (v) => `$${v}` },
  {
    field: "status", headerName: "Status", width: 140,
    renderCell: (p) => <Chip size="small" color={statusColor[p.value]} label={p.value} />,
  },
];

export default function Customers() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h4"><Groups sx={{ verticalAlign: "middle", mr: 1 }} />Customers</Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" startIcon={<FilterAlt />}>Filter</Button>
          <Button variant="outlined" startIcon={<Download />}>Export</Button>
          <Button variant="contained" startIcon={<PersonAdd />}>Add</Button>
        </Stack>
      </Stack>
      <Box sx={{ height: 520, bgcolor: "background.paper" }}>
        <DataGrid rows={customers} columns={columns} pageSizeOptions={[10, 25]}
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }} />
      </Box>
    </Box>
  );
}
