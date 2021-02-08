import React from 'react';

// Style
import './style.scss';

interface RecentQuestionProps {}

const RecentQuestionCell: React.FC<RecentQuestionProps> = (props) => {
  return (
    <div className="recentQuestion">
      <div className="rqLeft recentQuestion__left">
        <h3 className="rqLeft__title">
          How do you ask questions on DevSupport?
        </h3>
        <div className="rqLeft__info">
          <p className="rqLeft__infoItem rqLeft__author">Jtamedrano</p>
          <span> - </span>
          <p className="rqLeft__infoItem rqLeft__privacy">Public</p>
          <span> - </span>
          <p className="rqLeft__infoItem rqLeft__group">Unit 1</p>
          <span> - </span>
          <p className="rqLeft__infoItem reqLeft__time">1 Hour</p>
        </div>
      </div>
      <div className="rqRight recentQuestion__right">
        <div className="rqRight__cell rqRight__status">
          <span>Not Resolved</span>
        </div>
        <div className="rqRight__cell rqRight__commentCount">
          <h4 className="rqRight__cellHeader">Comments</h4>
          <p>0</p>
        </div>
        <div className="rqRight__cell rqRight__voteCount">
          <h4 className="rqRight__cellHeader">Votes</h4>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default RecentQuestionCell;
