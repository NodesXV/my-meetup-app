
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    function onAddMeetHandler(meetupData){
        fetch('https://react-getting-started-e8748-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );
}


    
    
    return (
    <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={onAddMeetHandler}/>
    </section>
    );
}

export default NewMeetupPage;