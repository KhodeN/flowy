import { Spin } from 'antd';
import * as React from 'react';
import { ReactNode } from 'react';

import { Query, QueryStatus } from '../../services/models';

export interface QueryRendererProps<T> {
   query: Query<T>;

   children(data: T): ReactNode;

   renderError?(e: any): ReactNode;

   renderSpin?(): ReactNode;
}

export function QueryRenderer<T>({ query, children, renderError, renderSpin }: QueryRendererProps<T>) {
   switch (query.status) {
      case QueryStatus.InProgress:
         return <>{renderSpin ? renderSpin() : <Spin />}</>;

      case QueryStatus.Error:
         return <>{renderError ? renderError(query.error) : <pre>{query.error.toString()}</pre>}</>;

      default:
         return <>{children(query.data)}</>;
   }
}

QueryRenderer.displayName = 'QueryRenderer';
