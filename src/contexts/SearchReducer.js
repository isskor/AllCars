export const initialCarState = {
  search: '',
  price: {
    min: 100000,
    max: 800000,
  },
  milage: {
    min: 0,
    max: 70000,
  },
  categories: {
    make: [],
    model: [],
    year: [],
  },
};

const handleFilters = (categoryState, payload) => {
  const { categoryType, categoryValue } = payload;

  return {
    ...categoryState,
    [categoryType]: [...categoryState[categoryType], categoryValue],
  };
};
// this is same as this, but dynamic
//   if (categoryType === 'make') {
//     return {
//       ...categoryState,
//       make: [...categoryState.make, categoryValue],
//     };
//   }
//   if (categoryType === 'model') {
//     return {
//       ...categoryState,
//       model: [...categoryState.model, categoryValue],
//     };
//   }
//   if (categoryType === 'year') {
//     return {
//       ...categoryState,
//       year: [...categoryState.year, categoryValue],
//     };
//   }

const handleRemoveFilter = (categoryState, payload) => {
  const keyArr = Object.keys(categoryState);

  const key = keyArr.find((item) => categoryState[item].includes(payload));
  // [1,2,3,4,5].INCLUDES(5) = TRUE/FALSE

  console.log(key);
  return {
    ...categoryState,
    [key]: categoryState[key].filter((item) => item !== payload),
  };
};

export const searchReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'FILTER_CATEGORY_ACTION':
      return {
        ...state,
        categories: handleFilters(state.categories, payload),
      };
    case 'FILTER_REMOVE_CATEGORY_ACTION':
      return {
        ...state,
        categories: handleRemoveFilter(state.categories, payload),
      };
    case 'FILTER_PRICE_ACTION':
      return {
        ...state,
        price: { ...state.price, [payload.minOrMax]: payload.value },
      };
    case 'FILTER_MILAGE_ACTION':
      return {
        ...state,
        milage: { ...state.milage, [payload.minOrMax]: payload.value },
      };
    case 'FILTER_SEARCH_ACTION':
      return {
        ...state,
        search: payload,
      };
    case 'FILTER_RESET_ACTION':
      return initialCarState;
    default:
      return state;
  }
};
