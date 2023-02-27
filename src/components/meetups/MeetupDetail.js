import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
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
      <button>Muokkaa treeniä</button>
      <button>Poista treeni</button>
      
    </section>
  );
}

export default MeetupDetail;
