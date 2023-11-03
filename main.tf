module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  name   = var.vpc_name
  cidr   = var.vpc_cidr_block
}
//--public-------------------------------------------------------
resource "aws_subnet" "public_subnet" {
  count = 1
  vpc_id     = module.vpc.vpc_id
  cidr_block = var.public_subnet_cidr
  availability_zone = var.subnets_availability_zone[0]
  tags = {
    Name = var.public_subnet_name
  }
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
  subnet_id   = aws_subnet.public_subnet[0].id
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
  ami          = "ami-05c13eab67c5d8861"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public_subnet[0].id
  key_name      = "pi2-g2"
  vpc_security_group_ids = [aws_security_group.public_sg.id]
  tags = {
    Name = var.public_instance_name
  }
}

//.....private...............................................
resource "aws_subnet" "private_subnet" {
  count = 1
  vpc_id     = module.vpc.vpc_id
  cidr_block = var.private_subnet_cidr
  availability_zone = var.subnets_availability_zone[1]
  tags = {
    Name = var.private_subnet_name
  }
}
resource "aws_eip" "nat_eip" {
  vpc = true
  tags = {
    Name = var.nat_eip_name
  }
}

resource "aws_nat_gateway" "nat_gw" {
  allocation_id = aws_eip.nat_eip.id
  subnet_id     = aws_subnet.public_subnet[0].id
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
  subnet_id   = aws_subnet.private_subnet[0].id
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
    cidr_blocks      = [aws_subnet.private_subnet[0].cidr_block]
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
  count        = 4
  ami          = "ami-05c13eab67c5d8861"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.private_subnet[0].id
  key_name      = "pi2-g2"
  vpc_security_group_ids = [aws_security_group.private_sg.id]
  tags = {
    Name = "${var.private_instance_name}-${count.index + 1}"
  }
}

//----- S3------------------------------------
resource "aws_s3_bucket" "image_bucket" {
  bucket = "${var.name_bucket}"
  acl    = "public-read"
}