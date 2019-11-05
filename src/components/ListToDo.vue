<template>
    <div class="card" style="width: 100%;">
        <div class="card-header">
            List todo
        </div>
        <div class="card-content" style="text-align: left">
            <div style="padding: 10px;">
                <template v-if="todoList.length">
                    <div class="card card-todo" v-for="(todo, index) in todoList" :key="index">
                        <div class="card-body">
                            <h5 class="card-title">{{ todo.name }}</h5>
                            <router-link :to="{ name: 'detail-todo', params: { id: todo._id } }" >Detail</router-link>
                            <span class="remove-todo" @click="removeTodo(todo._id)">x</span>
                        </div>
                    </div>
                </template>
                <div v-else class="alert alert-primary" role="alert">
                    No todo found!
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState('todo', ['todoList']),
    },
    methods: {
        ...mapActions('todo', ['setTodoList', 'removeTodo']),
    },
    created() {
        this.setTodoList();
    }
}
</script>

<style scope>
    .card-todo {
        display: inline-block !important;
        width: 200px !important;
        margin-right: 10px !important;
        margin-bottom: 10px !important;
    }

    span.remove-todo {
        color: #f8f9fa;
        background: #d23131;
        padding: 2px;
        width: 22px;
        height: 22px;
        line-height: 18px;
        display: inline-block;
        text-align: center;
        float: right;
        border-radius: 3px;
        cursor: pointer;
        position: absolute;
        top: -6px;
        right: -6px;
    }
</style>
