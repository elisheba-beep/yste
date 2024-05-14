import { ReactNode } from "react";
interface WrapperProps {
  children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  return <div className="px-24 py-6">{children}</div>;
}
