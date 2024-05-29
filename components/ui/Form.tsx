"use client";

import { useRef, FormEvent } from "react";
import { ReactNode } from "react";

interface IFormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, action, className, onSubmit }: IFormProps) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
