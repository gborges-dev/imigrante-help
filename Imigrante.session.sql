-- PostgreSQL Script
-- seg 06 nov 2023 14:37:14
-- Model: New Model    Version: 1.0

-- -----------------------------------------------------
-- Table idioma
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS idioma (
  cd_idioma SERIAL PRIMARY KEY,
  nm_idioma VARCHAR(45) NOT NULL,
  CONSTRAINT ididioma_unique UNIQUE(cd_idioma)
);

-- -----------------------------------------------------
-- Table usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS usuario (
  cd_usuario SERIAL PRIMARY KEY,
  nm_usuario VARCHAR(100) NOT NULL,
  em_usuario VARCHAR(100) NOT NULL,
  pw_usuario VARCHAR(100) NOT NULL,
  dt_usuario DATE NOT NULL,
  cd_idioma INT NOT NULL,
  CONSTRAINT idusuario_unique UNIQUE(cd_usuario),
  CONSTRAINT fk_usuario_idioma FOREIGN KEY (cd_idioma) REFERENCES idioma(cd_idioma)
);

-- -----------------------------------------------------
-- Table administrador
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS administrador (
  cd_administrador SERIAL PRIMARY KEY,
  nm_administrador VARCHAR(100) NOT NULL,
  pw_administrador VARCHAR(100) NOT NULL,
  CONSTRAINT cd_administrador_unique UNIQUE(cd_administrador)
);

-- -----------------------------------------------------
-- Table faq
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS faq (
  cd_faq SERIAL PRIMARY KEY,
  pr_faq VARCHAR(999) NOT NULL,
  rp_faq VARCHAR(999) NOT NULL,
  CONSTRAINT nm_faq_unique UNIQUE(cd_faq)
);

-- -----------------------------------------------------
-- Table topico_forum
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS topico_forum (
  cd_topico SERIAL PRIMARY KEY,
  tt_topico VARCHAR(100) NOT NULL,
  cont_topico VARCHAR(999) NOT NULL,
  cd_usuario INT NOT NULL,
  CONSTRAINT cd_forum_unique UNIQUE(cd_topico),
  CONSTRAINT fk_forum_usuario1 FOREIGN KEY (cd_usuario) REFERENCES usuario(cd_usuario)
);

-- -----------------------------------------------------
-- Table resposta_forum
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS resposta_forum (
  cd_topico INT NOT NULL,
  cont_resposta VARCHAR(999) NOT NULL,
  nm_resposta INT NOT NULL,
  cd_usuario INT NOT NULL,
  CONSTRAINT fk_resposta_postagem1 FOREIGN KEY (cd_topico) REFERENCES topico_forum(cd_topico),
  CONSTRAINT fk_resposta_forum_usuario1 FOREIGN KEY (cd_usuario) REFERENCES usuario(cd_usuario)
);