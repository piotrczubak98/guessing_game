import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';

import { RootState } from '../../../../utils/store';
import { Result } from '../../../../types/Leaderboard';

interface ResultWithIndex extends Result {
  index: number;
}

const columns = [
  {
    title: 'Place',
    dataIndex: 'index',
    sorter: {
      compare: (a: ResultWithIndex, b: ResultWithIndex) => a.index - b.index,
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
      compare: (a: ResultWithIndex, b: ResultWithIndex) => a.score - b.score,
    },
  },
];

const LeadersTable: FC = () => {
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
