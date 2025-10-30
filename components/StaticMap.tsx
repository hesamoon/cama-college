export default function StaticMap({ paddingPer }: { paddingPer: string }) {
  return (
    <div className="relative rounded-sm">
      <div
        className={`relative h-0 overflow-hidden`}
        style={{ paddingBottom: paddingPer }}
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-sm"
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=Canada+Management+College+(CAMA+College)/@43.8439514,-79.3865362,118m/data=!3m1!1e3!4m15!1m8!3m7!1s0x882b2b4956f7bd77:0xa0533c82dec211ea!2s500+Hwy+7+Unit+305,+Richmond+Hill,+ON+L4B+1J1,+Canada!3b1!8m2!3d43.8441212!4d-79.3861586!16s%2Fg%2F11yffsjd7n!3m5!1s0x882ad5b42b7f6bf7:0x22479cf8a40d098a!8m2!3d43.8441212!4d-79.3861586!16s%2Fg%2F11w1lxz7v6?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D&output=embed"
        ></iframe>
      </div>
      <a
        href="https://mapembeds.com"
        rel="noopener"
        target="_blank"
        className="absolute w-[1px] h-[1px] p-0 -m-[1px] overflow-hidden whitespace-nowrap"
      >
        mapembeds.com
      </a>
    </div>
  );
}
