import Image from "next/image";

// components
import TeamMemberPreview from "@/components/TeamMemberPreview";

const members = [
  {
    id: 1,
    name: "Dr. Reza Rahmani",
    role: "Role in the team",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada.",
  },
  {
    id: 2,
    name: "Dr. Reza Rahmani",
    role: "Role in the team",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada.",
  },
  {
    id: 3,
    name: "Dr. Reza Rahmani",
    role: "Role in the team",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada.",
  },
  {
    id: 4,
    name: "Dr. Reza Rahmani",
    role: "Role in the team",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada.",
  },
  {
    id: 5,
    name: "Dr. Reza Rahmani",
    role: "Role in the team",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada.",
  },
  {
    id: 6,
    name: "Dr. Reza Rahmani",
    role: "Role in the team",
    desc: "Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac enim. Pellentesque volutpat sagittis ullamcorper orci viverra dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper cursus auctor habitasse malesuada.",
  },
];

function page() {
  return (
    <div className="mobile-grid-system-level0 md:grid-system-level1 space-y-12 py-5 md:py-10">
      {/* our team section */}
      <section className="flex flex-col-reverse md:flex-row md:justify-between gap-7">
        <div className="space-y-4">
          <h2 className="mobile-title-large md:title-large text-black">
            Our Team
          </h2>

          <p className="mobile-body-large md:body-large text-txt-secondary text-justify">
            Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac
            enim. Pellentesque volutpat sagittis ullamcorper orci viverra
            dapibus sit. Sollicitudin tortor ut sem dictum odio in. Ullamcorper
            cursus auctor habitasse malesuada vel faucibus urna placerat duis.
            Lorem ipsum dolor sit amet consectetur. Quam elit lacus praesent ac
            enim. Pellentesque volutpat sagittis ullamcorper orci viverra
            dapibus sit.
          </p>
        </div>

        <Image
          src="/team-goals-bro.svg"
          alt="team-goals-bro"
          width={476}
          height={317}
        />
      </section>

      {/* team members section */}
      <section className="space-y-4 md:space-y-9">
        <h3 className="mobile-title-medium md:title-medium text-black">
          Team Members
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {members.map((mem) => (
            <TeamMemberPreview key={mem.id} memberDetails={mem} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
