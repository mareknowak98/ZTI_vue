import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        decreaseCounter(state) {
            state.counter--;
        },
        increaseCounter(state) {
            state.counter++;
        }
    },
    actions: {
        //Actions can contain arbitrary asynchronous operations.
    },
    getters: {
        counterSquared(state) {
            return state.counter * state.counter;
        }

    },
    modules: {},
});