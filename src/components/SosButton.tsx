"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { PhoneOutgoing } from "lucide-react";

export function SosButton() {
  const { toast } = useToast();

  const handleSos = () => {
    toast({
      title: "SOS Signal Sent!",
      description: "Emergency services and your contacts have been notified.",
      variant: "default",
      className: "bg-accent text-accent-foreground",
      duration: 5000,
    });
  };

  return (
    <Button
      className="w-48 h-48 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl animate-pulse-slow font-headline text-2xl"
      onClick={handleSos}
    >
      <div className="flex flex-col items-center justify-center">
        <PhoneOutgoing className="h-16 w-16 mb-2" />
        SOS
      </div>
    </Button>
  );
}
