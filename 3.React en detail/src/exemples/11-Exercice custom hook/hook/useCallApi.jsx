import {useEffect, useState} from 'react';

export default function useCallApi () {
  const [data, setData] = useState (null);
  const [loading, setLoading] = useState (false);
  const [error, setError] = useState (false);

  useEffect (() => {
    setLoading (true);
    setError (false);
    fetch ('https://randomuser.me/api')
      .then (response => response.json ())
      .then (data => {
        console.log(data)
        setData (data.results[0]);
        setLoading (false);
      })
      .catch (err => {
        setError (true);
        setLoading (false);
      });
  }, []);

  return [data, loading, error];
}
