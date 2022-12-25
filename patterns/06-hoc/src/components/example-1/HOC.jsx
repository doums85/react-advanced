/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';

export default function HOC(Component, entity) {
  return (props) => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
        const json = await res.json();
        setData(json);
      };
      fetchData();
    }, []);

    // eslint-disable-next-line array-callback-return
    let filteredData = data.slice(0, 10).filter((d) => {
      if (entity === 'users') {
        const { name } = d;
        return name.indexOf(term) >= 0;
      }
      if (entity === 'todos') {
        const { title } = d;
        return title.indexOf(term) >= 0;
      }
    });

    return (
      <div>
        <h2>{entity}</h2>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <Component data={filteredData} {...props} />
      </div>
    );
  };
}
