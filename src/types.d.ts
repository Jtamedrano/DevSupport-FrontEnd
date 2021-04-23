export interface Question {
  question: string;
  createdAt: number;
  resolved: boolean;
  resolution?: string;
  upvote: string;
  downvote: string;
  author: {
    username: string;
  };
  group: {
    groupName: string;
  };
  responses?: Response[];
}

export interface Response {
  createdAt: number;
  resolution: string;
  upvote: string;
  downvote: string;
  author: {
    username: string;
  };
}
