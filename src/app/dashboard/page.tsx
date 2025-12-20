"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { mockUser } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Bell, Heart, Phone, Shield, User, Car } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SosButton } from "@/components/SosButton";

export default function DashboardPage() {
  const { toast } = useToast();
  const userAvatar = PlaceHolderImages.find((img) => img.id === "avatar-user");
  const userMap = PlaceHolderImages.find((img) => img.id === "map-user");

  const handleSimulateAccident = () => {
    toast({
      title: "🚨 Accident Detected!",
      description: "An alert has been automatically sent to emergency services.",
      variant: "destructive",
      duration: 5000,
    });
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1 space-y-8">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                {userAvatar && <AvatarImage src={userAvatar.imageUrl} alt={mockUser.name} data-ai-hint={userAvatar.imageHint} />}
                <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-headline text-2xl">{mockUser.name}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                    <div className="flex items-center gap-1"><Heart className="w-4 h-4 text-red-500" /> {mockUser.bloodGroup}</div>
                    <div className="flex items-center gap-1"><Car className="w-4 h-4" /> {mockUser.vehicleNumber}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4" /> Edit Profile
                </Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 flex flex-col items-center justify-center">
             <CardTitle className="font-headline mb-4">Emergency</CardTitle>
             <SosButton />
             <p className="text-muted-foreground text-xs mt-4">Use only in a real emergency.</p>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Emergency Contacts</CardTitle>
              <CardDescription>Your registered contacts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockUser.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.relation}</p>
                  </div>
                  <Button variant="outline" size="icon" asChild>
                    <a href={`tel:${contact.phone}`}>
                      <Phone className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Your Location</CardTitle>
              <CardDescription>Real-time GPS tracking is active.</CardDescription>
            </CardHeader>
            <CardContent>
              {userMap && (
                 <Image
                  src={userMap.imageUrl}
                  alt="User map"
                  data-ai-hint={userMap.imageHint}
                  width={800}
                  height={600}
                  className="rounded-lg w-full aspect-video object-cover"
                />
              )}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">System Status</CardTitle>
              <CardDescription>
                Simulate an automatic accident detection event.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <Shield className="h-5 w-5" />
                <span>System Active & Monitoring</span>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                The app is monitoring your vehicle's sensors in the background.
              </p>
              <Button variant="destructive" onClick={handleSimulateAccident}>
                <Bell className="mr-2 h-4 w-4" /> Simulate Accident Detection
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
