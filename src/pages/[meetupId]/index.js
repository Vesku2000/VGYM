import MeetupDetail from '../../components/meetups/MeetupDetail';
import { ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import { connectDatabase, getAllDocument, getOneDocument } from '../../helpers/db-util';


function MeetupDetails() {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/8/88/Vaasan_ammattikorkeakoulu_2018.jpg'
      title='TEMP PLACEHOLDER: First Meetup'
      address='TEMP PLACEHOLDER: Some Street 5, Some City'
      description='TEMP PLACEHOLDER: This is a meetup'
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/8/88/Vaasan_ammattikorkeakoulu_2018.jpg',
        id: meetupId,
        title: 'TEMP PLACEHOLDER:First Meetup',
        address: 'TEMP PLACEHOLDER:Some Street 5, Some City',
        description: 'TEMP PLACEHOLDER: This is a meetup',
      },
    },
  };
}

export default MeetupDetails;
