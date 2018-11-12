<template>
  <div>
  <p align="left">
    (2018-09-20) 설치 : npm install vuetable-2 --save-dev<br/>
    (2018-09-21) Data Binding(?)<br/>
    (2018-09-21) Beginner Guide : <a href="https://joshua1988.github.io/web_dev/vuejs-tutorial-for-beginner/">https://joshua1988.github.io/web_dev/vuejs-tutorial-for-beginner/</a><br/>
    (2018-10-02) Field Fomatting / Grid Paging >>> [Formmating 설치] :  npm install --save accounting / npm install --save moment
    (2018-11-11) npm install --save vue-events
    <br/>
  </p>
  <!-- 
  <div class="vuetable-pagination ui basic segment grid">

 
    <vuetable-pagination-info ref="paginationInfoTop"
    ></vuetable-pagination-info>
    <vuetable-pagination ref="paginationTop"
      @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>
  </div>  -->

  <filter-bar></filter-bar>

  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="fields"
    pagination-path=""
    track-by="item_code"
    :per-page="10"
    @vuetable:pagination-data="onPaginationData"
    :append-params="moreParams"
  ></vuetable>

    <vuetable-pagination-info ref="paginationInfo"
    ></vuetable-pagination-info>
  <vuetable-pagination ref="pagination"
    @vuetable-pagination:change-page="onChangePage"
  ></vuetable-pagination>
  </div>
</template>


<script>

import Vuetable from 'vuetable-2/src/components/Vuetable'
// import accounting from 'accounting'  // npm install --save accounting
// import moment from 'moment'  // npm install --save moment
import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
// import VuetablePagination from 'vuetable-2/src/components/VuetablePaginationDropdown'  // drop down paging

import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'

import Vue from 'vue'
import CustomActions from './CustomActions'
import FilterBar from './FilterBar'
import VueEvents from 'vue-events'

Vue.use(VueEvents)
Vue.component('filter-bar', FilterBar)
Vue.component('custom-actions', CustomActions)

export default {
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo    
  },
  data () {
    return {
      css: {
        ascendingIcon: 'glyphicon glyphicon-chevron-up',
        descendingIcon: 'glyphicon glyphicon-chevron-down'
      },
      fields: [
        {
          name: '__checkbox',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: 'name',
          sortField: 'name'
        },
        {
          name: 'email',
          sortField: 'email',
          direction: 'asc'
        },
        {
          name: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'formatDate|DD-MM-YYYY'
        },
        {
          name: 'age',
          sortField: 'birthdate',
          dataClass: 'center aligned'
        },
        {
          name: 'nickname',
          callback: 'allcap'
        },
        {
          name: 'gender',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'genderLabel'
        },
        {
          name: 'salary',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          callback: 'formatNumber'
        },
        {
          name: '__component:custom-actions',   // <----
          title: 'Actions',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        }
      ],
      moreParams: {}
    }
  },
  mounted() {
    this.$events.$on('filter-set', eventData => this.onFilterSet(eventData))
    this.$events.$on('filter-reset', e => this.onFilterReset())
  },
  methods: {
    // Formatting function
    allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber (value) {
        // return accounting.formatNumber(value, 2)
        return value;
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      // return (value == null)
      //   ? ''
      //   : moment(value, 'YYYY-MM-DD').format(fmt)
      return value;
    },
    onPaginationData (paginationData) {
      // this.$refs.paginationTop.setPaginationData(paginationData)
      // this.$refs.paginationInfoTop.setPaginationData(paginationData)

      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onFilterSet (filterText) {
      console.log('filter-set', filterText)
      this.moreParams = {
          'filter': filterText
      }
      Vue.nextTick( () => this.$refs.vuetable.refresh())
    },
    onFilterReset () {
      console.log('filter-reset')
      Vue.nextTick( () => this.$refs.vuetable.refresh())
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
