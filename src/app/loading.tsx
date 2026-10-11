import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#D9D5CC] border-t-teal animate-spin mb-4" />
      <span className="font-mono text-xs tracking-editorial uppercase text-muted-grey">
        Loading ThinkLoom...
      </span>
    </div>
  );
}
