import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavorites } from '../api/api.interface';

interface favoritess {
  favorites: IFavorites[];
}

const initialState: favoritess = {
  favorites: [],
};

export const slice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<IFavorites>) => {
      const item = action.payload;
      const isExsict = state.favorites.some(el => el.id === item.id);
      if (isExsict)
        state.favorites = state.favorites.filter(el => el.id !== item.id);
      else state.favorites.push(item);
      /*      if(isExsict){
        const index = state.favorites.findIndex(i => i.id === item.id)
        if(index !== -1){
          state.favorites.splice(index, 1)
      }
    }
    else
    state.favorites.push(item)*/
    },
    clearFavorites: state => {
      if(state.favorites.length >= 1){
        state.favorites = [];
      }
    },
    /*  RemoveFavorites: (state, {payload: item}:PayloadAction<string>) => {
    state.favorites = state.favorites.filter(el => el.id !== item)
  }*/
  },
});

export const { reducer, actions } = slice;
