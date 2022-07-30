import * as React from "react";
import { memo } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
} from "@mui/material";
import { useWithRouter } from "../../hooks/withRouter";

/**
 * Component with the card information of the character
 */
const CharacterCard = ({ character, router }) => {
  const navigate = router?.navigate;

  const styles = {
    overlay: {
      position: "absolute",
      top: "10px",
      right: "10px",
    },
  };

  let statusColor = null;
  if (character?.status === "Alive") {
    statusColor = "success";
  } else if (character?.status === "Dead") {
    statusColor = "error";
  } else {
    statusColor = "warning";
  }

  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea onClick={() => navigate(`/${character?.id}`)}>
            <CardMedia
              component="img"
              height="220"
              image={character?.image}
              title={character?.type}
            />
            <Chip
              label={character?.status}
              color={statusColor}
              style={styles.overlay}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {character?.name}
              </Typography>
              {/*               <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
          </CardActionArea>
          {/*             <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions> */}
        </Card>
      </Grid>
    </>
  );
};

export default useWithRouter(memo(CharacterCard));
