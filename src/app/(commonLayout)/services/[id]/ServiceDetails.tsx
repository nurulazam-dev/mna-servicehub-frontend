"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShieldCheck,
  Clock,
  MapPin,
  Zap,
  MessageSquare,
  ChevronRight,
  Calendar,
  ArrowLeft,
  Share2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IServicePayload } from "@/types/service.type";
import { useRequestService } from "@/hooks/useRequestService";
import ServiceRequestModal from "@/components/modules/ServiceRequest/ServiceRequestModal";

export default function ServiceDetails({
  service,
}: {
  service: IServicePayload;
}) {
  const { isOpen, setIsOpen, selectedService, handleRequestClick } =
    useRequestService();

  if (!service) {
    return (
      <div className="h-screen flex flex-col items-center justify-center gap-4">
        <AlertCircle className="size-12 text-destructive animate-bounce" />
        <h2 className="text-2xl font-bold">Service Not Found!</h2>
        <Link href="/services">
          <Button variant="default">Back to Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 1. Top Navigation & Action Bar */}
      <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/services">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 font-bold hover:bg-primary/5"
            >
              <ArrowLeft className="size-4" /> Back to Services
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full size-9"
            >
              <Share2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN - Information */}
          <div className="lg:col-span-8 space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {/* Hero Image Section */}
            <div className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50">
              <Image
                src={service?.imageUrl || "/placeholder-service.jpg"}
                alt={service?.name}
                fill
                className="object-cover"
                priority
              />
              {service?.isActive && (
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                    <ShieldCheck className="size-3 mr-1" /> Verified by MNA
                  </Badge>
                </div>
              )}
            </div>

            {/* Title & Stats */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none text-foreground">
                {service?.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 py-2">
                <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-2xl border border-amber-500/20">
                  <Star className="size-4 fill-amber-500" />
                  <span className="font-bold text-lg">
                    {service?.averageRating}
                  </span>
                  <span className="text-xs font-medium opacity-70">
                    ({service?._count?.reviews ?? service?.totalReviews ?? 0}{" "}
                    Reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-4 py-2 rounded-2xl border border-border/50">
                  <Calendar className="size-4" />
                  <span className="text-sm font-medium">
                    Updated: {new Date(service?.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <Card className="border-none bg-muted/30 rounded-[2rem] p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="size-5 text-primary" /> Service Overview
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed italic">
                &quot;{service?.description}&quot;
              </p>
            </Card>

            {/* Quick Benefits (Dynamic Based on Description or Static for Hub) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  desc: "Emergency support whenever you need it.",
                },
                {
                  icon: MapPin,
                  title: "Local Experts",
                  desc: "Providers from your nearest community.",
                },
                {
                  icon: Zap,
                  title: "Fast Response",
                  desc: "Direct connection with zero delays.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure Service",
                  desc: "100% satisfaction or money back.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-[2rem] border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="text-primary size-6" />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - Sticky Booking Widget */}
          <div className="lg:col-span-4 h-fit lg:sticky lg:top-24 animate-in fade-in slide-in-from-right-8 duration-700">
            <Card className="border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden bg-card">
              <div className="bg-primary px-8 py-10 text-primary-foreground relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-10 -right-10 size-32 bg-white/10 rounded-full blur-2xl" />

                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80 mb-2">
                  Instant Booking
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">Flexible</span>
                </div>
                <p className="text-sm mt-4 opacity-90 leading-relaxed font-medium">
                  Request a quote for{" "}
                  <span className="underline decoration-white/30 underline-offset-4">
                    {service?.name}
                  </span>{" "}
                  and get multiple bids.
                </p>
              </div>

              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-medium">
                      Total Requests
                    </span>
                    <span className="font-black bg-muted px-3 py-1 rounded-full text-xs">
                      {service?._count?.serviceRequests ?? 0} Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground font-medium">
                      Status
                    </span>
                    <span className="flex items-center gap-1.5 text-green-500 font-bold">
                      <span className="size-2 bg-green-500 rounded-full animate-pulse" />
                      Available Now
                    </span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    onClick={() => handleRequestClick(service)}
                    className="w-full h-14 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 group"
                  >
                    Request for Service
                    <ChevronRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full h-14 rounded-2xl font-bold border-border hover:bg-muted text-foreground transition-all"
                  >
                    <MessageSquare className="mr-2 size-5 text-primary" />
                    Chat with Admin
                  </Button>
                </div>

                <div className="pt-4 border-t border-dashed border-border">
                  <p className="text-[10px] text-center text-muted-foreground uppercase tracking-widest leading-relaxed">
                    By clicking &quot;Request&quot;, you agree to <br />
                    <span className="text-primary hover:underline cursor-pointer">
                      MNA ServiceHub terms
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Support Info */}
            <div className="mt-8 text-center p-6 bg-primary/5 rounded-[2rem] border border-primary/10">
              <p className="text-xs font-bold text-primary mb-1">
                Need help with this service?
              </p>
              <p className="text-[11px] text-muted-foreground">
                Call us at 24/7 Helpline: 16XXX
              </p>
            </div>
          </div>
        </div>
      </div>
      <ServiceRequestModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        service={selectedService}
      />
    </div>
  );
}
