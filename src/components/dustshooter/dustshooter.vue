<template>
  <div>
    <div>
      <p>
      <h2>Dustshooter</h2>
      </p>
    </div>
    <div>
      <select name="move" id="move" v-model="move">
        <option v-for="[moveEn, [moveJa, hitRate]] in Object.entries(moves)" v-bind:value="moveEn">{{ moveJa }}({{ hitRate }})</option>
      </select>
      <select name="count" id="count" v-model="count">
        <option v-for="idx in new Array(10).fill(null).map((_, idx) => idx + 1)">{{ idx }}</option>
      </select>
      <p>
        {{ Math.floor(totalHitRate * 100 * 100) / 100 }}%
      </p>
    </div>
    <div>
      <div>
        <button v-on:click="execute">試す</button>
      </div>
    </div>
    <div v-if="result !== undefined">
      <div>
        {{ result ? '命中' : '失敗'}}
      </div>
    </div>
  </div>
</template>;

<script lang="ts">
  import { Dustshooter } from './dustshooter'
  export default Dustshooter
</script>
