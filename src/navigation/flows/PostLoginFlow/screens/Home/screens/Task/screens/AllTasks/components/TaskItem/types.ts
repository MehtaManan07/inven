import { MultiTask } from '@api';

export type Props = {
  item: MultiTask;
};

export type ShortInfoProps = {
  createdAt: string;
  jobber: {
    id: number;
    name: string;
  };
};
