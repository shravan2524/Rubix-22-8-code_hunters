import React from 'react';
import { Box, Typography, Button, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import { useState } from 'react';
const Card = (props) => {
  const [email, setemail] = useState("acn@gmail.com")
        console.log(props.e, "cards");
        function add_to_wishlist(e){  
          axios.post("http://localhost:5000/api/addtowishlist", {e,email})
          .then((e)=>{
            alert("Added to wishlist");
          })
          .catch((err)=>console.log(err));
            console.log(e);
        }
    return (
        <div className="card">
               <CardMedia
        style={{ height: 350, width:300 }}
        image={props.e.photo ? props.e.photo.images.large.url : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOQAAADdCAMAAACc/C7aAAAAaVBMVEXDw8MAAADGxsaXl5fJycnMzMxSUlKRkZF1dXV5eXnCwsIFBQWlpaV+fn66urqurq5dXV1sbGxMTEyKiopXV1czMzOcnJwaGhqoqKiEhIQlJSUrKysODg5mZmZHR0ezs7M7OzsVFRU5OTmFwHepAAAC+klEQVR4nO3bi1KjMBSAYXIarIbea2uttVXf/yE36Q0qobrITHP0/2Z2Zt2xDP+GQEDMMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQ56dCtY+JcZge9zgzsrXvipGc61EtzLO29KbpKLMx9mkPpI83H410XFiblyGFufy7Ph0lHPnSya/aByFuqRv7sSqchUvwV83k4EHFtt6QhcrwOl4GXZdv9VBApq3CdK/w1c9nykNUQ+XK6pG/abin5SFmWy5Z+u6FMP7K6unttt6cKIqflSE4a9tQd/zRtKflI6ZeRw6Y9deFS2ryl5COzUXkzMWoIcZm45bixUkGkfd6PormyyBMZPxkzaVouKIjM7PAwjtPm/XRP4Rse8/hgaoh0djzdbl9XeePJxc7CUBdmHi/REOkPx3Bb2DTlnOwP6L34vNQReZ3szqffRXRa/oJIcetzpJnksS2pj3T5pPrIqmfr6wL9kbZvynWf/8uuPi21Rzrxa4WijCzMW/0j6iKdV/lSZPH5Ges0V3+4flqi+uV77Ql07QmCtkg7GlcumM4uI0/ZC+UjGe67FpVl+qhWGGw/f0pRpIS99aeWjTtV2rdopBleTktNkZkMwvmzMHf20BCaY42FWV3MXFWR2eZY8ezvpY/N8aF8UhuZz84jtV+Iu/d4YfiGu+oHFUX6e43i1LDODs1FfCT9P8+lXN7piZRxNWOS23nTOB7syvsRPZHZ+qKhv2uckMfBLqelmsjLew1/anlpOlbLwT5vSUeks/2rQVG9U5eSyLC0+f+3JE53XToiRT6+OjhjPjRFunz6dVHM9DAtVURG7zW+ZbAfSw2R0mpCHvi1vFMRabctC/1/zdaKisjTTwnaRIYfhCmIdHbQunF/Rl5J8pEizfca37Pxkzr5yNnXHdfNJPGRHNrRvP9D81HqkbnNO5D2W5K//X1XFyK7kuyby3/iHXTp8rcJVmk2/onfCwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALi1f4DsKck70eEzAAAAAElFTkSuQmCC'}
        title={props.e.name}
      />
         <CardContent>
         <Typography gutterBottom variant="h5">{props.e.name}</Typography>
        <Box display="flex" justifyContent="space-between" my={2}>
          <Rating name="read-only" value={Number(props.e.rating)} readOnly />
          <Typography component="legend">{props.e.num_reviews} review{props.e.num_reviews > 1 && 's'}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {props.e.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {props.e.ranking}
          </Typography>
        </Box>
        {props.e?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}
        {props.e?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name}/>
        ))}
        {props.e.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" >
            <LocationOnIcon />{props.e.address}
          </Typography>
        )}
        {props.e.phone && (
          <Typography variant="body2" color="textSecondary" >
            <PhoneIcon /> {props.e.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(props.e.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(props.e.website, '_blank')}>
          Website
        </Button>
        <Button size="small" color="primary" onClick={(e) => add_to_wishlist(props.e)}>
          Add to wishllist
        </Button>
      </CardActions>
        </div>
    );
}

export default Card;
