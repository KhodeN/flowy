import { PlusOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Modal } from 'antd';
import * as React from 'react';
import { useCallback } from 'react';

import { ListItems } from '../../components/ListItems/ListItems';
import { QueryRenderer } from '../../components/QueryRenderer/QueryRenderer';
import { useDestroyAllModals } from '../../hooks/useDestroyAllModals';
import { useQuery } from '../../hooks/useQuery';

export interface SideMenuProps {}

export const SideMenu: React.FC<SideMenuProps> = React.memo(() => {
   const categories = useQuery('getCategries');

   const handleAddSource = useCallback(() => {
      console.log('handleAddSource');
   }, []);

   const handleAdd = useCallback(() => {
      const modal = Modal.confirm({
         maskClosable: true,
         content: <>bla-bla</>,
         onCancel: () => modal.destroy(),
         onOk: handleAddSource,
         title: 'Add source',
      });
   }, [handleAddSource]);

   useDestroyAllModals();

   return (
      <>
         <Menu theme={'dark'} mode={'vertical'}>
            <QueryRenderer query={categories}>
               {items => <ListItems items={items} renderItem={item => <Menu.Item key={item}>{item}</Menu.Item>} />}
            </QueryRenderer>
         </Menu>
         <Layout.Footer>
            <Button icon={<PlusOutlined />} onClick={handleAdd} />
         </Layout.Footer>
      </>
   );
});

SideMenu.displayName = 'SideMenu';
