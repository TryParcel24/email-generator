import fs from "fs";
import path from "path";
import { generate, TEMPLATE, BaseData, ReceiptData } from "../dist";

const base = () => {
  const data: BaseData = {
    title: "Registeration Completed",
    message: "Hello Ali, welcome to Albaron and thank you for registering with us. Make your first order now, buon a petitti",
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
  };
  let html = generate(data);
  html += `
  <script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>') 
  </script>`;
  fs.writeFileSync(path.join(__dirname, "public", "base.html"), html, { flag: "w" });
};

const receipt = () => {
  const data: ReceiptData = {
    title: "Order Confirmed",
    message: "Hello Ali, welcome to Albaron and thank you for ordering from us. buon a petitti",
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
      address: {
        line_one: "2415 Wisoky Locks",
        delivery_charge: 0.5,
      },
      items: [
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
  };
  let html = generate(data, TEMPLATE.RECEIPT);
  html += `
  <script>
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>') 
  </script>`;

  fs.writeFileSync(path.join(__dirname, "public", "receipt.html"), html, { flag: "w" });
};

base();
receipt();