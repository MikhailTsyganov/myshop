import {
  createAsyncThunk,
  createSlice,
  configureStore,
} from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Создаем thunk, который получает данные из API
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
});

// Создаем срез состояния, который будет обновляться при получении данных из API
const dataSlice = createSlice({
  name: "data",
  initialState: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
        state.data = null;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

// Создаем хранилище Redux с middleware для Thunk
const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataSlice.middleware),
});

// Создаем компонент React, который использует хук useDispatch и useSelector для получения данных из API и обновления состояния приложения
function App() {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>{data?.title}</h1>
    </div>
  );
}

export default App;
