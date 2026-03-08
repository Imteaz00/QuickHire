"use client";

import { ApplicationFormData, applyForm } from "@/types";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import submitApplication from "@/actions/submitApplication";

export default function QuickApply({ jobId }: { jobId: string }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ApplicationFormData>({ resolver: zodResolver(applyForm) });

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleForm: SubmitHandler<ApplicationFormData> = async (data) => {
    setSubmitMessage(null);
    setSubmitting(true);

    const result = await submitApplication({ data, jobId });

    if (result.error) {
      setSubmitMessage(result.error);
    } else {
      setSubmitMessage("Successfully submitted!");
    }
    setSubmitting(false);
    router.push("/");
  };
  return (
    <aside className="rounded-2xl border border-neutral-20/80 bg-white p-6 shadow-lg md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Quick Apply</p>
      <h2 className="mt-3 text-2xl font-semibold text-neutral-100">Apply for this role</h2>
      <p className="mt-2 text-sm text-neutral-60">Enter your details below.</p>

      <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit(handleForm)}>
        <label className="text-sm font-medium text-neutral-100">
          Name
          <input
            {...register("name")}
            className="mt-1 w-full rounded-lg border border-neutral-20 bg-white px-3 py-2.5 text-base outline-none transition focus:border-primary"
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </label>

        <label className="text-sm font-medium text-neutral-100">
          Email
          <input
            {...register("email")}
            className="mt-1 w-full rounded-lg border border-neutral-20 bg-white px-3 py-2.5 text-base outline-none transition focus:border-primary"
            placeholder="name@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </label>

        <label className="text-sm font-medium text-neutral-100">
          Resume link
          <input
            {...register("resumeLink")}
            className="mt-1 w-full rounded-lg border border-neutral-20 bg-white px-3 py-2.5 text-base outline-none transition focus:border-primary"
            placeholder="https://portfolio-or-drive-link"
          />
          {errors.resumeLink && (
            <p className="mt-1 text-sm text-red-500">{errors.resumeLink.message}</p>
          )}
        </label>

        <label className="text-sm font-medium text-neutral-100">
          Cover note
          <textarea
            {...register("coverNote")}
            className="mt-1 w-full resize-y rounded-lg border border-neutral-20 bg-white px-3 py-2.5 text-base outline-none transition focus:border-primary"
            placeholder="Share your motivation and relevant experience."
          />
          {errors.coverNote && (
            <p className="mt-1 text-sm text-red-500">{errors.coverNote.message}</p>
          )}
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 rounded-lg bg-neutral-100 px-4 py-3 text-base font-semibold text-white transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {submitting ? "Saving..." : "Send Application"}
        </button>
      </form>

      {submitMessage ? (
        <p className="mt-4 text-sm font-medium text-accent-green">{submitMessage}</p>
      ) : null}
    </aside>
  );
}
