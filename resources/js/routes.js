import VueRouter from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const CreateCustomerGroup = () => import('./views/CRM/CustomerGroups/CreateCustomerGroup.vue');
const CreateCompany = () => import('./views/CRM/Company/CreateCompany.vue');
const CreateBranch = () => import('./views/CRM/Branch/CreateBranch.vue');
const CreateCategory = () => import('./views/Base/category/CreateCategory.vue');
const CreateWarehouse = () => import('./views/Base/warehouse/CreateWarehouse.vue');
const CreatePurchase = () => import('./views/Purchase/CreatePurchase.vue');
const ListPurchase = () => import('./views/Purchase/ListPurchase.vue');
const PurchaseInvoice = () => import('./views/Purchase/PurchaseInvoice.vue');
const CreateQuotation = () => import('./views/Quotation/CreateQuotation.vue');
const ListQuotation = () => import('./views/Quotation/ListQuotation.vue');
const QuotationInvoice = () => import('./views/Quotation/QuotationInvoice.vue');
const InputRepeater = () => import('./views/InputRepeater.vue');



const routes = [
    {
        path: '/',
        name: 'Welcome',
        component: Welcome
    },
    {
        path: '/create-customer-group',
        name: 'CreateCustomerGroup',
        component: CreateCustomerGroup
    },
    {
        path: '/create-company',
        name: 'CreateCompany',
        component: CreateCompany
    },
    {
        path: '/create-branch',
        name: 'CreateBranch',
        component: CreateBranch
    },
    {
        path: '/create-category',
        name: 'CreateCategory',
        component: CreateCategory
    },
    {
        path: '/create-warehouse',
        name: 'CreateWarehouse',
        component: CreateWarehouse
    },
    {
        path: '/create-purchase',
        name: 'CreatePurchase',
        component: CreatePurchase
    },
    {
        path: '/list-purchase',
        name: 'ListPurchase',
        component: ListPurchase
    },
    {
        path: '/purchase-invoice',
        name: 'PurchaseInvoice',
        component: PurchaseInvoice
    },
    {
        path: '/create-quotation',
        name: 'CreateQuotation',
        component: CreateQuotation
    },
    {
        path: '/list-quotation',
        name: 'ListQuotation',
        component: ListQuotation
    },
    {
        path: '/quotation-invoice',
        name: 'QuotationInvoice',
        component: QuotationInvoice
    },
    {
        path: '/input-repeater',
        name: 'InputRepeater',
        component: InputRepeater
    }


]

export default new VueRouter({
    // mode: 'history',
    routes
});


