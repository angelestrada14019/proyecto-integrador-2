provider "aws" {
  region = "us-west-2"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.main.id
}

resource "aws_subnet" "public_subnet" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
}

resource "aws_route_table" "public_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
}

resource "aws_route_table_association" "public_route_table_association" {
  subnet_id      = aws_subnet.public_subnet.id
  route_table_id = aws_route_table.public_route_table.id
}

resource "aws_eip" "nat_eip" {
  vpc = true
}

resource "aws_nat_gateway" "nat_gw" {
  allocation_id = aws_eip.nat_eip.id
  subnet_id     = aws_subnet.public_subnet.id
}

resource "aws_subnet" "private_subnet" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.2.0/24"
}

resource "aws_route_table" "private_route_table" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat_gw.id
  }
}

resource "aws_route_table_association" "private_route_table_association" {
  subnet_id      = aws_subnet.private_subnet.id
  route_table_id = aws_route_table.private_route_table.id
}

resource "aws_security_group" "sg" {
  name        = "allow_tls_http"
  description = "allow TLS HTTP traffic"
  vpc_id      = aws_vpc.main.id

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
  ami           = "ami-0c94855ba95c574c8"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.public_subnet.id
  key_name      = "your_key_pair_name"
  
  vpc_security_group_ids = [aws_security_group.sg.id]

  tags = {
    Name = "PublicInstance"
  }
}

resource "aws_instance" "private_instance_1" {
  ami           = "ami-0c94855ba95c574c8"
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.private_subnet.id
  key_name      = "your_key_pair_name"

   vpc_security_group_ids = [aws_security_group.sg.id]

   tags = {
     Name = "PrivateInstance1"
   }
 }

 resource "aws_instance" "private_instance_2" {
   ami           = "ami-0c94855ba95c574c8"
   instance_type = "t2.micro"
   subnet_id     = aws_subnet.private_subnet.id
   key_name      = "your_key_pair_name"

   vpc_security_group_ids = [aws_security_group.sg.id]

   tags ={
     Name ="PrivateInstance2"
   }
 }

 resource "aws_instance" "private_instance_3" {
   ami           ="ami-0c94855ba95c574c8"
   instance_type ="t2.micro"
   subnet_id     ="aws_subnet.private_subnet.id"
   key_name      ="your_key_pair_name"

   vpc_security_group_ids =[aws_security_group.sg.id]

   tags ={
     Name ="PrivateInstance3"
   }
 }