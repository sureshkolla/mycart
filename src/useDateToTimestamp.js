import { useState, useEffect } from 'react';

// Custom hook to convert a date to a timestamp
const useDateToTimestamp = (initialDate) => {
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    if (initialDate) {
      const date = new Date(initialDate);
      setTimestamp(date.getTime());
    }
  }, [initialDate]);

  return timestamp;
};

export default useDateToTimestamp;  
