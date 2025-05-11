import Image from "next/image";

// components
import Button from "./Button";

function ProfilePicture() {
  return (
    <div className="flex items-center gap-6">
      <Image
        className="rounded-full"
        src="/profile.jpg"
        alt="profile"
        width={128}
        height={128}
      />

      <div className="space-y-4">
        <h4 className="header-small text-on_surface-light">Ali Rahimi</h4>

        <div className="flex items-center gap-3">
          <Button
            props={{
              value: "Change Picture",
              type: "outlined",
              disabled: false,
              leftIcon: "edit",
              rightIcon: "",
              width: 24,
              height: 24,
              color: "red",
              padding: "py-2 px-4 gap-2",
            }}
          />

          <Button
            props={{
              value: "",
              type: "outlined",
              disabled: false,
              leftIcon: "trash",
              rightIcon: "",
              width: 24,
              height: 24,
              color: "red",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
