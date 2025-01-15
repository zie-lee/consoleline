CREATE TABLE `performance_item` (
  `id` varchar(36) NOT NULL,
  `log_id` text NOT NULL,
  `key` text NOT NULL,
  `value` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8