import {
  // createSlice,
  // createAsyncThunk,
  buildCreateSlice,
  asyncThunkCreator,
  PayloadAction,
} from "@reduxjs/toolkit";

import { IUser } from "../../models";

export interface UsersState {
  users: IUser[];
  loading: boolean;
  error: string;
}
const initialState = {
  users: [],
  loading: false,
  error: "",
} as UsersState;

// export const fetchUsers = createAsyncThunk(
//   "users/fetchUsers",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );

//       if (!response.ok) {
//         return rejectWithValue("Loading error!");
//       }

//       return await response.json();
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );

// export const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     removeUser: (state, action) => {
//       state.users = state.users.filter((user) => user.id !== action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = "";
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.users = action.payload;
//         state.loading = false;
//         state.error = "";
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

export const usersSlice = createSliceWithThunk({
  name: "users",
  initialState,
  selectors: {
    usersState: (state) => state,
    usersList: (state) => state.users,
  },
  reducers: (create) => ({
    removeUser: create.reducer((state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    }),
    fetchUsers: create.asyncThunk<IUser[]>(
      async (_, { rejectWithValue }) => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');

          if (!response.ok) {
            return rejectWithValue("Loading users error!");
          }
          return await response.json();
        } catch (e) {
          return rejectWithValue(e);
        }
      },
      {
        pending: (state) => {
          state.loading = true;
          state.error = "";
        },
        fulfilled: (state, action) => {
          state.users = action.payload;
          state.error = "";
        },
        rejected: (state, action) => {
          state.error = action.payload as string;
        },
        settled: (state) => {
          state.loading = false;
        },
      }
    ),
  }),
});

export const { removeUser, fetchUsers } = usersSlice.actions;
export const { usersList, usersState } = usersSlice.selectors;
export default usersSlice.reducer;

