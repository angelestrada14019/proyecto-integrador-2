variable "region" {
  default = "us-east-1"
}
variable "vpc_name" {
  description = "vpc-pi2-gp2-wowfunding"
  type        = string
  default     = "vpc-pi2-gp2-wowfunding"
}
variable "subnets_availability_zone" {
  default = [
    "us-east-1a",
    "us-east-1b"
  ]
}
variable "public_subnet_name" {
  description = "pbsubnet-pi2-gp2-wowfunding"
  type        = string
  default     = "pbsubnet-pi2-gp2-wowfunding"
}

variable "private_subnet_name" {
  description = "pvsubnet-pi2-gp2-wowfunding"
  type        = string
  default     = "pvsubnet-pi2-gp2-wowfunding"
}

variable "internet_gateway_name" {
  description = "ig-pi2-gp2-wowfunding"
  type        = string
  default     = "ig-pi2-gp2-wowfunding"
}

variable "public_route_table_name" {
  description = "pbroutet-pi2-gp2-wowfunding"
  type        = string
  default     = "pbroutet-pi2-gp2-wowfunding"
}

variable "private_route_table_name" {
  description = "pvroutet-pi2-gp2-wowfunding"
  type        = string
  default     = "pvroutet-pi2-gp2-wowfunding"
}

variable "public_security_group_name" {
  description = "pbsg-pi2-gp2-wowfunding"
  type        = string
  default     = "pbsg-pi2-gp2-wowfunding"
}

variable "private_security_group_name" {
  description = "pvroutet-pi2-gp2-wowfunding"
  type        = string
  default     = "pvroutet-pi2-gp2-wowfunding"
}


variable "public_instance_name" {
  description = "pbec-pi2-gp2-wowfunding"
  type        = string
  default     = "pbec-pi2-gp2-wowfunding"
}

variable "private_instance_name" {
  description = "pvec-pi2-gp2-wowfunding"
  type        = string
  default     = "pvec-pi2-gp2-wowfunding"
}

variable "nat_gateway_name" {
  description = "ng-pi2-gp2-wowfunding"
  type        = string
  default     = "ng-pi2-gp2-wowfunding"
}

variable "vpc_cidr_block" {
  description = "vpccidr-pi2-gp2-wowfunding"
  type        = string
  default     = "10.0.0.0/24"
}

variable "public_subnet_cidr" {
  description = "pbcidr-pi2-gp2-wowfunding"
  type        = string
  default     = "10.0.0.0/28"
}

variable "private_subnet_cidr" {
  description = "pcidr-pi2-gp2-wowfunding"
  type        = string
  default     = "10.0.0.16/28"
}
variable "nat_eip_name" {
  description = "eip-pi2-gp2-wowfunding"
  type        = string
  default     = "eip-pi2-gp2-wowfunding"
}
variable "name_bucket" {
  description = "s3-pi2-gp2-wowfunding"
  type        = string
  default     = "s3-pi2-gp2-wowfunding"
}

