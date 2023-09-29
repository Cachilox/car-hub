import { useState, useEffect } from "react";
import { CustomButton } from ".";
import { ShowLessProps } from "@/types";

const ShowLess = ({ isNext, setLimit }: ShowLessProps) => {
  const [showWithDelay, setShowWithDelay] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowWithDelay(true);
    }, 1000);

    return () => {
      clearTimeout(delayTimer);
    };
  }, []);

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {showWithDelay && isNext && (
        <CustomButton
          btnType="button"
          title="Show Less"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={() => setLimit(10)}
        />
      )}
    </div>
  );
};

export default ShowLess;
