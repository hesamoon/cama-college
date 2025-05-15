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
          src="https://maps.google.com/maps?q=mill+creek+ravine+north&output=embed"
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
