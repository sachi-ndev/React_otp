import React, { useContext, useRef, useState } from "react";
// import { Context } from "../../main/context/Context";

export default function Login() {
  // const { loginTogle, setLoginTogle } = useContext(Context);
  const [timeLeft, setTimeLeft] = useState(0);
  const inputRefs = useRef([]);
  const [otpValues, setOTPValues] = useState(["", "", "", ""]);

  const handleOtpReq = () => {
    setTimeLeft(60);
    setviewotp(true);
  };

  const handleChange = (index, value) => {
    const newOTPValues = [...otpValues];
    newOTPValues[index] = value;
    setOTPValues(newOTPValues);

    // Move focus to the next input field
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (index, e) => {
    if (e.keyCode === 8 && index > 0 && !otpValues[index]) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[30vw]">
        <h1 className="md:text-[20px] text-[16px] font-[600]">
          Login with you Phone Number{" "}
        </h1>

        <div className="mt-4">
          <h1 className="text-[14px] font-[500] text-[#344054]">
            Phone Number
          </h1>
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="mt-1 w-full  rounded-[8px] border-[1px] border-[rgba(30,31,62,0.30)] px-3 md:py-4 py-3 outline-none"
          />
        </div>

        <div className="mt-4">
          <h1 className="text-[14px] font-[500] text-[#344054]">
            Enter 4 Digit OTP
          </h1>

          <div className="mt-1 flex gap-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-[50px] w-full">
                <input
                  maxLength={1}
                  value={otpValues[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  onKeyPress={(e) => {
                    // Prevent non-numeric characters
                    if (e.charCode < 48 || e.charCode > 57) {
                      e.preventDefault();
                    }
                  }}
                  className="flex h-full w-full flex-col items-center justify-center rounded-[8px] border border-[#D0D5DD] bg-white text-center text-[14px] font-[400] outline-none ring-secondary focus:bg-white focus:ring-1"
                  type="text"
                  inputMode="numeric"
                  placeholder="-"
                  ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                />
              </div>
            ))}
          </div>

          <h1 className="mt-3 text-[14px] font-[500] text-secondary">
            Resent OTP in 45 Sec...
          </h1>
        </div>

        <button
          onClick={() => {
            // setLoginTogle(1);
          }}
          className="mt-[100px] w-full rounded-[8px] bg-primary md:py-5 py-3 text-[16px] font-[600] text-[#fff]"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
