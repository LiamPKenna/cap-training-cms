import React from 'react';
import styled from 'styled-components';

const TextP = styled.p`
  margin: 0.75rem 0;
  font-size: 1rem;
`;

const RichTextDiv = styled.div`
  margin: 0.75rem 0 1rem;
  font-size: 1rem;
`;

const LessonText = params => {
  const formatText = text => {
    return text.split('\n');
  };

  const checkTypeAndFormat = content => {
    if (content === 'string' && content[0] !== '<') {
      return (
        <>
          {formatText(content).map((c, i) => (
            <TextP key={i}>{c}</TextP>
          ))}
        </>
      );
    } else if (content) {
      return <RichTextDiv dangerouslySetInnerHTML={{ __html: content }} />;
    }
  };
  return <div>{checkTypeAndFormat(params.content)}</div>;
};

export default LessonText;
