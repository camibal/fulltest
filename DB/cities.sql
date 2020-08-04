-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-08-2020 a las 01:36:06
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cities`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `citiesAddOrEdit` (IN `_id` INT(11), IN `_city` VARCHAR(45), IN `_country` VARCHAR(45), IN `_continent` VARCHAR(45))  BEGIN	
	IF _id = 0 THEN 
    INSERT INTO cities(city, country, continent)
    VALUES(_city, _country, _continent);
    SET _id = last_insert_id();
    ELSE
		UPDATE cities
        SET 
			city = _city,
            country = _country,
            continent = _continent
            where id = _id;
	END IF;
    
    SELECT _id AS id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `teamsAddOrEdit` (IN `_id` INT(11), IN `_equipment` VARCHAR(45), IN `_ligue` VARCHAR(45), IN `_country` VARCHAR(45))  BEGIN	
	IF _id = 0 THEN 
    INSERT INTO teams(equipment, ligue, country)
    VALUES(_equipment, _ligue, _country);
    SET _id = last_insert_id();
    ELSE
		UPDATE teams
        SET 
			equipment = _equipment,
            ligue = _ligue,
            country = _country
            where id = _id;
	END IF;
    
    SELECT _id AS id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `usersAddOrEdit` (IN `_id` INT(11), IN `_name` VARCHAR(45), IN `_email` VARCHAR(45), IN `_age` VARCHAR(45))  BEGIN	
	IF _id = 0 THEN 
    INSERT INTO users(name, email, age)
    VALUES(_name, _email, _age);
    SET _id = last_insert_id();
    ELSE
		UPDATE users
        SET 
			name = _name,
            email = _email,
            age = _age
            where id = _id;
	END IF;
    
    SELECT _id AS id;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `city` varchar(45) NOT NULL,
  `country` varchar(45) NOT NULL,
  `continent` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cities`
--

INSERT INTO `cities` (`id`, `city`, `country`, `continent`) VALUES
(1, 'roma', 'italia', 'europa'),
(32, 'cartagena', 'colombia', 'america');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `equipment` varchar(45) DEFAULT NULL,
  `ligue` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `teams`
--

INSERT INTO `teams` (`id`, `equipment`, `ligue`, `country`) VALUES
(1, 'liverpool', 'premier ligue', 'inglaterra');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `age`) VALUES
(1, 'camilo', 'camilo@correo.com', 25),
(2, 'andres', 'andres@correo.com', 20);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
