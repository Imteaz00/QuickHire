"use client";

import createJob from "@/actions/createJob";
import { JobFormData, jobForm } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const categoryOptions = [
  "design",
  "sales",
  "marketing",
  "finance",
  "technology",
  "engineering",
  "business",
  "human resources",
];

export default function AdminJobForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobForm),
    defaultValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      category: [],
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<JobFormData> = async (data) => {
    setSubmitMessage(null);
    setSubmitting(true);

    const payload = {
      ...data,
      category: Array.isArray(data.category) ? data.category : [data.category],
    };

    try {
      const result = await createJob({ data: payload });

      if (result?.error) {
        setSubmitMessage(result.error);
      } else {
        setSubmitMessage("Job post created successfully!");
        reset();
      }
    } catch (error) {
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
      <label className="text-sm font-medium text-neutral-100">
        Job title
        <input
          {...register("title")}
          placeholder="Job title"
          className="mt-1 w-full rounded-md border border-neutral-20 px-3 py-2 outline-none focus:border-primary"
        />
        {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>}
      </label>

      <label className="text-sm font-medium text-neutral-100">
        Company name
        <input
          {...register("company")}
          placeholder="Company name"
          className="mt-1 w-full rounded-md border border-neutral-20 px-3 py-2 outline-none focus:border-primary"
        />
        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>}
      </label>

      <label className="text-sm font-medium text-neutral-100">
        Location
        <input
          {...register("location")}
          placeholder="Location"
          className="mt-1 w-full rounded-md border border-neutral-20 px-3 py-2 outline-none focus:border-primary"
        />
        {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>}
      </label>

      <fieldset className="rounded-md border border-neutral-20 px-3 py-2 md:col-span-2">
        <legend className="px-1 text-sm font-medium text-neutral-90">Categories</legend>
        <div className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-4">
          {categoryOptions.map((category) => (
            <label
              key={category}
              className="inline-flex items-center gap-2 text-sm text-neutral-90"
            >
              <input
                type="checkbox"
                value={category}
                className="size-4 rounded border-neutral-30"
                {...register("category")}
              />
              <span className="capitalize">{category}</span>
            </label>
          ))}
        </div>
        {errors.category && <p className="mt-2 text-sm text-red-500">{errors.category.message}</p>}
      </fieldset>

      <label className="text-sm font-medium text-neutral-100 md:col-span-2">
        Job description
        <textarea
          {...register("description")}
          placeholder="Job description"
          className="mt-1 min-h-28 w-full rounded-md border border-neutral-20 px-3 py-2 outline-none focus:border-primary"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
        )}
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-md bg-primary px-4 py-2 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 md:w-fit"
      >
        {submitting ? "Adding..." : "Add Job"}
      </button>

      {submitMessage ? (
        <p className="text-sm font-medium text-accent-green md:col-span-2">{submitMessage}</p>
      ) : null}
    </form>
  );
}
