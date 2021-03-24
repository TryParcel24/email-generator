export declare enum TEMPLATE {
    BASE = "base.html"
}
declare type Data = {
    title: string;
    message: string;
    action?: {
        name: string;
        url: string;
        colors?: {
            background: string;
            text: string;
        };
    };
    tenant: string;
    address: string;
    email: string;
    phone: string;
    logo: string;
    image: string;
};
export declare const generate: (data: Data, template?: TEMPLATE) => string;
export default generate;
