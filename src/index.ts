import handlebars from "handlebars"
import fs from "fs"
import path from "path"
import { parseISO, format } from "date-fns"

export enum TEMPLATE {
  BASE = "base.hbs",
  RECEIPT = "receipt.hbs",
}

export type BaseData = {
  title: string
  message: string
  actions?: { name: string; url: string; colors?: { background: string; text: string } }[]
  tenant: string
  address: string
  email: string
  phone: string
  logo: string
  image?: string
}

export type ReceiptData = {
  title: string
  message: string
  order: {
    order_id: string
    cust_name: string
    customer_note: string
    isDelivery: number
    items: {
      item_name: string
      quantity: number
      total: number
      note?: string
      choice_def: {
        choice_def_text: string
        choices: {
          choice_text: string
        }[]
      }[]
    }[]
    order_total: number
    total_tax: number
    sub_total: number
    created_time: string
    address: {
      line_one: string
      delivery_charge: number
    }
    payment_method: string
  }
  currency: string
  //tenant info
  tenant: string
  address: string
  phone: string
  email: string
  logo: string //url
  image: string
  actions?: { name: string; url: string; colors?: { background: string; text: string } }[]
  //advert?: string; //image url --footer
}

export const generate = (data: BaseData | ReceiptData, template?: TEMPLATE): string => {
  handlebars.registerHelper("join", function (context, options) {
    return context.map((i) => options.fn(i)).join(", ")
  })

  handlebars.registerHelper("date", function (context, options) {
    const date = parseISO(context.fn(this))
    return format(date, "PPPpp")
  })

  const file = fs.readFileSync(path.join(__dirname, "templates", template || TEMPLATE.BASE))
  const compile = handlebars.compile(file.toString())

  const html = compile(data)
  return html
}

export default generate
