import React from "react";
import Link from "next/link";

export default function SpecialDeals({ col }) {
  return (
    <div className="row">
      <div className={col ? col : "col-lg-6"}>
        <Link
          id="kbdcraft"
          href="https://shln.top/ESlV1ACH"
          className="card ele-2 mb-4 bg-white kbdcraft-deal"
        >
          <div className="px-5 py-4">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <img width="160" src="/kbdcraft-logo.png" alt="KBDCraft" />
                <p>
                  Save <strong>20%</strong> on KBDcraft’s brick-built LEGO-like
                  keyboards with our exclusive coupon:{" "}
                  <strong style={{ "text-decoration": "underline" }}>
                    tryorthokeys
                  </strong>{" "}
                  at checkout.
                </p>
                <button className="btn btn-sm btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={col ? col : "col-lg-6"}>
        <a
          href="https://fkcaps.com/custom?a=tryorthokeys"
          id="FKcaps"
          className="card ele-2 mb-4 bg-primary fkcaps-deal"
        >
          <div className="px-5 py-4">
            <div className="row align-items-center">
              <div className="col-lg-12 text-light">
                <div className="d-flex align-items-center">
                  <img
                    className="mr-3"
                    src="/fkcaps.jpg"
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
                  FKcaps. Choose from various layouts, fonts, and styles with
                  their easy customizer.
                </p>
                <button className="btn btn-sm btn-light">Learn More</button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
