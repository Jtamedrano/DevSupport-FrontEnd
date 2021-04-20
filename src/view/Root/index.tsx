import React from 'react';
import Branding from '../../components/branding';
import QuestionsWrapper from '../../components/questions_wrapper';
import QuestionSubmission from '../../components/questions-submission';

interface ViewProps {}

const RootView: React.FC = (props: ViewProps) => {
  return (
    <>
      <Branding />
      <QuestionSubmission />
      <QuestionsWrapper />
    </>
  );
};

export default RootView;
