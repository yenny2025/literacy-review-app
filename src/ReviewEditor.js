import React, { useState } from 'react';

export default function ReviewEditor() {
  const [text, setText] = useState('');
  return (
    <div>
      <h1>문해력 리뷰 앱</h1>
      <textarea
        rows={10}
        cols={50}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="여기에 리뷰를 작성하세요..."
      />
    </div>
  );
}