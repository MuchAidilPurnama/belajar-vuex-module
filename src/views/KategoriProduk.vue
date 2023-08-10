<template>
    <br>
    <h1 align="center">Kategori {{ categoryName }}</h1>
    <div class="flex-container">
        <div v-for="produk in filteredProduk" :key="produk.id" class="card">
        <router-link class="container" :to="{ name : 'SingleProduk', params:{id: produk.id}}">
        </router-link>
        <div>
            <img :src="produk.image" alt="">
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{{ produk.title }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">{{ produk.price }}</p>
    </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('produk', ['getProdukByKategori']),
        filteredProduk() {
            return this.getProdukByKategori(this.$route.params.kategori);
        },
    },
    methods: {
        ...mapActions('produk', ['fetchFilterProduk']),

    },
    created() {
        this.fetchFilterProduk();
    },
}
</script>

<style scoped>
.flex-container {
    display: flex;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0,0, 0, 0.2);
    transition: 0.3s;
    margin: 15px;
    min-width: 100px;
    cursor: pointer;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0, 0, 0.2);
}
.container {
    padding: 2px 16px;
}
img{
    width: 230px;
    height: 220px;
}
</style>