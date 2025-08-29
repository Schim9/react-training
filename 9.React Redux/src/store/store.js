import { configureStore } from '@reduxjs/toolkit';
import counter from '../reducers/counter';

// On déclare le store avec les reducers à disposition
export const store = configureStore({
    reducer: {counter }
});



