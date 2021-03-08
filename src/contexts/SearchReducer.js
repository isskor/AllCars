export const initialCarState = {
  search: '',
  price: {
    min: 1000,
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

export const searchReducer = (state, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case 'FILTER_CATEGORY_ACTION':
      return {
        ...state,
        categories: handleFilters(state.categories, payload),
      };
    case 'FILTER_REMOVE_CATEGORY_ACTION':
      return {
        ...state,
      };
    case 'FILTER_PRICE_ACTION':
      return {
        ...state,
        price: {
          min: payload.min,
          max: payload.max,
        },
      };
    case 'FILTER_MILAGE_ACTION':
      return {
        ...state,
        milage: {
          min: payload.min,
          max: payload.max,
        },
      };
    case 'FILTER_SEARCH_ACTION':
      return;
    case 'FILTER_RESET_ACTION':
      return initialCarState;
    default:
      return state;
  }
};
