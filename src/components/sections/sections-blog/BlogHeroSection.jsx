import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const blogPosts = [
  {
    title: 'המדריך לחופשה בצפון',
    image: '/easy-step-1.png',
    short: 'איך לנצל את חופשת המילואים וליהנות בצפון הארץ?',
    content: 'כאן תמצא את כל המידע על חופשות בצפון: מה להביא, לאן לנסוע, איפה לאכול, ומה אסור לפספס. המדריך כולל גם קישורים להזמנות וסקירות עדכניות של מקומות האירוח.'
  },
  {
    title: '5 טיפים לאריזת תיק חכם',
    image: '/free-contact-bg.jpg',
    short: 'מה אסור לשכוח לפני שיוצאים לחופשה?',
    content: 'אריזת תיק יכולה להיות משימה מורכבת. הנה כמה טיפים שיחסכו לך זמן, מקום, וכאב ראש – כולל רשימה להורדה.'
  }
];

const BlogTab = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedPost(null);
  };

  return (
    <Box sx={{ px: 3, py: 6, backgroundColor: '#f5f5f5', direction: 'rtl' }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4}>
        בלוג ועדכונים
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, backgroundColor: '#fff', height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {post.short}
                </Typography>
                <IconButton onClick={() => handleOpen(post)}>
                  <VisibilityIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={openDialog} onClose={handleClose} fullWidth maxWidth="sm">
        {selectedPost && (
          <>
            <DialogTitle>{selectedPost.title}</DialogTitle>
            <DialogContent>
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
              />
              <Typography variant="body1">{selectedPost.content}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">סגור</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default BlogTab;