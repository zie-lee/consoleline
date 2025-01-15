CREATE TABLE `storage_item` (
  `value` text NOT NULL,
  `id` varchar(36) NOT NULL,
  `log_id` text NOT NULL,
  `type` text NOT NULL,
  `key` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8