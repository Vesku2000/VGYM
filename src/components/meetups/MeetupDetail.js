
import classes from './MeetupDetail.module.css';


function MeetupDetail(props) {



   

  function submitHandler(event) {
    event.preventDefault();
    const id = props.id;
    console.log(id);
    props.onDeleteTraining(id)
    
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
