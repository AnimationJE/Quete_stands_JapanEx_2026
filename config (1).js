/* ============================================================
   📅 FESTIVAL CONFIG — Edit dates here to match your event!
   ============================================================
   Format: "YYYY-MM-DD"
   
   Each entry defines when a specific day becomes available.
   The website will auto-detect which day to show based on
   today's date.
   
   DEFAULT_DAY forces a specific day regardless of date:
   0 = J1, 1 = J2, 2 = J3, 3 = J4
   null = auto-detect based on date
   ============================================================ */

const FESTIVAL_DAYS = [
  { date: "2026-07-01", label: "J1", stands: J1_STANDS },
  { date: "2026-07-02", label: "J2", stands: J2_STANDS },
  { date: "2026-07-03", label: "J3", stands: J3_STANDS },
  { date: "2026-07-04", label: "J4", stands: J4_STANDS },
];

// Force a specific day? Set to 0-3 or null for auto
const DEFAULT_DAY = null;
