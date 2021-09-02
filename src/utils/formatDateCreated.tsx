import dayjs from 'dayjs';

export const formatDateCreated = (post: any) => {
  console.log('created', post.createdAt);

  let now = dayjs();
  let createdAt = dayjs(post.createdAt);
  let diff = now.diff(createdAt, 'hours');

  if (diff >= 24) {
    let time = dayjs(post.createdAt).format('h:mm a');
    let date = dayjs(post.createdAt).format('MMMM D, YYYY');
    return `at ${time} on ${date}`;
  } else if (diff === 0) {
    return 'just now';
  } else if (diff === 1) {
    return `${diff} hr ago`;
  } else {
    return `${diff} hours ago`;
  }
};
