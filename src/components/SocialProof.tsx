import { Container, Grid, Typography, Paper } from '@mui/material';
import Image from 'next/image';

const brands = [
  { name: 'Company 1', logo: '/logos/company1.png' },
  { name: 'Company 2', logo: '/logos/company2.png' },
  // Add more trusted brands
];

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '95%', label: 'Client Retention' },
  { value: '£2M+', label: 'Revenue Generated' },
  { value: '10K+', label: 'Leads Generated' },
];

export default function SocialProof() {
  return (
    <Container className="py-16">
      <Typography variant="h4" align="center" className="mb-12">
        Trusted by Leading Brands
      </Typography>
      
      <Grid container spacing={4} className="mb-16">
        {brands.map((brand) => (
          <Grid item xs={6} md={3} key={brand.name} className="flex items-center justify-center">
            <Image
              src={brand.logo}
              alt={brand.name}
              width={150}
              height={60}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        {stats.map((stat) => (
          <Grid item xs={6} md={3} key={stat.label}>
            <Paper className="p-6 text-center">
              <Typography variant="h3" color="primary" className="font-bold">
                {stat.value}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {stat.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}