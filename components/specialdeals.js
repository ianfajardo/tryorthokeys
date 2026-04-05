import React from "react";
import Link from "next/link";
import { getUrl } from "../lib/affiliates";

export default function SpecialDeals({ col }) {
  return (
    <div className="row">
      <div className={col ? col : "col-lg-6"}>
        <Link
          id="kbdcraft"
          href={getUrl('kbdcraft-store')}
          className="card ele-2 mb-4 bg-white kbdcraft-deal h-100"
        >
          <div className="px-5 py-4 h-100">
            <div className="row align-items-center">
              <div className="col-lg-12 d-flex flex-column h-100">
                <img width="160" src="/kbdcraft-logo.png" alt="KBDCraft" />
                <p>
                  KBDcraft Easter Sale: <strong>5% off</strong> one kit,{" "}
                  <strong>10% off</strong> two, or{" "}
                  <strong>15% off</strong> three or more brick-built
                  keyboard kits.
                </p>
                <span className="btn btn-sm btn-primary mt-auto align-self-start">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={col ? col : "col-lg-6"}>
        <a
          href={getUrl('fkcaps-custom-keycaps')}
          id="FKcaps"
          className="card ele-2 mb-4 bg-primary fkcaps-deal h-100"
        >
          <div className="px-5 py-4 h-100">
            <div className="row align-items-center">
              <div className="col-lg-12 text-light d-flex flex-column h-100">
                <div className="d-flex align-items-center">
                  <img
                    className="mr-3"
                    src="/fkcaps.jpg"
                    alt="FKcaps"
                    style={{ width: "40px", height: "auto" }}
                  />
                  <div
                    className="mb-3"
                    style={{ fontSize: "20px", lineHeight: "1.1" }}
                  >
                    <strong>Custom keycaps with FKcaps</strong>
                  </div>
                </div>
                <p style={{ lineHeight: "1.1" }}>
                  Use our link for <strong>10% off</strong> custom keycaps at
                  FKcaps. Choose from different layouts, fonts, and styles with
                  their easy customizer.
                </p>
                <span className="btn btn-sm btn-light mt-auto align-self-start">
                  Learn More
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
