<template>
<div>
    <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>

    <!-- Form -->
    <div class="p-d-flex p-jc-between p-mb-2">
        <h2>Create Company</h2>
    </div>
    <Card class="p-mb-5">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-6">
            <span class="p-float-label">
              <InputText id="title" type="text" />
              <label for="title">Title</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6">
            <span class="p-float-label">
              <Textarea v-model="description" rows="1" cols="30"/>
              <label for="lastname">Description</label>
            </span>
          </div>
          <div class="p-field p-grid p-col-12 p-md-6 p-ai-top p-mb-2 p-pt-0">
            <div class="p-d-flex p-col-12 p-ai-start">
                <label for="status" class="p-mr-4">Status</label>
                <Checkbox v-model="status" :binary="true" />
                <span v-if="status" class="p-ml-2">Active</span>
                <span v-else class="p-ml-2">Inactive </span>
            </div>
          </div>
          <div class="p-field p-col-12 p-md-6 text-right p-p-0">
            <button label="Submit" class="btn btn-success" style="width: 150px;">Create</button>
          </div>
        </div>
      </template>
    </Card>

    <!-- List -->
    <div class="p-d-flex p-jc-between p-mb-2">
        <h2>Company List</h2>
    </div>
    <Card>
      <template #content>
        <DataTable
          :value="ListCompany" :paginator="true" :rows="5"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[5, 10,20,50]"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          :filters="filters"
          dataKey="id"
          :selection.sync="selectedTitle" 
          :editingRows.sync="editingRows"
          editMode="row" @row-edit-init="onRowEditInit" @row-edit-cancel="onRowEditCancel">

          <template #header>
              <div class="table-header p-d-flex p-jc-end">
                  <span class="p-input-icon-left ">
                      <i class="pi pi-search" />
                      <InputText v-model="filters['global']" placeholder="Global Search"/>
                  </span>
              </div>
          </template>

          <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
          <Column field="title" header="Title" :sortable="true">
              <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" autofocus />
              </template>
          </Column>
          <Column field="desp" header="Description" :sortable="true">
              <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" />
              </template>
          </Column>
          <Column field="status" header="Status" :sortable="true">
              <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" />
              </template>
          </Column>
          <Column :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
        </DataTable>
      </template>
    </Card>
</div>
</template>

<script>
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';

export default {
    name: 'CreateCompany',
    components: {
        Checkbox,
        Textarea
    },
    data() {
        return {
            description: '',
            status: true,            
            ListCompany: [
                {'id':'1', 'title':'kjsdhflsdhf', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
                {'id':'2', 'title':'ghjghjghj', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
                {'id':'3', 'title':'hjfghjhjjhkhj', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
                {'id':'4', 'title':'hjfghjghjuk', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
                {'id':'5', 'title':'uuikmhjd', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
                {'id':'6', 'title':'uyikyuye', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
                {'id':'7', 'title':'yjyuioyukryu', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
            ],
            filters: {},
            selectedTitle: null,
            editingRows: [],
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'CRM'},
                {label: 'Customer Group'},
                // {label: 'Create Company', to:"/create-company"},
                {label: 'Create Company'}
            ]
        };
    },
    methods: {
      onRowEditInit(event) {
          this.originalRows[event.index] = {...this.ListCompany[event.index]};
      },
      onRowEditCancel(event) {
          Vue.set(this.ListCompany, event.index, this.originalRows[event.index]);
      },
    }
}
</script>