import handlebars from "handlebars";
import fs from "fs";
import path from "path";

export enum TEMPLATE {
  BASE = "base.html",
}

type Data = {
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

export const generate = (data: Data, template?: TEMPLATE): string => {
  const file = fs.readFileSync(path.join(__dirname, "handlebars", template || TEMPLATE.BASE));
  const compile = handlebars.compile(file.toString());

  const html = compile(data);
  return html;
};

export default generate;
