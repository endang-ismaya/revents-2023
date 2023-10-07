import { Button, Form, Header, Segment } from 'semantic-ui-react';

export default function EventForm() {
  return (
    <Segment>
      <Header content="Create Event" />
      <Form>
        <Form.Field>
          <input type="text" name="" placeholder="Event Title" />
        </Form.Field>
        <Form.Field>
          <input type="text" name="" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" name="" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" name="" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" name="" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="text" name="" placeholder="Date" />
        </Form.Field>

        <Button type="submit" positive content="Submit" />
        <Button type="button" content="Cancel" />
      </Form>
    </Segment>
  );
}
