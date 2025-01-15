CREATE TABLE `request_item` (
  `url` text NOT NULL,
  `body` text NOT NULL,
  `query` text NOT NULL,
  `request_headers` text NOT NULL,
  `response` text NOT NULL,
  `response_headers` text NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `id` varchar(36) NOT NULL,
  `log_id` text NOT NULL,
  `method` text NOT NULL,
  `response_type` text NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8