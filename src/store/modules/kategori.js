import axios from "axios";

const kategori = {
    namespaced: true,
    state: {
        kategoriData: [],
    },
    getters: {
        getKategori: (state) => state.kategoriData,
    },
    actions: {
        async fetchKategori({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/products/categories"
                );
                commit("SET_KATEGORIS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },       
    },
    mutations: {
        SET_KATEGORIS(state, kategori) {
            state.kategoriData = kategori;
        },
    },
};

export default kategori;