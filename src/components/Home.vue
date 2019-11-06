<template>
    <div>
        <div class="container">
            <div class="card">
                <div class="card-header">Todo list
                    <span v-if="currentUser" class="user-info" @click="logout()"> {{ userProfile.name }} (logout)</span>
                </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-4">
                                <add-todo-component></add-todo-component>
                            </div>
                            <div class="col-8">
                                <router-view></router-view>
                            </div>
                        </div>
                    </div>
                <div class="card-footer">End</div>
            </div>
        </div>
    </div>
</template>

<script>
    import AddTodo from './AddTodo.vue';
    import { mapState, mapActions } from 'vuex';
    import { auth } from '@/firebaseConfig.js';

    export default {
        components: {
            addTodoComponent: AddTodo
        },
        computed: {
            ...mapState('user', ['currentUser', 'userProfile']),
        },
        methods: {
            ...mapActions('user', ['clearData']),
            logout: function() {
                auth.signOut().then(() => {
                    this.clearData();
                    this.$router.push({ name: 'login' });
                }).catch(err => {
                    window.console.log(err);
                });
            }
        }
    }
</script>

<style scope>
    span.user-info {
        position: absolute;
        color: #2e8bef;
        cursor: pointer;
        right: 10px;
    }
</style>
