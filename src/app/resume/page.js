import { siteData } from "../../siteData";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Resume",
  alternates: {
    canonical: "/resume/",
  },
};

export default function ResumePage() {
  redirect(siteData.resume);
}
