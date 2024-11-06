resource "google_service_account" "VM-aprofunda" {
  account_id   = "my-custom-sa"
  display_name = "Custom SA for VM Instance"
}

resource "google_compute_instance" "default" {
  name         = "my-instance"
  machine_type = "n2-standard-2"
  zone         = var.zone



  boot_disk {
    initialize_params {
      image = "debian-cloud/debian-11"

    }
  }

  network_interface {
    network = "default"

    access_config {

    }
  }

}
