import fs from "fs";
import path from "path";
import { generate, TEMPLATE, BaseData, ReceiptData } from "./index";

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
  const html = generate(data);

  fs.writeFileSync(path.join(__dirname, "test", "base.html"), html, { flag: "w" });
};

const receipt = () => {
  const data: ReceiptData = {
    // image: "https://nectarsapp.s3.me-south-1.amazonaws.com/media/emails/registration.png",
    message: "Hello Ali, welcome to Albaron and thank you for registering with us. Make your first order now, buon a petitti",
    tenant: "Albaron",
    address: "98106-0167 O'Conner Burg 149 Quinn Gardens",
    email: "Ebony.Rippin@gmail.com",
    phone: "427-521-3577",
    logo: "https://commarce-line.s3.me-south-1.amazonaws.com/media/60434c1dbaca28156517f9ae/website/logo",
    currency: "BHD",
    subtotal: "10.000",
    total: "10.500",
    tax: "0.500",
    username: "Ali Mansoor",
    items: [
      {
        amount: "1.000",
        quantity: 2,
        name: "Magic Mushroom",
      },
      {
        amount: "1.000",
        quantity: 2,
        name: "Magic Mushroom",
      },
      {
        amount: "1.000",
        quantity: 2,
        name: "Magic Mushroom",
      },
      {
        amount: "1.000",
        quantity: 2,
        name: "Magic Mushroom",
      },
      {
        amount: "1.000",
        quantity: 2,
        name: "Magic Mushroom",
      },
      {
        amount: "1.000",
        quantity: 2,
        name: "Magic Mushroom",
      },
    ],
    order: {
      id: "100",
      payment_type: "Cash",
      time: "2014/06/02",
      delivery: {
        amount: "1.000",
        location: "2415 Wisoky Locks",
      },
    },
  };
  const html = generate(data, TEMPLATE.RECEIPT);

  fs.writeFileSync(path.join(__dirname, "test", "receipt.html"), html, { flag: "w" });
};

base();
receipt();
