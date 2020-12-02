<template>
  <div class="card" :class="{'card--featured': isFeatured}">
    <div class="card__content">
      <img class="card__img" :src="logo" alt="company image" />
      <div class="card__column">
        <div class="card__row">
          <h2 class="card__row__company" v-text="company"></h2>
          <div class="card__row__chip" v-if="isNew" style="background: #62aeac;"><span>NEW!</span></div>
          <div class="card__row__chip" v-if="isFeatured"><span>FEATURED</span></div>
        </div>
        <div>
          <h1 class="card__title" v-text="position"></h1>
          <span class="card__span" v-text="postedAt"></span>
          <span class="card__span" v-text="contract"></span>
          <span class="card__span" v-text="location"></span>
        </div>
      </div>
    </div>
    <hr>
    <div class="card__filters">
      <a
        v-for="(tag, index) in tags"
        :key="index"
        v-text="tag"
        href="#!"
        @click="addFilter(tag)"
        class="card__filters__filter"
      ></a>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../event-bus.js';

export default {
  name: 'JobCard',
  props: {
    company: String,
    logo: String,
    isNew: Boolean,
    isFeatured: Boolean,
    position: String,
    postedAt: String,
    contract: String,
    location: String,
    tags: Array,
    tools: Array
  },
  methods: {
    addFilter (filter) {
      EventBus.$emit("addFilter", filter)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$my-cyan: #5da5a4;
$light-cyan: hsl(180, 52%, 96%);
$lighter-cyan: hsl(180, 31%, 95%);
$dark-cyan: hsl(180, 8%, 52%);
$darker-cyan: hsl(180, 14%, 20%);

.card {
  border-radius: 8px;
  padding: 25px 18px;
  padding-bottom: 8px;
  box-shadow: 8px 8px 10px 3px rgba(0, 0, 0, .1);
  position: relative;
  background: white;
  margin-bottom: 40px;
  margin-top: 55px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &--featured {
    border-left: 5px solid $my-cyan;
  }
  
  &__img {
    // background-color: black;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    position: absolute;
    left: 18px;
    top: 0;
    transform: translateY(-50%);
  }

  &__row {
    display: flex;
    align-items: center;

    &__company {
      font-weight: bolder;
      color: $my-cyan;
      line-height: 2.5;
      margin-right: 10px;
    }

    &__chip {
      background-color: $darker-cyan;
      padding: 7px 8px;
      border-radius: 14px;
      margin: 0 4px;
      color: white;
      
      span {
        font-weight: bolder;
        font-size: 8px;
      }
    }

  }

  &__title {
    font-weight: bolder;
    font-size: 14px;
    line-height: 2.8;
    cursor: pointer;

    &:hover {
      color: $my-cyan;
    }
  }

  &__span {
    color: $dark-cyan;
    margin-right: 16px;
  }

  hr {
    margin: 17px 0;
  }

  &__filters {
    display: flex;
    flex-wrap: wrap;
  
    &__filter {
      align-self: center;
      background-color: $light-cyan;
      color: $my-cyan;
      text-decoration: none;
      font-weight: bolder;
      padding: 9px;
      border-radius: 3px;
      margin-right: 16px;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 28px;

    width: 100%;
    margin-bottom: 40px;

    hr {
      display: none;
    }

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__column {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__img {
      position: relative;
      transform: unset;
      height: 90px;
      width: 90px;
      margin-right: 40px;
    }

    &__filters__filter {
      margin-bottom: 0;
    }
  }
}
</style>
