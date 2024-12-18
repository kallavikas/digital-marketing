import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import { Phone, WhatsApp } from '@mui/icons-material';

export default function FloatingCTA() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <>
      <Zoom in={trigger}>
        <Fab
          color="primary"
          aria-label="call"
          className="fixed bottom-4 right-4"
          onClick={() => window.location.href = 'tel:+441234567890'}
        >
          <Phone />
        </Fab>
      </Zoom>
      <Zoom in={trigger}>
        <Fab
          color="secondary"
          aria-label="whatsapp"
          className="fixed bottom-20 right-4"
          onClick={() => window.open('https://wa.me/441234567890')}
        >
          <WhatsApp />
        </Fab>
      </Zoom>
    </>
  );
} 