import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "./addSlice";
import {api} from '../api/apiShop'
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const reducerSmain = combineReducers({
  favoriteMainaAdd: reducer,
  [api.reducerPath]: api.reducer,
})

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['api']
}

  const persistedReducer = persistReducer(persistConfig, reducerSmain)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      api.middleware,
    ),
})

export type RootState = ReturnType<typeof store.getState>

export const persistor = persistStore(store)
