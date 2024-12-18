import { useState } from "react";
import { 
  Container, 
  Paper, 
  TextField, 
  Button, 
  Typography,
  MenuItem,
  Grid 
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { cities } from "@/data/cities";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    service: "",
    date: null as Date | null,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add booking logic here
  };

  return (
    <Container id="booking" className="py-20">
      <Paper className="p-8">
        <Typography variant="h4" className="mb-6">
          Book a Consultation
        </Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                label="City"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                label="Preferred Date"
                value={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Book Now
          </Button>
        </form>
      </Paper>
    </Container>
  );
} 