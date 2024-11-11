// TestimonialContent.jsx
import { useState } from 'react';
import { Paragraph } from '../utils/typography/Typography';
import { motion } from 'framer-motion';

const TestimonialContent = ({ content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_LENGTH = 250;
  const isLongText = content.length > MAX_LENGTH;
  const displayedText = isExpanded ? content : content.slice(0, MAX_LENGTH);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <motion.div
        layout
        initial={false}
        style={{ overflow: 'hidden' }}
        transition={{ duration: 0.5 }}
      >
        <Paragraph
          text={`"${displayedText}${!isExpanded && isLongText ? '...' : ''}"`}
          type="primary"
        />
      </motion.div>
      {isLongText && (
        <button
          onClick={toggleExpand}
          className="bg-primary py-2 px-4 mt-4 text-light font-bold rounded-full shadow-lg"
        >
          {isExpanded ? 'Show less' : 'Continue reading'}
        </button>
      )}
    </>
  );
};

export default TestimonialContent;
