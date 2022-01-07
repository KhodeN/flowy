import { Layout } from 'antd';
import React from 'react';

import { QueryRenderer } from '../../components/QueryRenderer/QueryRenderer';
import { useQuery } from '../../hooks/useQuery';
import { SideMenu } from '../SideMenu/SideMenu';

import classes from './App.module.css';

export function App() {
   const hello = useQuery('getRoot');

   return (
      <Layout className={classes.layout}>
         <Layout.Sider>
            <SideMenu />
         </Layout.Sider>
         <Layout.Content>
            <QueryRenderer query={hello}>{d => d}</QueryRenderer>
         </Layout.Content>
      </Layout>
   );
}
