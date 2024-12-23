import React from "react";

// Define types for the props of the CardContent component
interface CardContentProps {
  title: string;
  description: string;
}

// this is the higher order component accepting a component and returning a component
const Hoc = (WrappedComponent: any) => {
  return (props: any) => {
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg max-w-sm mx-auto hover:transform hover:scale-105 transition-transform">
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// CardContent component with props typed using CardContentProps
const CardContent: React.FC<CardContentProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Wrap CardContent with the HOC to add card styling
const CardWithStyle = Hoc(CardContent);

//main component
const HigherOrderComponent: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">
        Higher Order Component with Card Styling in TypeScript and Tailwind CSS
      </h1>
      <CardWithStyle
        title="Card Title"
        description="This is a description inside the card styled with Tailwind CSS."
      />
    </div>
  );
};

export default HigherOrderComponent;
