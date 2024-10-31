import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Building, Check, Crown, DollarSign, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

type plan = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  icon: React.ReactNode;
  popular: boolean;
};

const plans = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Basic expense tracking",
      "Monthly reports",
      "Up to 50 transactions/month",
      "Email support",
    ],
    buttonText: "Get Started",
    icon: <Rocket className="w-6 h-6 text-orange-400" />,
    popular: false,
  },
  {
    title: "Pro",
    price: "$9.99",
    features: [
      "Advanced analytics",
      "Custom categories",
      "Data export",
      "Unlimited transactions",
      "Priority support",
    ],
    buttonText: "Upgrade to Pro",
    icon: <Crown className="w-6 h-6 text-orange-400" />,
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Custom",
    features: [
      "All Pro features",
      "Dedicated support",
      "Custom integrations",
      "Team collaboration",
      "API access",
    ],
    buttonText: "Contact Sales",
    icon: <Building className="w-6 h-6 text-orange-400" />,
    popular: false,
  },
];

const PricingCard = ({ plan }: { plan: plan }) => {
  return (
    <Card
      className={`relative transform transition-all duration-300 hover:-translate-y-2 
        border-2 ${
          plan.popular
            ? "border-orange-400"
            : "border-gray-200 dark:border-gray-700"
        }
        bg-white dark:bg-gray-900 overflow-hidden group`}
    >
      {plan.popular && (
        <div className="absolute top-0 right-0 bg-orange-400 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          {plan.icon}
          <CardTitle className="text-xl font-bold">{plan.title}</CardTitle>
        </div>
        <p className="text-4xl font-bold tracking-tight">
          {plan.price}
          {plan.price !== "Custom" && (
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          )}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <ul className="space-y-3">
          {plan.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
              <span className="text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <Button
          className={`w-full transition-colors ${
            plan.popular
              ? "bg-orange-500 hover:bg-orange-600 text-white"
              : "bg-gray-900 dark:bg-orange-500 hover:bg-gray-800 dark:hover:bg-orange-600"
          }`}
        >
          {plan.buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

const L4 = () => {
  return (
    <section className="lg:w-[1400px] mt-40 rounded-lg border-2 border-orange-400 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            Choose Your Plan
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your needs. All plans include our core
            features with additional perks as you scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default L4;
