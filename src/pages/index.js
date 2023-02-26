import { connectDatabase, getAllDocument } from '@/helpers/db-util';

import MeetupList from '../components/meetups/MeetupList';


function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await connectDatabase();

  // fetch data from the database
  const meetups = await getAllDocument(client, 'exercises', { _id: -1 }, {});

  client.close();

  // map the data to the desired format
  const formattedMeetups = meetups
    .filter((meetup) => meetup.date) // remove data without a date property
    .map((meetup) => ({
      title: meetup.title,
      motivation: meetup.motivation,
      image: meetup.image,
      date: meetup.date,
      id: meetup._id.toString(),
    }));

  return {
    props: {
      meetups: formattedMeetups,
    },
    revalidate: 1,
  };
}

export default HomePage;
