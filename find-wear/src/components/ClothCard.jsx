import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({ title, description, image }) {
  const [readMore, setReadMore] = React.useState(false);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{height: '8rem'}} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.split(' ').slice(0, 4).join(' ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {readMore ? description : `${description.substring(0, 100)}...`}
          <Button variant="text" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </Button>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}
