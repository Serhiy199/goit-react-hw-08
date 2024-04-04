import { createSlice } from '@reduxjs/toolkit';

const contactsFilterReducer = createSlice({
    name: 'filters',
    initialState: {
        name: '',
    },
    reducers: {
        changeFilter: {
            reducer: (state, action) => {
                state.name = action.payload;
            },
        },
    },
});

export const { changeFilter } = contactsFilterReducer.actions;
export default contactsFilterReducer.reducer;

export const selectNameFilter = state => state.filters.name;
