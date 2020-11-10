import React, { useEffect } from "react";

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle adbanner-customize"
        style={{
          display: "block",
        }}
        data-ad-client=""
        data-ad-slot=""
      />
    </div>
  );
};

export default AdBanner;
