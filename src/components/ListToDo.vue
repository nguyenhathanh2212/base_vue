<template>
    <div class="card" style="width: 100%;">
        <div class="card-header">
            List todo
        </div>
        <div class="card-content" style="text-align: left">
            <div style="padding: 10px;">
                <template v-if="todoList">
                    <div class="card card-todo" v-for="(todo, index) in todoList" :key="index">
                        <div class="card-body">
                            <h5 class="card-title">{{ todo.name }}</h5>
                            <router-link :to="{ name: 'detail-todo', params: { id: todo.id } }" >detail</router-link>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState('todo', ['todoList']),
    },
}
</script>

<style scope>
    .card-todo {
        display: inline-block !important;
        width: 200px !important;
        margin-right: 10px !important;
        margin-bottom: 10px !important;
    }
</style>
