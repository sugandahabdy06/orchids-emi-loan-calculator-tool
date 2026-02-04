"use client";

type CheersCtaProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  link: string;
};

export default function CheersCta({
  title,
  subtitle,
  buttonText,
  link,
}: CheersCtaProps) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "20px",
        margin: "24px 0",
        textAlign: "center",
        background: "#f9fafb",
      }}
    >
      <h2 style={{ fontSize: "20px", fontWeight: 600 }}>
        {title}
      </h2>

      <p style={{ fontSize: "14px", color: "#4b5563", marginTop: "8px" }}>
        {subtitle}
      </p>

      <a
        href={link}
        target="_blank"
        rel="sponsored noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "16px",
          padding: "12px 20px",
          background: "#059669",
          color: "#ffffff",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        {buttonText}
      </a>
    </div>
  );
}
