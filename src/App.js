import React from 'react';
import PublicView from './pages/publicView';
import AdminView from './pages/adminView';

// Helper function to get the current path
const getCurrentPath = () => {
  return window.location.pathname;
};

function App() {
  const currentPath = getCurrentPath();

  return (
    <div>
      {currentPath === '/admin' ? <AdminView /> : <PublicView />}
    </div>
  );
}

export default App;