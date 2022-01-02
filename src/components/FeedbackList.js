import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList() {
  const { feedback, deleteFeedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length < 1) {
    return <div>No Feedback</div>;
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
