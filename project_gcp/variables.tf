variable "project_id" {
    type = string
  description = "id do projeto"
}

variable "region" {
  description = "Região onde os recursos serão provisionados"
  type        = string
  
}

variable "zone" {
    type = string
  description = "Zona onde a VM será provisionada"
}

variable "translate_api_key" {
  description = "Chave da API do Google Translate para autenticação"
  type        = string
}