'use client';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactUs() {
  const [appointmentData, setAppointmentData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAppointment = (e) => {
    e.preventDefault();

    const { name, phone, message } = appointmentData;

    if (!name || !phone || !message) {
      alert('Please fill out all fields!');
      return;
    }

    // Prefill email details
    const mailtoLink = `mailto:yourbusiness@gmail.com?subject=Appointment%20Request&body=Name:%20${encodeURIComponent(
      name
    )}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            textAlign: 'center',
            background: 'linear-gradient(90deg, #3f51b5, #9c27b0)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}
        >
          We’d love to hear from you! Feel free to send us a message or book an appointment to chat.
        </Typography>
      </motion.div>

      <Grid container spacing={6}>
        {/* Book an Appointment */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
                borderRadius: 2,
                p: 4,
                boxShadow: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, color: '#3f51b5' }}
              >
                Book an Appointment
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Schedule a meeting with us to discuss your needs. Fill out your details below, and
                we’ll receive your appointment request via Gmail!
              </Typography>
              <form onSubmit={handleAppointment}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={appointmentData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={appointmentData.phone}
                  onChange={handleInputChange}
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={appointmentData.message}
                  onChange={handleInputChange}
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={3}
                  required
                  sx={{ mb: 3, background: '#fff', borderRadius: 1 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #3f51b5, #9c27b0)',
                    color: '#ffffff',
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #5c6bc0, #ab47bc)',
                    },
                  }}
                >
                  Book via Gmail 📅
                </Button>
              </form>
            </Box>
          </motion.div>
        </Grid>

        {/* Send a Message */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #ffffff, #f3e5f5)',
                borderRadius: 2,
                p: 4,
                boxShadow: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, color: '#3f51b5' }}
              >
                Send a Message
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Drop us a message, and we’ll get back to you as soon as possible.
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  required
                  sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  sx={{ mb: 3, background: '#fff', borderRadius: 1 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(90deg, #3f51b5, #9c27b0)',
                    color: '#ffffff',
                    padding: '1rem',
                    fontSize: '1rem',
                    borderRadius: 2,
                    textTransform: 'none',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #5c6bc0, #ab47bc)',
                    },
                  }}
                >
                  Send Message 🚀
                </Button>
              </form>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
