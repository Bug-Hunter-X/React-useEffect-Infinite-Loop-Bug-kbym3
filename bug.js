```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run infinitely because it doesn't have a cleanup function
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 100);
    // Missing cleanup function to clear the interval
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```