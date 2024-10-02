"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";

import "react-phone-number-input/style.css;"
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { UserFormValidation } from "@/lib/validation";

 

const PatientForms = () => {
  const [isLoading, setIsLoading] = useState(false);
 
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      // name: "",
      email: "",
      phone: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof UserFormValidation>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
            <h1 className="header">Welcome</h1>
            <p className="text-dark-700">
                Schedule an appointment.
            </p>
        </section>

        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="full name"
            placeholder="John Doe"
            iconSrc="assets/icons/user.svg"
            iconAlt="user"
        />

        <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="Johndoe@jsmastery.pro"
            iconSrc="assets/icons/email.svg"
            iconAlt="email"
        />

        <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Phone number"
            placeholder="555.125.4567"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton> 
      </form>
    </Form>
  )
}
export default PatientForms