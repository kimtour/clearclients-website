"use client";
import { useState } from "react";
import { budgets, projectTypes, timelines } from "@/lib/validation/contact";
import { TurnstileWidget } from "@/components/forms/turnstile";

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, turnstileToken: token })
      });

      if (!response.ok) {
        const result = await response.json().catch(() => null) as {
          error?: string;
          issues?: { fieldErrors?: Record<string, string[] | undefined> };
        } | null;
        const fieldErrors = result?.issues?.fieldErrors;
        const firstFieldError = fieldErrors
          ? Object.values(fieldErrors).flat().find(Boolean)
          : undefined;
        setErrorMessage(firstFieldError || result?.error || "Your project enquiry could not be submitted. Please check the form and try again.");
        setStatus("error");
        return;
      }

      formElement.reset();
      setToken("");
      setStatus("success");
    } catch {
      setErrorMessage("Your project enquiry could not be submitted. Please try again.");
      setStatus("error");
    }
  }

  return <form className="card form-grid" onSubmit={submit}>
    <div className="form-field"><label htmlFor="name">Name *</label><input id="name" name="name" required maxLength={100}/></div>
    <div className="form-field"><label htmlFor="company">Company</label><input id="company" name="company" maxLength={150}/></div>
    <div className="form-field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" required maxLength={254}/></div>
    <div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" maxLength={50}/></div>
    <div className="form-field full"><label htmlFor="projectType">Project Type *</label><select id="projectType" name="projectType" required defaultValue=""><option value="" disabled>Select project type</option>{projectTypes.map(x=><option key={x}>{x}</option>)}</select></div>
    <div className="form-field full"><label htmlFor="description">Project Description *</label><textarea id="description" name="description" required minLength={10} maxLength={5000} aria-describedby="description-help" placeholder="Describe what you need to build, integrate or improve. Include existing systems, APIs, cloud platforms or technical requirements that may be relevant."/><p id="description-help" className="form-note">Please enter at least 10 characters.</p></div>
    <div className="form-field"><label htmlFor="budget">Estimated Budget</label><select id="budget" name="budget" defaultValue=""><option value="">Select budget</option>{budgets.map(x=><option key={x}>{x}</option>)}</select></div>
    <div className="form-field"><label htmlFor="timeline">Preferred Timeline</label><select id="timeline" name="timeline" defaultValue=""><option value="">Select timeline</option>{timelines.map(x=><option key={x}>{x}</option>)}</select></div>
    <div style={{position:"absolute",left:"-9999px"}} aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off"/></div>
    <div className="form-field full"><TurnstileWidget onToken={setToken} /></div>
    <div className="form-field full"><button className="button button-gold" type="submit" disabled={status==="sending"}>{status==="sending"?"Sending your project enquiry...":"Submit Project Enquiry"}</button>{status==="success"?<p role="status"><strong>Project Enquiry Received.</strong> Thanks. Your project enquiry has been received.</p>:null}{status==="error"?<p role="alert"><strong>Submission Failed.</strong> {errorMessage}</p>:null}</div>
  </form>;
}
