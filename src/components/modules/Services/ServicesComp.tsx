"use client";

import ServiceCard from "./ServiceCard";

const services = [
  {
    id: "1",
    name: "Home Appliance Repair",
    description:
      "Professional repair services for refrigerators, washing machines, and ovens by certified technicians.",
    imageUrl:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
    averageRating: 4.8,
    totalReviews: 124,
    isActive: true,
  },
  {
    id: "2",
    name: "Web Development",
    description:
      "High-performance MERN stack applications tailored for your business needs and scalability.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
    averageRating: 4.9,
    totalReviews: 89,
    isActive: true,
  },
  {
    id: "3",
    name: "Electrical Solutions",
    description:
      "Complete electrical wiring, maintenance, and emergency support for residential and commercial spaces.",
    imageUrl:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
    averageRating: 4.7,
    totalReviews: 210,
    isActive: true,
  },
];

const ServicesComp = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Our Services <br />
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our wide range of verified services on MNA ServiceHub,
            managed by top-tier professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
