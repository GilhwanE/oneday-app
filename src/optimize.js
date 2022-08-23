import React, { useState } from 'react';
import { useEffect } from 'react';

const CountView = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`count:: ${count}`);
  });
  return <div>{count}</div>;
});

const Textview = React.memo(({ text }) => {
  useEffect(() => {
    console.log(`text:: ${text}`);
  });
});

const Optimize = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState('');

  return (
    <div style={{ padding: 50 }}>
      <div>
        count
        <CountView count={count} />
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>

      <div>
        text
        <Textview text={text} />
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Optimize;
