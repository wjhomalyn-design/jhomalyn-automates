"use client";

import { motion } from "framer-motion";

const NODES = [
  { id: "lead", label: "Lead Capture", x: 40, y: 40 },
  { id: "crm", label: "CRM", x: 230, y: 20 },
  { id: "appt", label: "Appointments", x: 400, y: 90 },
  { id: "report", label: "Reporting", x: 230, y: 190 },
  { id: "ai", label: "AI Follow-Up", x: 40, y: 170 },
];

const PATH =
  "M 40 40 C 120 10, 170 10, 230 20 C 300 35, 350 55, 400 90 C 350 130, 300 175, 230 190 C 160 200, 100 190, 40 170";

export default function WorkflowGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 460 230"
        className="w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="flowline" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5EA1FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#7DD3FC" stopOpacity="1" />
            <stop offset="100%" stopColor="#5EA1FF" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d={PATH}
          fill="none"
          stroke="rgba(125,211,252,0.12)"
          strokeWidth={1.5}
        />

        <motion.path
          d={PATH}
          fill="none"
          stroke="url(#flowline)"
          strokeWidth={2.5}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.4 }}
        />

        {NODES.map((n, i) => (
          <motion.circle
            key={n.id}
            cx={n.x}
            cy={n.y}
            r={5}
            fill="#7DD3FC"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.35 }}
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {NODES.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + i * 0.35 }}
            className="absolute -translate-x-1/2 -translate-y-full"
            style={{
              left: `${(n.x / 460) * 100}%`,
              top: `${(n.y / 230) * 100}%`,
            }}
          >
            <div className="glass rounded-full px-3 py-1.5 text-[11px] font-medium text-ink-100 shadow-glow">
              {n.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
