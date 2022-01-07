import { Empty } from 'antd';
import * as React from 'react';
import { ReactNode } from 'react';

export interface ListItemsProps<T> {
   items: T[];

   renderItem(item: T, index: number): ReactNode;

   renderEmpty?(): ReactNode;
}

export const ListItems = <T,>({ items, renderEmpty, renderItem }: ListItemsProps<T>) => (
   <>{items?.length > 0 ? items.map(renderItem) : renderEmpty?.() ?? <Empty />}</>
);

ListItems.displayName = 'ListItems';
