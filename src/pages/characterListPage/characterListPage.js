import * as React from "react";
import { useEffect, Suspense, useState } from "react";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoadingCharactersSelector,
  getCharactersSelector,
  getErrorSelector,
} from "../../store/characters/selectors";
import { fetchCharactersRequest } from "../../store/characters/actions";
import { Grid } from "@mui/material";
import "./characterListPage.scss";
import WaitSpinner from "../../components/waitSpinner/waitSpinner";
const CharacterCard = React.lazy(() =>
  import("../../components/characterCard/characterCard"),
);
const PaginationBar = React.lazy(() =>
  import("../../components/pagination/pagination"),
);

/**
 * Component with the information of use
 */
const CharacterListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoadingCharactersSelector);
  const charsSelector = useSelector(getCharactersSelector);
  const error = useSelector(getErrorSelector);

  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [numberPages, setNumberPages] = useState(0);

  useEffect(() => {
    dispatch(fetchCharactersRequest(page));
  }, [page]);

  useEffect(() => {
    setCharacters(charsSelector?.results);
    setNumberPages(charsSelector?.info?.pages);

    console.log({ characters });
  }, [charsSelector]);

  /*     const () = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
    }; */
  function handleChange(event, value) {
    setPage(value);
  }

  /**
   * Function for render the characters card component
   * @param {Object} array category
   */

  const renderCharactersCard = (characters) =>
    characters?.map((char) => {
      return <CharacterCard key={char.id} character={char} />;
    });

  return (
    <>
      <Suspense fallback={<WaitSpinner />}>
        <div className="container">
          <Grid container spacing={2}>
            {renderCharactersCard(characters)}
            <Grid item xs={12}>
              <PaginationBar
                numberPages={numberPages}
                handleChange={handleChange}
              />
            </Grid>
          </Grid>
        </div>
      </Suspense>
    </>
  );
};

export default memo(CharacterListPage);
