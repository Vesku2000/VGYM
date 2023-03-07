// our-domain.com/new-meetup
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  async function addMeetupHandler(enteredTrainingData){

    const response = await fetch('/api/new-meetups', {
      method: 'POST',
      body: JSON.stringify(enteredTrainingData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);
  }
  

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;