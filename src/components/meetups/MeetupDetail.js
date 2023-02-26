import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { connectDatabase, deleteDocument } from '../../helpers/db-util';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function deleteMeetupHandler() {
    setIsLoading(true);

    const client = await connectDatabase();

    const result = await deleteDocument(client, 'meetups', { _id: props.id });

    setIsLoading(false);

    router.replace('/');
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
      <button onClick={deleteMeetupHandler} disabled={isLoading}>Poista treeni</button>
      
    </section>
  );
}

export default MeetupDetail;
