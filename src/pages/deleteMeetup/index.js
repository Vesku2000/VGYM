// our-domain.com/new-meetup
import MeetupDetail from '@/components/meetups/MeetupDetail';


function NewMeetupPage() {
  async function deleteTrainingHandler(id){

    const response = await fetch('/api/new-meetups', {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(id);
  }
  

  return <MeetupDetail onDeleteTraining={deleteTrainingHandler} />
}

export default NewMeetupPage;