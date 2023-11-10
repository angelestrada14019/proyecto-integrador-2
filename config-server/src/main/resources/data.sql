CREATE TABLE `user` (
                        `id` bigint NOT NULL AUTO_INCREMENT,
                        `name` varchar(100) COLLATE utf8mb4_unicode_ci  not null,
                        `lastname` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
                        `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
                        `password` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
                        `profile_url` varchar(512) COLLATE utf8mb4_unicode_ci default '',
                        `type` int not null,
                        `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
                        `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user_type` (
                             `id` bigint NOT NULL AUTO_INCREMENT,
                             `description` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
                             `creation_date` datetime DEFAULT CURRENT_TIMESTAMP,
                             `last_updated` datetime DEFAULT CURRENT_TIMESTAMP,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert user types
INSERT INTO `user_type` (`description`) VALUES
                                            ('Admin'),
                                            ('Manager'),
                                            ('Employee'),
                                            ('Customer');

-- Insert users
INSERT INTO `user` (`name`, `lastname`, `email`, `password`, `type`) VALUES
                                                                         ('John', 'Doe', 'john.doe@email.com', 'hashed_password_1', 1),
                                                                         ('Jane', 'Smith', 'jane.smith@email.com', 'hashed_password_2', 2),
                                                                         ('Bob', 'Johnson', 'bob.johnson@email.com', 'hashed_password_3', 3),
                                                                         ('Alice', 'Williams', 'alice.williams@email.com', 'hashed_password_4', 4),
-- Add 16 more users as needed

                                                                         ('Michael', 'Davis', 'michael.davis@email.com', 'hashed_password_5', 1),
                                                                         ('Emily', 'Miller', 'emily.miller@email.com', 'hashed_password_6', 2),
                                                                         ('Daniel', 'Wilson', 'daniel.wilson@email.com', 'hashed_password_7', 3),
                                                                         ('Olivia', 'Anderson', 'olivia.anderson@email.com', 'hashed_password_8', 4);
-- Add 16 more users as needed
