"use client";
import { useFormContext } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { DocumentFormReturn } from "@/lib/document-form-types";
import { ImageSourceFormField } from "./fields/image-source-form-field";

export function BrandForm({}: {}) {
  const form: DocumentFormReturn = useFormContext(); // retrieve those props

  return (
    <Form {...form}>
      <form className="space-y-6 w-full">
        <FormField
          control={form.control}
          name="config.brand.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" className="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="config.brand.handle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Handle</FormLabel>
              <FormControl>
                <Input placeholder="Your handle" className="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ImageSourceFormField
          form={form}
          formType="image"
          fieldName="config.brand.avatar.source"
        />
      </form>
    </Form>
  );
}
