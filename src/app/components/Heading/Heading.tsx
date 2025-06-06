type HeadingProps = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
      <hr className="h-1 w-8 bg-white" />
    </div>
  );
};
