'use client';
import { Container, Typography, Grid, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ padding: '4rem 1rem', textAlign: 'center' }}>
      {/* Hero Section */}
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
            background: 'linear-gradient(90deg, #3f51b5, #9c27b0)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', mb: 6, maxWidth: '800px', mx: 'auto' }}
        >
          We are dedicated to helping local businesses grow online. By creating impactful digital
          solutions, we transform small businesses into successful online ventures.
        </Typography>
      </motion.div>

      {/* Section: Mission, Vision, and Values */}
      <Grid container spacing={6} sx={{ textAlign: 'left', marginTop: '3rem' }}>
        {[
          {
            icon: '🌟',
            title: 'Our Mission',
            description:
              'Empowering small businesses with powerful digital solutions to help them succeed in the online world.',
          },
          {
            icon: '🌈',
            title: 'Our Vision',
            description:
              'To be the go-to partner for every small business aiming to achieve success through online presence.',
          },
          {
            icon: '🤝',
            title: 'Our Values',
            description: 'Integrity, innovation, and a customer-first approach are the pillars of everything we do.',
          },
        ].map((section, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <Typography variant="h3" color="primary" sx={{ fontSize: '2.5rem' }}>
                  {section.icon}
                </Typography>
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mb: 1, color: 'text.primary' }}
                  >
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {section.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Team Introduction Section */}
      <Box
        sx={{
          marginTop: '4rem',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: '#3f51b5' }}>
          Meet Our Team
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
            mb: 4,
          }}
        >
          Our team of creative designers, developers, and strategists are committed to helping your
          business grow. We work collaboratively to deliver solutions tailored to your needs.
        </Typography>
        <Grid container spacing={6}>
          {[
            { name: 'John Doe', role: 'CEO & Founder', icon: '👨‍💼' },
            { name: 'Jane Smith', role: 'Head of Marketing', icon: '👩‍💼' },
            { name: 'Mike Brown', role: 'Lead Developer', icon: '👨‍💻' },
          ].map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ fontSize: '3rem', mb: 2 }}>
                    {member.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ mb: 1, color: 'text.primary' }}
                  >
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Lead Capture Form */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        sx={{
          marginTop: '4rem',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, #ffffff, #f3e5f5)',
          boxShadow: 3,
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', mb: 4, color: '#3f51b5' }}
        >
          Contact Us
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            margin="normal"
            sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Email Address"
            variant="outlined"
            margin="normal"
            sx={{ mb: 2, background: '#fff', borderRadius: 1 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
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
              borderRadius: '2rem',
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
    </Container>
  );
}
