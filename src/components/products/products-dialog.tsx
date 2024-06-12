"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { CheckoutSteps } from "@/types/checkout-steps";
import { ProductSteps } from "@/types/products-steps";
import { StepProducts } from "./step-products";
import { StepImagesProducts } from "./step-images-products";
import { StepCreateProduct } from "./step-create-product";

type ProductsDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ProductsDialog = ({ onOpenChange, open }: ProductsDialogProps) => {
  const [step, setStep] = useState<ProductSteps>("products");
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>
            {step === "products" && "Informações do Produto"}
            {step === "imagesProducts" && "Imagens do Produto"}
            {step === "createProduct" && "Criar Produto"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-3">
          {step === "products" && <StepProducts setStep={setStep} />}
          {step === "imagesProducts" && (
            <StepImagesProducts setStep={setStep} />
          )}
          {step === "createProduct" && (
            <StepCreateProduct
              setStep={setStep}
              onClose={() => onOpenChange(false)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
