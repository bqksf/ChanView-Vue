<template>
  <div>
    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="24" class="mb-24">

        <CardLineChart6></CardLineChart6>

      </a-col>

    </a-row>
    <!-- / Charts -->

    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="24" class="mb-24">

        <CardLineChart7></CardLineChart7>

      </a-col>

    </a-row>
    <!-- / Charts -->


  </div>
</template>

<script>

// Line chart for "Sales Overview" card.
import CardLineChart6 from '../components/Cards/CardLineChart6' ;
import CardLineChart7 from '../components/Cards/CardLineChart7' ;


export default {
  name: "GasTracker",
  components: {
    CardLineChart6,
    CardLineChart7,
  },
  data() {
    return {
      items:null,
      items2:null,
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get("rest/chart/6252224ebc271261a5b43ae8");
      this.items = res.data.data;
      const res2 = await this.$http.get("rest/chart/625224b5193d15e5850b3005");
      this.items2 = res2.data.data;
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style scoped>

</style>