import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: ({ nama, kelas, alamat }) => ({
        payload: {
          id: nanoid(),
          nama,
          kelas,
          alamat,
        },
      }),
    },

    removeStudent: (state, action) => {
      return state.filter((s) => s.id !== action.payload);
    },

    updateStudent: (state, action) => {
      const { id, nama, kelas, alamat } = action.payload;

      return state.map((s) =>
        s.id === id ? { ...s, nama, kelas, alamat } : s
      );
    },
  },
});

export const { addStudent, removeStudent, updateStudent } =
  studentSlice.actions;

export default studentSlice.reducer;