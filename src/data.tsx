const questions = [
  {
    question: 'What is 1 + 1?',
    createdAt: 1519211809934,
    resolved: true,

    upvote: '10',
    downvote: '3',
    author: { username: 'Bob Smith' },
    group: { groupName: 'Front End' },
    responses: [
      {
        author: { username: 'Tim Jones' },
        createdAt: 1519211809938,
        resolution: 'Your Mom!',
        upvote: '0',
        downvote: '100',
      },
      {
        author: { username: 'Mike Jones' },
        createdAt: 1519211809938,
        resolution: 'No! Your Mom!',
        upvote: '0',
        downvote: '100',
      },
    ],
  },
  {
    question: 'What is the meaning of life?',
    createdAt: 1519211810362,
    resolved: false,
    resolution: '',
    upvote: '10',
    downvote: '3',
    author: { username: 'Angela Johnson' },
    group: { groupName: 'Back End' },
  },
  {
    question: 'What is 1 - 1?',
    createdAt: 1519211809934,
    resolved: true,
    resolution: '0',
    upvote: '10',
    downvote: '3',
    author: { username: 'James Jones' },
    group: { groupName: 'Front End' },
  },
  {
    question: 'What is 1 + 3?',
    createdAt: 1519211809934,
    resolved: true,
    resolution: '4',
    upvote: '10',
    downvote: '3',
    author: { username: 'Amy Smith' },
    group: { groupName: 'Front End' },
  },
];

export default questions;
