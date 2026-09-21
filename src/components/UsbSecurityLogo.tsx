import { ShieldCheck, Usb } from "lucide-react";

export function UsbSecurityLogo({ faded = false }: { faded?: boolean }) {
  return (
    <div
      className={
        faded
          ? "pointer-events-none absolute inset-0 flex items-center justify-center opacity-logo"
          : "inline-flex items-center gap-3"
      }
      aria-hidden={faded}
    >
      <div className={faded ? "relative size-logo-watermark" : "relative size-14"}>
        <div className="absolute inset-0 rounded-logo bg-logo-field shadow-logo" />
        <ShieldCheck className="absolute inset-2 text-logo-shield" strokeWidth={1.9} />
        <Usb className="absolute inset-x-0 bottom-2 mx-auto size-logo-usb text-logo-usb" strokeWidth={2.4} />
      </div>
      {!faded ? (
        <div className="leading-none">
          <p className="font-display text-xl font-bold text-foreground">USB Physical</p>
          <p className="font-display text-sm font-semibold text-alert">Security</p>
        </div>
      ) : null}
    </div>
  );
}
