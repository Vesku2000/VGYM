import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.content}>
          
          <p>päivä</p>
          <h3>{props.date}</h3>
          <h1>{props.id}</h1>
          
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Näytä Treeni</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
