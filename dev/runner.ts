import fs from "fs"
import path from "path"
import { generate, TEMPLATE, BaseData, ReceiptData, InvoiceData } from "../dist"

const base = () => {
  const data: BaseData = {
    title: "Registeration Completed",
    message: "Hello Ali,<br>welcome to Albaron and thank you for registering with us. Make your first order now, buon a petitti",
    actions: [
      { name: "Show Menu", url: "http://google.com" },
      { name: "Checkout Menu", url: "http://google.com" },
    ],
    tenant: "Albaron",
    address: "98106-0167 O'Conner Burg 149 Quinn Gardens",
    email: "Ebony.Rippin@gmail.com",
    phone: "427-521-3577",
    logo: "https://commarce-line.s3.me-south-1.amazonaws.com/media/60434c1dbaca28156517f9ae/website/logo",
    image: "https://nectarsapp.s3.me-south-1.amazonaws.com/media/emails/registration.png",
  }
  let html = generate(data)
  html += `
  <script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>') 
  </script>`
  fs.writeFileSync(path.join(__dirname, "public", "base.html"), html, { flag: "w" })
}

const receipt = () => {
  const data: ReceiptData = {
    title: "Order Confirmed",
    message: "Hello Ali,<br>welcome to Albaron and thank you for ordering from us. buon a petitti",
    tenant: "Albaron",
    address: "98106-0167 O'Conner Burg 149 Quinn Gardens",
    email: "Ebony.Rippin@gmail.com",
    phone: "427-521-3577",
    logo: "https://commarce-line.s3.me-south-1.amazonaws.com/media/60434c1dbaca28156517f9ae/website/logo",
    image: "https://nectarsapp.s3.me-south-1.amazonaws.com/media/emails/registration.png",
    currency: "BHD",
    order: {
      order_id: "100",
      payment_method: "Cash",
      created_time: "2021-03-24T08:53:28.633Z2",
      cust_name: "Ali Mansoor",
      isDelivery: 1,
      order_total: 4.515,
      total_tax: 0.215,
      sub_total: 4.3,
      customer_note: "Voluptatem non distinctio voluptatum ullam et dolor tempore.",
      address: {
        line_one: "2415 Wisoky Locks",
        delivery_charge: 0.5,
      },
      items: [
        {
          item_name: "maharaja chicken biryani",
          quantity: 2,
          total: 10,
          note: "Voluptatem non distinct",
          choice_def: [
            {
              choice_def_text: "your choice of size:",
              choices: [
                {
                  choice_text: "2 persons",
                },
                {
                  choice_text: "large",
                },
              ],
            },
            {
              choice_def_text: "your choice of size:",
              choices: [
                {
                  choice_text: "2 persons",
                },
                {
                  choice_text: "large",
                },
              ],
            },
          ],
        },
        {
          item_name: "maharaja chicken biryani",
          quantity: 2,
          total: 10,
          choice_def: [
            {
              choice_def_text: "your choice of size:",
              choices: [
                {
                  choice_text: "2 persons",
                },
              ],
            },
          ],
        },
      ],
    },
    actions: [{ name: "Show Menu", url: "http://google.com" }],
  }
  let html = generate(data, TEMPLATE.RECEIPT)
  html += `
  <script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>') 
  </script>`

  fs.writeFileSync(path.join(__dirname, "public", "receipt.html"), html, { flag: "w" })
}

const invoice = () => {
  const data: InvoiceData = {
    title: "Payment Successful",
    text: "Hello Ali,<br>welcome to Albaron and thank you for ordering from us. buon a petitti",
    tenant: "Nectars",
    phone: "17000000",
    email: "Nectars@wildsbee.com",
    logo: "https://nectarsapp.s3.me-south-1.amazonaws.com/media/emails/nectars.png",
    billing: {
      id: "100",
      date: "2021-03-24T08:53:28.633Z2",
      month: "May 2021",
      plan: { name: "Renewal: Premuiom plan - monthly", cost: 30, duration: "From 18/03/2021 To 18/04/2021" },
      additionalCharges: [{
        name: "string",
        // usage: "string",
        cost: 10.512,
      }],
      payment: { from_credit: 10, from_card: 20, credit: 0 },
      address: { line_one: "Building 546 Road 3554", line_two: "Block 542 Manama Bahrain" },
      name: "Ali Dhaif",
      comp_name: "Albaron Resturant",
      phone: "140005454",
      email: "tenant@gmail.com",
      card: "3534",
      currency: "BHD",
      tax_percent: "5%",
      tax: 10,
    },
    actions: [{ name: "Pay Now", url: "http://google.com" }],
  }
  let html = generate(data, TEMPLATE.INVOICE)
  html += `
  <script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>') 
  </script>`

  fs.writeFileSync(path.join(__dirname, "public", "invoice.html"), html, { flag: "w" })
}

base()
receipt()
invoice()
