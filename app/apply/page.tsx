import Image from "next/image";

// components
import LoginButtons from "@/components/LoginButtons";
import ApplyScreen from "@/components/ApplyScreen";

function page() {
  return (
    <div className="py-10">
      {/* cover */}
      <div className="grid-system-level1 relative flex items-center justify-between gap-4 py-16">
        {/* left image */}
        <div className="min-w-20 min-h-20 max-w-20 max-h-20 rounded-sm bg-primary-tints-90 flex items-center justify-center">
          <Image
            className="rounded-md"
            src="/apply-pic1.jpg"
            alt="apply-pic1"
            width={64}
            height={64}
          />
        </div>

        <div className="w-full h-[1px] bg-primary-tints-90 rounded-full" />

        <div className="min-w-28 min-h-28 max-w-28 max-h-28 rounded-sm bg-primary-tints-90 flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.34"
              d="M13.6846 19.5964L17.6201 23.5482L25.5074 15.6445"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5549 4.00092C18.6817 3.03745 20.527 3.03745 21.6701 4.00092L24.2502 6.22179C24.7401 6.64637 25.6546 6.9893 26.3078 6.9893H29.0839C30.8148 6.9893 32.2355 8.41 32.2355 10.141V12.9171C32.2355 13.5539 32.5785 14.4847 33.0031 14.9746L35.2239 17.5548C36.1874 18.6815 36.1874 20.5268 35.2239 21.6699L33.0031 24.25C32.5785 24.7399 32.2355 25.6544 32.2355 26.3076V29.0837C32.2355 30.8147 30.8148 32.2354 29.0839 32.2354H26.3078C25.6709 32.2354 24.7401 32.5783 24.2502 33.0029L21.6701 35.2238C20.5433 36.1872 18.698 36.1872 17.5549 35.2238L14.9748 33.0029C14.4849 32.5783 13.5704 32.2354 12.9172 32.2354H10.0922C8.36119 32.2354 6.94048 30.8147 6.94048 29.0837V26.2913C6.94048 25.6544 6.59756 24.7399 6.18931 24.25L3.98477 21.6536C3.03763 20.5268 3.03763 18.6979 3.98477 17.5711L6.18931 14.9746C6.59756 14.4847 6.94048 13.5703 6.94048 12.9334V10.1246C6.94048 8.39367 8.36119 6.97297 10.0922 6.97297H12.9172C13.5541 6.97297 14.4849 6.63004 14.9748 6.20546L17.5549 4.00092Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="w-full h-[1px] bg-primary-tints-90 rounded-full" />

        {/* right image */}
        <div className="min-w-20 min-h-20 max-w-20 max-h-20 rounded-sm bg-primary-tints-90 flex items-center justify-center">
          <Image
            className="rounded-md"
            src="/apply-pic2.jpg"
            alt="apply-pic2"
            width={64}
            height={64}
          />
        </div>

        {/* absolute icon and lines */}
        {/* top - left */}
        <div className="absolute top-[1.375rem] left-[20rem]">
          <svg
            width="167"
            height="98"
            viewBox="0 0 167 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-0.5"
              x2="147.621"
              y2="-0.5"
              transform="matrix(-0.756136 -0.654414 -0.756136 0.654414 166 97.9258)"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
            <line
              x1="0.5"
              y1="-0.5"
              x2="54.5"
              y2="-0.5"
              transform="matrix(-1 0 0 1 55 1.42578)"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-1 left-[17rem] min-w-10 min-h-10 max-w-10 max-h-10 rounded-sm bg-primary-tints-90 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M8.4 13.2998H15.6C16.1 13.2998 16.5 13.6998 16.5 14.1998C16.5 16.6898 14.49 18.6998 12 18.6998C9.51 18.6998 7.5 16.6898 7.5 14.1998C7.5 13.6998 7.9 13.2998 8.4 13.2998Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* bottom - left */}
        <div className="absolute bottom-[1.375rem] left-[22rem]">
          <svg
            width="167"
            height="98"
            viewBox="0 0 167 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-0.5"
              x2="147.621"
              y2="-0.5"
              transform="matrix(-0.756136 0.654414 -0.756136 -0.654414 166 0.0742188)"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
            <line
              x1="54.5"
              y1="97.0742"
              x2="0.5"
              y2="97.0742"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-1 left-[19rem] min-w-10 min-h-10 max-w-10 max-h-10 rounded-sm bg-primary-tints-90 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.34"
              d="M12.1504 16.5V18.6"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.15039 22H17.1504V21C17.1504 19.9 16.2504 19 15.1504 19H9.15039C8.05039 19 7.15039 19.9 7.15039 21V22V22Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M6.15039 22H18.1504"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.34"
              d="M5.47004 11.6496C4.72004 11.4096 4.06004 10.9696 3.54004 10.4496C2.64004 9.44961 2.04004 8.24961 2.04004 6.84961C2.04004 5.44961 3.14004 4.34961 4.54004 4.34961H5.19004C4.99004 4.80961 4.89004 5.31961 4.89004 5.84961V8.84961C4.89004 9.84961 5.10004 10.7896 5.47004 11.6496Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.34"
              d="M18.5303 11.6496C19.2803 11.4096 19.9403 10.9696 20.4603 10.4496C21.3603 9.44961 21.9603 8.24961 21.9603 6.84961C21.9603 5.44961 20.8603 4.34961 19.4603 4.34961H18.8103C19.0103 4.80961 19.1103 5.31961 19.1103 5.84961V8.84961C19.1103 9.84961 18.9003 10.7896 18.5303 11.6496Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* top - right */}
        <div className="absolute top-[1.375rem] right-[22rem]">
          <svg
            width="167"
            height="98"
            viewBox="0 0 167 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-0.5"
              x2="147.621"
              y2="-0.5"
              transform="matrix(0.756136 -0.654414 0.756136 0.654414 1 97.9258)"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
            <line
              x1="112.5"
              y1="0.925781"
              x2="166.5"
              y2="0.925781"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute top-1 right-[19rem] min-w-10 min-h-10 max-w-10 max-h-10 rounded-sm bg-primary-tints-90 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V22H15.3302V12C15.3302 10.9 14.4402 10 13.3302 10Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.0001 17H15.3301V22H22.0001V19C22.0001 17.9 21.1001 17 20.0001 17Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M12.5202 2.06982L13.0502 3.12982C13.1202 3.27982 13.3102 3.41982 13.4702 3.43982L14.4302 3.59982C15.0402 3.69982 15.1902 4.1498 14.7502 4.5798L14.0002 5.3298C13.8702 5.4598 13.8002 5.69981 13.8402 5.86981L14.0502 6.78982C14.2202 7.51982 13.8302 7.79983 13.1902 7.41983L12.2902 6.88983C12.1302 6.78983 11.8602 6.78983 11.7002 6.88983L10.8002 7.41983C10.1602 7.79983 9.77023 7.51982 9.94023 6.78982L10.1502 5.86981C10.1902 5.69981 10.1202 5.4498 9.99023 5.3298L9.25023 4.58981C8.81023 4.14981 8.95023 3.7098 9.57023 3.6098L10.5302 3.44983C10.6902 3.41983 10.8802 3.27983 10.9502 3.13983L11.4802 2.0798C11.7702 1.4998 12.2302 1.49982 12.5202 2.06982Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {/* bottom - right */}
        <div className="absolute bottom-[1.375rem] right-[20rem]">
          <svg
            width="167"
            height="98"
            viewBox="0 0 167 98"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="-0.5"
              x2="147.621"
              y2="-0.5"
              transform="matrix(0.756136 0.654414 0.756136 -0.654414 1 0.0742188)"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
            <line
              x1="0.5"
              y1="-0.5"
              x2="54.5"
              y2="-0.5"
              transform="matrix(1 0 0 -1 112 96.5742)"
              stroke="#F9D1D2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="absolute bottom-1 right-[17rem] min-w-10 min-h-10 max-w-10 max-h-10 rounded-sm bg-primary-tints-90 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0495 2.53028L4.02953 6.46028C2.09953 7.72028 2.09953 10.5403 4.02953 11.8003L10.0495 15.7303C11.1295 16.4403 12.9095 16.4403 13.9895 15.7303L19.9795 11.8003C21.8995 10.5403 21.8995 7.73028 19.9795 6.47028L13.9895 2.54028C12.9095 1.82028 11.1295 1.82028 10.0495 2.53028Z"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M5.63012 13.0801L5.62012 17.7701C5.62012 19.0401 6.60012 20.4001 7.80012 20.8001L10.9901 21.8601C11.5401 22.0401 12.4501 22.0401 13.0101 21.8601L16.2001 20.8001C17.4001 20.4001 18.3801 19.0401 18.3801 17.7701V13.1301"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M21.4004 15V9"
              stroke="#A91418"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* title */}
      <div className="pt-10 grid-system-level1 flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="header-large text-on_surface-light">
            Your CAMA College{" "}
            <span className="text-background-primary-light">Journey</span>{" "}
            Starts Here
          </h1>

          <p className="text-center max-w-[784px] body-large text-txt-on-surface-secondary-light">
            No matter your level, your experiences, who you are, where you are,
            or when you have the time to start your journey, CAMA College is
            here for you. We are an exclusive society of future-shapers, one
            that excludes nobody!
          </p>
        </div>

        <LoginButtons type="filled" color="red" icon="login-white" />
      </div>

      <ApplyScreen />

      {/* account creation */}
      <div className="pt-10 grid-system-level1 flex flex-col items-center justify-center gap-9">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="title-medium text-on_surface-light">
            Account Creation
          </h2>

          <p className="text-center max-w-[577px] body-medium text-txt-on-surface-secondary-light">
            Simply and effortlessly, use your own email address to create your
            account. By doing so, you can have a wide and clear access to
            everything we have to offer.
          </p>
        </div>

        <LoginButtons type="filled" color="red" icon="login-white" />
      </div>
    </div>
  );
}

export default page;
