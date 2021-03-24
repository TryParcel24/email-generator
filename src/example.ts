import fs from "fs";
import path from "path";
import { generate } from "./index";

const html = generate({
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
});

fs.writeFileSync(path.join(__dirname, "test", "index.html"), html, { flag: "w" });
