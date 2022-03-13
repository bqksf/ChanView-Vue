<template>
  <div>
  <!-- Charts -->
  <a-row :gutter="24" type="flex" align="stretch">
    <a-col :span="24" :lg="12" class="mb-24">

      <!-- Sales Overview Card -->
      <CardLineChart></CardLineChart>
      <!-- / Sales Overview Card -->

    </a-col>

    <!-- Projects Table Column -->
    <a-col :span="24" :lg="12" class="mb-24">

      <!-- Projects Table Column -->
      <CardProjectTable2
          :data="table2Data"
          :columns="table2Columns"
      ></CardProjectTable2>
      <!-- / Projects Table Column -->

    </a-col>
    <!-- / Projects Table Column -->
  </a-row>
  <!-- / Charts -->

      <a-row :gutter="24">
        <a-col :span="24" :lg="8" class="mb-24">

          <!-- Salary Card -->
          <a-card :bordered="false" class="widget-2 h-full">
            <a-statistic :value="2000" prefix="+$">
              <template #title>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                    <g id="bank" transform="translate(0.75 0.75)">
                      <path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
                      <path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
                      <path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
                    </g>
                  </svg>
                </div>
                <h6>Salary</h6>
                <p>Belong Interactive</p>
              </template>
            </a-statistic>
          </a-card>
          <!-- / Salary Card -->

        </a-col>
        <a-col :span="24" :lg="8" class="mb-24">

          <!-- Paypal Card -->
          <a-card :bordered="false" class="widget-2 h-full">
            <a-statistic :value="49000" prefix="+$">
              <template #title>
                <div class="icon">
                  <img src="/images/logos/paypal-logo-2.png" alt="">
                </div>
                <h6>Paypal</h6>
                <p>Freelance Payment</p>
              </template>
            </a-statistic>
          </a-card>
          <!-- Paypal Card -->

        </a-col>
        <a-col :span="24" :lg="8" class="mb-24">

          <!-- Paypal Card -->
          <a-card :bordered="false" class="widget-2 h-full">
            <a-statistic :value="49000" prefix="+$">
              <template #title>
                <div class="icon">
                  <img src="/images/logos/paypal-logo-2.png" alt="">
                </div>
                <h6>Paypal</h6>
                <p>Freelance Payment</p>
              </template>
            </a-statistic>
          </a-card>
          <!-- Paypal Card -->

        </a-col>
      </a-row>
  </div>
</template>

<script>

// Line chart for "Sales Overview" card.
import CardLineChart from '../components/Cards/CardLineChart' ;
// "Projects" table component.
import CardProjectTable2 from '../components/Cards/CardProjectTable2' ;

// "Projects" table list of columns and their properties.
const table2Columns = [
  {
    title: 'COMPANIES',
    dataIndex: 'company',
    scopedSlots: { customRender: 'company' },
    width: 300,
  },
  {
    title: 'BUDGET',
    dataIndex: 'budget',
    class: 'font-semibold text-muted',
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    class: 'font-semibold text-muted text-sm',
  },
  {
    title: 'COMPLETION',
    scopedSlots: { customRender: 'completion' },
    dataIndex: 'completion',
  },
  {
    title: '',
    scopedSlots: { customRender: 'editBtn' },
    width: 50,
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
    status: "working",
    budget: '$14,000',
    completion: 60,
  },
  {
    key: '2',
    company: {
      name: 'Progress Track',
      logo: 'images/logos/logo-atlassian.svg',
    },
    status: "working",
    budget: '$3,000',
    completion: 10,
  },
  {
    key: '3',
    company: {
      name: 'Jira Platform Errors',
      logo: 'images/logos/logo-slack.svg',
    },
    status: "done",
    budget: 'Not Set',
    completion: {
      status: 'success',
      value: 100,
    },
  },
  {
    key: '4',
    company: {
      name: 'Launch new Mobile App',
      logo: 'images/logos/logo-spotify.svg',
    },
    status: "canceled",
    budget: '$20,600',
    completion: {
      status: 'exception',
      value: 50,
    },
  },
  {
    key: '5',
    company: {
      name: 'Web Dev',
      logo: 'images/logos/logo-webdev.svg',
    },
    status: "working",
    budget: '$4,000',
    completion: 80,
  },
  {
    key: '6',
    company: {
      name: 'Redesign Online Store',
      logo: 'images/logos/logo-invision.svg',
    },
    status: "canceled",
    budget: '$2,000',
    completion: {
      status: 'exception',
      value: 0,
    },
  },
];

export default {
  name: "GasTracker",
  components: {
    CardLineChart,
    CardProjectTable2,
  },
  data(){
    return{
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