import moment from "moment";
import { Col, Card, Button } from "react-bootstrap";

const pointer = {
  cursor: "pointer",
};

const Character = ({
  key,
  handlerFavorite,
  like,
  id,
  image,
  name,
  gender,
  status,
  species,
  created,
}) => {
  //verifico si esta en favoritos y le pongo lilke si es asi
  function onLike(like, id, name, image) {
    handlerFavorite(id, name, like, image); //marco like a ese character
  }

  /*si lo hiciera con una variable funcion a la que se le pasa el evento
const onLike = (e) => {
   let id = e.target.id;
  let name = e.target.name;
  handlerFavorite(id, name, true)  //saco el like a  a ese character 
}
//si ya esta en favoritos lo muestro con el corazon rojo de like
*/

  return (
    <Col md={4} className="mt-3 mb-3">
      <Card>
        <Card.Img variant={"top"} src={image} alt="" />
        <Card.Body>
          <Card.Title>
            {name} - {gender}
          </Card.Title>
          <Card.Text>
            <p>
              {status === "Alive" ? "VIVO" : "MUERTO"} - {species}
            </p>
            <small>{moment(created).format("DD/MM/yyyy")}</small>

            <p
              className="text-right"
              style={pointer}
              id={"id_like_" + id}
              onClick={() => onLike(like, id, name, image)}
            >
              {like ? "💔" : "🤍"}
            </p>
          </Card.Text>
          <Button
            type="button"
            variant={status === "Alive" ? "success" : "danger"}
            block
          >
            Ver más
                    </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Character;
