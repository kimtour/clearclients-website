import type { ContactSubmission } from "@/lib/validation/contact";

export async function sendProjectEnquiry(data: ContactSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.EMAIL_FROM_ADDRESS;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") return { id: "development-noop" };
    throw new Error("Email delivery is not configured");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `ClearClients project enquiry: ${data.projectType}`,
      text: [
        `Name: ${data.name}`,
        `Company: ${data.company || "Not provided"}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        `Project type: ${data.projectType}`,
        `Budget: ${data.budget || "Not provided"}`,
        `Timeline: ${data.timeline || "Not provided"}`,
        "",
        data.description
      ].join("\n")
    })
  });

  if (!response.ok) {
    throw new Error(`Email provider rejected the request (${response.status})`);
  }

  return response.json();
}
