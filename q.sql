-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema questet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema questet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `questet` DEFAULT CHARACTER SET utf8 ;
USE `questet` ;

-- -----------------------------------------------------
-- Table `questet`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`user` (
  `id` INT NOT NULL,
  `First_name` VARCHAR(45) NULL,
  `Middle_name` VARCHAR(45) NULL,
  `Last_name` VARCHAR(45) NULL,
  `DOB` DATE NULL,
  `Email` VARCHAR(100) NULL,
  `Password` VARCHAR(1024) NULL,
  `Gender` CHAR(1) NULL,
  `Current_position` VARCHAR(45) NULL,
  `activated` TINYINT NULL,
  `google` VARCHAR(45) NULL,
  `facebock` VARCHAR(45) NULL,
  `Country` VARCHAR(45) NULL,
  `City` VARCHAR(45) NULL,
  `Time_zone` INT NULL,
  `online` TINYINT NULL,
  `last_online` DATE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`exam`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`exam` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `Title` VARCHAR(45) NULL,
  `Total_Points` FLOAT NULL,
  `user_id1` INT NOT NULL,
  `Public` TINYINT NULL,
  `Timed` INT NULL,
  `scheduled` DATE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_exam_user1_idx` (`user_id1` ASC) VISIBLE,
  CONSTRAINT `fk_exam_user1`
    FOREIGN KEY (`user_id1`)
    REFERENCES `questet`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`quistion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`quistion` (
  `id` INT NOT NULL,
  `Type` CHAR(1) NULL,
  `Data` VARCHAR(5000) NULL,
  `exam_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_quistion_exam1_idx` (`exam_id` ASC) VISIBLE,
  CONSTRAINT `fk_quistion_exam1`
    FOREIGN KEY (`exam_id`)
    REFERENCES `questet`.`exam` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`answer` (
  `id` INT NOT NULL,
  `quistion_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aswer_quistion1_idx` (`quistion_id` ASC) VISIBLE,
  CONSTRAINT `fk_aswer_quistion1`
    FOREIGN KEY (`quistion_id`)
    REFERENCES `questet`.`quistion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`correct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`correct` (
  `quistion_id` INT NOT NULL,
  `aswer_id` INT NOT NULL,
  INDEX `fk_quistion_has_aswer_aswer1_idx` (`aswer_id` ASC) VISIBLE,
  INDEX `fk_quistion_has_aswer_quistion1_idx` (`quistion_id` ASC) VISIBLE,
  CONSTRAINT `fk_quistion_has_aswer_quistion1`
    FOREIGN KEY (`quistion_id`)
    REFERENCES `questet`.`quistion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_quistion_has_aswer_aswer1`
    FOREIGN KEY (`aswer_id`)
    REFERENCES `questet`.`answer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`user_exam`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`user_exam` (
  `exam_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  INDEX `fk_exam_has_user_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_exam_has_user_exam1_idx` (`exam_id` ASC) VISIBLE,
  CONSTRAINT `fk_exam_has_user_exam1`
    FOREIGN KEY (`exam_id`)
    REFERENCES `questet`.`exam` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exam_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `questet`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`report`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`report` (
  `user_id` INT NOT NULL,
  `quistion_id` INT NOT NULL,
  INDEX `fk_user_has_quistion_quistion1_idx` (`quistion_id` ASC) VISIBLE,
  INDEX `fk_user_has_quistion_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_quistion_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `questet`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_quistion_quistion1`
    FOREIGN KEY (`quistion_id`)
    REFERENCES `questet`.`quistion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`message`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`message` (
  `user_id` INT NOT NULL,
  `user_id1` INT NOT NULL,
  `data` VARCHAR(1025) NOT NULL,
  `sent` DATE NULL,
  `seen` TINYINT NULL,
  INDEX `fk_user_has_user_user2_idx` (`user_id1` ASC) VISIBLE,
  INDEX `fk_user_has_user_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `questet`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_user_user2`
    FOREIGN KEY (`user_id1`)
    REFERENCES `questet`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`tag` (
  `Title` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Title`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`exam_has_tag`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`exam_has_tag` (
  `exam_id` INT NOT NULL,
  `tag_Title` VARCHAR(45) NOT NULL,
  INDEX `fk_exam_has_tag_tag1_idx` (`tag_Title` ASC) VISIBLE,
  INDEX `fk_exam_has_tag_exam1_idx` (`exam_id` ASC) VISIBLE,
  CONSTRAINT `fk_exam_has_tag_exam1`
    FOREIGN KEY (`exam_id`)
    REFERENCES `questet`.`exam` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_exam_has_tag_tag1`
    FOREIGN KEY (`tag_Title`)
    REFERENCES `questet`.`tag` (`Title`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `questet`.`answered`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `questet`.`answered` (
  `user_id` INT NOT NULL,
  `quistion_id` INT NOT NULL,
  INDEX `fk_user_has_quistion_quistion2_idx` (`quistion_id` ASC) VISIBLE,
  INDEX `fk_user_has_quistion_user2_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_quistion_user2`
    FOREIGN KEY (`user_id`)
    REFERENCES `questet`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_quistion_quistion2`
    FOREIGN KEY (`quistion_id`)
    REFERENCES `questet`.`quistion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
