export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  headline: string;
  summary: string;
  stack: string[];
  metrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "clearpath-realty",
    client: "ClearPath Realty",
    industry: "Real Estate",
    headline: "From missed calls to a self-running lead pipeline",
    summary:
      "Replaced manual lead follow-up with a GoHighLevel + AI workflow that qualifies, books, and nurtures leads without a human touching the first message.",
    stack: ["GoHighLevel", "Make.com", "AI Voice/SMS"],
    metrics: [
      { label: "Response time", value: "38x faster" },
      { label: "Booked calls", value: "+64%" },
      { label: "Hours saved / week", value: "22 hrs" },
    ],
    problem:
      "Leads from paid ads and the website sat in an inbox for hours before anyone replied, and by then most had already called a competitor.",
    solution:
      "Built a GoHighLevel pipeline that captures every lead source, triggers an AI SMS and voice follow-up within 60 seconds, qualifies intent, and books directly onto the team's calendar.",
    result:
      "The team now spends zero time on manual outreach, and booked calls rose sharply within the first month of going live.",
  },
  {
    slug: "northbridge-dental",
    client: "Northbridge Dental Group",
    industry: "Healthcare",
    headline: "Appointment reminders that actually cut no-shows",
    summary:
      "Connected the practice management system to n8n so reminders, reschedules, and reviews run automatically across five locations.",
    stack: ["n8n", "Zapier", "Twilio"],
    metrics: [
      { label: "No-show rate", value: "-47%" },
      { label: "Locations synced", value: "5" },
      { label: "Review requests sent", value: "Auto" },
    ],
    problem:
      "Each location handled reminders differently, front-desk staff were calling patients by hand, and no-shows were eating into chair time.",
    solution:
      "An n8n workflow now watches the scheduling system, sends tiered SMS and email reminders, handles reschedule requests automatically, and triggers a review request after each visit.",
    result:
      "No-shows dropped across every location, and the front desk reclaimed hours each week previously spent on manual reminder calls.",
  },
  {
    slug: "vantage-consulting",
    client: "Vantage Consulting",
    industry: "Professional Services",
    headline: "One dashboard replacing six weekly status reports",
    summary:
      "Automated reporting pipeline pulls from CRM, invoicing, and project tools into a single weekly digest delivered to leadership automatically.",
    stack: ["Make.com", "GoHighLevel", "Google Sheets API"],
    metrics: [
      { label: "Reporting time", value: "-9 hrs/wk" },
      { label: "Data sources merged", value: "6" },
      { label: "Delivery", value: "Fully automated" },
    ],
    problem:
      "Leadership needed a weekly view across sales, delivery, and billing, but compiling it meant pulling data from six different tools by hand.",
    solution:
      "A Make.com pipeline pulls from every source on a schedule, normalizes the data, and generates a formatted report delivered straight to leadership's inbox every Monday.",
    result:
      "What used to take most of a workday now happens with no human involvement, and the report is more accurate than the manual version ever was.",
  },
];

export const services = [
  {
    title: "Lead Capture & Qualification",
    description:
      "Every inbound lead is captured, qualified, and routed the moment it arrives — no form sits untouched.",
  },
  {
    title: "CRM & Pipeline Automation",
    description:
      "GoHighLevel and CRM workflows that move deals forward automatically, so nothing depends on someone remembering to follow up.",
  },
  {
    title: "Appointment Systems",
    description:
      "Booking, reminders, reschedules, and no-show recovery, running on autopilot across every calendar and location.",
  },
  {
    title: "Reporting & Dashboards",
    description:
      "Scattered data pulled into one automated report, delivered on schedule without anyone touching a spreadsheet.",
  },
  {
    title: "AI Follow-Up Sequences",
    description:
      "AI-driven SMS, email, and voice follow-up that responds in seconds and keeps conversations moving toward a booked call.",
  },
];

export const tools = [
  "GoHighLevel",
  "Make.com",
  "Zapier",
  "n8n",
  "Twilio",
  "OpenAI",
];

export const stats = [
  { label: "Hours automated / month", value: "500+" },
  { label: "Client workflows live", value: "30+" },
  { label: "Average response time", value: "<60s" },
];
