import { mapAction, mapState } from 'vuex';
<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item" aria-current="page">
                    <router-link :to="{ name: 'list-todo' }">&lt;&lt; List todo</router-link>
                </li>
            </ol>
        </nav>
        <div class="card" v-if="todo">
            <div class="card-header">
                {{ todo.name}}
            </div>
            <div class="card-body">
                <p class="card-text">{{ todo.detail }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    computed: {
        ...mapState('todo', ['todo']),
    },
    methods: {
        ...mapActions('todo', ['setTodo']),
    }, 
    created() {
        this.setTodo(this.$route.params.id)
    }
}
</script>
