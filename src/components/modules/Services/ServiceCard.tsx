"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string | null;
    averageRating: number;
    totalReviews: number;
    isActive: boolean;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div
      key={service.id}
      className="group relative bg-card border border-border/50 rounded-md hover:border-sky-500 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={service.imageUrl || "/placeholder-service.jpg"}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex items-center justify-center gap-4 text-xs font-semibold text-muted-foreground pt-2">
        <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1 rounded-xl">
          <MessageSquare className="size-3.5" />
          {service.totalReviews} Reviews
        </div>
        <div className=" bg-background/90 backdrop-blur-md px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1">
          <Star className="size-3 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-bold">
            {service.averageRating.toFixed(1)}
          </span>
        </div>

        {service.isActive && (
          <div className="bg-sky-500 text-primary-foreground px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter flex items-center gap-1">
            <ShieldCheck className="size-3" /> Verified
          </div>
        )}
      </div>
      <div className="p-6 pt-2 text-center space-y-2">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
          <Link
            href={`/services/request/${service.id}`}
            className="w-full sm:flex-1"
          >
            <Button className="w-full rounded-md font-bold h-10 shadow-md shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 active:scale-[0.96] flex items-center justify-center gap-2">
              <Zap className="size-4 fill-current" />
              Book Now
            </Button>
          </Link>

          <Link href={`/services/${service.id}`} className="w-full sm:flex-1">
            <Button
              variant="outline"
              className="w-full rounded-md font-bold h-10 border-primary/20 hover:bg-primary/5 hover:border-primary/40 text-foreground transition-all duration-300 flex items-center justify-center gap-2"
            >
              Details
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
