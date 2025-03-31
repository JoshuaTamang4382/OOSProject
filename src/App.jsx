import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import { customTheme } from './config';

function App() {
  return (
    <>
      <ConfigProvider theme={customTheme}>
        <Suspense>
          <RouterProvider router={routes} />
        </Suspense>
      </ConfigProvider>
    </>
  );
}

export default App;
