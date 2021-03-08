import { Card } from 'react-bootstrap';

const pointer = {
  cursor: "pointer",

};

const Favorites = ({ favorites, handlerFavorite }) => {



  //verifico si esta en favoritos y le pongo lilke si es asi
  function onDisLike(id) {
    //console.log('por sacar el likde a ' + id)
    handlerFavorite(id, "", true)  //saco de favoritos
  }

  return (
    <div><h5>"Mis Favoritos"</h5>
      {
        favorites.map(favorite =>
        (
          <Card key={favorite.id} style={{ width: '8rem' }}>
            <Card.Img variant="top" src={favorite.image} />
            <Card.Body>
              <Card.Text><p key={favorite.id} className="text-left" style={pointer} id={'id_like_' + favorite.id} onClick={() => onDisLike(favorite.id)} >
                "{favorite.name}❌"  <br></br>
              </p>
              </Card.Text>
            </Card.Body>
          </Card>
        )
        )}

    </div>
  )
}

export default Favorites;