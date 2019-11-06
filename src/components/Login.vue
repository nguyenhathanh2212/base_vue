import { mapActions } from 'vuex';
<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
        <div class="fadeIn first">
            <img src="https://www.sccpre.cat/mypng/detail/59-591411_icons8-flat-todo-list-logo-todolist.png" id="icon" alt="User Icon" />
        </div>
            <!-- Login Form -->
            <form>
                <input type="email" class="fadeIn second form-control" v-model="$v.email.$model" placeholder="Enter email" :class="{ 'is-invalid': $v.email.$error }">
                <div class="invalid-feedback">
                    <label v-if="!$v.email.required" class="form-text error">Field is required</label>
                    <label v-if="!$v.email.email" class="form-text error">Email is not valid.</label>
                </div>
                <input type="password" class="fadeIn third form-control" v-model="$v.password.$model" placeholder="Enter password" :class="{ 'is-invalid': $v.email.$error }">
                <div class="invalid-feedback">
                    <label v-if="!$v.password.required" class="form-text error">Field is required</label>
                    <label v-if="!$v.password.minLength" class="form-text error">Password must have at least {{$v.password.$params.minLength.min}} letters.</label>
                </div>
                <input type="submit" @click.prevent="login()" class="fadeIn fourth" value="Log In">
            </form>
            <!-- Remind Passowrd -->
            <div id="formFooter">
                <router-link :to="{ name: 'register' }">Register</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import { auth } from '@/firebaseConfig.js';
    import '@assets/styles/login.css';
    import { required, minLength, email } from 'vuelidate/lib/validators';

    export default {
        data: function () {
            return {
                email: '',
                password: '',
            }
        },
        validations: {
            email: {
                required,
                email,
            },
            password: {
                required,
                minLength: minLength(6),
            }
        },
        methods: {
            ...mapActions('user', ['setCurrentUser', 'setUserProfile']),
            ...mapActions(['setLoading']),
            login: function() {
                this.$v.$touch();

                if (!this.$v.$invalid) {
                    this.setLoading(true);
                    auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
                        this.setCurrentUser(user.user);
                        this.setUserProfile().then(() => {
                            this.setLoading(false);
                            this.$router.push({ name: 'list-todo' });
                        });
                    }).catch(error => {
                        this.setLoading(false);
                        window.console.log(error);
                    })
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
