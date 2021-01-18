import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import { RootState } from '../../../../utils/store';

type Result = {
  username: string;
  score: number;
};

interface ExpandedResult extends Result {
  index: number;
}

const columns = [
  {
    title: 'Place',
    dataIndex: 'index',
    sorter: {
      compare: (a: ExpandedResult, b: ExpandedResult) => a.index - b.index,
    },
  },
  {
    title: 'Username',
    dataIndex: 'username',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    sorter: {
      compare: (a: ExpandedResult, b: ExpandedResult) => a.score - b.score,
    },
  },
];

const LeadersTable = (): JSX.Element => {
  const { results } = useSelector((state: RootState) => ({
    results: state.leaderboard.results,
  }));
  return (
    <>
      <Table
        pagination={false}
        rowKey="index"
        columns={columns}
        dataSource={results.map((el, index) => ({ ...el, index: index + 1 }))}
      />
    </>
  );
};

export default LeadersTable;
