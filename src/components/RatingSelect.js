import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import FeedbackContext from '../context/FeedbackContext';

export default function RatingSelect({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);

  const [selected, setSelected] = useState(10);

  const handleChange = (event) => {
    setSelected(+event.target.value);
    select(+event.target.value);
  };

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((value) => (
        <li key={value}>
          <input
            type='radio'
            id={`num${value}`}
            name='rating'
            value={value}
            onChange={handleChange}
            checked={selected === value}
          />
          <label htmlFor={`num${value}`}>{value}</label>
        </li>
      ))}
    </ul>
  );
}

RatingSelect.propTypes = {
  select: PropTypes.func.isRequired,
};
