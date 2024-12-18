import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box 
} from '@mui/material';

export default function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after 30 seconds or 50% scroll
    const timer = setTimeout(() => {
      if (!localStorage.getItem('popupShown')) {
        setOpen(true);
      }
    }, 30000);

    const handleScroll = () => {
      if (!localStorage.getItem('popupShown') && 
          window.scrollY > window.innerHeight * 0.5) {
        setOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add email to marketing list
    localStorage.setItem('popupShown', 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>
        Get Your Free Digital Marketing Guide
      </DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} className="space-y-4">
          <Typography variant="body1">
            Download our comprehensive guide to growing your business online!
          </Typography>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Later</Button>
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Get My Guide
        </Button>
      </DialogActions>
    </Dialog>
  );
}