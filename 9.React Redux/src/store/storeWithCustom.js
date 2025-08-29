import { configureStore } from '@reduxjs/toolkit';
import counter from '../reducers/counter';

export const store = configureStore({
    reducer: { counter },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(customMiddleware)
});


// Middleware personnalisé pour intercepter les actions
// et effectuer des opérations avant de les envoyer au reducer
function customMiddleware(store) {
    return function (next) {
        return function (action) {
            // Logique personnalisée pour le middleware
            // Envoie l'action au prochain middleware ou au reducer
            next({
                type: "counter/increment",
                payload: {
                    value: 123
                }
            });
        };
    };
}


