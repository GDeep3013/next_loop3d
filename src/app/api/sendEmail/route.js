import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        // Parse the request body
        const { firstName, lastName, email, inquiryType, message } = await req.json();

        if (!firstName || !email || !message) {
            return new Response(JSON.stringify({ success: false, message: "Required fields are missing" }), { status: 400 });
        }

        // Nodemailer transporter setup
        const transporter = nodemailer.createTransport({
            service: "Gmail", // Or another SMTP service
            auth: {
                user: process.env.EMAIL_USER, // Sender's email
                pass: process.env.EMAIL_PASS, // Email password or app password
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "operations@vanitymediamarketing.com", // Replace with your recipient's email
            subject: `New ${inquiryType} from ${firstName} ${lastName}`,
            text: `
                Name: ${firstName} ${lastName}
                Email: ${email}
                Inquiry Type: ${inquiryType}
                Message: ${message}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Success response
        return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Error in sending email:", error);
        return new Response(
            JSON.stringify({ success: false, message: "Failed to send email", error: error.message }),
            { status: 500 }
        );
    }
}
