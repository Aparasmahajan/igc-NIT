import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  OrganizingCommitte,
  AdvisoryCommitte,
  TechnicalCommittee,
  KeynoteSpeakers,
  ThemeSpeakers,
  ConferenceTheme,
  DetailedSchedule,
  ScheduleAtGlance,
  TechnicalSessions,
  PoseterSessions,
  Templates,
  Sponsors,
  Exhibitors,
  Venue,
  Workshop,
  Accomondation,
  PlacesToVisit,
  Contacts,
  Registrations,
  Login,
} from "../screens";
import Body from "../components/Body/body";

function NavbarRouter() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      {/* <Route path="/body" element={<Body />} /> */}
      {/* below componets are taken with the refrence of the navbar in orignal website */}
      <Route path="/organizing-committe" element={<OrganizingCommitte />} />
      <Route path="/advisory-committe" element={<AdvisoryCommitte />} />
      <Route path="/technical-committee" element={<TechnicalCommittee />} />
      <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
      <Route path="/theme-speakers" element={<ThemeSpeakers />} />
      <Route path="/conference-theme" element={<ConferenceTheme />} />
      <Route path="/detailed-schedule" element={<DetailedSchedule />} />
      <Route path="/schedule-at-glance" element={<ScheduleAtGlance />} />
      <Route path="/technical-sessions" element={<TechnicalSessions />} />
      <Route path="/poseter-sessions" element={<PoseterSessions />} />
      <Route path="/templates" element={<Templates />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/exhibitors" element={<Exhibitors />} />
      <Route path="/venue" element={<Venue />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/accomondation" element={<Accomondation />} />
      <Route path="/places-to-visit" element={<PlacesToVisit />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/registrations" element={<Registrations />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<p className="justify-centre">Element not found</p>} />
    </Routes>
  );
}

export default NavbarRouter;
