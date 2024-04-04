import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//     axios.defaults.headers.common['Authorization'] = '';
// };

export const register = createAsyncThunk('auth/register', async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (userInfo, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', userInfo);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

// export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
//     try {
//         const response = await axios.post('/contacts', newContact);
//         return response.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });

// export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
//     try {
//         const response = await axios.delete(`/contacts/${id}`);
//         return response.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message);
//     }
// });
