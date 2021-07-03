import { Action } from './action';

const initialState = {
  mainScreenCatalogSelectedGenre: null,
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case Action.selecteMainScreenCatalogGenre.type:
      return {
        ...state,
        mainScreenCatalogSelectedGenre: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
