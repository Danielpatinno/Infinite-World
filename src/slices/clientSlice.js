import { createSlice , createAsyncThunk, isFulfilled} from "@reduxjs/toolkit"

import clientService from "../services/clientService"

const initialState = {
    clients:[],
    client:{},
    error: false,
    sucess: false,
    loading:false,
    message: null
}

// Registrar cilente
export const registerClient = createAsyncThunk("client/regiserClient" , async(client, thunkAPI) => {

    const data = await clientService.registerClient(client)

    if(data.errors) {
        return thunkAPI.rejectWithValue(data.errors[0])
    }

    return data;

})

// Deletar cliente
export const deleteClient = createAsyncThunk("client/deleteClient",
    async(id, thunkAPI) => {

        const data = await clientService.deleteClient(id)

        if(data.errors){
            return thunkAPI.rejectWithValue(data.errors[0])       
        }
        
        return data;
    }
 )

// pegar clientes
export const getClients = createAsyncThunk("client/get",

    async() => {

        const data = await clientService.getClient()

        return data;
    }
)

// Pegar cliente by id
export const getClientById = createAsyncThunk(
    "getClientById",
    async(id, thunkAPI) => {
        const data = await clientService.getClientById(id)

        if(data.errors) {
            return thunkAPI.rejectWithValue(data.error[0])
        }

        return data;
    }
)

// Procurr cliente
export const searchClient = createAsyncThunk(
    "searchClient",
    async(query, thunkAPI) => {
        const data = await clientService.searchClients(query)

        return data;
    }
)

// Atualizar cliente
export const updateClient = createAsyncThunk(
    "cliente/update",
    async(clientData, thunkAPI) => {
        const data = await clientService.updateClient(
            {
                name: clientData.name, 
                email: clientData.email,
                phone: clientData.phone
            }, 
            clientData.id
        )
        
        if(data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data;
    }
)

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.sucess = false;
            state.message = null
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerClient.pending, (state) => {
            state.loading = true;
            state.error = false;
        } ).addCase(registerClient.fulfilled, (state) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;
            state.message = "Cliente criado com sucesso"
        }).addCase(registerClient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }).addCase(deleteClient.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(deleteClient.fulfilled, (state, action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null

            state.clients = state.clients.filter((client) => {
                return client._id !== action.payload.id
            })

            state.message = action.payload.message
        }).addCase(deleteClient.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(getClients.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(getClients.fulfilled, (state, action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;
            state.clients = action.payload;   
        }).addCase(getClientById.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(getClientById.fulfilled, (state,action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;
            state.client = action.payload
        }).addCase(searchClient.pending, (state) => {
            state.loading = true;
            state.error = false
        }).addCase(searchClient.fulfilled, (state, action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;
            state.clients = action.payload;
        }).addCase(updateClient.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(updateClient.fulfilled, (state, action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;

            state.clients = state.clients.map((client) => {
                if (client._id === action.payload.client.id) {
                    return client.name= action.payload.client.name
                }
                return client;
            });

            state.message = 'Cliente atualizado com sucesso.'
        }).addCase(updateClient.rejected, (state,action) => {
            state.loading = false;
            state.error = action.payload;
            state.product = {};
        })
    }
})

export const {reset} = clientSlice.actions;
export default clientSlice.reducer;