import { ChangeEvent, useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm() {
  const initialValues = {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  };

  const [values, setValues] = useState(initialValues);

  function onSubmit() {
    // check if it is an update
    // selectedEvent
    //   ? updateEvent({ ...selectedEvent, ...values })
    //   : addEvent({
    //       ...values,
    //       id: createId(),
    //       hostedBy: 'endang',
    //       attendees: [],
    //       hostPhotoURL: '',
    //     });
    // setFormOpen(false);
    console.log(values);
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Segment>
      <Header content="Create Event" />
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            name="venue"
            placeholder="Venue"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            name="date"
            placeholder="Date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>

        <Button type="submit" positive content="Submit" />
        <Button type="button" content="Cancel" />
      </Form>
    </Segment>
  );
}
