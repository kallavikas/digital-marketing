import { Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const caseStudies = [
  {
    title: 'E-commerce Revenue Growth',
    client: 'Fashion Retailer',
    result: '156% increase in online sales',
    image: '/case-studies/fashion-retailer.jpg',
    slug: 'fashion-retailer-case-study'
  },
  // Add more case studies
];

export default function CaseStudies() {
  return (
    <Container className="py-16">
      <Typography variant="h4" align="center" className="mb-12">
        Success Stories
      </Typography>

      <Grid container spacing={4}>
        {caseStudies.map((study) => (
          <Grid item xs={12} md={4} key={study.slug}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardMedia
                component="img"
                height="200"
                image={study.image}
                alt={study.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {study.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {study.client}
                </Typography>
                <Typography variant="body1" className="mt-2 mb-4">
                  {study.result}
                </Typography>
                <Button
                  endIcon={<ArrowForward />}
                  href={`/case-studies/${study.slug}`}
                >
                  Read Case Study
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 