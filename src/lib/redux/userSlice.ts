import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserData {
  id: string;
  email: string;
  name: string;
  is_verified: boolean;
  subscription_status: string;
  is_in_trial: boolean;
  is_trial_completed: boolean;
  iat: number;
  exp: number;
}

interface UserState {
  data: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/user-data", { method: "POST" });
      if (!response.ok) throw new Error("Failed to fetch user data");
      return await response.json();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
