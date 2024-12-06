'use client'
import { InlineWidget } from "react-calendly";

export default function ScheduleMeeting() {
  return (
    <div className="calendly-widget w-full max-w-4xl mx-auto">
      <InlineWidget url="https://calendly.com/aaron-vanitymediamarketing/loop3d-demo?hide_event_type_details=1&amp;hide_gdpr_banner=1" />
    </div>
  );
}