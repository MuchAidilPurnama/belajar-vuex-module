<template>
    <body class="overflow-y-hidden pb-16">
        <div class="flex justify-center items-center" >
            <div class="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div class="flex flex-col jusitfy-center items-center space-y-10">
                    <div class="flex flex-col justify-center items-center space-y-2">
                        <h1 class="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Shop By Category</h1>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-4 md:gap-x-7 w-full">
                        <div v-for="kategori in getKategori" class="relative group flex justify-center items-center h-full w-full" >
                            <img class="object-center object-cover h-full w-full" src="https://www.blibli.com/friends-backend/wp-content/uploads/2022/12/produk-elektronik-jepang-vs-korea-scaled.jpg" alt="elektronik-image"  />
                            <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">{{kategori}}</button>
                            <div class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
                        </div>
                  </div>
                  </div>
                  </div>
        </div>
    </body>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('kategori', ['getKategori']),
    },
    methods: {
        ...mapActions('kategori', ['fetchKategori']),

    },
    created() {
        this.fetchKategori();
    },
}
</script>
