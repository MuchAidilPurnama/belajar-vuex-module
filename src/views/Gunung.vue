<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">Fetch Gunung</h1>
    <table class="table-auto" align="center">
        <thead>
            <tr>
                <th class="px-4 py-2">nama</th>
                <th class="px-4 py-2">Bentuk</th>
                <th class="px-4 py-2">Tinggi</th>
                <th class="px-4 py-2">Estimati Letusan</th>
                <th class="px-4 py-2">Geolokasi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="gunung in getGunung" :key="gunung.id" >
                <td class="border px-4 py-2">{{ gunung.nama }}</td>
                <td class="border px-4 py-2">{{ gunung.bentuk }}</td>
                <td class="border px-4 py-2">{{ gunung.tinggi_meter }}</td>
                <td class="border px-4 py-2">{{ gunung.estimasi_letusan_terakhir }}</td>
                <td class="border px-4 py-2">{{ gunung.geolokasi }}</td>
            </tr>
        </tbody>
    </table> 
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('gunung', ['getGunung']),
    },
    methods: {
        ...mapActions('gunung', ['fetchGunung']),
    },
    created() {
        this.fetchGunung();
    },
}
</script>