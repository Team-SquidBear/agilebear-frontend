import React, { lazy, Suspense } from 'react';

const LazyLinkList = lazy(() => import('./LinkList'));

const LinkList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLinkList {...props} />
  </Suspense>
);

export default LinkList;
