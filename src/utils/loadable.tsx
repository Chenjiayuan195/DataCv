import React from 'react';
import Loadable from 'react-loadable';

const loadingComponent = () => <div>loading</div>

export default (file: string, loading = loadingComponent) => {
  console.log(file)
  return Loadable({
    loader: () => import(`@/views/${file}`),
    loading
  });
}