

<template>
  <div class="item-inner">
    <span># {{ source.index }}</span>
    <span>{{ source.name }}</span>
    <br>
    <span v-on:click="linkPlaySource">{{ source.line }}</span>
  </div>
</template>

<script>
export default {
  name: 'fix-size-item',
  props: {
    source: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    linkPlaySource() {
      alert('Now you are reaching greatest work in mankind')
    }
  }
}
</script>

<style lang="less" scoped>
.item-inner {
  span:first-child {
    margin-right: 1em;
  }
}
</style>
