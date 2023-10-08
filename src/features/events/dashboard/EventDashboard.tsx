import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';
import { useEffect, useState } from 'react';
import { AppEvent } from '../../../app/types/event';
import EventForm from '../form/EventForm';

type Props = {
  formOpen: boolean;
  setFormOpen: (value: boolean) => void;
};

export default function EventDashboard({ formOpen, setFormOpen }: Props) {
  const [events, setEvents] = useState<AppEvent[]>([]);

  useEffect(() => {
    setEvents(sampleData);
  }, []);

  function addEvent(event: AppEvent) {
    setEvents((prevState) => {
      return [...prevState, event];
    });
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {/* formOpen */}
        {formOpen && (
          <EventForm setFormOpen={setFormOpen} addEvent={addEvent} />
        )}
      </Grid.Column>
    </Grid>
  );
}
