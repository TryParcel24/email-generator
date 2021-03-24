import handlebars from "handlebars";
import fs from "fs";
import path from "path";

export enum TEMPLATE {
  BASE = "base.hbs",
  RECEIPT = "receipt.hbs",
}

export type BaseData = {
  title: string;
  message: string;
  actions?: { name: string; url: string; colors?: { background: string; text: string } }[];
  tenant: string;
  address: string;
  email: string;
  phone: string;
  logo: string;
  image: string;
};

export type ReceiptData = {
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
  //tenant info
  tenant: string;
  address: string;
  phone: string;
  email: string;
  logo: string; //url
  //advert?: string; //image url --footer
};

export const generate = (data: BaseData | ReceiptData, template?: TEMPLATE): string => {
  const file = fs.readFileSync(path.join(__dirname, "handlebars", template || TEMPLATE.BASE));
  const compile = handlebars.compile(file.toString());

  const html = compile(data);
  return html;
};

export default generate;
