import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

import Characters from "./Components/Characters";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";

function App() {
  const [search, setSearch] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const handlerSearch = (value) => {
    console.log("el valor de value en handelrSearch es " + value);
    setSearch(value);
  };

  const handlerFavorite = (id, name = "", like = false, image = "") => {
    if (!like) {
      const pos = showLikeIsFavorite(id);
      if (pos) {
        return;
      } //si ya esta agregado a favoritos, no lo agrego the nuevo
      let newFavorite = { id: id, name: name, image: image };
      setFavorites([...favorites, newFavorite]);
    } else {
      const newFavorite = favorites.filter(
        (favorite) => favorite.id !== id
      );
      setFavorites(newFavorite);
    }
  };

  const showLikeIsFavorite = (id) => {
    //verifio si el id pasado esta en favoritos
    let pos = favorites.findIndex((favorite) => favorite.id === id);
    return pos >= 0 ? true : false;
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Search handlerSearch={handlerSearch} />
      </Row>

      <Row>
        <Col md={10}>
          <Characters
            search={search}
            handlerFavorite={handlerFavorite}
            showLikeIsFavorite={showLikeIsFavorite}
          />
        </Col>

        <Col md={2}>
          <Favorites
            favorites={favorites}
            handlerFavorite={handlerFavorite}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
