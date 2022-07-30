import * as React from "react";
import { useEffect, Suspense, useCallback } from "react";
import { useParams } from "react-router-dom";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoadingCharacterSelector,
  getCharacterSelector,
  getErrorSelector,
} from "../../store/character/selectors";
import { fetchCharacterRequest } from "../../store/character/actions";
import {
  Grid,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
import "./characterPage.scss";
import WaitSpinner from "../../components/waitSpinner/waitSpinner";
import { useWithRouter } from "../../hooks/withRouter";

/**
 * Component with the information of use
 */
const CharacterPage = ({ router }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingCharacterSelector);
  const charsSelector = useSelector(getCharacterSelector);
  const error = useSelector(getErrorSelector);

  const { id } = router?.params;

  useEffect(() => {
    if (id !== undefined) dispatch(fetchCharacterRequest(id));
  }, [id]);

  const textInfo = useCallback(
    (head, info) => {
      return (
        <span>
          <b>{head}</b>
          {info}
        </span>
      );
    },
    [charsSelector],
  );

  return (
    <>
      <Suspense fallback={<WaitSpinner />}>
        <Button variant="contained" sx={{ mt: 4, mx: 4 }}>
          Return
        </Button>
        <Paper elevation={24} className="charContainer">
          <Grid container>
            <Grid item xs={6}>
              <img
                src={charsSelector?.image}
                alt={charsSelector?.name}
                className="responsive"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3" align="center">
                {charsSelector?.name}
              </Typography>
              <Divider />
              <List>
                <ListItem>
                  <ListItemText
                    primary={textInfo("Gender: ", charsSelector?.gender)}
                  />
                </ListItem>
                <Divider />
                <ListItem divider>
                  <ListItemText
                    primary={textInfo(
                      "Location: ",
                      charsSelector?.location?.name,
                    )}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={textInfo("Origin: ", charsSelector?.origin?.name)}
                  />
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText
                    primary={textInfo("Species: ", charsSelector?.species)}
                  />
                </ListItem>
                <Divider light />
                <ListItem>
                  <ListItemText
                    primary={textInfo("Status: ", charsSelector?.status)}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Suspense>
    </>
  );
};

export default useWithRouter(memo(CharacterPage));
