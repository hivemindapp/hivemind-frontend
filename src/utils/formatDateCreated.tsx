import dayjs from 'dayjs';

export const formatDateCreated = (created: string) => {
  let now = dayjs();
  let createdAt = dayjs(created);
  let diff = now.diff(created, 'hours');

  if (diff >= 24) {
    let time = createdAt.format('h:mm a');
    let date = createdAt.format('MMMM D, YYYY');
    return `at ${time} on ${date}`;
  } else if (diff === 0) {
    return 'just now';
  } else if (diff === 1) {
    return `${diff} hr ago`;
  } else {
    return `${diff} hours ago`;
  }
};
