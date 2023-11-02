module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  name   = var.vpc_name
  cidr   = var.vpc_cidr_block
}
//--public-------------------------------------------------------
module "public_subnet" {
  source          = "terraform-aws-modules/subnet/aws"
  count           = 1
  name            = var.public_subnet_name
  vpc_id          = module.vpc.vpc_id
  cidr            = var.public_subnet_cidr
  availability_zone = var.subnets_availability_zone[0]
}
resource "aws_internet_gateway" "gw" {
  vpc_id = module.vpc.vpc_id
  tags = {
    Name = var.internet_gateway_name
  }
}
resource "aws_route_table" "public_route_table" {
  vpc_id = module.vpc.vpc_id
  tags = {
    Name = var.public_route_table_name
  }

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
}
resource "aws_route_table_association" "public_route_table_association" {
  count       = 1
  subnet_id   = module.public_subnet.subnet_ids[count.index]
  route_table_id = aws_route_table.public_route_table.id
}

resource "aws_security_group" "public_sg" {
  name        = var.public_security_group_name
  description = "allow public traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description      = "TLS from VPC"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_instance" "public_instance" {
  count        = 1
  ami          = "ami-0c94855ba95c574c8"
  instance_type = "t2.micro"
  subnet_id     = module.public_subnet.subnet_ids[count.index]
  key_name      = "your_key_pair_name"
  vpc_security_group_ids = [aws_security_group.public_sg.id]
  tags = {
    Name = var.public_instance_name
  }
}

//.....private...............................................
module "private_subnet" {
  source          = "terraform-aws-modules/subnet/aws"
  count           = 1
  name            = var.private_subnet_name
  vpc_id          = module.vpc.vpc_id
  cidr            = var.private_subnet_cidr
  availability_zone = var.subnets_availability_zone[1]
}
resource "aws_eip" "nat_eip" {
  vpc = true
  tags = {
    Name = var.nat_eip_name
  }
}

resource "aws_nat_gateway" "nat_gw" {
  allocation_id = aws_eip.nat_eip.id
  subnet_id     = module.public_subnet.subnet_ids[0]
  tags = {
    Name = var.nat_gateway_name
  }
}
resource "aws_route_table" "private_route_table" {
  vpc_id = module.vpc.vpc_id
  tags = {
    Name = var.private_route_table_name
  }

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat_gw.id
  }
}

resource "aws_route_table_association" "private_route_table_association" {
  count       = 1
  subnet_id   = module.private_subnet.subnet_ids[count.index]
  route_table_id = aws_route_table.private_route_table.id
}

resource "aws_security_group" "private_sg" {
  name        = var.private_security_group_name
  description = "allow private traffic"
  vpc_id      = module.vpc.vpc_id

  ingress {
    description      = "Private traffic from VPC"
    from_port        = 0
    to_port          = 65535
    protocol         = "tcp"
    cidr_blocks      = [module.private_subnet.ipv4_cidr_block]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }
}

resource "aws_instance" "private_instance" {
  count        = 3
  ami          = "ami-0c94855ba95c574c8"
  instance_type = "t2.micro"
  subnet_id     = module.private_subnet.subnet_ids[count.index]
  key_name      = "your_key_pair_name"
  vpc_security_group_ids = [aws_security_group.private_sg.id]
  tags = {
    Name = "${var.private_instance_name}-${count.index + 1}"
  }
}