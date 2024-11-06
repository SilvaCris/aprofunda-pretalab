resource "google_cloudfunctions_function" "translate_function" {
  name        = "translatePoem"
  runtime     = "nodejs18"
  entry_point = "translatePoem"

  source_archive_bucket = google_storage_bucket.function_bucket.name
  source_archive_object = google_storage_bucket_object.function_code.name
  trigger_http          = true
  available_memory_mb   = 128

  environment_variables = {
    GOOGLE_TRANSLATE_API_KEY = var.translate_api_key
    PROJECT_ID = var.project_id
  }
}

resource "google_storage_bucket" "function_bucket" {
  name     = "${var.project_id}-cloud-functions"
  location = var.region
}

resource "google_storage_bucket_object" "function_code" {
  name   = "function.zip"
  bucket = google_storage_bucket.function_bucket.name
  source = "cloud_function/function.zip"  # Arquivo zip com o código da função
}
