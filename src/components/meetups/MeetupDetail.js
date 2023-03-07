import classes from './MeetupDetail.module.css';


function MeetupDetail(props) {

  function submitHandler(event){
    event.preventDefault();

    props.onDeleteTraining(trainingData);
    alert("Treeni poistettu");
  }

  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      
      <h1>{props.title}</h1>
      <h1>{props.date}</h1>
      <span>Motivaatio</span>
      <address>{props.address}</address>
      <p>{props.description}</p>
      <div className={classes.actions}>
        <button onSubmit={submitHandler}>Poista treeni</button>
      </div>
      
      <button>Muokkaa treeniä</button>
      
      
    </section>
  );
}

export default MeetupDetail;
