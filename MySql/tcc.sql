-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13-Mar-2018 às 22:02
-- Versão do servidor: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tcc`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `dht22`
--

CREATE TABLE `dht22` (
  `id` int(11) NOT NULL,
  `temperatura` float NOT NULL,
  `umidade` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `dht22`
--

INSERT INTO `dht22` (`id`, `temperatura`, `umidade`) VALUES
(1, 25.5, 35.8);

-- --------------------------------------------------------

--
-- Estrutura da tabela `dsb18`
--

CREATE TABLE `dsb18` (
  `id` int(11) NOT NULL,
  `temperatura` float NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `dsb18`
--

INSERT INTO `dsb18` (`id`, `temperatura`) VALUES
(1, 24.5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `nv_agua`
--

CREATE TABLE `nv_agua` (
  `id` int(11) NOT NULL,
  `cheio` int(11) NOT NULL,
  `vazio` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `nv_agua`
--

INSERT INTO `nv_agua` (`id`, `cheio`, `vazio`) VALUES
(1, 1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dht22`
--
ALTER TABLE `dht22`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dsb18`
--
ALTER TABLE `dsb18`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `nv_agua`
--
ALTER TABLE `nv_agua`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dht22`
--
ALTER TABLE `dht22`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `dsb18`
--
ALTER TABLE `dsb18`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `nv_agua`
--
ALTER TABLE `nv_agua`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
