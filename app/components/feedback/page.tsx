import type { Metadata } from "next"
import FeedbackComponentsClientPage from "./FeedbackComponentsClientPage"

export const metadata: Metadata = {
  title: "Feedback Components",
  description: "Components for providing feedback to users",
}

export default function FeedbackComponentsPage() {
  return <FeedbackComponentsClientPage />
}

