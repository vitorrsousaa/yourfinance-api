import React from 'react';
import { TableContentView, TableContentViewProps } from './TableContent.view';

export interface TableContentProps extends TableContentViewProps {}

function TableContent(props: TableContentProps) {
  return <TableContentView {...props} />;
}

export default React.memo(TableContent);
