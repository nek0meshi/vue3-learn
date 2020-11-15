import { reactive, computed } from 'vue';

export default function () {
  const state = reactive({
    count: 0,
    double: computed(() => state.count * 2)
  })

  function increment() {
    state.count ++
  }

  function add(val) {
    state.count += +val;
  }

  return {
    state,
    increment,
    add,
  }
}