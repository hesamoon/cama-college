import StaticMap from "./StaticMap";

function LocationSection() {
  return (
    <div id="Location" className="pt-8">
      <div className="border border-outline-level1 p-3 md:p-4 rounded-sm space-y-4">
        <h3 className="title-medium text-on_surface-light">Location</h3>

        <StaticMap paddingPer="50%" />
      </div>
    </div>
  );
}

export default LocationSection;
