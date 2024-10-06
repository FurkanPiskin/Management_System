import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron thunk fonksiyonu oluşturuyoruz
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get("http://localhost:5000/users/");
    return response.data;  // API'den gelen kullanıcıları döndürüyoruz
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: [],
        userlength:null,
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
        currentUser:{
            id:"",
            name:"",
            email:"",
            country:"",
            telno:""
        },
    },
    reducers: {
        userCount(state){
            state.userlength=state.userlength+1;
        },
        setCurrentUser(state, action) {
            state.currentUser = action.payload; // currentUser'ı güncelle
        }
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'; // API çağrısı başladığında loading durumuna geçiyoruz
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded'; // API çağrısı başarılı olduğunda succeeded durumuna geçiyoruz
                state.user = action.payload; // Gelen veriyi state'e ekliyoruz
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed'; // API çağrısı başarısız olduğunda failed durumuna geçiyoruz
                state.error = action.error.message; // Hata mesajını state'e ekliyoruz
            });
    }
});
export const uiActions=userSlice.actions;
export default userSlice;
