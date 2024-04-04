import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import contactsFilterReducer from './filtersSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: contactsFilterReducer,
    },
});
