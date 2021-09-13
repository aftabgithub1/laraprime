<template>
    <div>
        <div class="p-mb-4"><Breadcrumb :home="home" :model="items" /></div>
        <div class="p-d-flex p-jc-between p-mb-4">
            <h2>Create Purchase</h2>
            <button class="btn btn-danger"><router-link to="/list-purchase" class="text-white">List Purchase</router-link></button>
        </div>
        <Card>
            <template #content>
                <div class="p-fluid p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <Calendar id="purchase_date" v-model="icon" :showIcon="true" />
                            <label for="purchase_date">Purchase Date</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <Dropdown v-model="selectedSuplier" :options="suplier" optionLabel="name" />
                            <label for="buyer_name">Suplier Name</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <Dropdown v-model="selectedWarehouse" :options="warehouse" optionLabel="name" />
                            <label for="warehouse">Warehouse</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <InputText id="reference_no" type="text" />
                            <label for="reference_no">Reference No</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <InputText id="invoice_no" type="text" />
                            <label for="invoice_no">Invoice No</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <InputText id="purchase_satus" type="text" />
                            <label for="purchase_satus">Purchase Status</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <InputText id="payment_status" type="text" />
                            <label for="payment_status">Payment Status</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <InputText id="purchase_by" type="text" />
                            <label for="purchase_by">Purchase By</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <InputNumber v-model="total_price" />
                            <label for="total_price">Total Price</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-mb-4">
                        <span class="p-float-label">
                            <InputNumber v-model="subtotal_price" />
                            <label for="subtotal_price">Subtotal Price</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <span class="p-float-label">
                            <InputNumber id="minmax-buttons" v-model="total_quantity" mode="decimal" showButtons :min="0" />
                            <label for="total_quantity">Total Quantity</label>
                        </span>
                    </div>
                    <div class="p-field p-col-12 p-md-4 p-p-1 p-">
                        <span class="p-float-label">
                            <InputNumber id="minmax-buttons" v-model="total_product" mode="decimal" showButtons :min="0" />
                            <label for="total_product">Total Product</label>
                        </span>
                    </div>
                </div>
                
                <div class="product-box">
                    <div v-for="(purchase, index) in purchases" :key="index" class="p-grid p-ai-end p-p-2">
                        <div class="p-col-3">
                            <label for="product_name">Product Name</label>
                            <select v-model="purchase.name" id="product_name" class="form-control" >
                                <option selected disabled hidden>-- Select a Product --</option>
                                <option>Shirt</option>
                                <option>pant</option>
                            </select>
                        </div>
                        <div class="p-col-2">
                            <label for="qty">Qty</label>
                            <input v-model="purchase.qty" type="number" name="" id="qty" class="form-control">
                        </div>
                        <div class="p-col-3">
                            <label for="per_price">Per Price</label>
                            <input v-model="purchase.per_price" type="number" name="" id="per_price" class="form-control">
                        </div>
                        <div class="p-col-3">
                            <label for="total_price">Total Price</label>
                            <input v-model="purchase.total_price" type="number" name="" id="total_price" class="form-control">
                        </div>
                        <div class="p-col-1">
                            <input @click="remove(index)" type="button" value="-" class="form-control btn btn-danger">
                        </div>
                    </div>
                    <div class="p-d-flex p-ai-end p-p-2">
                        <div class="p-col-2">
                            <input @click="add" type="button" value="+" class="btn btn-success">
                        </div>
                    </div>
                </div>

                <div class="p-fluid p-formgrid p-grid mt-3">
                    <div class="p-field p-col-12">
                        <label for="note">Note</label>
                        <Textarea id="note" rows="4" />
                    </div>
                </div>

                <div class="p-d-flex p-jc-end">
                    <div class="p-col-5">
                        <div class="p-grid">
                            <div class="p-col-6">
                                <label for="sale_discount"><h4>Sale Discount:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="sale_discount" />
                            </div>
                            <div class="p-col-6">
                                <label for="total_discount"><h4>Total Discount:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="total_discount" />
                            </div>
                            <div class="p-col-6">
                                <label for="total_tax"><h4>Total Tax:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="total_tax" />
                            </div>
                            <div class="p-col-6">
                                <label for="shipping_cost"><h4>Shipping Cost:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="shipping_cost" />
                            </div>
                            <div class="p-col-6">
                                <label for="grand_total"><h4>Grand Total:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="grand_total" />
                            </div>
                            <div class="p-col-6">
                                <label for="privious"><h4>Previous:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="privious" />
                            </div>
                            <div class="p-col-6">
                                <label for="net_total"><h4>Net Total:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="net_total" />
                            </div>
                            <div class="p-col-6">
                                <label for="paid_amount"><h4>Paid Amount:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="paid_amount" />
                            </div>
                            <div class="p-col-6">
                                <label for="due"><h4>Due:</h4></label>
                            </div>
                            <div class="p-col-6">
                                <InputNumber v-model="due" />
                            </div>
                        </div>
                    </div>
                </div>



                <div>
                    <button type="submit" class="btn btn-success">Save Purchase</button>
                </div>

            </template>
        </Card>
    </div>
</template>

<script>
import Textarea from 'primevue/textarea';
import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';

export default {
    name: 'CreatePurchase',
    components: {
        Textarea,
        Calendar,
        Dropdown,
        InputNumber
    },
    data() {
        return {
            total_price: null,
            subtotal_price: null,
            total_quantity: null,
            total_product: null,
            sale_discount: null,
            total_discount: null,
            total_tax: null,
            shipping_cost: null,
            grand_total: null,
            privious: null,
            net_total: null,
            paid_amount: null,
            due: null,
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Base'},
                {label: 'List Purchase', to:"/list-purchase"},
                {label: 'Create Purchase'}
            ],
            purchases: [{
                name: '',
                qty: '',
                per_price: '',
                total_price: '',
            }],
            icon: null,
            selectedSuplier: null,
            suplier: [
                {name: 'Kawsar Ahmed', code: 'NY'},
                {name: 'Rafiqul Islam', code: 'RM'},
            ],
            selectedWarehouse: null,
            warehouse: [
                {name: 'Dhaka Division', code: 'NY'},
                {name: 'Khulna Division', code: 'RM'},
            ],
        }
    },
    methods: {
        add() {
            this.purchases.push({
                name: '',
                qty: '',
                per_price: '',
                total_price: '',
            });
        },
        remove(index) {
            this.purchases.splice(index, 1);
            if(index === 0){
                this.add();
            }
        }
    }

}
</script>

<style>
    .product-box {
        border: 1px solid #a6a6a6;
        border-radius: 3px;
        transition: border-color 0.2s;
    }
    .product-box:hover {
        border: 1px solid #111;
    }
</style>