import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Drawer,
  IconButton,
  Divider,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
  Chip,
  Badge,
  FormGroup,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

const OrderHeroSecetion = ({ vacations = [] }) => {
  const [cart, setCart] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState('all');
  const [filters, setFilters] = useState({
    fullEligibility: true,
    includeBreakfast: false,
    hasPool: false,
    categories: [],
  });
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  const [error, setError] = useState('');

  const areas = ['צפון', 'מרכז', 'דרום'];
  const categories = ['חופשות', 'מלונות', 'אטרקציות', 'אוכל'];

  const filteredVacations = vacations.filter((v) => {
    return (
      (selectedArea === 'all' || v.area === selectedArea) &&
      (!filters.fullEligibility || v.eligible) &&
      (!filters.includeBreakfast || v.breakfastIncluded) &&
      (!filters.hasPool || v.hasPool) &&
      (filters.categories.length === 0 || filters.categories.includes(v.category))
    );
  });

  const addToCart = (vacation) => {
    setCart((prev) => [...prev, vacation]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePurchase = () => {
    const { name, cardNumber, expiry, cvv } = paymentDetails;
    if (!name || !/^\d{16}$/.test(cardNumber) || !/\d{2}\/\d{2}/.test(expiry) || !/^\d{3}$/.test(cvv)) {
      setError('אנא מלא את כל הפרטים בצורה תקינה.');
      return;
    }
    setError('');
    alert('ההזמנה התקבלה בהצלחה!');
    setPaymentOpen(false);
    setDrawerOpen(false);
    setCart([]);
  };

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Box sx={{ p: 4, backgroundColor: '#fff8f1', direction: 'rtl' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h5">בחרו את החופשה שלכם</Typography>
        <IconButton onClick={() => setDrawerOpen(true)}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon sx={{ fontSize: 44 }} />
          </Badge>
        </IconButton>
      </Box>

      <Box mb={4}>
        <Select
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          sx={{ mx: 2, minWidth: 120 }}
        >
          <MenuItem value="all">כל הארץ</MenuItem>
          {areas.map((area) => (
            <MenuItem key={area} value={area}>{area}</MenuItem>
          ))}
        </Select>

        <Box mt={2}>
          <Paper elevation={0} sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, p: 1, backgroundColor: '#f3f3f3', borderRadius: 2 }}>
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                color={filters.categories.includes(category) ? 'primary' : 'default'}
                onClick={() => {
                  setFilters((prev) => {
                    const isSelected = prev.categories.includes(category);
                    return {
                      ...prev,
                      categories: isSelected
                        ? prev.categories.filter((c) => c !== category)
                        : [...prev.categories, category],
                    };
                  });
                }}
              />
            ))}
          </Paper>
        </Box>

        <FormGroup row sx={{ mt: 2 }}>
          <FormControlLabel
            control={<Checkbox checked={filters.fullEligibility} onChange={(e) => setFilters((prev) => ({ ...prev, fullEligibility: e.target.checked }))} />}
            label="זכאות מלאה"
          />
          <FormControlLabel
            control={<Checkbox checked={filters.includeBreakfast} onChange={(e) => setFilters((prev) => ({ ...prev, includeBreakfast: e.target.checked }))} />}
            label="כולל ארוחת בוקר"
          />
          <FormControlLabel
            control={<Checkbox checked={filters.hasPool} onChange={(e) => setFilters((prev) => ({ ...prev, hasPool: e.target.checked }))} />}
            label="כולל בריכה"
          />
        </FormGroup>
      </Box>

      <Grid container spacing={3}>
        {filteredVacations.map((v, index) => (
          <Grid item xs={12} sm={6} md={4} key={v.id}>
            <Card>
              <CardMedia component="img" height="180" image={v.img} alt={v.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{v.title}</Typography>
                <Box display="flex" alignItems="center" mb={1}>
                  <StarIcon fontSize="small" color="warning" />
                  <Typography variant="body2" ml={1}>
                    {v.rating} ({v.reviews} ביקורות)
                  </Typography>
                </Box>
                <Typography variant="body1" color="primary" fontWeight="bold">
                  ₪{v.price}
                </Typography>
              </CardContent>
              <Button onClick={() => addToCart(v)} fullWidth variant="contained">
                הוספה לחופשה
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Typography variant="h6" textAlign="center">עגלת קניות</Typography>
          <Divider sx={{ my: 2 }} />
          {cart.map((item, i) => (
            <Box key={i} display="flex" alignItems="center" mb={2}>
              <img src={item.img} alt={item.title} width={50} height={50} style={{ borderRadius: 8 }} />
              <Box ml={2} flexGrow={1}>
                <Typography fontWeight="bold" textAlign="center">{item.title}</Typography>
                <Typography color="primary" textAlign="center">₪{item.price}</Typography>
              </Box>
              <IconButton onClick={() => removeFromCart(i)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.8, fontSize: '1.1rem', fontWeight: 'bold', borderRadius: 3 }}
            onClick={() => setPaymentOpen(true)}
          >
            המשך רכישה
          </Button>
        </Box>
      </Drawer>

      <Dialog open={paymentOpen} onClose={() => setPaymentOpen(false)}>
        <DialogTitle>פרטי תשלום</DialogTitle>
        <DialogContent>
          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
          <Typography variant="body1" mb={2}>סכום כולל: ₪{totalPrice}</Typography>
          <TextField fullWidth margin="normal" label="שם מלא" value={paymentDetails.name} onChange={(e) => setPaymentDetails({ ...paymentDetails, name: e.target.value })} />
          <TextField fullWidth margin="normal" label="מספר כרטיס" value={paymentDetails.cardNumber} onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })} />
          <TextField fullWidth margin="normal" label="תוקף (MM/YY)" value={paymentDetails.expiry} onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })} />
          <TextField fullWidth margin="normal" label="CVV" value={paymentDetails.cvv} onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setPaymentOpen(false)}>ביטול</Button>
          <Button onClick={handlePurchase} variant="contained">תשלום</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OrderHeroSecetion;
