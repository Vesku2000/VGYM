
import classes from './MeetupDetail.module.css';


function MeetupDetail(props) {



   

  function submitHandler(event) {
    event.preventDefault();
    const id = props.id;
    console.log(id);
  
    fetch('/api/new-meetup', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id }),
    })
    
      .then((response) => {
        if (!response.ok) {
          throw new Error('Deleting meetup failed.');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        // TODO: handle successful deletion
      })
      .catch((error) => {
        console.error(error);
        // TODO: handle error
      });
  }

  return (
    <form className={classes.detail} onSubmit={submitHandler}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <h1>{props.date}</h1>
      <span>Motivaatio</span>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <p>{props.id}</p>
      <div className={classes.actions}>
        <button>Poista treeni</button>
      </div>
      <button>Muokkaa treeniä</button>
    </form>
  );
}

export default MeetupDetail;
