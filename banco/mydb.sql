-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 25-Jun-2017 às 02:36
-- Versão do servidor: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `admin`
--

CREATE TABLE `admin` (
  `adm_cpf` int(11) NOT NULL,
  `adm_login` varchar(100) NOT NULL,
  `adm_senha` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `admin`
--

INSERT INTO `admin` (`adm_cpf`, `adm_login`, `adm_senha`) VALUES
(5646541, 'Andreina Mendes', '123');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `cli_cpf` int(11) NOT NULL,
  `cli_nome` varchar(100) NOT NULL,
  `cli_rg` int(11) NOT NULL,
  `cli_data_nasc` varchar(10) NOT NULL,
  `cli_endereco` varchar(50) NOT NULL,
  `cli_num_casa` int(11) NOT NULL,
  `cli_tel` int(11) NOT NULL,
  `cli_email` varchar(45) NOT NULL,
  `cli_senha` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`cli_cpf`, `cli_nome`, `cli_rg`, `cli_data_nasc`, `cli_endereco`, `cli_num_casa`, `cli_tel`, `cli_email`, `cli_senha`) VALUES
(1, 'Andreina Mendes', 0, '', 'Rua José Paixão ', 2316, 0, 'andreinamendes63@gmail.com', 'asd');

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes_has_serviços`
--

CREATE TABLE `clientes_has_serviços` (
  `Clientes_cli_cpf` int(11) NOT NULL,
  `Serviços_Ser_id` int(11) NOT NULL,
  `clientes_has_serviçoscol` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `fun_cpf` varchar(20) NOT NULL,
  `fun_nome` varchar(100) NOT NULL,
  `fun_rg` int(11) NOT NULL,
  `fun_endereco` varchar(50) NOT NULL,
  `fun_num_casa` int(11) NOT NULL,
  `fun_funcao` varchar(20) NOT NULL,
  `fun_tel` int(11) NOT NULL,
  `fun_data_nasc` date NOT NULL,
  `fun_senha` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `funcionarios`
--

INSERT INTO `funcionarios` (`fun_cpf`, `fun_nome`, `fun_rg`, `fun_endereco`, `fun_num_casa`, `fun_funcao`, `fun_tel`, `fun_data_nasc`, `fun_senha`) VALUES
('04782144932', 'Elisa Paz Viana', 125369852, 'Rua Imaculada Conceição', 1568, 'Supervisor', 99635865, '1996-05-11', 'fun2elisa2'),
('12618499760', 'Cláudio Soares de Moraes', 253412842, 'Rua Tenente Alves', 1204, 'Supervisor', 99154215, '1992-06-13', 'fun1claudio1'),
('13202320001', 'Taylor Almeida', 145236891, 'Rua Fortaleza', 125, 'Supervisor', 12589674, '1963-06-05', 'fun2weh1'),
('16236237154', 'Alan Castro Silva', 457896321, 'Rua Tenente Alves', 741, 'Garçom do bar', 963852741, '1998-08-09', 'castro123'),
('16259280111', 'Gerson Salviano', 125687453, 'Rua Célio Martins', 125, 'Garçom', 988745632, '1987-05-28', 'salvianogerson12'),
('17261650109', 'Saulo Pessoa', 963258475, 'Avenida Bismark dos Santos', 63, 'Auxiliar de cozinha', 998653214, '1998-09-23', 'markpessoa95'),
('17292501416', 'Ariela Muniz', 753159852, 'Rua Castelo Branco', 153, 'Auxiliar de limpeza', 987456328, '1998-07-06', 'arielmuniz04'),
('17292501418', 'Keyla Anastácio', 756982458, 'Rua Mônica Silvino', 186, 'Auxiliar de limpeza', 996285469, '1989-12-29', 'kenastacio'),
('17349160287', 'Jolie Amanda Nascimento', 165789348, 'Rua Coronel da Fonseca', 639, 'Auxiliar de cozinha', 987456325, '1997-03-10', 'joliena15mais'),
('17471636161', 'Sílvio Araújo Guimarães', 748596321, 'Rua Castro de Sá', 4157, 'Garçom do bar', 987456385, '1985-01-25', 'araujo20'),
('21563712921', 'Ana Celine Paiva', 125145147, 'Rua Santa Mercedes ', 1254, 'Instrutora', 92369512, '1997-06-04', 'fun2ana21'),
('25294204861', 'Angelina Secundino', 985236147, 'Rua Facundes Barroso', 693, 'Auxiliar de limpeza', 998745369, '1997-05-06', 'secundaristaever'),
('28152168282', 'Marcos Gomes', 587436985, 'Rua Cavalcante Brigido', 879, 'Chef', 996324587, '1994-08-06', 'masterchefme'),
('45813984004 ', 'Sônia Cruz de Souza\r\n', 123654951, 'Rua Tenente Alves', 512, 'Supervisor', 95168524, '1997-04-12', 'fun3sonia1'),
('53741582800', 'Joe Raymond', 154374125, 'Rua Santo Agostinho', 183, 'Barman', 991256839, '1995-02-10', 'r4ym0nd'),
('62801841688', 'Alex Martins', 415263789, 'Rua Tenente Alves', 4127, 'Guia', 96369856, '1999-06-20', 'fun2alex25'),
('76591841418', 'Trina Oliveira', 756982468, 'Rua Castelo Branco', 106, 'Recepcionista', 987152863, '1998-08-23', 'katrynaoliver'),
('78231492176', 'Kátia Queiroz', 687541293, 'Rua Almeida Prado', 158, 'Auxiliar de limpeza', 998657425, '1998-05-07', 'queirozkatia'),
('81429101451', 'Clóvis de Castro', 587412369, 'Rua Gomes de Miranda', 869, 'Atendente', 987451287, '1994-05-03', 'atendeme4'),
('91014158194', 'Eliana Mendonça', 368524741, 'Rua Germano Mendonça', 856, 'Recepcionista', 996357821, '1998-01-29', 'liamendonça45');

-- --------------------------------------------------------

--
-- Estrutura da tabela `quartos`
--

CREATE TABLE `quartos` (
  `qua_num` int(11) NOT NULL,
  `qua_descricao` varchar(500) NOT NULL,
  `qua_estado` varchar(10) NOT NULL,
  `qua_preco_diaria` int(11) NOT NULL,
  `qua_andar` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `quartos`
--

INSERT INTO `quartos` (`qua_num`, `qua_descricao`, `qua_estado`, `qua_preco_diaria`, `qua_andar`) VALUES
(1, 'Quarto da econômica: com banheiro e ventilador.', '', 100, 0),
(2, 'Quarto da econômica: com banheiro e ventilador.', '', 100, 0),
(3, 'Quarto mediano com sala de estar e banheiro, ar-condicionado + café da manha grátis. ', '', 150, 0),
(4, 'Quarto mediano com sala de estar e banheiro, ar-condicionado + café da manha grátis. ', '', 150, 0),
(5, ' Quarto suíte master, sala de estar, sala de jantar e banheiro com ar-condicionado + Café da manhã e jantar grátis.', '', 250, 1),
(6, ' Quarto suíte master, sala de estar, sala de jantar e banheiro com ar-condicionado + Café da manhã e jantar grátis.', '', 250, 1),
(7, ' Quarto suíte master, sala de estar, sala de jantar e banheiro com ar-condicionado + Café da manhã e jantar grátis.', '', 250, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `reservas`
--

CREATE TABLE `reservas` (
  `idReservas` int(11) NOT NULL,
  `Res_data_hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `clientes_cli_cpf` int(11) NOT NULL,
  `quartos_qua_num` int(11) NOT NULL,
  `Res_data_inicio` date NOT NULL,
  `Res_data_fim` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `reservas`
