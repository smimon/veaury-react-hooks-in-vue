<template>
  <div>
    <h1>React component with hooks in Vue test</h1>
    <MyReactComponent />
  </div>
</template>

<script>
  import { applyPureReactInVue } from 'veaury';

  import MyReactComponent from 'my-react-component';

  export default {
    components: {
      MyReactComponent: applyPureReactInVue(MyReactComponent)
    }
  }
</script>