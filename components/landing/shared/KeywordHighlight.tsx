import React from 'react';

export const KeywordHighlight = ({ text }: { text: string }) => {
  return (
    <span className="editorial-italic text-accent-blue text-[1.1em] inline-block -translate-y-[0.05em]">
      {text}
    </span>
  );
};
