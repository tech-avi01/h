"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mockUser } from "@/lib/data";
import { Save, Trash2, UserPlus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";

export default function ProfilePage() {
    const { toast } = useToast();

    const handleSaveChanges = () => {
        toast({
            title: "Profile Updated",
            description: "Your changes have been saved successfully.",
        });
    }

  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Your Profile</CardTitle>
          <CardDescription>
            Keep your information up-to-date. This data will be shared with
            emergency services in case of an accident.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-semibold">Personal & Vehicle Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={mockUser.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bloodGroup">Blood Group</Label>
                <Input id="bloodGroup" defaultValue={mockUser.bloodGroup} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vehicleNumber">Vehicle Number</Label>
                <Input id="vehicleNumber" defaultValue={mockUser.vehicleNumber} />
              </div>
               <div className="space-y-2 md:col-span-2">
                <Label htmlFor="medical-notes">Medical Notes</Label>
                <Textarea id="medical-notes" placeholder="e.g. Allergies to penicillin, diabetic, etc."/>
              </div>
            </div>
          </div>

          <div className="space-y-4">
             <h3 className="font-headline text-lg font-semibold">Emergency Contacts</h3>
            <div className="space-y-4">
              {mockUser.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-4 items-center p-4 border rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                    <div className="space-y-2">
                        <Label htmlFor={`contact-name-${index}`}>Name</Label>
                        <Input id={`contact-name-${index}`} defaultValue={contact.name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor={`contact-phone-${index}`}>Phone</Label>
                        <Input id={`contact-phone-${index}`} defaultValue={contact.phone} />
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
             <Button variant="outline">
              <UserPlus className="mr-2 h-4 w-4" /> Add New Contact
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSaveChanges}>
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
