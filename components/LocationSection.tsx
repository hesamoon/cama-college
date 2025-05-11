import Image from "next/image";

function LocationSection() {
  return (
    <div id="Location" className="pt-8">
      <div className="border border-outline-level1 p-4 rounded-sm space-y-4">
        <h3 className="title-medium text-on_surface-light">Location</h3>

        <Image
          className="rounded-sm w-full"
          src="/map.png"
          alt="map"
          width={749}
          height={260}
        />
      </div>
    </div>
  );
}

export default LocationSection;
