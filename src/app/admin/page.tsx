"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockAlerts as initialAlerts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Map, List, Navigation, Clock, User, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

type Alert = (typeof initialAlerts)[0];

export default function AdminPage() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts);
  const adminMap = PlaceHolderImages.find((img) => img.id === "map-admin");
  const avatarPlaceholders = {
    Alice: PlaceHolderImages.find((img) => img.id === "avatar-alice"),
    Bob: PlaceHolderImages.find((img) => img.id === "avatar-bob"),
    Charlie: PlaceHolderImages.find((img) => img.id === "avatar-charlie"),
  };

  const handleStatusChange = (alertId: number, newStatus: string) => {
    setAlerts(
      alerts.map((alert) =>
        alert.id === alertId ? { ...alert, status: newStatus } : alert
      )
    );
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
        case 'Pending': return 'bg-red-500';
        case 'Dispatched': return 'bg-yellow-500';
        case 'On the Way': return 'bg-blue-500';
        case 'Reached': return 'bg-green-500';
        case 'Resolved': return 'bg-gray-500';
        default: return 'bg-gray-500';
    }
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
       <div className="mb-8">
            <h1 className="font-headline text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Live accident alerts and response management.</p>
       </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
             <h2 className="font-headline text-2xl flex items-center gap-2"><List /> Active Alerts ({alerts.filter(a => a.status !== 'Resolved').length})</h2>
          {alerts.map((alert) => (
            <Card key={alert.id} className="shadow-md">
              <CardHeader className="flex flex-row items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                         {/* @ts-ignore */}
                        {avatarPlaceholders[alert.user.name] && <AvatarImage src={avatarPlaceholders[alert.user.name]?.imageUrl} alt={alert.user.name} data-ai-hint={avatarPlaceholders[alert.user.name]?.imageHint} />}
                        <AvatarFallback>{alert.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <User className="w-5 h-5" /> {alert.user.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                            <Map className="w-4 h-4" />{alert.location}
                        </p>
                    </div>
                </div>
                 <div className={`flex items-center gap-2 text-white px-2 py-1 rounded-full text-xs font-bold ${getStatusColor(alert.status)}`}>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    {alert.status}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-muted-foreground"/> <span>{formatDistanceToNow(alert.timestamp, { addSuffix: true })}</span></div>
                    <div className="flex items-center gap-2 font-medium"><AlertTriangle className="w-4 h-4 text-destructive"/> Severity: {alert.severity}</div>
                 </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select
                    value={alert.status}
                    onValueChange={(value) => handleStatusChange(alert.id, value)}
                  >
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Update Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Dispatched">Dispatched</SelectItem>
                      <SelectItem value="On the Way">On the Way</SelectItem>
                      <SelectItem value="Reached">Reached</SelectItem>
                      <SelectItem value="Resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="flex-1">
                    <Navigation className="mr-2 h-4 w-4" /> Navigate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-2xl flex items-center gap-2"><Map/> Alerts Map View</CardTitle>
              <CardDescription>All active incidents are pinned on the map.</CardDescription>
            </CardHeader>
            <CardContent>
              {adminMap && (
                 <Image
                  src={adminMap.imageUrl}
                  alt="Admin map of alerts"
                  data-ai-hint={adminMap.imageHint}
                  width={800}
                  height={800}
                  className="rounded-lg w-full aspect-square object-cover"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
