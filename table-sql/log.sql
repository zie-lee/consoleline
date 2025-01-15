CREATE TABLE `log` (
  `create_time` datetime NOT NULL,
  `id` varchar(36) NOT NULL,
  `sdk_version` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8