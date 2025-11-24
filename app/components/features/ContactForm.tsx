"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormFieldConfig {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  span?: "full" | "half";
}

interface ContactFormProps {
  title: string;
  description: string;
  fields: FormFieldConfig[];
  buttonText?: string;
  onSubmit: (data: Record<string, string>) => void | Promise<void>;
  isLoading?: boolean;
}

export default function ContactForm({
  title,
  description,
  fields,
  buttonText = "Send",
  onSubmit,
  isLoading = false,
}: ContactFormProps) {
  const form = useForm<Record<string, string>>({
    defaultValues: fields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, string>),
  });

  const handleSubmit = async (data: Record<string, string>) => {
    await onSubmit(data);
  };

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <div className="w-12 h-1 bg-[#1a76d1] rounded" />
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            {description}
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: fieldProps }) => (
                    <FormItem
                      className={
                        field.span === "full" ? "md:col-span-2" : undefined
                      }
                    >
                      <FormLabel className="text-gray-700">
                        {field.label}
                        {field.required && (
                          <span className="text-red-500 ml-0.5">*</span>
                        )}
                      </FormLabel>
                      <FormControl>
                        {field.type === "textarea" ? (
                          <Textarea
                            placeholder={field.placeholder}
                            {...fieldProps}
                            className="resize-none"
                          />
                        ) : (
                          <Input
                            type={field.type || "text"}
                            placeholder={field.placeholder}
                            {...fieldProps}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-8 bg-[#1a76d1] hover:bg-[#155fb2] text-white font-medium py-3 rounded-md transition-colors"
            >
              {isLoading ? "Sending..." : buttonText}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
