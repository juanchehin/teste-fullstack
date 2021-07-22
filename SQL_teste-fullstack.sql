-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema teste-fullstack
-- -----------------------------------------------------
-- Este es un proyecto para teste-fullstack

-- -----------------------------------------------------
-- Schema teste-fullstack
--
-- Este es un proyecto para teste-fullstack
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teste-fullstack` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin ;
USE `teste-fullstack` ;

-- -----------------------------------------------------
-- Table `teste-fullstack`.`Vehiculos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `teste-fullstack`.`Vehiculos` (
  `IdVehiculo` INT NOT NULL AUTO_INCREMENT COMMENT 'Llave primaria de la tabla vehiculos',
  `Vehiculo` VARCHAR(100) NULL,
  `Marca` VARCHAR(100) NULL,
  `Ano` INT NULL,
  `Descripcion` VARCHAR(250) NULL,
  `Vendido` TINYINT NULL,
  `Created` DATETIME NULL,
  `Updated` DATETIME NULL,
  PRIMARY KEY (`IdVehiculo`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
