export declare enum TEMPLATE {
    BASE = "base.hbs",
    RECEIPT = "receipt.hbs"
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
    image: string;
};
export declare type ReceiptData = {
    username: string;
    message: string;
    items: {
        name: string;
        amount: string;
        quantity: number;
    }[];
    currency: string;
    subtotal: string;
    tax: string;
    total: string;
    order: {
        id: string;
        time: string;
        delivery?: {
            location: string;
            amount: string;
        };
        payment_type: string;
    };
    tenant: string;
    address: string;
    phone: string;
    email: string;
    logo: string;
};
export declare const generate: (data: BaseData | ReceiptData, template?: TEMPLATE) => string;
export default generate;
