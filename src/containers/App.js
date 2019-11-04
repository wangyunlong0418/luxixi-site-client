import React from 'react';

export default function App({ children }) {
  return (
    <div className="app-root">
      <div className="app-body">
        <div className="view-wrap">{ children }</div>
      </div>
    </div>
  );
}
