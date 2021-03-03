import { useState, useEffect } from 'react';
import styles from '../css/SliderInput.module.css';
const SliderInput = () => {
  const min = 1000;
  const max = 1000000;
  let thumbsize = 14;
  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(avg * 0.5);
  const [maxVal, setMaxVal] = useState(avg * 1.5);

  const width = 120;
  const minWidth =
    thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);
  const inputStyles = {
    min: {
      width: minWidth,
      left: 0,
    },
    max: {
      width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
      left: minWidth,
    },
  };

  useEffect(() => {
    setAvg((maxVal + minVal) / 2);
  }, [minVal, maxVal]);

  return (
    <div className={styles.min_max_slider}>
      <p>Price</p>
      <div>
        <input
          id='min'
          className={styles.min}
          style={inputStyles.min}
          name='min'
          type='range'
          step='1'
          min={min}
          max={avg}
          value={minVal}
          onChange={({ target }) => setMinVal(Math.round(Number(target.value)))}
        />
        <input
          id='max'
          className={styles.max}
          style={inputStyles.max}
          name='max'
          type='range'
          step='1'
          min={avg}
          max={max}
          value={maxVal}
          onChange={({ target }) => setMaxVal(Math.round(Number(target.value)))}
        />
      </div>
      <div className='labels'>
        <label htmlFor='min'>{minVal}</label>
        <label htmlFor='max'>{maxVal}</label>
      </div>
    </div>
  );
};

export default SliderInput;
