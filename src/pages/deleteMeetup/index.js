// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  async function deleteTrainingHandler(enteredMeetupData){

    const response = await fetch('/api/new-meetups', {
      method: 'DELETE',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  }
  

  return <NewMeetupForm onDeleteTraining={deleteTrainingHandler} />
}

export default NewMeetupPage;