export declare enum TEMPLATE {
    BASE = "base.hbs",
    RECEIPT = "receipt.hbs",
    INVOICE = "invoice.hbs"
}
export declare type BaseData = {
    title: string;
    message: string;
    actions?: {
        name: string;
        url: string;
        colors?: {
            background: string;
            text: string;
        };
    }[];
    tenant: string;
    address: string;
    email: string;
    phone: string;
    logo: string;
    image?: string;
};
export declare type ReceiptData = {
    title: string;
    message: string;
    order: {
        order_id: string;
        cust_name: string;
        customer_note: string;
        isDelivery: number;
        items: {
            item_name: string;
            quantity: number;
            total: number;
            note?: string;
            choice_def: {
                choice_def_text: string;
                choices: {
                    choice_text: string;
                }[];
            }[];
        }[];
        order_total: number;
        total_tax: number;
        sub_total: number;
        created_time: Date | string;
        address: {
            line_one: string;
            delivery_charge: number;
        };
        payment_method: string;
    };
    currency: string;
    tenant: string;
    address: string;
    phone: string;
    email: string;
    logo: string;
    image: string;
    actions?: {
        name: string;
        url: string;
        colors?: {
            background: string;
            text: string;
        };
    }[];
};
export declare type InvoiceData = {
    title: string;
    text: string;
    tenant: string;
    phone: string;
    email: string;
    logo: string;
    actions?: {
        name: string;
        url: string;
        colors?: {
            background: string;
            text: string;
        };
    }[];
};
export declare const generate: (data: BaseData | ReceiptData | InvoiceData, template?: TEMPLATE) => string;
export default generate;
