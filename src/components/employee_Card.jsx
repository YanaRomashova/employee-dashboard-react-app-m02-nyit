import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function MediaCard({ data }) {
  return (
    <div style={{ textAlign: 'center' }}>
      {data.map((item, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              sx={{
                height: 300,
                width: '100%',
                backgroundSize: 'contain',
              }}
              image={`/employee-dashboard-react-app-m02-nyit/${item.image}`}
              title="profile image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.firstName} {item.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Department: {item.department}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Position: {item.position}
              </Typography>
              <Stack direction="row" spacing={1} justifyContent="center" marginTop={2}>
                {item.skills.map((skill, skillIndex) => (
                  <Chip key={skillIndex} label={skill} />
                ))}
              </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Stack direction="row" spacing={1} justifyContent="center">
                <Chip label={item.onLeave ? 'Inactive' : 'Active'} variant="outlined" />
                <Chip label={`Hours: ${item.hoursLoggedThisWeek}`} variant="outlined" />
              </Stack>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
}

