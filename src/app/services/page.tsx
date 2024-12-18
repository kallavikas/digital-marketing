'use client';
import { Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <Container maxWidth="lg" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #3f51b5, #9c27b0)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            mb: 3,
          }}
        >
          Turn Your Local Business into an Online Business! 🚀
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.2rem', pb: 4 }}>
          Let's make your business shine on the internet - it's easier than you think!
        </Typography>
      </motion.div>

      {/* Services Cards */}
      <Grid container spacing={4}>
        {[
          { icon: '🏪', title: 'Your Business Online', description: 'Just like your real business, but on the internet! People can find you on Google.' },
          { icon: '📱', title: 'Easy to Find', description: 'We\'ll help people find your business when they search on Google, direct to your website and your location!' },
          { icon: '🤝', title: 'More Customers Walk In', description: 'People interested in your products can send messages or call you directly. It\'s like having a friendly chat!' }
        ].map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div {...fadeInUp} whileHover={{ scale: 1.05 }}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, #ffffff, #e3f2fd)',
                  boxShadow: 3,
                  borderRadius: 3,
                  p: 3,
                  textAlign: 'center',
                  transition: '0.3s',
                  '&:hover': {
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h3">{service.icon}</Typography>
                  <Typography
                    variant="h5"
                    color="primary"
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary">{service.description}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Steps Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: '4rem',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            color: '#3f51b5',
          }}
        >
          How Does It Work? 🤔
        </Typography>
        <Grid container spacing={4}>
          {['We Chat', 'We Build', 'We Launch', 'We Grow'].map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
              >
                <Card
                  sx={{
                    background: '#ffffff',
                    boxShadow: 3,
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ mb: 2, color: '#9c27b0' }}
                  >
                    {index + 1}️⃣
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                    {step}
                  </Typography>
                  <Typography color="text.secondary">
                    {index === 0 && 'Tell us about your awesome business!'}
                    {index === 1 && 'We create your cool website.'}
                    {index === 2 && 'Your business goes online 24 hours a day!'}
                    {index === 3 && 'Watch your business get bigger!'}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Pricing Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        style={{
          marginTop: '4rem',
          marginBottom: '4rem',
          padding: '2rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, #f3e5f5, #e3f2fd)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            color: '#3f51b5',
          }}
        >
          Simple, Transparent Pricing 💷
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              plan: 'Starter',
              price: '£499',
              period: 'one-time',
              features: [
                'Basic Website Setup',
                'Mobile Responsive',
                'Contact Form',
                'Google Maps Integration',
                '3 Content Pages'
              ]
            },
            {
              plan: 'Professional',
              price: '£999',
              period: 'one-time',
              features: [
                'Everything in Starter',
                'SEO Optimization',
                'Social Media Integration',
                'Business Email Setup',
                '5 Content Pages',
                'Basic Analytics'
              ]
            },
            {
              plan: 'Premium',
              price: '£1,999',
              period: 'one-time',
              features: [
                'Everything in Professional',
                'E-commerce Integration',
                'Custom Design',
                'Advanced Analytics',
                'Unlimited Pages',
                'Priority Support'
              ]
            }
          ].map((tier, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Card
                  sx={{
                    background: '#ffffff',
                    boxShadow: 3,
                    p: 3,
                    borderRadius: 3,
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mb: 2 }}>
                      {tier.plan}
                    </Typography>
                    <Typography variant="h3" sx={{ mb: 1 }}>
                      {tier.price}
                    </Typography>
                    <Typography color="text.secondary" sx={{ mb: 3 }}>
                      {tier.period}
                    </Typography>
                    {tier.features.map((feature, i) => (
                      <Typography key={i} sx={{ mb: 1 }}>
                        ✓ {feature}
                      </Typography>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: '3rem' }}
      >
        <Button
          variant="contained"
          size="large"
          href="/contact"
          sx={{
            background: 'linear-gradient(90deg, #3f51b5, #9c27b0)',
            color: '#ffffff',
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            borderRadius: '2rem',
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(90deg, #5c6bc0, #ab47bc)',
            },
          }}
        >
          Let's Talk! 👋
        </Button>
      </motion.div>

      {/* Location Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        style={{ marginTop: '4rem', marginBottom: '2rem' }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mb: 3,
            color: '#3f51b5',
          }}
        >
          Serving Local Businesses Across the UK 🇬🇧
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            'London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds',
            'Glasgow', 'Edinburgh', 'Bristol', 'Sheffield', 'Newcastle',
            'Nottingham', 'Cardiff', 'Belfast', 'Brighton', 'Cambridge',
            'Oxford', 'York', 'Bath', 'Durham', 'Canterbury'
          ].map((city, index) => (
            <Grid item key={index}>
              <Chip
                label={city}
                sx={{
                  background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
                  fontWeight: '500',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #f3e5f5, #e3f2fd)',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.3s ease',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}
