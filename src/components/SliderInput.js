import { useState, useEffect, useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import styles from '../css/SliderInput.module.css';
const SliderInput = ({ min, max, type }) => {
  const { dispatch, filteredCarsObject } = useContext(CarContext);
  const { price, milage } = filteredCarsObject;

  console.log(price, milage);

  const maxType = type === 'Price' ? price.max : milage.max;
  const minType = type === 'Price' ? price.min : milage.min;

  let thumbsize = 14;
  const [avg, setAvg] = useState((min + max) / 2);
  const [minVal, setMinVal] = useState(minType);
  const [maxVal, setMaxVal] = useState(maxType);

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
    setMinVal(minType);
    setMaxVal(maxType);
  }, [price, milage]);

  const handleRange = (value, minOrMax) => {
    dispatch({
      type: type === 'Price' ? 'FILTER_PRICE_ACTION' : 'FILTER_MILAGE_ACTION',
      payload: {
        minOrMax: minOrMax,
        value: value,
      },
    });
  };

  return (
    <div className={styles.slider_container}>
      <p>{type}</p>
      <div className={styles.slider}>
        <div className={styles.slider_bar}></div>
        <input
          id='min'
          className={styles.min_slider}
          style={inputStyles.min}
          name='min'
          type='range'
          step='1'
          min={min}
          max={avg}
          value={minType}
          onChange={({ target }) =>
            handleRange(Math.round(Number(target.value)), 'min')
          }
        />
        <input
          id='max'
          className={styles.max_slider}
          style={inputStyles.max}
          name='max'
          type='range'
          step='1'
          min={avg}
          max={max}
          value={maxType}
          onChange={({ target }) =>
            handleRange(Math.round(Number(target.value)), 'max')
          }
        />
      </div>
      <div className={styles.labels}>
        <span>{minType.toLocaleString()}</span>
        <span>{maxType.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default SliderInput;
