output "cloud_function_url" {
  description = "URL para acessar a Cloud Function"
  value       = google_cloudfunctions_function.translate_function.https_trigger_url
}
