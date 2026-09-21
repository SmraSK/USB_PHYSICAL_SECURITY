import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Building2, CalendarDays, CheckCircle2, Mail, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UsbSecurityLogo } from "@/components/UsbSecurityLogo";

export const Route = createFileRoute("/project-info")({
  head: () => ({
    meta: [
      { title: "Project Information — USB Physical Security" },
      {
        name: "description",
        content:
          "Project details for the USB Physical Security prototype by Shaik Sameera at Supraja Technologies.",
      },
      { property: "og:title", content: "Project Information — USB Physical Security" },
      {
        property: "og:description",
        content:
          "Project details for the USB Physical Security prototype by Shaik Sameera at Supraja Technologies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectInfoPage,
});

const projectRows = [
  ["Project Name", "USB Physical Security"],
  ["Project Description", "Implementing Physical Security Policy on USB Ports in Organization for Physical Security"],
  ["Project Start Date", "16-08-2026"],
  ["Project End Date", "23 September 2026"],
  ["Project Status", "Completed"],
];

const enhancements = [
  "Beginner friendly GUI for the tool",
  "Automatic password generation for SMTP email authentication",
  "Database-backed user roles for Admin and User operations",
  "Intruder identification through snapshot capture",
  "USB device whitelist system and malicious USB detection",
  "USB activity monitoring and alert system",
];

function ProjectInfoPage() {
  return (
    <main className="min-h-screen bg-report-shell px-4 py-8 text-report-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-report bg-report-page p-6 shadow-report sm:p-10">
        <div className="mb-7 flex flex-col gap-4 border-b border-report-border pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <UsbSecurityLogo />
            <div>
              <p className="text-sm font-semibold uppercase text-alert">Supraja Technologies</p>
              <h1 className="font-display text-4xl font-bold tracking-normal text-report-heading">
                Project Information
              </h1>
            </div>
          </div>
          <Button asChild variant="report" size="sm">
            <Link to="/">
              <ArrowLeft />
              Back
            </Link>
          </Button>
        </div>

        <p className="mb-7 text-base leading-7 text-report-foreground">
          This project was developed by <strong>SHAIK SAMEERA</strong> as part of a{" "}
          <strong>Cyber Security Internship</strong>. This project is designed to secure organizations
          in the real world from cyber frauds performed by hackers.
        </p>

        <section className="mb-7">
          <h2 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-report-heading">
            <CheckCircle2 className="size-6 text-alert" />
            Project Details
          </h2>
          <div className="overflow-hidden border border-report-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="bg-report-table-head text-report-heading">
                <tr>
                  <th className="w-1/3 border-r border-report-border px-3 py-3 font-bold">Project Details</th>
                  <th className="px-3 py-3 font-bold">Value</th>
                </tr>
              </thead>
              <tbody>
                {projectRows.map(([label, value]) => (
                  <tr key={label} className="border-t border-report-border">
                    <td className="border-r border-report-border px-3 py-3">{label}</td>
                    <td className="px-3 py-3 font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-7">
          <h2 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-report-heading">
            <UserRound className="size-6 text-alert" />
            Developer Details
          </h2>
          <div className="overflow-hidden border border-report-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="bg-report-table-head text-report-heading">
                <tr>
                  <th className="border-r border-report-border px-3 py-3 font-bold">Name</th>
                  <th className="border-r border-report-border px-3 py-3 font-bold">Employee ID</th>
                  <th className="px-3 py-3 font-bold">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-report-border">
                  <td className="border-r border-report-border px-3 py-3">SHAIK SAMEERA</td>
                  <td className="border-r border-report-border px-3 py-3">ST#IS#9920</td>
                  <td className="px-3 py-3">smra.sk59@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-7">
          <h2 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-report-heading">
            <Building2 className="size-6 text-alert" />
            Company Details
          </h2>
          <div className="overflow-hidden border border-report-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="bg-report-table-head text-report-heading">
                <tr>
                  <th className="w-1/3 border-r border-report-border px-3 py-3 font-bold">Company</th>
                  <th className="px-3 py-3 font-bold">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-report-border">
                  <td className="border-r border-report-border px-3 py-3">Name</td>
                  <td className="px-3 py-3">Supraja Technologies</td>
                </tr>
                <tr className="border-t border-report-border">
                  <td className="border-r border-report-border px-3 py-3">Email</td>
                  <td className="px-3 py-3">contact@suprajatechnologies.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="mb-3 flex items-center gap-2 font-display text-2xl font-bold text-report-heading">
            <CalendarDays className="size-6 text-alert" />
            Project Enhancements
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {enhancements.map((enhancement, index) => (
              <div key={enhancement} className="border border-report-border bg-report-table-head p-4">
                <p className="text-xs font-bold text-alert">0{index + 1}</p>
                <p className="mt-1 font-medium leading-6 text-report-heading">{enhancement}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8 flex items-center gap-2 border-t border-report-border pt-5 text-sm text-report-muted">
          <Mail className="size-4 text-alert" />
          Audit-ready USB physical security prototype
        </div>
      </div>
    </main>
  );
}
