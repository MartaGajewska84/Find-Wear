import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, description, image, id }) {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <Card sx={{ maxWidth: 380, minHeight: 500 }}>
      <CardMedia sx={{ height: '15rem' }} image={image} title={title} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ height: '5rem', mb: '1rem', pb: '2rem' }}
        >
          {title.split(' ').slice(0, 4).join(' ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {readMore ? description : `${description.substring(0, 50)}...`}
          <Button variant="text" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </Button>
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={`/product/${id}`} size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
