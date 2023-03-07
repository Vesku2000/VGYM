// our-domain.com/new-meetup
import MeetupDetail from '@/components/meetups/MeetupDetail';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  async function deleteTrainingHandler(enteredTrainingID){

    const response = await fetch('/api/new-meetups', {
      method: 'DELETE',
      body: JSON.stringify(enteredTrainingID),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  }
  

  return <MeetupDetail onDeleteTraining={deleteTrainingHandler} />
}

export default NewMeetupPage;