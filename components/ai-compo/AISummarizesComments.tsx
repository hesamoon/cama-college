import Image from "next/image";

const points = [
  { id: 1, title: "Positive Points", type: 1 },
  { id: 4, title: "Negative Points", type: 0 },
  { id: 2, title: "Positive Points", type: 1 },
  { id: 3, title: "Positive Points", type: 1 },
  { id: 3, title: "Positive Points", type: 1 },
  { id: 3, title: "Positive Points", type: 1 },
  { id: 5, title: "Negative Points", type: 0 },
  { id: 5, title: "Negative Points", type: 0 },
  { id: 5, title: "Negative Points", type: 0 },
];

function AISummarizesComments() {
  return (
    <div className="rounded-lg border border-[#F9D1D2] p-5 space-y-7">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="pt-[0.45rem] p-1.5 rounded-full bg-primary-tints-90 flex items-center justify-center">
            <Image
              className="h-6 w-6"
              src="/cama-college-logo.png"
              alt="tuum logo"
              width={24}
              height={24}
            />
          </div>

          <span className="body-medium text-txt-low-important">
            Generated With TUUM
          </span>
        </div>

        {/* Content */}
        <p className="body-large text-txt-secondary">
          Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac
          enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus
          sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus
          auctor habitasse malesuada vel faucibus urna placerat duis.
        </p>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        {points
          .sort((a, b) => b.type - a.type)
          .map((point) => (
            <div
              key={point.id}
              className={`py-2 px-4 rounded-sm ${
                point.type === 1 ? "bg-[#C2EFCE]" : "bg-[#FFB7B2]"
              }`}
            >
              <h3 className="whitespace-nowrap body-large text-[#051409]">{point.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AISummarizesComments;
