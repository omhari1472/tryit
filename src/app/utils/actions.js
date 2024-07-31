"use server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NEXT_EMAIL,
        pass: process.env.NEXT_PASSWORD,
    },
});
export async function handleSubmit(formData) {
    const info = {
        from: `"<${formData.get("email")}>`,
        to: "devaanshic1509@gmail.com",
        subject: "Someone tried to connect via portfolio🥳",
        text: `${formData.get("username")} : ${formData.get(
            "email",
        )}\n\n${formData.get("subject")}`,
    };


    await new Promise((resolve, reject) => {
        transporter.sendMail(info, (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}