'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface FormField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required?: boolean;
  span?: 'full' | 'half';
}

interface ContactFormProps {
  title: string;
  description: string;
  fields: FormField[];
  buttonText?: string;
  onSubmit: (data: Record<string, string>) => void | Promise<void>;
  isLoading?: boolean;
}

export default function ContactForm({
  title,
  description,
  fields,
  buttonText = 'Send',
  onSubmit,
  isLoading = false,
}: ContactFormProps) {
  const form = useForm<Record<string, string>>({
    defaultValues: fields.reduce(
      (acc, field) => {
        acc[field.name] = '';
        return acc;
      },
      {} as Record<string, string>,
    ),
  });

  const handleSubmit = async (data: Record<string, string>) => {
    await onSubmit(data);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-sm shadow-sm p-8">
      
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded" />
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            {description}
          </p>
        </div>

       
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            {/* Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: fieldProps }) => (
                    <FormItem
                      className={
                        field.span === 'full' ? 'md:col-span-2' : undefined
                      }
                    >
                      <FormLabel className="text-gray-700 dark:text-gray-300">
                        {field.label}
                      </FormLabel>
                      <FormControl>
                        {field.type === 'textarea' ? (
                          <Textarea
                            placeholder={field.placeholder}
                            {...fieldProps}
                            className="resize-none"
                          />
                        ) : (
                          <Input
                            type={field.type || 'text'}
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
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-md transition-colors"
            >
              {isLoading ? 'Sending...' : buttonText}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
