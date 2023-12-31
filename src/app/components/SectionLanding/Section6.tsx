"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Less } from "./assest/Less";
import { Sum } from "./assest/Sum";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mx-10 lg:mx-36 mb-32">
      <h3 className="text-center p-3 text-gray-900 text-3xl font-semibold">
        Frequently asked questions
      </h3>
      <p className="mt-2 text-center mb-5">
        Everything you need to know about the product and billing.
      </p>
      <Accordion>
        <AccordionItem
          key="theme"
          aria-label="Theme"
          indicator={({ isOpen }) => (isOpen ?? false ? <Less /> : <Sum />)}
          title="Is there a free trial available?"
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </AccordionItem>
        <AccordionItem
          key="anchor"
          aria-label="Anchor"
          indicator={({ isOpen }) => (isOpen ?? false ? <Less /> : <Sum />)}
          title="Can I change my plan later?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="sa"
          aria-label="sa"
          indicator={({ isOpen }) => (isOpen ?? false ? <Less /> : <Sum />)}
          title="What is your cancellation policy?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="se"
          aria-label="se"
          indicator={({ isOpen }) => (isOpen ?? false ? <Less /> : <Sum />)}
          title="Can other info be added to an invoice?"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="si"
          aria-label="si"
          indicator={({ isOpen }) => (isOpen ?? false ? <Less /> : <Sum />)}
          title="How does billing work?"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
