import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    image: "/api/placeholder/40/40",
    text: "ExpenseTracker has completely transformed how I manage my finances. It's intuitive and powerful!",
    initials: "JD",
  },
  {
    name: "Sarah Smith",
    image: "/api/placeholder/40/40",
    text: "The best financial tool I've ever used. Simple yet comprehensive!",
    initials: "SS",
  },
  {
    name: "Mike Johnson",
    image: "/api/placeholder/40/40",
    text: "Outstanding experience! Makes tracking expenses actually enjoyable.",
    initials: "MJ",
  },
  {
    name: "Emily Brown",
    image: "/api/placeholder/40/40",
    text: "This app has helped me save so much money. Highly recommended!",
    initials: "EB",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: { name: string; image: string; text: string; initials: string };
}) => (
  <Card className="w-80 flex-shrink-0 border-2 border-orange-400 bg-white dark:bg-gray-900 shadow-lg hover:shadow-orange-200/50 transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center gap-4">
      <Avatar className="w-10 h-10 border-2 border-orange-400">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="rounded-full"
        />
        <AvatarFallback className="bg-orange-100 text-orange-700">
          {testimonial.initials}
        </AvatarFallback>
      </Avatar>
      <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
        {testimonial.name}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 dark:text-gray-300">"{testimonial.text}"</p>
      <div className="flex mt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
        ))}
      </div>
    </CardContent>
  </Card>
);

const L3 = () => {
  return (
    <section className="lg:w-[1400px] rounded-lg py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 border-2 border-orange-400">
      <div className="px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400 text-center mb-14">
          What Our Users Say
        </h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-scroll-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="flex gap-6 mt-6 animate-scroll-right">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default L3;
