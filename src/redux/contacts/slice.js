import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, updateContact } from './operations';
import { logOut } from '../auth/operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], loading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
        state.error = null;
      })

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items.push(payload);
      })

      .addCase(updateContact.pending, handlePending)
      .addCase(updateContact.rejected, handleRejected)
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(({ id }) => id === payload.id);
        state.items.splice(index, 1);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [true];
        state.error = null;
        state.loading = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
