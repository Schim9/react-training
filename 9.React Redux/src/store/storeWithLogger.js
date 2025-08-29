import { configureStore } from '@reduxjs/toolkit';
import counter from '../reducers/counter';

import logger from 'redux-logger'

export const store = configureStore({
    reducer: { counter },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(logger)
});


