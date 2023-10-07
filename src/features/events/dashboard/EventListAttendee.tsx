import { List, Image } from 'semantic-ui-react';

export default function EventListAttendee() {
  return (
    <List.Item>
      <Image size="mini" circular={true} src="/user.png" />
    </List.Item>
  );
}
