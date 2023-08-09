import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import user from "./modules/user";
import gunung from "./modules/gunung";
import produk from "./modules/produk"

const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        user,
        gunung,
        produk
    },
});

export default store;