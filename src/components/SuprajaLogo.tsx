interface SuprajaLogoProps {
  className?: string;
}

// Brand logo recreated from the Supraja Technologies document header.
export function SuprajaLogo({ className }: SuprajaLogoProps) {
  const arc = (r: number) =>
    `M ${50 - r} 52 A ${r} ${r} 0 0 1 ${50 + r} 52`;

  return (
    <div className={className} aria-label="Supraja Technologies">
      <svg viewBox="0 0 100 58" className="h-10 w-auto" role="img" aria-hidden="true">
        <path d={arc(16)} fill="none" stroke="#2fae3a" strokeWidth="7" strokeLinecap="round" />
        <path d={arc(28)} fill="none" stroke="#2fae3a" strokeWidth="7" strokeLinecap="round" />
        <path d={arc(40)} fill="none" stroke="#2fae3a" strokeWidth="7" strokeLinecap="round" />
        <circle cx="50" cy="55" r="5.5" fill="#e01b2c" />
      </svg>
      <div className="flex items-baseline leading-none">
        <span className="text-3xl font-extrabold tracking-tight text-[#20566b] italic">
          SUPRAJA
        </span>
        <span className="ml-0.5 text-xs font-bold text-[#20566b]">®</span>
      </div>
      <div className="mt-1 flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#e01b2c" aria-hidden="true">
          <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 8V7a3 3 0 1 1 6 0v3H9Z" />
        </svg>
        <span className="text-[11px] font-semibold tracking-[0.45em] text-neutral-500">
          TECHNOLOGIES
        </span>
      </div>
    </div>
  );
}
