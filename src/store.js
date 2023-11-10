import { configureStore } from "@reduxjs/toolkit";

import clientSlice from "./slices/clientSlice";
import managerSlice from "./slices/managerSlice";
import productSlice from "./slices/productSlice";

export const store = configureStore({
    reducer: {
        client:clientSlice,
        product:productSlice,
        auth:managerSlice
    }
});