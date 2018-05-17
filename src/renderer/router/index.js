import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/welcome',
      name: 'welcome',
      component: require('@/components/welcome').default
    },
    {
      path: '/',
      name: 'login page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/master/customer',
      name: 'master_customer',
      component: require('@/components/master/customer/customer').default
    },
    {
      path: '/master/fsm',
      name: 'master_fsm',
      component: require('@/components/master/fsm/fsm').default
    },
    {
      path: '/master/item',
      name: 'master_item',
      component: require('@/components/master/item/item').default
    },
    {
      path: '/master/target',
      name: 'master_target',
      component: require('@/components/master/target/target').default
    },
    {
      path: '/master_report/customer',
      name: 'master_report_customer',
      component: require('@/components/master_report/customer/customer').default
    },
    {
      path: '/master_report/fsm',
      name: 'master_report_fsm',
      component: require('@/components/master_report/fsm/fsm').default
    },
    {
      path: '/master_report/item',
      name: 'master_report_item',
      component: require('@/components/master_report/item/item').default
    },
    {
      path: '/transaction/gatepass',
      name: 'transaction_gatepass',
      component: require('@/components/transaction/gate_pass/gatepass').default
    },
    {
      path: '/transaction/grorgi',
      name: 'grorgi',
      component: require('@/components/transaction/gr&gi/gr&gi').default
    },
    {
      path: '/transaction/invoice',
      name: 'transaction_invoice',
      component: require('@/components/transaction/invoice/invoice').default
    },
    {
      path: '/transaction_report/stock',
      name: 'transaction_stock',
      component: require('@/components/transaction_report/closingstock/closingstock').default
    },
    {
      path: '/transaction_report/flash',
      name: 'transaction_report_flash',
      component: require('@/components/transaction_report/flash/flash').default
    },
    {
      path: '/transaction_report/gatepass',
      name: 'transaction_report_gatepass',
      component: require('@/components/transaction_report/gatepass/gatepass').default
    },
    {
      path: '/transaction_report/invoiceno',
      name: 'transaction_report_invoiceno',
      component: require('@/components/transaction_report/invoice_with_no/invoice_no').default
    },
    {
      path: '/transaction_report/sampleproduct',
      name: 'transaction_report_product',
      component: require('@/components/transaction_report/sample_details/product').default
    }
  ]
})