--

INSERT INTO `reservas` (`idReservas`, `Res_data_hora`, `clientes_cli_cpf`, `quartos_qua_num`, `Res_data_inicio`, `Res_data_fim`) VALUES
(34, '2017-06-25 02:11:57', 1, 3, '2017-06-26', '2017-06-29'),
(35, '2017-06-25 02:13:21', 1, 1, '2017-06-26', '2017-06-29'),
(36, '2017-06-25 02:13:42', 1, 1, '2017-06-26', '2017-06-29'),
(37, '2017-06-25 02:14:31', 1, 7, '2017-06-26', '2017-06-29'),
(38, '2017-06-25 02:14:57', 1, 3, '2017-06-27', '2017-06-30'),
(39, '2017-06-25 02:15:20', 1, 1, '2017-06-28', '2017-07-01'),
(40, '2017-06-25 02:16:33', 1, 3, '2017-06-28', '2017-06-30');

-- --------------------------------------------------------

--
-- Estrutura da tabela `serviços`
--

CREATE TABLE `serviços` (
  `Ser_id` int(11) NOT NULL,
  `Ser_descrição` varchar(45) NOT NULL,
  `Ser_valor` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `serviços`
--

INSERT INTO `serviços` (`Ser_id`, `Ser_descrição`, `Ser_valor`) VALUES
(1, 'Pague e pesque com material incluso.', 'Preço R$ 10.00 a hora.'),
(2, 'Passeio a cavalo:', 'Preço R$ 5.00 meia hora.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adm_cpf`);

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cli_cpf`);

--
-- Indexes for table `clientes_has_serviços`
--
ALTER TABLE `clientes_has_serviços`
  ADD PRIMARY KEY (`clientes_has_serviçoscol`),
  ADD KEY `fk_Clientes_has_Serviços_Serviços1_idx` (`Serviços_Ser_id`),
  ADD KEY `fk_Clientes_has_Serviços_Clientes1_idx` (`Clientes_cli_cpf`);

--
-- Indexes for table `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`fun_cpf`);

--
-- Indexes for table `quartos`
--
ALTER TABLE `quartos`
  ADD PRIMARY KEY (`qua_num`);

--
-- Indexes for table `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`idReservas`),
  ADD KEY `fk_reservas_clientes1_idx` (`clientes_cli_cpf`),
  ADD KEY `fk_reservas_quartos1_idx` (`quartos_qua_num`);

--
-- Indexes for table `serviços`
--
ALTER TABLE `serviços`
  ADD PRIMARY KEY (`Ser_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `reservas`
--
ALTER TABLE `reservas`
  MODIFY `idReservas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT for table `serviços`
--
ALTER TABLE `serviços`
  MODIFY `Ser_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `clientes_has_serviços`
--
ALTER TABLE `clientes_has_serviços`
  ADD CONSTRAINT `fk_Clientes_has_Serviços_Clientes1` FOREIGN KEY (`Clientes_cli_cpf`) REFERENCES `clientes` (`cli_cpf`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_Clientes_has_Serviços_Serviços1` FOREIGN KEY (`Serviços_Ser_id`) REFERENCES `serviços` (`Ser_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `fk_reservas_clientes1` FOREIGN KEY (`clientes_cli_cpf`) REFERENCES `clientes` (`cli_cpf`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_reservas_clientes1_idx` FOREIGN KEY (`clientes_cli_cpf`) REFERENCES `clientes` (`cli_cpf`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_reservas_quartos1` FOREIGN KEY (`quartos_qua_num`) REFERENCES `quartos` (`qua_num`) ON DELETE CASCADE ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
