import { Container, Grid, Paper, Typography } from "@mui/material";
import { 
  WebOutlined, 
  Campaign, 
  Analytics, 
  Search 
} from "@mui/icons-material";

const services = [
  {
    title: "Website Creation",
    description: "Custom website design and development tailored to your brand",
    icon: WebOutlined,
    price: "from £999",
  },
  {
    title: "SEO Optimization",
    description: "Improve your search rankings and online visibility",
    icon: Search,
    price: "from £499/month",
  },
  {
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies and campaigns",
    icon: Campaign,
    price: "from £799/month",
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed insights and performance tracking",
    icon: Analytics,
    price: "from £299/month",
  },
];

export default function Services() {
  return (
    <div className="bg-gray-50 py-24" id="services">
      <Container>
        <div className="text-center mb-16">
          <Typography
            variant="h2"
            className="text-4xl md:text-5xl font-bold mb-4"
            color="primary"
          >
            Our Services
          </Typography>
          <Typography variant="h6" className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the digital age
          </Typography>
        </div>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={6} lg={3} key={service.title}>
              <div className="bg-white rounded-xl p-6 h-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-primary text-3xl" />
                </div>
                <Typography variant="h5" className="font-bold mb-3">
                  {service.title}
                </Typography>
                <Typography color="text.secondary" className="mb-4">
                  {service.description}
                </Typography>
                <Typography 
                  variant="h6" 
                  color="primary" 
                  className="font-bold mt-auto"
                >
                  {service.price}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
} 