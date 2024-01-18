import { Notification } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export const ErrorMessage = (props) => {
  const {
    title, subtitle, visible, setVisible,
  } = props;

  if (!visible) {
    return null;
  }

  return (
    <Notification
      color="red"
      icon={<FontAwesomeIcon icon={faX} />}
      mt="lg"
      onClose={() => setVisible(false)}
      title={title}
      withBorder
    >
      {subtitle}
    </Notification>
  );
};
