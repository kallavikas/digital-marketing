'use client';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Analytics, Campaign, Language, Speed } from '@mui/icons-material';

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Grow Your Business Online
          </Typography>
          <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
            Professional Digital Marketing Solutions for Modern Businesses
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Analytics sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  SEO Optimization
                </Typography>
                <Typography color="text.secondary">
                  Improve your search rankings and drive organic traffic
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Campaign sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Social Media Marketing
                </Typography>
                <Typography color="text.secondary">
                  Engage with your audience across all platforms
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Language sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Content Strategy
                </Typography>
                <Typography color="text.secondary">
                  Create compelling content that converts
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Speed sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" component="h3" gutterBottom>
                  Performance Marketing
                </Typography>
                <Typography color="text.secondary">
                  Data-driven campaigns for maximum ROI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Transform Your Digital Presence?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Let's discuss how we can help your business grow
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Contact Us Today
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
