<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="24" :lg="8" class="mb-24">

        <!-- Salary Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="10.7" suffix="M ETH">
            <template #title>
              <h6>ETH 总锁仓量</h6>
            </template>
          </a-statistic>
        </a-card>
        <!-- / Salary Card -->

      </a-col>
      <a-col :span="24" :lg="8" class="mb-24">

        <!-- Paypal Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="68.6" suffix="k">
            <template #title>
              <h6>独立账户数</h6>
            </template>
          </a-statistic>
        </a-card>
        <!-- Paypal Card -->

      </a-col>
      <a-col :span="24" :lg="8" class="mb-24">

        <!-- Paypal Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="333" suffix="k">
            <template #title>
              <h6>独立验证数</h6>
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
        <CardLineChartED></CardLineChartED>
        <!-- / Sales Overview Card -->

      </a-col>

      <!-- Projects Table Column -->
      <a-col :span="24" :lg="12" class="mb-24">

        <!-- Projects Table Column -->
        <CardProjectTableTEDA
            :data="table2Data"
            :columns="table2Columns"
        ></CardProjectTableTEDA>
        <!-- / Projects Table Column -->

      </a-col>
      <!-- / Projects Table Column -->
    </a-row>
    <!-- / Charts -->

    <!-- Charts -->
    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="12" class="mb-24">

        <!-- Projects Table Column -->
        <CardProjectTableD
            :data="table2Data"
            :columns="table2Columns"
            title="锁仓者"
        ></CardProjectTableD>
        <!-- / Projects Table Column -->

      </a-col>

      <!-- Projects Table Column -->
      <a-col :span="24" :lg="12" class="mb-24">

        <!-- Projects Table Column -->
        <CardProjectTableD
            :data="table2Data"
            :columns="table2Columns"
            title="锁仓者在哪里获取ETH？"
        ></CardProjectTableD>
        <!-- / Projects Table Column -->

      </a-col>
      <!-- / Projects Table Column -->
    </a-row>
    <!-- / Charts -->

  </div>
</template>

<script>

// Line chart for "ED" card.
import CardLineChartED from '../components/Cards/CardLineChartED' ;
// "TEDA" table component.
import CardProjectTableTEDA from '../components/Cards/CardProjectTableTEDA' ;
// "D" table component.
import CardProjectTableD from '../components/Cards/CardProjectTableD' ;


// "Projects" table list of columns and their properties.
const table2Columns = [
  {
    title: '名称',
    dataIndex: 'company',
    scopedSlots: {customRender: 'company'},
    width: 220,
    fixed: 'left',
    class: 'pl-20',
  },
  {
    title: '%',
    dataIndex: 'budget',
    class: 'font-semibold text-muted',
    defaultSortOrder: 'descend',
    sorter: (a, b) => parseInt(a.budget) - parseInt(b.budget),
  },
  {
    title: '1小时内燃料费',
    scopedSlots: {customRender: 'completion'},
    dataIndex: 'completion',
  },
];

// "Projects" table list of rows and their properties.
const table2Data = [
  {
    key: '1',
    company: {
      name: 'Spotify Version',
      logo: 'images/logos/logo-spotify.svg',
    },
    budget: '14%',
    completion: 60,
  },
  {
    key: '2',
    company: {
      name: 'Progress Track',
      logo: 'images/logos/logo-atlassian.svg',
    },
    budget: '13%',
    completion: 10,
  },
  {
    key: '3',
    company: {
      name: 'Jira Platform Errors',
      logo: 'images/logos/logo-slack.svg',
    },
    budget: '18%',
    completion: 100,
  },
  {
    key: '4',
    company: {
      name: 'Launch new Mobile App',
      logo: 'images/logos/logo-spotify.svg',
    },
    budget: '14%',
    completion: 50,
  },
  {
    key: '5',
    company: {
      name: 'Web Dev',
      logo: 'images/logos/logo-webdev.svg',
    },
    budget: '18%',
    completion: 80,
  },
  {
    key: '6',
    company: {
      name: 'Redesign Online Store',
      logo: 'images/logos/logo-invision.svg',
    },
    budget: '17%',
    completion: 0,
  },
];

export default {
  name: "GasTracker",
  components: {
    CardLineChartED,
    CardProjectTableTEDA,
    CardProjectTableD
  },
  data() {
    return {
      // Associating "Projects" table data with its corresponding property.
      table2Data: table2Data,

      // Associating "Projects" table columns with its corresponding property.
      table2Columns: table2Columns,
    }
  }
}
</script>

<style scoped>

</style>