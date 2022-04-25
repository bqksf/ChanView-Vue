<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="24" :lg="8" class="mb-24">

        <!-- Salary Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="items.supply" suffix="M ETH">
            <template #title>
              <h6>ETH 供应量</h6>
            </template>
          </a-statistic>
        </a-card>
        <!-- / Salary Card -->

      </a-col>
      <a-col :span="24" :lg="8" class="mb-24">

        <!-- Paypal Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="items.ethbtc">
            <template #title>
              <h6>以太坊比例</h6>
            </template>
          </a-statistic>
        </a-card>
        <!-- Paypal Card -->

      </a-col>
      <a-col :span="24" :lg="8" class="mb-24">

        <!-- Paypal Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="items.ethusd" suffix="usd">
            <template #title>
              <h6>以太坊价格</h6>
            </template>
          </a-statistic>
        </a-card>
        <!-- Paypal Card -->

      </a-col>
    </a-row>

    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="12" class="mb-24">

        <!-- Sales Overview Card -->
        <CardLineChart3></CardLineChart3>
        <!-- / Sales Overview Card -->

      </a-col>

      <!-- Projects Table Column -->
      <a-col :span="24" :lg="12" class="mb-24">

        <!-- Projects Table Column -->
        <CardProjectTableGCE
            :data="items2"
            :columns="tableColumns"
            :dateT="itemTIme"
            title="Kraken最近链上交易详细记录"
        ></CardProjectTableGCE>
        <!-- / Projects Table Column -->

      </a-col>
      <!-- / Projects Table Column -->
    </a-row>
    <!-- / Charts -->

    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="24" class="mb-24">

        <CardAreaChart></CardAreaChart>

      </a-col>
    </a-row>
    <!-- / Charts -->

  </div>
</template>

<script>

import CardLineChart3 from '../components/Cards/CardLineChart3' ;
import CardProjectTableGCE from '../components/Cards/CardProjectTableGCE' ;
import CardAreaChart from '../components/Cards/CardAreaChart' ;

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
    CardLineChart3,
    CardProjectTableGCE,
    CardAreaChart
  },
  data() {
    return {
      tableColumns: tableColumns,

      items: null,
      items2: null,
      itemTIme:null,
    }
  },
  methods:{
    async fetch(){
      const res = await this.$http.get("rest/chart/62518c8b25e0a702962a3edb");
      this.items = res.data;
      this.itemTIme = res.data.updateAt;
      console.log(this.items);
      const res2 = await this.$http.get("rest/chart/62522584fd26400246a30440");
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