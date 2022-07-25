import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
{
    id: 'm1',
    title: 'This is a first meetup',
    image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2021_Taipei_Night_Skyline.jpg/1920px-2021_Taipei_Night_Skyline.jpg',
    address: '5, Xinyi Road, Xinyi District',
    description:
        'This is a first, amazing meetup which you definitely should not miss.'
},
{
    id: 'm2',
    title: 'This is a second meetup',
    image: 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1920px-Skyscrapers_of_Shinjuku_2009_January.jpg',
    address: '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan',
    description:
        'This is a second, amzing meetup which you definitely should not miss'
}
];


function AllMeetupsPage() {
    return (
        <section>
            <h1> All Meetups </h1>
            <MeetupList meetups={DUMMY_DATA}/>
        </section> 
    );
}

export default AllMeetupsPage;
