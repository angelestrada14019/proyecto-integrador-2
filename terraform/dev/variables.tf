variable "region" {
  default = "us-east-1"
}
variable "vpc_name" {
  description = "vpc-pi2-gp2-wowfunding"
  type        = string
  default     = "MyVPC"
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
  default     = "PublicSubnet"
}

variable "private_subnet_name" {
  description = "pvsubnet-pi2-gp2-wowfunding"
  type        = string
  default     = "PrivateSubnet"
}

variable "internet_gateway_name" {
  description = "ig-pi2-gp2-wowfunding"
  type        = string
  default     = "MyInternetGateway"
}

variable "public_route_table_name" {
  description = "pbroutet-pi2-gp2-wowfunding"
  type        = string
  default     = "PublicRouteTable"
}

variable "private_route_table_name" {
  description = "pvroutet-pi2-gp2-wowfunding"
  type        = string
  default     = "PrivateRouteTable"
}

variable "public_security_group_name" {
  description = "pbsg-pi2-gp2-wowfunding"
  type        = string
  default     = "PublicSecurityGroup"
}

variable "private_security_group_name" {
  description = "pvroutet-pi2-gp2-wowfunding"
  type        = string
  default     = "PrivateSecurityGroup"
}


variable "public_instance_name" {
  description = "pbec-pi2-gp2-wowfunding"
  type        = string
  default     = "MyPublicInstance"
}

variable "private_instance_name" {
  description = "pvec-pi2-gp2-wowfunding"
  type        = string
  default     = "MyPrivateInstance"
}

variable "nat_gateway_name" {
  description = "ng-pi2-gp2-wowfunding"
  type        = string
  default     = "MyNATGateway"
}

variable "vpc_cidr_block" {
  description = "vpccidr-pi2-gp2-wowfunding"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "pbcidr-pi2-gp2-wowfunding"
  type        = string
  default     = "10.0.1.0/24"
}

variable "private_subnet_cidr" {
  description = "pcidr-pi2-gp2-wowfunding"
  type        = string
  default     = "10.0.2.0/24"
}
variable "nat_eip_name" {
  description = "eip-pi2-gp2-wowfunding"
  type        = string
  default     = "MyNATEIP"
}

