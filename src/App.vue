<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <router-view></router-view>
        <div class="spinner-loading" v-if="loading">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'app',
        computed: {
            ...mapState(['loading']),
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .spinner-loading {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        text-align: center;
        background: #eee;
        opacity: 0.5;
    }

    .spinner-border {
        margin-top: 48vh;
    }
</style>
