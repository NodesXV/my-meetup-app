import MeetupList from '../components/meetups/MeetupList';
const DUMMY_DATA = [
{
    id: 'm1',
    title: 'This is a first meetup',
    image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/62/e9/2b/101.jpg?w=700&h=-1&s=1',
    address: '5, Xinyi Road, Xinyi District',
    description:
        'This is the first location, amazing meetup which you definitely should not miss!'
},
{
    id: 'm2',
    title: 'This is a second meetup',
    image: 
    'https://www.japan-guide.com/g18/3009_01.jpg',
    address: '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan',
    description:
        'This is the second location, amazing meetup which you definitely should not miss!'
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
