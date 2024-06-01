import { ProductSteps } from "@/types/products-steps";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setStep: Dispatch<SetStateAction<ProductSteps>>;
};

export const StepImagesProducts = ({ setStep }: Props) => {
  return (
    <div>
      <h1>StepImagesProducts</h1>
    </div>
  );
};
