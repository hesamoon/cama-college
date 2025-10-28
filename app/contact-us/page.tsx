"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

// components
import Button from "@/components/Button";

function Page() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [question, setQuestion] = useState("");
  const [department, setDepartment] = useState("Education");

  const [touched, setTouched] = useState(false);

  // Basic email validation regex
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const showError = touched && !isValidEmail(email);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!showError && Boolean(fullName && email && department))
        submitClickHandler();
    }
  };

  const submitClickHandler = () =>
    console.log(
      `fullName: ${fullName}\nemail: ${email}\ndepartment: ${department}\nquestion: ${question}`
    );

  return (
    <div className="mobile-grid-system-level0 md:grid-system-level1 space-y-12 py-5 md:py-10">
      {/* general information */}
      <div className="space-y-9">
        <h3 className="mobile-title-large md:title-large text-black">
          General Contact Information
        </h3>

        <div className="flex flex-col md:flex-row gap-6 md:gap-32">
          {/* location */}
          <div className="flex gap-3 flex-1">
            <div
            // className="rounded-full bg-primary-tints-90 p-3"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#FCE8E9" />
                <path
                  opacity="0.4"
                  d="M23.9999 25.4304C25.723 25.4304 27.1199 24.0336 27.1199 22.3104C27.1199 20.5873 25.723 19.1904 23.9999 19.1904C22.2768 19.1904 20.8799 20.5873 20.8799 22.3104C20.8799 24.0336 22.2768 25.4304 23.9999 25.4304Z"
                  stroke="#A91418"
                  stroke-width="1.5"
                />
                <path
                  d="M15.6202 20.49C17.5902 11.83 30.4202 11.84 32.3802 20.5C33.5302 25.58 30.3702 29.88 27.6002 32.54C25.5902 34.48 22.4102 34.48 20.3902 32.54C17.6302 29.88 14.4702 25.57 15.6202 20.49Z"
                  stroke="#A91418"
                  stroke-width="1.5"
                />
              </svg>
            </div>

            <div className="space-y-1">
              <h6 className="mobile-label-large md:label-large text-txt-on-surface-terriary-light">
                Address
              </h6>

              <a
                href="https://www.google.com/maps/place/Canada+Management+College+(CAMA+College)/@43.8439514,-79.3865362,118m/data=!3m1!1e3!4m15!1m8!3m7!1s0x882b2b4956f7bd77:0xa0533c82dec211ea!2s500+Hwy+7+Unit+305,+Richmond+Hill,+ON+L4B+1J1,+Canada!3b1!8m2!3d43.8441212!4d-79.3861586!16s%2Fg%2F11yffsjd7n!3m5!1s0x882ad5b42b7f6bf7:0x22479cf8a40d098a!8m2!3d43.8441212!4d-79.3861586!16s%2Fg%2F11w1lxz7v6?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-body-large md:body-large text-on_surface-light"
              >
                Unit 305, 500 Highway 7 East,
                <br />
                Richmond Hill, Ontario, CANADA
                <br />
                L4B 1J1
              </a>
            </div>
          </div>

          {/* phone */}
          <div className="flex gap-3 flex-1">
            <div
            // className="rounded-full bg-primary-tints-90 p-3"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#FCE8E9" />
                <path
                  d="M17.46 30.4898V27.5698C17.46 26.5998 18.22 25.7298 19.3 25.7298C20.27 25.7298 21.14 26.4898 21.14 27.5698V30.3798C21.14 32.3298 19.52 33.9498 17.57 33.9498C15.62 33.9498 14 32.3198 14 30.3798V24.2198C13.89 18.5998 18.33 14.0498 23.95 14.0498C29.57 14.0498 34 18.5998 34 24.1098V30.2698C34 32.2198 32.38 33.8398 30.43 33.8398C28.48 33.8398 26.86 32.2198 26.86 30.2698V27.4598C26.86 26.4898 27.62 25.6198 28.7 25.6198C29.67 25.6198 30.54 26.3798 30.54 27.4598V30.4898"
                  stroke="#A91418"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="space-y-1">
              <h6 className="mobile-label-large md:label-large text-txt-on-surface-terriary-light">
                Phone
              </h6>
              <h4 className="mobile-body-large md:body-large text-on_surface-light">
                +1 647 720 2949
              </h4>

              <div className="">
                <h6 className="mobile-body-small md:body-small text-txt-on-surface-terriary-light">
                  Monday - Friday: 09:00 - 17:00
                </h6>
                <h6 className="mobile-body-small md:body-small text-txt-on-surface-terriary-light">
                  Saturday: 10:00 - 14:00
                </h6>
              </div>
            </div>
          </div>

          {/* mail */}
          <div className="flex gap-3 flex-1">
            <div
            // className="rounded-full bg-primary-tints-90 p-3"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="24" cy="24" r="24" fill="#FCE8E9" />
                <path
                  d="M29 32.5H19C16 32.5 14 31 14 27.5V20.5C14 17 16 15.5 19 15.5H29C32 15.5 34 17 34 20.5V27.5C34 31 32 32.5 29 32.5Z"
                  stroke="#A91418"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M29 21L25.87 23.5C24.84 24.32 23.15 24.32 22.12 23.5L19 21"
                  stroke="#A91418"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div className="space-y-2">
              <div>
                <h6 className="mobile-label-large md:label-large text-txt-on-surface-terriary-light">
                  Admissions & Aid
                </h6>
                <h4 className="mobile-body-large md:body-large text-on_surface-light">
                  <a
                    href="mailto:collegeadmissions@camacollege.ca"
                    className=""
                  >
                    collegeadmissions@camacollege.ca
                  </a>
                </h4>
                <h4 className="mobile-body-large md:body-large text-on_surface-light">
                  <a href="mailto:gradadmissions@camacollege.ca" className="">
                    gradadmissions@camacollege.ca
                  </a>
                </h4>
              </div>

              <div>
                <h6 className="mobile-label-large md:label-large text-txt-on-surface-terriary-light">
                  Visitor Information & Employment
                </h6>
                <h4 className="mobile-body-large md:body-large text-on_surface-light">
                  <a href="mailto:infocenter@camacollege.ca" className="">
                    infocenter@camacollege.ca
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-outline-level0" />

      {/* contact us - form */}
      <div className="space-y-12">
        <div className="space-y-9" onKeyDown={handleKeyDown}>
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:items-center gap-6 md:gap-32">
            <div className="col-span-1 space-y-6 md:space-y-12">
              <h3 className="mobile-title-large md:title-large text-black">
                Contact Us
              </h3>

              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-6">
                  <TextField
                    className="w-full"
                    sx={{
                      "& .MuiFormLabel-asterisk": {
                        color: "red",
                      },
                    }}
                    label="Full Name"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter the Full Name..."
                  />

                  <TextField
                    className="w-full"
                    sx={{
                      "& .MuiFormLabel-asterisk": {
                        color: "red",
                      },
                    }}
                    label="Email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => setTouched(true)} // mark as touched when user leaves the field
                    placeholder="Enter the Email..."
                    error={showError}
                    helperText={
                      showError ? "Please enter a valid email address" : " "
                    }
                  />
                </div>

                <FormControl className="w-full" sx={{ minWidth: 120 }}>
                  <InputLabel id="select-label">Select a Department</InputLabel>
                  <Select
                    labelId="select-label"
                    value={department}
                    label="Select a Department"
                    onChange={(e) => setDepartment(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>Select a Department</em>
                    </MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Student registration">
                      Student registration
                    </MenuItem>
                    <MenuItem value="Teacher registration">
                      Teacher registration
                    </MenuItem>
                    <MenuItem value="Teacher registration">
                      Recruitment
                    </MenuItem>
                    <MenuItem value="Website support">Website support</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="col-span-1">
              <Image
                src="contact-us-rafiki.svg"
                alt="contact-us-rafiki"
                width={479}
                height={375}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h6 className="pl-2 md:pl-4 body-medium text-txt-on-surface-secondary">
              Please let us know what&#39;s on your mind. Have a question for
              us? Ask away.{" "}
              <span className="text-background-primary-light">*</span>
            </h6>

            <TextField
              label=""
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter the message..."
            />
          </div>
        </div>

        <Button
          props={{
            value: "Submit",
            color: "red",
            disabled: Boolean(!fullName || !email || !department || showError),
            leftIcon: "",
            rightIcon: "",
            type: "filled",
            size: "body-large",
            padding: "px-8 py-4",
            clickHandler: () => (!showError ? submitClickHandler() : null),
          }}
        />
      </div>
    </div>
  );
}

export default Page;
