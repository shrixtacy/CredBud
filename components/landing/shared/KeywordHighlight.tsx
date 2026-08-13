import React from 'react';

export const KeywordHighlight = ({ text }: { text: string }) => {
  return (
    <span className="accent-underline font-bricolage font-extrabold text-ink text-[1.05em] inline-block">
      {text}
    </span>
  );
};
