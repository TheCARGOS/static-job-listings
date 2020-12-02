<template>
    <div class="job-filter">
        <span class="filter" v-text="filter"></span>
        <button class="job-filter__btn" @click="removeFilter(filter)">x</button>
    </div>
</template>

<script>
import { EventBus } from '../event-bus'
export default {
    props: {
        filter: String
    },
    methods: {
        removeFilter (filter) {
            EventBus.$emit("removeFilter", filter)
        }
    }
}
</script>

<style lang="scss">
$light-cyan: hsl(180, 52%, 96%);
$my-cyan: #5da5a4;
$darker-cyan: hsl(180, 14%, 20%);

.job-filter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-right: 16px;
}

.filter {
  background-color: $light-cyan;
  color: $my-cyan;
  text-decoration: none;
  font-weight: bolder;
  padding: 9px;
}

.job-filter__btn {
    height: 100%;
    border: none;
    color: white;
    font-weight: bolder;
    padding: 8px;
    background: $my-cyan;
    cursor: pointer;

    &:hover {
        background: $darker-cyan;;
    }
}
</style>