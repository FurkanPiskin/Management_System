import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Yerel depolama

const store=configureStore({
    reducer: {
        user:userSlice.reducer,
    }
});
export default store;


/*const persistConfig = {
    key: 'root',
    storage,
  };
  
  // Persisted reducer oluşturuluyor
  const persistedReducer = persistReducer(persistConfig, userSlice.reducer);
  
  const store = configureStore({
    reducer: {
      user: persistedReducer, // persistedReducer kullanılıyor
    },
  });
  
  // Persistor oluşturuluyor
  export const persistor = persistStore(store);
  
  export default store;*/