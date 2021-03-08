import { useState, useEffect } from "react";
import { useFetch } from "./../../customHooks/useFetch";
import { Container, Row, Col } from "react-bootstrap";

import Loading from "./../Loading";
import Character from "./Character";
import Paginate from "./../Paginate";

const BASE_ENDPOINT = "character";

/* Custom hook */
const Characters = ({ search, handlerFavorite, showLikeIsFavorite }) => {
    const [url, setUrl] = useState(BASE_ENDPOINT);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const newUrl = !search
            ? BASE_ENDPOINT
            : `${BASE_ENDPOINT}?name=${search}`;
        setUrl(newUrl);
    }, [search]);

    const [data, fetching, error] = useFetch(url);
    const { info, results: characters } = data;
    console.log(data);
    const handlePages = (newUrlPage) => {
        console.log(newUrlPage);
        const [, current] = newUrlPage.split("=");
        setCurrentPage(current);
        const newUrl = !search
            ? `${BASE_ENDPOINT}?${newUrlPage}`
            : `${BASE_ENDPOINT}?name=${search}&${newUrlPage}`;
        console.log(newUrl);
        setUrl(newUrl);
    };

    const isLike = (id) => {
        const resultado = showLikeIsFavorite(id);
        return resultado;
    };

    return (
        <Row>
            {fetching ? <Loading /> : ""}
            <Row>
                <Col md={10}>
                    {characters ? (
                        <Paginate
                            {...info}
                            handlePages={handlePages}
                            currentPage={currentPage}
                        />
                    ) : (
                        ""
                    )}
                </Col>
            </Row>

            <Container fluid>
                <Row className="Justify-content-center">
                    {characters
                        ? characters.map((character) => (
                              <Character
                                  key={character.id}
                                  handlerFavorite={handlerFavorite}
                                  like={isLike(character.id)}
                                  {...character}
                              />
                          ))
                        : ""}
                </Row>
            </Container>
        </Row>
    );
};

export default Characters;
