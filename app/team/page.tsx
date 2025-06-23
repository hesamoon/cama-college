import TeamMemberPreview from "@/components/TeamMemberPreview";
import Image from "next/image";

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
    <div className="grid-system-level1 space-y-12 py-10">
      {/* our team section */}
      <section className="flex justify-between gap-7">
        <div className="space-y-4">
          <h2 className="title-large text-black">Our Team</h2>

          <p className="body-large text-txt-secondary">
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
      <section className="space-y-9">
        <h3 className="title-medium text-black">Team Members</h3>

        <div className="grid grid-cols-2 gap-4">
          {members.map((mem) => (
            <TeamMemberPreview key={mem.id} memberDetails={mem} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default page;
