<template>
  <div>
	<div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
	
	<!-- Filter form -->
	<Card class="p-mb-5">
	  <template #content>
			<div class="p-fluid p-grid">
				<div class="p-field p-col-12 p-md-6">
				<span class="p-float-label">
					<Dropdown
					id="suplier_filter"
					v-model="suplierFilter"
					:options="suplier_filter"
					optionLabel="name"
					/>
					<label for="suplier_filter">Suplier</label>
				</span>
				</div>
				<div class="p-field p-col-12 p-md-6">
				<span class="p-float-label">
					<Dropdown
					id="warehouse_filter"
					v-model="warehouseFilter"
					:options="warehouse_filter"
					optionLabel="name"
					/>
					<label for="warehouse_filter">Warehouse</label>
				</span>
				</div>
				<div class="p-field p-col-12 p-md-6">
				<span class="p-float-label">
					<Calendar id="from_date" v-model="from_date" :showIcon="true" />
					<label for="from_date">From Date</label>
				</span>
				</div>
				<div class="p-field p-col-12 p-md-6">
				<span class="p-float-label">
					<Calendar id="to_date" v-model="to_date" :showIcon="true" />
					<label for="to_date">To Date</label>
				</span>
				</div>
				<div class="p-field p-col-12 p-md-6">
					<button class="btn btn-success">Filter</button>
				</div>
			</div>
	  </template>
	</Card>

	<!-- List -->
	<div class="p-d-flex p-jc-between p-mb-2">
	  <h2>List Purchase</h2>
	  <button class="btn btn-danger">
		<router-link to="/create-purchase" class="text-white"
		  >Create Purchase</router-link
		>
	  </button>
	</div>
	<Card>
	  <template #content>
		<DataTable
		  :value="ListPurchase"
		  :scrollable="true"
		  :paginator="true"
		  :rows="10"
		  paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
		  :rowsPerPageOptions="[10, 20, 50]"
		  currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
		  :filters="filters"
		  dataKey="id"
		  :selection.sync="selectedTitle"
		>
		  <template #header>
			<div class="table-header p-d-flex p-jc-end">
			  <span class="p-input-icon-left">
				<i class="pi pi-search" />
				<InputText
				  v-model="filters['global']"
				  placeholder="Global Search"
				/>
			  </span>
			</div>
		  </template>

		  <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
		  <Column
			field="invoice_no"
			header="Invoice No"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="purchase_date"
			header="Purchase Date"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="suplier_name"
			header="Suplier Name"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="warehouse"
			header="Warehouse"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="reference_no"
			header="Reference No"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="purchase_status"
			header="Purchase Status"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="payment_status"
			header="Payment Status"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="purchased_by"
			header="Purchaseed by"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="total_price"
			header="Total Price"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="subtotal_price"
			header="Subtotal Price"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="total_quantity"
			header="Total Quantity"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		  <Column
			field="total_product"
			header="Total Product"
			:sortable="true"
			headerStyle="width: 250px"
		  >
			<template #editor="slotProps">
			  <InputText v-model="slotProps.data[slotProps.column.field]" />
			</template>
		  </Column>
		</DataTable>
	  </template>
	</Card>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";

export default {
  name: "ListPurchase",
  components: {
	Calendar,
	Dropdown,
  },
  data() {
	return {
		from_date: null,
		to_date: null,
	  ListPurchase: [
		{
		  purchase_date: "hghghjghj",
		  suplier_name: "ghjfhjfghjgh",
		  warehouse: "ghjfghjghj",
		  reference_no: "hgjghj",
		  invoice_no: "fghjfghjgh",
		  purchase_status: "ghjfhgjgfhj",
		  payment_status: "hkkhjkhk",
		  purchased_by: "dfyrteyrtyert",
		  total_price: "hjkghjkhjk",
		  subtotal_price: "hjkghjkghjk",
		  total_quantity: "hjkghjkghk",
		  total_product: "hgjkhjkghjkh",
		},
		{
		  purchase_date: "hghghjghj",
		  suplier_name: "ghjfhjfghjgh",
		  warehouse: "ghjfghjghj",
		  reference_no: "hgjghj",
		  invoice_no: "fghjfghjgh",
		  purchase_status: "ghjfhgjgfhj",
		  payment_status: "hkkhjkhk",
		  purchased_by: "dfyrteyrtyert",
		  total_price: "hjkghjkhjk",
		  subtotal_price: "hjkghjkghjk",
		  total_quantity: "hjkghjkghk",
		  total_product: "hgjkhjkghjkh",
		},
		{
		  purchase_date: "hghghjghj",
		  suplier_name: "ghjfhjfghjgh",
		  warehouse: "ghjfghjghj",
		  reference_no: "hgjghj",
		  invoice_no: "fghjfghjgh",
		  purchase_status: "ghjfhgjgfhj",
		  payment_status: "hkkhjkhk",
		  purchased_by: "dfyrteyrtyert",
		  total_price: "hjkghjkhjk",
		  subtotal_price: "hjkghjkghjk",
		  total_quantity: "hjkghjkghk",
		  total_product: "hgjkhjkghjkh",
		},
		{
		  purchase_date: "hghghjghj",
		  suplier_name: "ghjfhjfghjgh",
		  warehouse: "ghjfghjghj",
		  reference_no: "hgjghj",
		  invoice_no: "fghjfghjgh",
		  purchase_status: "ghjfhgjgfhj",
		  payment_status: "hkkhjkhk",
		  purchased_by: "dfyrteyrtyert",
		  total_price: "hjkghjkhjk",
		  subtotal_price: "hjkghjkghjk",
		  total_quantity: "hjkghjkghk",
		  total_product: "hgjkhjkghjkh",
		},
	  ],
	  filters: {},
	  selectedTitle: null,
	  home: { icon: "pi pi-home", to: "/" },
	  items: [
		{ label: "Purchase" },
		{ label: "Create Purchase", to: "/create-purchase" },
		{ label: "List Purchase" },
	  ],
	  suplierFilter: null,
	  suplier_filter: [
		{ name: "Kawsar Ahmed", code: "NY" },
		{ name: "Rafiqul Islam", code: "RM" },
	  ],
	  warehouseFilter: null,
	  warehouse_filter: [
		{ name: "Dhaka Division", code: "NY" },
		{ name: "Khulna Division", code: "RM" },
	  ],
	};
  },
};
</script>