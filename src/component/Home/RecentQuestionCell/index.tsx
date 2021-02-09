import React from 'react';
import { msConvertToString } from 'src/utils/msConvert';

// Components
import { StatusIndicator } from '../../styled-components';

// Style
import './style.scss';

interface RecentQuestionProps {
  data: {
    question: string;
    author: string;
    privacy: boolean;
    groupName: string;
    uploadDate: number;
    comments: any[];
    votes: number;
    resolved: boolean;
  };
}

const RecentQuestionCell: React.FC<RecentQuestionProps> = ({ data }) => {
  return (
    <div className="recentQuestion">
      <div className="rqLeft recentQuestion__left">
        <h3 className="rqLeft__title">{data.question}</h3>
        <div className="rqLeft__info">
          <p className="rqLeft__infoItem rqLeft__author">{data.author}</p>
          <p className="rqLeft__infoItem rqLeft__privacy">
            {data.privacy ? 'Private' : 'Public'}
          </p>
          <p className="rqLeft__infoItem rqLeft__group">{data.groupName}</p>
          <p className="rqLeft__infoItem reqLeft__time">
            {msConvertToString(Date.now() - data.uploadDate)}
          </p>
        </div>
      </div>
      <div className="rqRight recentQuestion__right">
        <div className="rqRight__status rqRight__cell">
          <StatusIndicator
            color={data.resolved ? 'success' : 'alert'}
            variant="outlined"
          >
            {data.resolved ? 'resolved' : 'Not Resolved'}
          </StatusIndicator>
        </div>
        <div className="rqRight__cell rqRight__commentCount">
          <h4 className="rqRight__cellHeader">Comments</h4>
          <p>{data.comments.length}</p>
        </div>
        <div className="rqRight__cell rqRight__voteCount">
          <h4 className="rqRight__cellHeader">Votes</h4>
          <p>{data.votes}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentQuestionCell;
