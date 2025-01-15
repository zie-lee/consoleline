CREATE TABLE `log_item` (
  `time` datetime NOT NULL,
  `id` varchar(36) NOT NULL,
  `log_id` text NOT NULL,
  `type` text NOT NULL,
  `info` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8