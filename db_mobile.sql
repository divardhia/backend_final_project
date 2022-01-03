-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 03, 2022 at 08:47 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `nama`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'diva ardhia', 'divardhia@gmail.com', '1234567890', '2021-12-07', '2021-12-07');

-- --------------------------------------------------------

--
-- Table structure for table `vocab`
--

CREATE TABLE `vocab` (
  `id` int(11) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `bindo` varchar(255) NOT NULL,
  `bing` varchar(255) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `vocab`
--

INSERT INTO `vocab` (`id`, `gambar`, `bindo`, `bing`, `kategori`, `createdAt`, `updatedAt`) VALUES
(1, 'anjinglaut', 'Anjing Laut', 'Seals', 'Animal', '2022-01-03', '2022-01-03'),
(2, 'anjing', 'Anjing', 'Dog', 'Animal', '2022-01-03', '2022-01-03'),
(3, 'buaya', 'Buaya', 'Crocodile', 'Animal', '2022-01-03', '2022-01-03'),
(4, 'burunghantu', 'Burung Hantu', 'Owl', 'Animal', '2022-01-03', '2022-01-03'),
(5, 'gajah', 'Gajah', 'Elephant', 'Animal', '2022-01-03', '2022-01-03'),
(6, 'gurita', 'Gurita', 'Octopus', 'Animal', '2022-01-03', '2022-01-03'),
(7, 'harimau', 'Harimau', 'Tiger', 'Animal', '2022-01-03', '2022-01-03'),
(8, 'kucing', 'Kucing', 'Cat', 'Animal', '2022-01-03', '2022-01-03'),
(9, 'monyet', 'Monyet', 'Monkey', 'Animal', '2022-01-03', '2022-01-03'),
(10, 'panda', 'Panda', 'Panda', 'Animal', '2022-01-03', '2022-01-03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vocab`
--
ALTER TABLE `vocab`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `vocab`
--
ALTER TABLE `vocab`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
