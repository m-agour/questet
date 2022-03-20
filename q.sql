SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE SCHEMA IF NOT EXISTS questet DEFAULT CHARACTER SET utf8 ;
USE questet ;

-- drop SCHEMA questet

CREATE TABLE IF NOT EXISTS questet.user (
	id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(45) NULL,
    middleName VARCHAR(45) NULL,
    lastName VARCHAR(45) NULL,
    DOB DATE NULL,
    email VARCHAR(100) NULL,
    pass VARCHAR(1024) NULL,
    gender CHAR(1) NULL,
    currentPosition VARCHAR(45) NULL,
    activated TINYINT NULL,
    google VARCHAR(45) NULL,
    facebock VARCHAR(45) NULL,
    country VARCHAR(45) NULL,
    city VARCHAR(45) NULL,
    timeZone INT NULL,
    lastOnline DATE NULL,
    
    CONSTRAINT user_pk PRIMARY KEY (id)
    )
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS questet.exam (
	id INT NOT NULL AUTO_INCREMENT,
    userId INT NOT NULL,
    title VARCHAR(45) NULL,
    totalPoints FLOAT NULL,
    public TINYINT NULL,
    duration TIME NULL,
    startDate DATE NULL,
    
    CONSTRAINT exam_pk PRIMARY KEY (id),
    INDEX exam_user_fk_idx (userId ASC) VISIBLE,
    CONSTRAINT exam_user_fk FOREIGN KEY (userId) REFERENCES  questet.user (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS questet.question (
	id INT NOT NULL AUTO_INCREMENT,
    questionType CHAR(1) NULL,
    questionData VARCHAR(5000) NULL,
    examId INT NOT NULL,
    
    
    CONSTRAINT question_pk PRIMARY KEY (id),
    INDEX question_exam1_fk_idx (examId ASC) VISIBLE,
    CONSTRAINT question_exam1_fk FOREIGN KEY (examId) REFERENCES  questet.exam (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS questet.answer (
	id INT NOT NULL AUTO_INCREMENT,
    questionId INT NOT NULL,
    
    CONSTRAINT answer_pk PRIMARY KEY (id),
    INDEX aswer_question1_fk_idx (questionId ASC) VISIBLE,
    CONSTRAINT aswer_question1_fk FOREIGN KEY (questionId) REFERENCES  questet.question (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS questet.correct (
	questionId INT NOT NULL,
    answerId INT NOT NULL,
    
    INDEX question_has_aswer_aswer1_fk_idx (answerId ASC) VISIBLE,
    INDEX question_has_aswer_question1_fk_idx (questionId ASC) VISIBLE,
    
    -- missing two primary key 
    -- CONSTRAINT correct_pk PRIMARY KEY (questionId,answerId),
    CONSTRAINT question_has_aswer_question1_fk FOREIGN KEY (questionId) REFERENCES  questet.question (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT question_has_aswer_aswer1_fk FOREIGN KEY (answerId) REFERENCES  questet.answer (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS questet.user_exam (
	id INT NOT NULL AUTO_INCREMENT,
    examId INT NOT NULL,
    userId INT NOT NULL,
    timeStarted DATE NULL,
    timeFinished DATE NULL,
    
    INDEX exam_has_user_user1_fk_idx (userId ASC) VISIBLE,
    INDEX exam_has_user_exam1_fk_idx (examId ASC) VISIBLE,
    
    CONSTRAINT user_exam_pk PRIMARY KEY (id),
    CONSTRAINT exam_has_user_exam1_fk FOREIGN KEY (examId) REFERENCES  questet.exam (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT exam_has_user_user1_fk FOREIGN KEY (userId) REFERENCES  questet.user (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS questet.report (
	id INT NOT NULL AUTO_INCREMENT,
	userId INT NOT NULL,
    questionId INT NOT NULL,
    content VARCHAR(1025) NOT NULL,
    filedOn DATE NOT NULL,
    
    INDEX user_has_question_question1_fk_idx (questionId ASC) VISIBLE,
    INDEX user_has_question_user1_fk_idx (userId ASC) VISIBLE,
    
    -- missing also
    CONSTRAINT report_pk PRIMARY KEY (id),
    CONSTRAINT user_has_question_user1_fk FOREIGN KEY (userId) REFERENCES  questet.user (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT user_has_question_question1_fk FOREIGN KEY (questionId) REFERENCES  questet.question (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS questet.message (
	userId INT NOT NULL,
    userId1 INT NOT NULL,
    content VARCHAR(1025) NOT NULL,
    sentDate DATE NULL,
    isSeen TINYINT NULL,
    
    INDEX user_has_user_user2_fk_idx (userId1 ASC) VISIBLE,
    INDEX user_has_user_user1_fk_idx (userId ASC) VISIBLE,
    
    -- missing also
    CONSTRAINT user_has_user_user1_fk FOREIGN KEY (userId) REFERENCES  questet.user (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT user_has_user_user2_fk FOREIGN KEY (userId1) REFERENCES  questet.user (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
    
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS questet.tag (
	title VARCHAR(45) NOT NULL,
    
    CONSTRAINT tag_pk PRIMARY KEY (title)
    )
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS questet.exam_has_tag (
	examId INT NOT NULL,
    tagTitle VARCHAR(45) NOT NULL,
    
    INDEX exam_has_tag_tag1_fk_idx (tagTitle ASC) VISIBLE,
    INDEX exam_has_tag_exam1_fk_idx (examId ASC) VISIBLE,
    
    -- missing also
    CONSTRAINT exam_has_tag_exam1_fk FOREIGN KEY (examId) REFERENCES  questet.exam (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT exam_has_tag_tag1_fk FOREIGN KEY (tagTitle) REFERENCES  questet.tag (title)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS questet.answered (
	userExamId INT NOT NULL,
    questionId INT NOT NULL,
    
    INDEX fk_user_has_question_question2_idx (questionId ASC) VISIBLE,
    INDEX fk_user_has_question_user2_idx (userExamId ASC) VISIBLE,
    
    -- missing also
    CONSTRAINT user_has_question_user2_fk FOREIGN KEY (userExamId) REFERENCES  questet.user_exam (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT user_has_question_question2_fk FOREIGN KEY (questionId) REFERENCES  questet.question (id)
		ON DELETE NO ACTION
        ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
