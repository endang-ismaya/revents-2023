import EventListItem from './EventListItem';

export default function EventList(props: any) {
  return (
    <>
      {props.events.map((event: any) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
}
