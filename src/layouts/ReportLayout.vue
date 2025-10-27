<template  >
    <div class="h-600">
        <!-- Menu de navegación -->
        <Navbar />

        <div>
            <router-view />
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/shared/Navbar.vue';

</script>