<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
  <div>
    <button @click="add(addValue)">add</button> <input type="number" v-model="addValue">
  </div>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import fetchCounter from '../utils/counter';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup (props) {
    return {
      // state, increment, add
      ...fetchCounter()
    }
  },
  data() {
    return {
      addValue: 0,
    }
  }
}
</script>
