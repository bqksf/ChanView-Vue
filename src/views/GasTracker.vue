<template>
  <div>
    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="12" class="mb-24">

        <CardLineChart></CardLineChart>

      </a-col>

      <a-col :span="24" :lg="12" class="mb-24">

        <CardProjectTableGCE
            :data="items"
            :columns="tableColumns"
            :dateT="itemTIme1"
            title="OpenSea最近链上交易详细记录"
        ></CardProjectTableGCE>

      </a-col>
    </a-row>
    <!-- / Charts -->

    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="12" class="mb-24">

        <CardLineChart2></CardLineChart2>

      </a-col>

      <a-col :span="24" :lg="12" class="mb-24">

        <CardProjectTableGCE
            :data="items2"
            :columns="tableColumns"
            :dateT="itemTIme2"
            title="矿工交易详细记录"
        ></CardProjectTableGCE>

      </a-col>
    </a-row>
    <!-- / Charts -->


  </div>
</template>

<script>

// Line chart for "Sales Overview" card.
import CardLineChart from '../components/Cards/CardLineChart' ;
import CardLineChart2 from '../components/Cards/CardLineChart2' ;

// table component.
import CardProjectTableGCE from '../components/Cards/CardProjectTableGCE' ;

const tableColumns = [
  {
    title: '地址',
    dataIndex: 'from',
    scopedSlots: {customRender: 'from'},
    width: 220,
    fixed: 'left',
    class: 'pl-20',
  },
  {
    title: '燃料量',
    dataIndex: 'gasUsed',
    class: 'font-semibold text-muted',
    defaultSortOrder: 'descend',
    sorter: (a, b) => parseInt(a.gasUsed) - parseInt(b.gasUsed),
  },
  {
    title: '燃料占比量',
    scopedSlots: {customRender: 'gas_ratio'},
    dataIndex: 'gas_ratio',
  },
];

export default {
  name: "GasTracker",
  components: {
    CardLineChart,
    CardLineChart2,
    CardProjectTableGCE
  },
  data() {
    return {
      tableColumns: tableColumns,

      items:null,
      items2:null,
      itemTIme1:null,
      itemTIme2:null,
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get("rest/chart/6252224ebc271261a5b43ae8");
      this.items = res.data.data;
      this.itemTIme1 = res.data.updateAt;
      const res2 = await this.$http.get("rest/chart/625224b5193d15e5850b3005");
      this.items2 = res2.data.data;
      this.itemTIme2 = res2.data.updateAt;
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style scoped>

</style>