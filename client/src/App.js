import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {/* You can display the data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;