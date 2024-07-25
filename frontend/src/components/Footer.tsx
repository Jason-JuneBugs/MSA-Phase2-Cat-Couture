
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        alignSelf: 'flex-end',
        backgroundColor: '#eeeeee',
        display: 'flex',
        padding: '1rem 0',
        gap: '1rem', // Add spacing between items
      }}
    >
      <Typography variant="body2" className="footer-item">
        Copyright Placeholder
      </Typography>
      <Link component="a" href="/" className="footer-item" color="inherit">
        Terms of use
      </Link>
      <Link component="a" href="/" className="footer-item" color="inherit">
        Privacy policy
      </Link>
    </Box>
  );
};

export default Footer;
