import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((exercises) => (
        <MeetupItem
          key={exercises.id}
          id={exercises.id}
          image={exercises.image}
          title={exercises.title}
          date={exercises.date}
          address={exercises.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
