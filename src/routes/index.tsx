import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileText, ListChecks, PowerOff, Usb, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { UsbSecurityLogo } from "@/components/UsbSecurityLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "USB Physical Security Prototype" },
      {
        name: "description",
        content:
          "A USB physical security control prototype with enable, disable, logs, and project information actions.",
      },
      { property: "og:title", content: "USB Physical Security Prototype" },
      {
        property: "og:description",
        content:
          "A USB physical security control prototype with enable, disable, logs, and project information actions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const formatTime = (date: Date) =>
  new Intl.DateTimeFormat("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);

function Index() {
  const [showSplash, setShowSplash] = useState(true);
  const [usbEnabled, setUsbEnabled] = useState(true);
  const [showLogs, setShowLogs] = useState(false);
  const [logs, setLogs] = useState([
    "System launched and USB monitor initialized",
    "Audit log ready for operator activity",
  ]);

  const status = useMemo(
    () => (usbEnabled ? "USB access enabled" : "USB access disabled"),
    [usbEnabled],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  const writeLog = (message: string) => {
    setLogs((currentLogs) => [`${formatTime(new Date())} — ${message}`, ...currentLogs].slice(0, 8));
  };

  const disableUsb = () => {
    setUsbEnabled(false);
    setShowLogs(false);
    writeLog("DISABLE USB command accepted by operator");
  };

  const enableUsb = () => {
    setUsbEnabled(true);
    setShowLogs(false);
    writeLog("ENABLE USB command accepted by operator");
  };

  const openLogs = () => {
    setShowLogs(true);
    writeLog("VIEW LOGS opened by operator");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-control-screen px-5 py-8 text-console-text">
      {showSplash ? (
        <div className="splash-fade fixed inset-0 z-20 flex items-center justify-center bg-control-screen">
          <div className="text-center">
            <UsbSecurityLogo />
            <p className="mt-5 font-display text-3xl font-bold text-console-text">USB Physical Security</p>
          </div>
        </div>
      ) : null}

      <UsbSecurityLogo faded />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl flex-col items-center justify-center gap-7">
        <Button asChild variant="console" size="lg" className="w-auto px-7">
          <Link to="/project-info">
            <FileText />
            Project Info
          </Link>
        </Button>

        <section className="w-full max-w-xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-normal text-console-text sm:text-5xl">
            USB Physical Security!!!
          </h1>

          <div className="mx-auto mt-7 flex aspect-[4/3] w-full max-w-xs items-center justify-center bg-logo-field p-6 shadow-logo">
            <div className="grid grid-cols-2 gap-8">
              <div className="relative">
                <Usb className="size-20 text-logo-usb" strokeWidth={2.5} />
                <CheckCircle2 className="absolute -bottom-1 -right-3 size-9 rounded-full bg-logo-field text-status-enable" />
              </div>
              <div className="relative">
                <Usb className="size-20 text-logo-usb" strokeWidth={2.5} />
                <XCircle className="absolute -bottom-1 -right-3 size-9 rounded-full bg-logo-field text-status-disable" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-sm bg-control-panel p-8 shadow-screen">
          <div className="grid gap-5">
            <Button variant="console" size="console" onClick={disableUsb}>
              <PowerOff />
              Disable USB
            </Button>
            <Button variant="console" size="console" onClick={enableUsb}>
              <Usb />
              Enable USB
            </Button>
            <Button variant="console" size="console" onClick={openLogs}>
              <ListChecks />
              View Logs
            </Button>
            <Button asChild variant="console" size="console">
              <Link to="/project-info">
                <FileText />
                Project Info
              </Link>
            </Button>
          </div>
        </section>

        <section className="w-full max-w-xl border border-console-frame bg-muted/80 p-5 text-left shadow-screen">
          <div className="flex items-center justify-between gap-4">
            <p className="font-display text-xl font-bold text-console-text">Status</p>
            <span
              className={
                usbEnabled
                  ? "status-pulse text-sm font-bold uppercase text-status-enable"
                  : "status-pulse text-sm font-bold uppercase text-status-disable"
              }
            >
              {status}
            </span>
          </div>
          {showLogs ? (
            <div className="mt-4 max-h-44 overflow-auto border-t border-console-frame pt-4">
              {logs.map((log) => (
                <p key={log} className="py-1 font-mono text-sm text-console-muted">
                  {log}
                </p>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-sm text-console-muted">
              Waiting for operator command. Select an action to update the security state.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}
