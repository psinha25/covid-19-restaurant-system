import {
  REGISTER_RESTAURANT,
  SET_RESTAURANT,
  EDIT_RESTAURANT,
  GET_RESTAURANT_DATA,
  GET_ALL_RESTAURANTS,
  FILTER_RESTAURANT,
  SET_DASHBOARD_RESTAURANT,
} from '../constants/actions';

// Get token, set isAuthenticated and user to null, set loading to true.
const initialState = {
  restaurants: null,
  restaurant: null,
  dashboardRestaurant: null,
  loadingRestaurant: true,
  chartData: null,
};

export default function auth_red(state = initialState, action) {
  // Destructuring type and payload from action.
  const { type, payload } = action;

  switch (type) {
    case REGISTER_RESTAURANT:
      return {
        ...state,
        dashboardRestaurant: payload,
        restaurants: [payload, ...state.restaurants],
        loadingRestaurant: false,
      };
    case EDIT_RESTAURANT:
    case SET_DASHBOARD_RESTAURANT:
      return {
        ...state,
        dashboardRestaurant: payload,
        loadingRestaurant: false,
      };
    case SET_RESTAURANT:
      return { ...state, restaurant: payload, loadingRestaurant: false };
    case GET_RESTAURANT_DATA:
      return { ...state, chartData: payload, loadingRestaurant: false };
    case GET_ALL_RESTAURANTS:
      return { ...state, restaurants: payload, loadingRestaurant: false };
    case FILTER_RESTAURANT:
      return { ...state, restaurants: payload, loadingRestaurant: false };
    default:
      // Do nothing.
      return state;
  }
}
