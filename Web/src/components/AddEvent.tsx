import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, Clock } from "lucide-react";
import type { Event } from "../App";

const AddEvent = ({
  onSubmit,
}: {
  onSubmit: (event: Omit<Event, "id">) => void;
}) => {
  const [title, setTitle] = useState("");
  const [clubName, setClubName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newEvent = {
      title,
      clubName,
      date,
      time,
      location,
      description,
      imageSrc: "",
      imageFile: imageFile || undefined,
    };

    onSubmit(newEvent);
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Event</h1>
          <p className="text-gray-500 mt-2">
            Fill out the form below to add an event to the calendar
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="title" className="text-sm font-medium">
                  Event Title
                </Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a descriptive title"
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="club" className="text-sm font-medium">
                  Organizing Club
                </Label>
                <Select value={clubName} onValueChange={setClubName}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select club" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GDG Club">GDG Club</SelectItem>
                    <SelectItem value="IEEE Club">IEEE Club</SelectItem>
                    <SelectItem value="ACM Club">ACM Club</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-medium">
                  Location
                </Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., W-002"
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Event Date
                </Label>
                <div className="relative">
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="h-11"
                    required
                  />
                  <CalendarIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-sm font-medium">
                  Event Time
                </Label>
                <div className="relative">
                  <Input
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="e.g., From 10:00 AM to 12:00 PM"
                    className="h-11"
                    required
                  />
                  <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image" className="text-sm font-medium">
                  Event Image
                </Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImageFile(e.target.files[0]);
                    }
                  }}
                  className="h-11"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Event Description
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide details about your event..."
                  className="min-h-[120px] resize-none"
                  required
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="px-8 py-2.5 bg-red-500 hover:bg-red-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Event..." : "Create Event"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
