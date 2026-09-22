import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { SuprajaLogo } from "@/components/SuprajaLogo";

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
  [
    "Project Description",
    "Implementing Physical Security Policy on USB Ports in Organization for Physical Security",
  ],
  ["Project Start Date", "16 August 2026"],
  ["Project End Date", "23 September 2026"],
  ["Project Status", "Completed"],
];

function DocTable({
  headers,
  widths,
  rows,
}: {
  headers: string[];
  widths?: string[];
  rows: string[][];
}) {
  return (
    <div className="border-2 border-black bg-white">
      <table className="w-full table-fixed border-collapse text-center">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th
                key={header}
                style={widths ? { width: widths[i] } : undefined}
                className="border border-black bg-black px-4 py-4 text-base font-bold text-white sm:text-lg"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  className="border border-black px-4 py-4 text-sm leading-relaxed sm:text-base"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ProjectInfoPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-8 text-neutral-900 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-2 flex justify-start">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 border border-black px-3 py-1.5 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Back
          </Link>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
            Project Information
          </h1>
          <SuprajaLogo className="shrink-0" />
        </div>

        <p className="mb-10 max-w-4xl text-lg leading-8 text-neutral-800 sm:text-xl sm:leading-9">
          This project was developed by SHAIK SAMEERA as part of a Cyber Security Internship. This
          project is designed to Secure the Organizations in Real World from Cyber Frauds performed
          by Hackers.
        </p>

        <section className="mb-12">
          <DocTable
            headers={["Project Details", "Value"]}
            widths={["36%", "64%"]}
            rows={projectRows}
          />
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Developer Details
          </h2>
          <DocTable
            headers={["Name", "Employee ID", "Email"]}
            widths={["30%", "28%", "42%"]}
            rows={[["SHAIK SAMEERA", "ST#IS#9920", "smra.sk59@gmail.com"]]}
          />
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Company Details
          </h2>
          <DocTable
            headers={["Company", "Value"]}
            widths={["48%", "52%"]}
            rows={[
              ["Name", "Supraja Technologies"],
              ["Email", "contact@suprajatechnologies.com"],
            ]}
          />
        </section>
      </div>
    </main>
  );
}
