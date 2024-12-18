'use client';

import { Container, Grid, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'Solicitors',
      description: 'Empowering legal professionals with modern digital tools to reach clients and build trust.',
      image: '/images/solicitor.jpg', // Replace with your image path
    },
    {
      title: 'Doctors',
      description: 'Streamline appointments and enhance patient care with robust digital solutions.',
      image: '/images/doctor.jpg', // Replace with your image path
    },
    {
      title: 'Plumbers',
      description: 'Get more local calls and grow your plumbing business with tailored online marketing.',
      image: '/images/plumber.jpg', // Replace with your image path
    },
    {
      title: 'Interior Designers',
      description: 'Showcase your artistic touch and attract new clients with an eye-catching website.',
      image: '/images/painter.jpg', // Replace with your image path
    },
    {
      title: 'Construction',
      description: 'Modernize your construction business with digital tools for projects and leads.',
      image: '/images/construction.jpg', // Replace with your image path
    },
    {
      title: 'Flooring Specialists',
      description: 'Highlight your flooring expertise and grow your client base with custom solutions.',
      image: '/images/flooring.jpg', // Replace with your image path
    },
    {
        title: 'Electricians',
        description: 'Showcase your electrical services and attract more clients with a professional website.',
        image: '/images/electrician.jpg', // Replace with your image path
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
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
            background: 'linear-gradient(to right, #3f51b5, #9c27b0)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          Tailored Solutions for Every Professional
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 6,
          }}
        >
          Transform your business with solutions designed specifically for your profession.
        </Typography>
      </motion.div>

      {/* Solutions Section */}
      <Grid container spacing={4}>
        {solutions.map((solution, index) => (
          <Grid item xs={12} sm={6} md={4} key={solution.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  boxShadow: 3,
                  position: 'relative',
                  background: '#ffffff',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'scale(1.03)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <Box sx={{ height: '200px', position: 'relative' }}>
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', mb: 1, color: '#3f51b5' }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {solution.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              background: 'linear-gradient(to right, #3f51b5, #9c27b0)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            Ready to Grow Your Business?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              mb: 4,
            }}
          >
            Let us help you achieve your goals with our tailored digital solutions.
          </Typography>
          <Box>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us Today 🚀
            </motion.button>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
}
