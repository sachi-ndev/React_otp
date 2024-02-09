import React, { useRef, useState } from "react";

export default function Otp() {
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    // Update the OTP value
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move to the next input field or rewind to the previous one
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className=" w-[50vw] h-[50vh] ">
      <div className="w-full h-full mt-[-20px] mb-[-20px]">
        {/* OTP */}
        <div className="flex flex-col gap-2 mt-12">
          <p id="f500" className="text-[14px] text-[#344054] mb-2">
            Enter Verification Code
          </p>
          <div className="flex gap-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-[60px] h-[60px]" id="f400">
                <input
                  maxLength={1}
                  value={otpValues[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-full h-full flex flex-col items-center justify-center text-center outline-none rounded-xl border border-[#D0D5DD] text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-[#B51F4E]"
                  type="text"
                  ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          id="f400"
          className="bg-[#B51F4E] text-[20px] text-white w-full p-5 rounded-[8px] mt-12"
          onClick={() => {}}
        >
          Verify
        </button>

        <p id="f400" className="w-full mt-8 flex items-center gap-2">
          Didn't Receive{" "}
          <span className="text-[#B51F4E] underline" id="f500">
            Resent OTP
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
