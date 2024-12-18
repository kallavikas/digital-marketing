'use client';

import { Container, Grid, Typography, Box, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 1 }}>
     

      {/* Services Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        style={{ marginTop: '4rem' }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 6,
            background: 'linear-gradient(to right, #3f51b5, #9c27b0)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          Our Pricing
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Website Creation */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
                p: 4,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Website Creation
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Custom website design and development tailored to your brand.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                from £999
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* SEO Optimization */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f3e5f5, #e3f2fd)',
                p: 4,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                SEO Optimization
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Improve your search rankings and online visibility.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                from £499/month
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Digital Marketing */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
                p: 4,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Digital Marketing
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Comprehensive digital marketing strategies and campaigns.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                from £799/month
              </Typography>
            </Box>
          </motion.div>
        </Grid>

        {/* Analytics & Reporting */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #f3e5f5, #e3f2fd)',
                p: 4,
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Analytics & Reporting
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Detailed insights and performance tracking.
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                from £299/month
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

       {/* Header Section */}
       <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
            mt: 10,
            background: 'linear-gradient(to right, #3f51b5, #9c27b0)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          Trusted by Leading Brands
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
          }}
        >
          Delivering exceptional results for businesses of all sizes.
        </Typography>
      </motion.div>

      {/* Trusted By Section */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                Just Eat
              </Typography>
            </Box>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                The Guardian
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* Metrics Section */}
      <Grid container spacing={4} sx={{ mt: 6 }} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            500+
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: 'text.secondary', mt: 1 }}
          >
            Clients Served
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            95%
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: 'text.secondary', mt: 1 }}
          >
            Client Retention
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            £2M+
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: 'text.secondary', mt: 1 }}
          >
            Revenue Generated
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            10K+
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: 'center', color: 'text.secondary', mt: 1 }}
          >
            Leads Generated
          </Typography>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Link href="/contact" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(to right, #3f51b5, #9c27b0)',
              color: '#fff',
              px: 6,
              py: 2,
              fontWeight: 'bold',
              borderRadius: 2,
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(to right, #5c6bc0, #ab47bc)',
              },
            }}
          >
            Get Started Today 🚀
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
