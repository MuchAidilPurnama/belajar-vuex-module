import axios from "axios";

const gunung = {
    namespaced: true,
    state: {
        gunungData: [],
    },
    getters: {
        getGunung: (state) => state.gunungData,
    },
    actions: {
        async fetchGunung({ commit }) {
            try {
                const data = await axios.get(
                    "https://indonesia-public-static-api.vercel.app/api/volcanoes"
                );
                commit("SET_GUNUNGS", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_GUNUNGS(state, gunung) {
            state.gunungData = gunung;
        },
    },
};

export default gunung;