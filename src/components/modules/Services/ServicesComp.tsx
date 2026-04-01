/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@tanstack/react-query";
import ServiceCard from "./ServiceCard";
import { getAllServices } from "@/services/servicesData.services";
import { IServicePayload } from "@/types/service.type";
import { Loader2 } from "lucide-react";

const ServicesComp = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: () => getAllServices(""),
  });

  if (isLoading) {
    return (
      <div className="py-12 flex flex-col justify-center items-center gap-3 text-center">
        <Loader2 className="size-10 animate-spin text-primary" />
        <p className="text-muted-foreground font-medium">
          Fetching services...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load services.
      </div>
    );
  }

  const services: IServicePayload[] = (data as any) || [];

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
          {services && services.length > 0 ? (
            services.map((service: IServicePayload, index: number) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground py-10 border border-dashed rounded-xl">
              No services available right now.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesComp;
