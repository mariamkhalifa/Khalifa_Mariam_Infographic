-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 05, 2019 at 03:00 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_harrypotterbooks`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_books`
--

DROP TABLE IF EXISTS `tbl_books`;
CREATE TABLE IF NOT EXISTS `tbl_books` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `rating` varchar(20) NOT NULL,
  `year` int(11) NOT NULL,
  `age` varchar(20) NOT NULL,
  `villain` text NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_books`
--

INSERT INTO `tbl_books` (`ID`, `rating`, `year`, `age`, `villain`) VALUES
(1, '4.47', 1997, '11 years', 'Quierrel/ Voldemort'),
(2, '4.41', 1998, '12 years', 'Diary/ Tom Riddle'),
(3, '4.56', 1999, '13 years', 'Wormtail & Dementors'),
(4, '4.55', 2000, '14 years', 'Voldemort'),
(5, '4.49', 2003, '15 years', 'Umbridge & Voldemort'),
(6, '4.56', 2005, '16 years', 'Draco & Snape'),
(7, '4.61', 2007, '17 years', 'Voldemort & Nagini');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
