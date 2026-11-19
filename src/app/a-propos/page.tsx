import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "À propos",
};

export default function AboutPage() {
  redirect("/#concept");
}
