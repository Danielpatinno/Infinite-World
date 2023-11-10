import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

import productService from "../services/productService";

const initialState = {
    products: [],
    product: {},
    error: false,
    loading: false,
    success: false,
    message: null
}

// Cadastrar produto
export const registerProduct = createAsyncThunk(
    "registerProduct",
    async(product, thunkAPI) => {

        const data = await productService.registerProduct(product)

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data;
    }
)

// Deletar cliente
export const deleteProduct = createAsyncThunk(
    "deleteProduct",
    async(id, thunkAPI) => {

        const data = await productService.deleteProdutos(id)

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data;

    }
)

// Pegar produtos
export const getProducts = createAsyncThunk(
    "getProducts",
    async(_, thunkAPI) => {
        const data = await productService.getProducts()

        return data
    }
)

// Pegar produto por id
export const getProductByid = createAsyncThunk(
    "getProductId",
    async(id, thunkAPI) => {
        const data = await productService.getProductId(id)

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.error[0])
        }

        return data;
    }
)

// Procurar produtos
export const searchProduct = createAsyncThunk(
    "searchProduct",
    async(query, thunkAPI) => {
      const data = await productService.searchProducts(query)
        
      return data;
    }

)

// Update product
export const updateProduct = createAsyncThunk(
    "product/update",
    async(productData, thunkAPI) => {

        const data = await productService.updateProduct(
            {name:productData.name, price: productData.price},
            productData.id
        )

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }
        return data;
        
    }
)

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        reset: (state) => {
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerProduct.pending,(state) => {
            state.loading = true;
            state.error = null
        }).addCase(registerProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            // state.product = action.payload;
            state.message = "Produto Cadastrado com sucesso"
        }).addCase(registerProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            // state.product = {};
        }).addCase(deleteProduct.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(deleteProduct.fulfilled, (state,action) => {
            state.loading = false;
            state.success = true;
            state.error = null;

            state.products = state.products.filter((product) => {
                return product._id !== action.payload.id
            });

            state.message = action.payload.message;
        }).addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.products = action.payload
        }).addCase(getProductByid.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(getProductByid.fulfilled, (state,action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.product = action.payload
        }).addCase(searchProduct.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(searchProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.products = action.payload
        }).addCase(updateProduct.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;

            state.products = state.products.map((product) => {
                if (product._id === action.payload.product.id) {
                    return product.name= action.payload.product.name
                }
                return product;
            });

            state.message = 'Produto atualizado com sucesso.'
        }).addCase(updateProduct.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            state.product = {};
        })
    }
})


export const {reset} = productSlice.actions;

export default productSlice.reducer;