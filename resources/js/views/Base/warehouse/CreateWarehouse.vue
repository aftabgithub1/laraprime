<template>
  <div>
    <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>

    <!-- Form -->
    <div class="p-d-flex p-jc-between p-mb-4">
      <h2>Create Warehouse</h2>
    </div>
    <Card class="p-mb-5">
      <template #content>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-6 p-mb-5">
            <span class="p-float-label">
              <InputText id="title" type="text" />
              <label for="title">Title</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mb-5">
            <span class="p-float-label">
              <Dropdown id="dropdown" v-model="warehouse" :options="warehouses" optionLabel="categoryName" />
              <label for="select_parent_warehouse">Parent Warehouse</label>
            </span>
          </div>
          <div class="p-field p-col-12 p-md-6 p-mb-5">
            <span class="p-float-label">
              <Textarea v-model="description" rows="1" cols="30"/>
              <label for="lastname">Description</label>
            </span>
          </div>
          <div class="p-field p-grid p-col-12 p-md-6 p-ai-top p-mb-2">
            <div class="p-d-flex p-col-12 p-ai-start">
                <label for="status" class="p-mr-4">Status</label>
                <Checkbox v-model="status" :binary="true" />
                <span v-if="status" class="p-ml-2">Active</span>
                <span v-else class="p-ml-2">Inactive </span>
            </div>
          </div>
          <div class="p-field p-col-12 p-md-6 p-grid">
            <div class="p-d-flex p-col-12">
                <label for="logo" class="p-mr-4">Choose a logo</label>
                <FileUpload
                    mode="basic"
                    name="demo[]"
                    url="./upload.php"
                    accept="image/*"
                    :maxFileSize="1000000"
                    @upload="onUpload"
                />
            </div>
          </div>
          <div class="p-field p-col-12 p-md-6 text-right">
            <button label="Submit" class="btn btn-success" style="width: 150px;">Create</button>
          </div>
        </div>
      </template>
    </Card>

    <!-- List -->
    <div class="p-d-flex p-jc-between p-mb-4">
      <h2>Warehouse List</h2>
    </div>
    <Card>
      <template #content>
        <DataTable
          :value="ListWarehouse" :paginator="true" :rows="5"
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
          <Column field="location" header="Location">
              <template #editor="slotProps">
                  <InputText v-model="slotProps.data[slotProps.column.field]" />
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
          <Column header="Action" :rowEditor="true" headerStyle="width:7rem" bodyStyle="text-align:center"></Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>
 
<script>
  import Checkbox from "primevue/checkbox";
  import Dropdown from "primevue/dropdown";
  import FileUpload from "primevue/fileupload";
  import Textarea from "primevue/textarea";

  export default {
    name: "Createwarehouse",
    components: {
      Checkbox,
      Dropdown,
      FileUpload,
      Textarea,
    },
    data() {
      return {
        status: true,
        description: null,
        warehouse: null,
        warehouses: [
          {warehouseName: 'gggg', code: 'NY'},
          {warehouseName: 'Rome', code: 'RM'},
          {warehouseName: 'London', code: 'LDN'},
          {warehouseName: 'Istanbul', code: 'IST'},
          {warehouseName: 'Paris', code: 'PRS'}
        ],
        ListWarehouse: [
            {'id':'1', 'title':'kjsdhflsdhf', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
            {'id':'2', 'title':'ghjghjghj', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
            {'id':'3', 'title':'hjfghjhjjhkhj', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
            {'id':'4', 'title':'hjfghjghjuk', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
            {'id':'5', 'title':'uuikmhjd', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
            {'id':'6', 'title':'uyikyuye', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
            {'id':'7', 'title':'yjyuioyukryu', 'location':'Dhaka-1211', 'desp':'lkhlkjhlhlkggrt', 'status':'ghdhdfghfhf'},
        ],
        filters: {},
        selectedTitle: null,
        editingRows: [],
        home: {icon: 'pi pi-home', to: '/'},
        items: [
            {label: 'Base'},
            {label: 'Warehouse'},
            // {label: 'Create Warehouse', to:"/create-warehouse"},
            {label: 'Warehouse List'}
        ]
      };
    },
    methods: {
      onUpload() {
        this.$toast.add({
          severity: "info",
          summary: "Success",
          detail: "File Uploaded",
          life: 3000,
        });
      },
      onRowEditInit(event) {
          this.originalRows[event.index] = {...this.ListWarehouse[event.index]};
      },
      onRowEditCancel(event) {
          Vue.set(this.ListWarehouse, event.index, this.originalRows[event.index]);
      },
    },
  };
</script>