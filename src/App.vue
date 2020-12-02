<template>
  <div id="app">
    <div class="header"></div>
    <div class="container">
      <div class="job-filters" v-if="filtered.length > 0" style="display: flex; flex-wrap: wrap;">
        <div style="display: flex;">
          <job-filter
            v-for="filter in filtered"
            :key="filter.id"
            :filter="filter"
            @click="removeFilter(filter)"
          ></job-filter>
        </div>
        <div>
          <button class="job-filters__clear" @click="clearFilters()">clear</button>
        </div>
      </div>
      
      <div class="job-list" :class="{'job-list--margin': filtered.length > 0}" v-if="filtered.length > 0">
        <div
          v-for="job in jobs"
          :key="job.id"
        >
          <job-card
            v-if="isFiltered(getTags(job), filters)"
            :logo="job.logo"
            :company="job.company"
            :isNew="job.new"
            :isFeatured="job.featured"
            :position="job.position"
            :postedAt="job.postedAt"
            :location="job.location"
            :contact="job.contact"
            :tags="getTags(job)"
          ></job-card>
        </div>
      </div>
      <div class="job-list" v-else>
        <div
          v-for="job in jobs"
          :key="job.id"
        >
          <job-card
            :logo="job.logo"
            :company="job.company"
            :position="job.position"
            :isNew="job.new"
            :isFeatured="job.featured"
            :postedAt="job.postedAt"
            :contract="job.contract"
            :location="job.location"
            :tags="getTags(job)"
          ></job-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from './components/JobCard.vue'
import JobFilter from './components/JobFilter.vue'
import jobsData from "../data.json"

import { EventBus } from './event-bus.js';


export default {
  name: 'App',
  components: {
    JobCard,
    JobFilter
  },
  data () {
    return {
      jobs: jobsData,
      filters: []
    }
  },
  computed: {
    filtered () {
      return this.filters
    }
  },
  methods: {
    clearFilters () {
      this.filters = []
    },
    getTags (job) {
      let tags = [job.role, job.level, ...job.languages, ...job.tools]
      return tags
    },
    filterJobs (jobTags, filters) {
      filters.every((value) => jobTags.includes(value))
    },
    isFiltered (tags, filters) {
      return filters.every((value) => tags.includes(value))
    }
  },
  mounted () {
    EventBus.$on("addFilter", newVal => {
      let found = []
      found = this.filters.find(filter => filter == newVal)
      found?
        null:
        this.filters.push(newVal)
    })

    EventBus.$on("removeFilter", value => {
      const index = this.filters.indexOf(value)
        index?
            this.filters.splice(index, 1):
            null

        if (index == 0) {
            this.filters.splice(0, 1)
        }
    })
  },
  
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;700&display=swap');

$my-cyan: #5da5a4;
$light-cyan: hsl(180, 52%, 96%);
$lighter-cyan: hsl(180, 31%, 95%);
$dark-cyan: hsl(180, 8%, 52%);
$darker-cyan: hsl(180, 14%, 20%);

* {
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: normal;
  box-sizing: border-box;
}

html {
  font-family: Spartan;
  background: $light-cyan;
}

.header {
  // background-color: $color-cyan;
  height: 155px;
  background-color: $my-cyan;
  background-image: url("../images/bg-header-mobile.svg");

  @media screen and (min-width: 600px) {
    background-image:url("../images/bg-header-desktop.svg");
  }
}

.container {
  background: $light-cyan;
  position: relative;
  max-width: 325px;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 600px) {
    max-width: 1110px;
    padding: 0 24px;
  }
}

.job-filters {
  background-color: white;
  box-shadow: 8px 8px 10px 3px rgba(0, 0, 0, .1);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  transform: translateY(-40px);

  &__clear {
    font-weight: bolder;
    background: none;
    border: none;
    font-size: 14px;
    color: $my-cyan;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 600px) {
    max-width: 1440px;
    margin: 0 auto;
  }
}

.job-list {
  margin-top: 50px;

  &--margin {
  margin-top: -50px;
  }
}

</style>
