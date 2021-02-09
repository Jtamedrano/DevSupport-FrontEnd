import React from 'react';
import RecentQuestionCell from 'src/component/Home/RecentQuestionCell';

// components
import Sidebar from '../../component/Sidebar';
// style
import './homeStyle.scss';

interface HomeProps {}

const data: any[] = [
  {
    id: 1,
    question: 'How do you ask questions in DevSupport?',
    author: 'Jesse Medrano',
    private: false,
    groupName: 'Unit 1',
    uploadDate: new Date('February 8 2021 11:00 pm'),
    comments: ['comment 1', 'comment 2', 'comment 3'],
    votes: 6,
    resolved: true,
  },
  {
    id: 2,
    question: 'When will Lambda adapt to the students needs?',
    author: 'Kyle Willard',
    private: true,
    groupName: 'Secret Discord Group',
    uploadDate: new Date('February 6 2021 1:00 pm'),
    comments: ['comment 1', 'comment 2', 'comment 3'],
    votes: 99,
    resolved: false,
  },
  {
    id: 3,
    question: 'Will you two ever learn ts w/ graphQl and apollo?',
    author: 'NateTheDev',
    privacy: true,
    groupName: 'Random Chat',
    uploadDate: new Date('February 1 2021 1:00 pm'),
    comments: [
      'comment 1',
      'comment 2',
      'comment 3',
      'comment 3',
      'comment 3',
      'comment 3',
    ],
    votes: 2,
    resolved: true,
  },
];

const HomeView: React.FC<HomeProps> = (props) => {
  return (
    <div className="home home__container">
      <Sidebar />
      <div className="home__mainContent">
        <h2>Recent Questions</h2>
        <div className="recentQuestionTable">
          {data.map((question) => (
            <RecentQuestionCell data={question} key={`q-${question.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
