document.addEventListener('DOMContentLoaded', () => {
    const ofertas = [
        {
            titulo: "MOZO/A DE ALMACÉN",
            publicada: "Proxecto ILES 12/02/2025",
            empresa: "Peycar",
            localidade: "Pontevedra",
            descricion: "Mozo ou moza de almacén con atención o público. Funcións: Recibir, almacenar e enviar mercadoría. Preprarar pedidos. Revisar a calidade dos productos. Organizar e situar os productos no almacén. Controlar o stock e xestionar o funcionamento do almacén. Atención ao cliente",
            requisitos: null,
            condicions: "Xornada a tempo completo. Contrato indefinido.",
            contacto: "Enviar CV a comunicacion@peycar.com"
        },
        {
            titulo: "EDUCADOR/A SOCIAL",
            publicada: "12.02.2025",
            empresa: "Cogami",
            localidade: "Vigo",
            descricion: "Grao en Educación Social. Dispoñibilidade de asistir tanto a Porriño como a Valadares. Valorarase certificado de discapacidade.",
            requisitos: "Titulación Universitaria en Educación Social\nDisponibilidade de asistir tanto a Porriño como a Valadares\nSe valorará positivamente estar en posesión do certificado de discapacidade igual ou superior o 33% o IPT.",
            condicions: "Contrato temporal\nSalario según convenio de Residencias Privadas de Galicia\nXornada completa",
            contacto: "https://acortar.link/nM5XxN"
        },
        {
            titulo: "TÉCNICO/A EHS",
            publicada: "12.02.2025",
            empresa: "Adecco",
            localidade: "O Porriño",
            descricion: "Grao Ciencias / Enxeñería Química ou de organización industrial. Formación en xestión ambiental. Técnico/a PRL Seguridade, Hixiene e Ergonomía-Psicosocioloxía e inglés",
            requisitos: "Licenciatura en Ciencias / Inxeñería Química ou de organización industrial (técnica ou superior).\nFormación en xestión medioambiental.\nTécnico superior en prevención de riscos laborais nas especialidades de Seguridade, Hixiene e Ergonomía-Psicosocioloxía.\nCoñecemento en sistemas de xestión ISO 14001, OHSAS 18001, SOCMA ChemStewards...\nCoñecemento das normativas existentes na industria. Farmacéutica, específicamente GMPs.\nComunicación fluida en inglés (falado e escrito).",
            condicions: "Experiencia mínima: polo menos 1 ano\nTipo de contrato: de duración determinada, xornada completa\nInglés - Nivel Intermedio",
            contacto: "https://acortar.link/ZvvqaU"
        },
        {
            titulo: "PERSOAL DE LOXÍSTICA",
            publicada: "Proxecto ILES 22/01/2015",
            empresa: "Ilunion",
            localidade: "Vigo",
            descricion: "Realización de tarefas de montaxe de pezas en fábrica",
            requisitos: "Certificado de discapacidade igual o superior a 33% ou incapacidade permanente total",
            condicions: "Contrato inicial temporal. Xornada completa a quendas de maña/tarde, noite ou fin de semana",
            contacto: "Enviar Cv a rprieto@ilunion.com aperezr@ilunion.com"
        },
        {
            titulo: "TELEOPERADOR/A EMISIÓN CHAMADAS",
            publicada: "12.02.2025",
            empresa: "Intelcia",
            localidade: "Vigo",
            descricion: "Dotes comunicativas, experiencia en contact-center. Inglés fluído.",
            requisitos: "Inglés - Nivel Intermedio\nCoñecementos necesarios: Back office, atención ao cliente, sector banca",
            condicions: "Experiencia mínima: non requerida\nTipo de contrato: de duración determinada, xornada parcial - tarde",
            contacto: "https://acortar.link/GTeZAq"
        },
        {
            titulo: "PERSOAL DE SUPERMERCADO",
            publicada: "13.02.2025",
            empresa: "Mercadona",
            localidade: "Redondela",
            descricion: "Experiencia mínima non requerida. Para postos de carniceiro/a, peixeiro/a, caixeiro/a, Perfumeiro/a, froiteiro/a, charcuteiro/a, limpeza e repoñedor/a.",
            requisitos: "Experiencia mínima: non requerida",
            condicions: "Contrato temporal\nFormación a cargo da empresa",
            contacto: "https://acortar.link/Dsvywm"
        },
        {
            titulo: "MOZO/A DE ALMACÉN",
            publicada: "Proxecto ILES 15/01/205",
            empresa: "Lavandería industrial Don Pepe",
            localidade: "Sansenxo",
            descricion: null,
            requisitos: "Valorase experiencia. Formación auxiliar administración, loxística ou similar",
            condicions: null,
            contacto: "Enviar Cv a info@lavanderiadonpepe.com"
        },
        {
            titulo: "INSTALADOR/A AIRE ACONDICIONADO",
            publicada: "12.02.2025",
            empresa: "INSTALADOR/A AIRE ACONDICIONADO",
            localidade: "Pontevedra",
            descricion: "Experiencia demostrable de 3 anos en instalación de equipos domésticos e comerciais (VRF e Aerotermias...), fabricación de condutos, certificado de gases fluorados E PRL.",
            requisitos: "Con experiencia mínima demostrable de 3 anos en instalación de equipos domésticos e comerciais para traballar na provincia de Pontevedra e cercanías. Valorarase experiencia en instalación de equipos VRF y aerotermias, fabricación de conductos, certificado de gases fluorados e prevención de riscos laborais.",
            condicions: "Experiencia mínima: polo menos 3 anos\nTipo de contrato: indefinido, xornada completa",
            contacto: "https://acortar.link/ipvqys"
        },
        {
            titulo: "ELECTROMECÁNICOS/A VIAQUA",
            publicada: "12.02.2025",
            empresa: "Agbar",
            localidade: "Ponteareas",
            descricion: "FP Rama Mecánica, Eléctrica ou Electrónica ou experiencia demostrable de 1 ano. Coñecemento de Mantementos de Equipos Mecánicos. Carné B",
            requisitos: "Dispoñer dunha formación mínima de F.P. de 2º Grado, preferiblemente en Rama Mecánica, Eléctrica o Electrónica ou con unha experiencia demostrable de 1 ano en posto de similares características.\nCoñecemento de Mantenementos de Equipos Mecánicos\nResidente en Ponteareas o Alrededores\nCarnet de Conducir B\nValorable experiencia no sector da auga.",
            condicions: "Experiencia mínima: polo menos 1 ano\nTipo de contrato: indefinido, xornada completa",
            contacto: "https://acortar.link/mGP4tx"
        },
        {
            titulo: "XEROCULTOR/A",
            publicada: "12.02.2025",
            empresa: "Domusvi",
            localidade: "Pontevedra",
            descricion: "FP Coidados Auxiliares de Enfermaría, Atención a Persoas en Situación de Dependencia ou CP Atención Sociosanitaria en Institucións Sociais.",
            requisitos: "Ciclo Formativo FP Cuidados Auxiliares de Enfermeria, Ciclo Formativo FP Atención a Personas en Situación de Dependencia o CP Atención Sociosanitaria a Personas Dependientes en Instituciones Sociales.\nDeseaxable experiencia mínima de 6 meses nun posto similar.\nFormación complementaria no ámbito xerontoloxico, manipulación de alimentos ou similar.\nValorarase positivamente a disponibilidade de cursos de formación relacionados coa área así como formación complementaria en términos de fomento da Igualdade.",
            condicions: "Ciclo Formativo Grado Medio\nTipo de contrato: de duración determinada, xornada completa",
            contacto: "https://acortar.link/4FEC0R"
        },
        {
            titulo: "TÉCNICO/A DE PROXECTOS",
            publicada: "12.02.2025",
            empresa: "Randstad",
            localidade: "Vigo",
            descricion: "Seguemento e xestión de proxectos de I+D\nCoordinación do equipo de proxecto\nSoporte na industrialización dos novos productos",
            requisitos: "Grao Superior. Coñecementos en delineación. Experiencia: 1 ano. Coñecementos en SolidWorks e Autocad. Valorable inglés.",
            condicions: "Tipo de contrato: Con posible incorporación a Plantilla\nXornada Completa",
            contacto: "https://acortar.link/QsGh6J"
        },
        {
            titulo: "MOZO/A CONDUTOR/A",
            publicada: "12.02.2025",
            empresa: "Adecco",
            localidade: "Vigo",
            descricion: null,
            requisitos: "Carné de conducir B en vigor con máis de 2 anos de antigüedade\nValorable carnet C + E\nGanas de aprender e crecer na empresa",
            condicions: "Xornada Tempo completo\nTipo de contrato: Temporal",
            contacto: "https://acortar.link/QsGh6J"
        },
        {
            titulo: "COMERCIAL SECTOR ALIMENTACIÓN",
            publicada: "12.02.2025",
            empresa: "Eurofirms",
            localidade: "Pontevedra",
            descricion: "Experiencia mínima dun ano como comercial.\nPersoa responsable e proactiva.\nDispoñer de vehículo propio para desprazarse ao lugar de Traballo\nResidencia preto do posto",
            requisitos: "Ciclo Formativo Grado Medio\nCarnet de conducir B en vigor con máis de 2 anos de antigüedade",
            condicions: "Xornada Tempo completo",
            contacto: "https://acortar.link/6fXFqa"
        },
        {
            titulo: "AUXILIAR DE SERVICIOS",
            publicada: "Proxecto ILES 15/01/2025",
            empresa: "EULEN Centro Especial de Emprego",
            localidade: "Pontevedra",
            descricion: "Funcións: Atención ao público, asegurando un servicio amable y profesional. Apertura e peche das instalacións. Venda de entradas. Arqueo de caixa",
            requisitos: "Certificado de discapacidade igual o superior a 33% ou incapacidade profesional recoñecida. Valorable experiencia laboral previa en atención ao cliente. Residencia en Pontevedra ou arrededores",
            condicions: "Contrato eventual. Incorporación o 3 de febreiro. Xornada laboral de 8 horas semanis, reoartidas en vernes e sábados de 17:00 a 21:00",
            contacto: "Enviar CV a imourino@eulen.com"
        },
        {
            titulo: "PSICÓLOGO/SANITARIO",
            publicada: "Proxecto ILES 12702/2025",
            empresa: "Gabinete psicoloxía E+",
            localidade: "Pontevedra",
            descricion: "Diagnóstico e intervención",
            requisitos: "Grao en psicoloxía. Máster en psicoloxía xeral sanitario. Formación EMDR E terapia familiar. Aspectos a valorar: Experiencia laboral, outras formacións, traballos en equipo e proactividade",
            condicions: "Contrato laboral de 25-30 horas ou autónomo",
            contacto: "Enviar CV a gabinetepsicologiaymas@gmail.com"
        },
        {
            titulo: "ENXEÑEIRO JUNIOR",
            publicada: "Proxecto ILES 04/12/2024",
            empresa: "Ilunion",
            localidade: "Vigo",
            descricion: null,
            requisitos: "Titulado superior en Enxeñeria",
            condicions: "Contrato incial temporal. Xornada completa",
            contacto: "Enviar Cv a rpireto@ilunion.com aerubal@ilunion.com"
        },
        {
            titulo: "VIXIANTE DE SEGURIDADE",
            publicada: "Proxecto ILES 04/12/2024",
            empresa: "Ilunion",
            localidade: "Provincia Pontevedra",
            descricion: "Desenvolvemento e implantación de meloras do proceso produtivo no sector de automoción",
            requisitos: "TIP en vigor",
            condicions: "Contrato incial temporal.",
            contacto: "Enviar Cv a rpireto@ilunion.com aerubal@ilunion.com"
        },
        {
            titulo: "AUXILIAR DE COCIÑA",
            publicada: "Proxecto ILES 02/01/2025",
            empresa: "Residencai de maiores Grupo Xenia",
            localidade: "Poio",
            descricion: null,
            requisitos: "Incorporación inmediata",
            condicions: "Contrato de fins de semanas e festivos.",
            contacto: "Enviar Cv a tsocialpopio@grupoxenia.com"
        },
        {
            titulo: "REPARTIDOR/A",
            publicada: "Proxecto ILES 18/12/2014",
            empresa: "Peycar",
            localidade: "Pontevedra",
            descricion: "Funcións: Repartidor/a por Pontevedra Vigo. Labores de almacén",
            requisitos: "Xornada a tempo completo. Contrato indefinido.",
            condicions: "Contrato de fins de semanas e festivos.",
            contacto: "Enviar Cv a comunicacion@peycar.com"
        },
        {
            titulo: "ASISTENTES/AS DO FOGAR",
            publicada: "Proxecto ILES 18/12/2014",
            empresa: "Grupo Eulen",
            localidade: "Vigo e Marín",
            descricion: null,
            requisitos: "Moi varolable experiencia previa",
            condicions: "Trabállase a xornada parcial de 10h/semana en horario de maña. Ofrecese contrato temporal de 5 meses de duración. Necesítase dispoñibilidade de incorporación inmediata",
            contacto: "Enviar Cv a empleonoroeste@eulen.com"
        },
        {
            titulo: "DOCENTE PARA OPOSICIÓNS AUXILIAR DE ENFERMERÍA",
            publicada: "Proxecto ILES 04/12/2024",
            empresa: "Grupo de formación",
            localidade: "Vigo",
            descricion: "Para a preparación de oposicións de auxiliar de enfermería (Sergas)",
            requisitos: "Persoas que superasen a oposición da cal se pretende ser preparador/a ou outra similar ou superior, ou que teñan unha experiencia mínima de 3 anos na devandita preparación da oposición como docente. Actitude de flexibilidade. Adaptabilidade aos alumnos/as. Bo nivel de comunicación. Capacidade para xerar contidos. Ser guía dos seus alumnos/as cara á consecuención do obxetivo: a obtención da praza ó inclusión en listas. Impartir clases Vigo",
            condicions: null,
            contacto: "Enviar Cv a desarrollorrhh2015@gmail.com"
        },
        {
            titulo: "DOCENTE PARA OPOSCIÓNS AUXILIAR ADMINISTRATIVO",
            publicada: "Proxecto ILES 04/12/2024",
            empresa: "Centro de formación",
            localidade: "Vigo",
            descricion: "Docente-preparadpr para oposicións nas temáticas de: Administración local, organización e funcionamento, mda Adminastracion local, Facendas Locais Procedementos Administrativos Local.",
            requisitos: "Titulado Universitario, experiencia profesional na función na Administración Universitaria e/o experiencia profesional ou persoal na preparación da oposición ben de similar ou superior nivel no ámbito administrativo Universitario, Bo nivel de comunicación e gusto pola formación. Impartir clases en Vigo",
            condicions: null,
            contacto: "Enviar Cv a desarrollorrhh2015@gmail.com"
        },
        {
            titulo: "ASISTENTES/AS DO FOGAR",
            publicada: "Proxecto ILES 27/11/2024",
            empresa: "Micofer",
            localidade: "Vilargarcía",
            descricion: null,
            requisitos: "Non se require experiencia",
            condicions: "Quendas de maña, tarde ou rotativos",
            contacto: "Enviar Cv a cvvilargarcia@micofer.com"
        },
        {
            titulo: "LIMPIADOR/A DE CEFALOPODOS",
            publicada: "Proxecto ILES 27/11/2024",
            empresa: "Micofer",
            localidade: "Vilargarcía",
            descricion: null,
            requisitos: "Non se require experiencia",
            condicions: "Quendas de maña, tarde ou rotativos",
            contacto: "Enviar Cv a cvvilargarcia@micofer.com"
        },
        {
            titulo: "ENXEÑEIRO DE PROCESOS",
            publicada: "Proxecto ILES 04/12/2024",
            empresa: "Ilunion",
            localidade: "Vigo",
            descricion: "Desenvolvemento e implantación de melloras do proceso produtivo no sector de automoción",
            requisitos: "Titulado Superior en Enxeñeria",
            condicions: "Contrato incial temporal. Xornada completa",
            contacto: "Enviar Cv a rprieto@ilunion.com aperezr@ilunion.com"
        },
        {
            titulo: "PERSOAL DE MONTAXE",
            publicada: "Proxecto ILES 04/12/2024",
            empresa: "Ilunion",
            localidade: "Vigo",
            descricion: "Tarefas de montaxe de pezas en fábrica de automoción",
            requisitos: "Certificado de discapacidade igual o superior a 33% ou Incapacidade permanente total",
            condicions: "Quendas incial temporal, Xornada completa a quendas de maña/tarde, noite ou fin de semana",
            contacto: "Enviar Cv a rprieto@ilunion.com aperezr@ilunion.com"
        },
        {
            titulo: "INFORMATICO-DOCENTE",
            publicada: "Proxecto ILES 29/01/25",
            empresa: "Centro de formación",
            localidade: "Vigo",
            descricion: "Docente informática para preparar oposicións en informática teórica para nivel C2 de auxiliares administrativos de Xunta e Sergas e Estado",
            requisitos: "Informático, independente da súa titulación. Experiencia profesional na función de formador e/o experiencia profesional ou persoal na oposición e auxiliares administrativos SERGAS e/ou XUNTA. Bo coñecedor de Libre Office, Word, Excel, Access e correo electrónico e internet. Precisa implicación, bo nivel de comunicación e gusto pola formación. Capacidade para xestionar formativamente a diversidade. Capaz de motivar aos seus alumnos e organizar o traballo, dotándolles duns coñecementos e unha metodoloxía válida para aprobar o exame de informática da oposición. As clases impartiríanse en Vigo ou en teleformación.",
            condicions: null,
            contacto: "Enviar Cv a desarrollorrhh2015@gmail.com"
        },
        {
            titulo: "TÉCNICO DE CALIDADE",
            publicada: "Proxecto ILES 04/12/2024",
            empresa: "Refrescos do Atlántico",
            localidade: "Árdan, Marín",
            descricion: "Control da normativa legal en materia de alimentación da empresa. Cumprimento do sistema APPCC en toda a liña de produción. Controlar e dirixir os laboratorios da empresa. Deseño da política de mostraxe de superficies, materias primas, produtos... Establecer os parámetros analíticos a analizar e os estudos de vida útil de cada produto.",
            requisitos: "Coñecementos en IFS, normas ISO, BRC e a APPCC. Carné de conducir. Residencia zona Pontevedra ou arredores.",
            condicions: "Contrato a Xornada completa",
            contacto: "Enviar Cv a rhh@refrescosdelatlantico.com"
        },
        {
            titulo: "ADMINISTRATIVO/A DE OPERATIVA",
            publicada: "Proxecto ILES 22/01/2025",
            empresa: "Ilunion",
            localidade: "Vigo",
            descricion: "Xestión documental, resolución de incidencias, atención a persoas traballadoras, manexo de ferramentas de xestión de persoal",
            requisitos: "Certificado de discapacidade igual o superior a 33% ou incapacidade permanente total",
            condicions: "Contrato incial temporal. Xornada completa",
            contacto: "Enviar Cv a rprieto@ilunion.com aperezr@ilunion.com"
        },
        {
            titulo: "VENDEDOR/A ATLÉTICO",
            publicada: "18/02/25",
            empresa: "Decathlon",
            localidade: "Vigo",
            descricion: "Vendedor/a deportista de running.",
            requisitos: "Deportista que incorpore o deporte como práctica habitual. Dispoñibilidade horaria incluíndo fins de semana.",
            condicions: "Xornada parcial presencial",
            contacto: "https://decathlon.talentclue.com/es/node/114392551/4590"
        },
        {
            titulo: "VENDEDOR/A ATLÉTICO",
            publicada: "15/01/25",
            empresa: "Decathlon",
            localidade: "Nigrán",
            descricion: "Vendas o detalle",
            requisitos: "Deportista que incorpore o deporte como práctica habitual",
            condicions: "Presencial",
            contacto: "https://decathlon.talentclue.com/es/node/103780424/4590"
        },
        {
            titulo: "VENDEDOR/A DEPORTISTA CICLISMO",
            publicada: "27/01/25",
            empresa: "Decathlon",
            localidade: "Vigo",
            descricion: "Vendedor/a Deportista Ciclismo",
            requisitos: "Deportista que incorpore o deporte como práctica habitual. Dispoñibilidade horaria incluíndo fins de semana. Estudos universitarios ou ciclo formativo superior (Valorable). Vale a experiencia no mundo do ciclismo e ser apaixonado por el.",
            condicions: "Contrato de sustitución a tempo parcial",
            contacto: "https://decathlon.talentclue.com/es/node/113205775/4590"
        },
        {
            titulo: "ADMINISTRATIVO/A",
            publicada: "20/02/25",
            empresa: "Amegrove S. Coop. Galega",
            localidade: "O Grove",
            descricion: "Administrativo para contrato de sustitución.",
            requisitos: "Formación en Contabilidade, Administración, Finanzas ou similar. Experiencia en funcións similares. Capacidade para traballar en equipo e con eficacia. Orientación á resolución.",
            condicions: "Horario de luns a sábado (horarios por turnos semanais)",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "FORMADOR/A EN COMPETENCIAS DIGITALES BÁSICAS",
            publicada: "21/01/25",
            empresa: "Fundación Cibervoluntarios",
            localidade: "Redondela, GAL",
            descricion: "Impartir obradoiros formativos sobre competencias dixitais básicas. Realizar informes de asistencia e outros aspectos administrativos. Adaptar os contidos formativos e as sesións aos distintos niveis de coñecemento e grupos de idade.",
            requisitos: "Formación en Educación (Pedagoxía, Docencia, Educación Social, Animación Sociocultural) e/ou Tecnoloxía. Experiencia con nenos e adolescentes; impartindo obradoiros; desenvolvemento da formación; ensino, etc. (polo menos 6 meses). Imprescindible carné de conducir e vehículo propio. Ter certificado de delitos sexuais. Competencias: Habilidades de comunicación; Habilidades sociais; Coñecementos pedagóxicos; Adaptación ao contexto formativo.",
            condicions: "Contrato fixo descontinuo a tempo parcial. Xornada laboral de 10 a 30 horas semanais. Salario segundo convenio de formación non regrada. Modalidade: presencial. Pago da quilometraxe.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "AUXILIAR DE FÁBRICA T.MAÑANA",
            publicada: "20/02/25",
            empresa: "Empatif Staffing",
            localidade: "Caldas de Reis, GAL",
            descricion: "Manipulación do produto, ben sexa freír, limpiar, preparar etc. Dar servizo na liña de produción. Rotación entre os diferentes postos da fábrica.",
            requisitos: "Experiencia de al menos 6 meses en posto similar. Posibilidade de desprazarse ata a fábrica. Habilidades de coordinación e atención ao detalle. Saber traballar en equipo. Educación mínima: ESO.",
            condicions: "Salario segundo convenio. Horarios fixo de maña, fixo de tarde, fixo de noite. Contrato: Temporal.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "OPERARIO/A PRODUCCIÓN CONSERVERA",
            publicada: "20/02/25",
            empresa: "Faster Empleo",
            localidade: "O Grove, GAL",
            descricion: "Liña de subministración de materias primas. Limpeza de peixe fresco. Limpeza manual con coitelo de atún cocido. Envasado manual ou con máquina de mercadoría. Etiquetado e paletización do produto acabado.",
            requisitos: "Experiencia en conserva que desempeñou diferentes e versátiles funcións dentro da área de produción. Preferiblemente con experiencia en envasado manual (poñendo o produto na lata). Experiencia en limpeza de atún, sardiña, ventresca, xurelo, mexillón, berberecho, etc.",
            condicions: "Contrato temporal. Horario de luns a venres, quendas rotativas de mañá (de 7.00 a 15.00 horas) e de tarde (de 15.00 a 23.00 horas). Salario: 9,67 €/hora.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "ENGLISH TEACHER",
            publicada: "20/01/25",
            empresa: "Kids&Us",
            localidade: "O Grove, GAL",
            descricion: "English teacher",
            requisitos: "Teaching experience is an advantage, but is not mandatory. Advanced or Proficiency Level in English. A team player: If you've played on a team, you'll fit right in!",
            condicions: "Determined contract for the school year. Part-time job. Starts September 2nd.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "VENDEDOR/A",
            publicada: "14/01/25",
            empresa: "La Casa de las Carcasas",
            localidade: "Pontevedra",
            descricion: "Serás o encargado de xerar unha experiencia de venda única para os nosos clientes. Ensinarémosche novas técnicas de asesoramento para axudar aos nosos clientes en todo o que precisen. Xunto co teu equipo, apoiarás a xestión do stock, a visual e a orde da tenda. Obterás un salario competitivo no sector e comisións de vendas. Terá descontos exclusivos en todos os nosos produtos.",
            requisitos: "Non necesitas experiencia, imos formarte!",
            condicions: null,
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "ANALISTA PROGRAMADOR/A JAVA",
            publicada: "09/01/25",
            empresa: "MALTHUS DARWIN",
            localidade: "Pontevedra, GAL",
            descricion: "Análise funcional e técnica dos requisitos. Capacidade de descompoñer tarefas en unidades asignables aos programadores. Realización e seguimento do ciclo de desenvolvemento e proba de pezas de software. Garantía de calidade e mellora continua do software. Xestión da documentación e xestión da configuración. Avaliación e implantación de melloras e corrección de erros e soporte técnico do software. Deseñar e realizar probas funcionais para cubrir casos de uso. Informar ao equipo de responsables do proxecto e analistas encargados das tarefas de desenvolvemento asignadas. Traballo en equipo.",
            requisitos: "Polo menos tres anos de experiencia nun posto similar. Experiencia con Java, Spring e Hibernate.",
            condicions: "Posto estable con contrato indefinido en formato 100% teletraballo.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "REPARTIDOR/A DE PIZZAS PARA PONTEVEDRA",
            publicada: "03/01/25",
            empresa: "Telepizza",
            localidade: "Pontevedra, GAL",
            descricion: "Repartidor/a de pizzas",
            requisitos: "Educación mínima: ESO. Adulto. Permiso de conducir ou ciclomotor. Permiso de traballo en regra. A experiencia de condución de ciclomotores é esencial.",
            condicions: "Contrato parcial indefinido. Dende 12 horas semanais. Flexibilidade horaria.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "MOZO/A ALMACÉN",
            publicada: "11/02/25",
            empresa: "Faster Empleo",
            localidade: "Meaño, GAL",
            descricion: "Recepción de pedidos. Colocación de material. Elaboración de pedidos de venda. Atención ao cliente, control de stock e albaranes.",
            requisitos: "Conducir unha carretilla elevadora eléctrica (carné de carretilla elevadora). Orientación comercial. Habilidades de comunicación, negociación orientada á venda. Valorarase experiencia no sector da construción, ferretería, almacén de abastos con tenda, etc.",
            condicions: "Contrato temporal. Horario: 8 horas/día no tramo entre as 08:00 e as 18:00 horas. Salario: 9,36 €/hora.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "DESARROLLADOR BACKEND CON CONOCIMIENTOS DE DEVOPS",
            publicada: "04/02/25",
            empresa: "Key Talent Indicator",
            localidade: "Pontevedra",
            descricion: "-Desenvolvemento de solucións backend en Python e Java.\n-Implantación e mantemento de contedores Docker.\n-Xestión de ambientes e despregamentos mediante Docker Compose e configuración de variables de ambiente.\n-Administración e manipulación de ficheiros, volumes e accesos en contornas Linux.\n-Control de versións e colaboración en equipo mediante GIT.\n-Optimización de procesos DevOps e soporte de infraestrutura.",
            requisitos: "-Experiencia no desenvolvemento de backend con Python e Java.\n-Capacidade de traballar en contornas Linux desde a consola.\n-Coñecementos de xestión de volumes, acceso SSH e manipulación de ficheiros.\n-Experiencia con Docker e ferramentas relacionadas como Docker Compose e configuración de ambientes (.env, etc.).\n-Xestión de GIT para control de versións e traballo colaborativo.",
            requisitosValorables: "-Coñecemento de bases de datos PostgreSQL.\n-Experiencia con Kubernetes (especialmente en contornas de desenvolvemento e con vistas a futuras implantacións en K8s).\n-Familiaridade con Apache Airflow, incluíndo integración de variables, xestión de simultaneidade e adición de bibliotecas.\n-Coñecemento de Apache NiFi para fluxos de datos.\n-Experiencia con Hasura (motor GraphQL).\n-Xestión de GeoServer para servizos xeoespaciais.",
            condicions: "Non figuran",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=1&so=m.h.s"
        },
        {
            titulo: "JEFE/A PRODUCCIÓN (PROYECTO FERROVIARIO)",
            publicada: "07/01/25",
            empresa: "Grupo Aldesa",
            localidade: "Pontevedra, GAL",
            descricion: "Planificación técnica de obras.\n-Análise e control de custos.\n-Optimización dos tempos de execución.\n-Organización de subcontratas e provedores.\n-Negociacións e contratos con empresas subcontratadas.",
            requisitos: "-Enxeñaría Civil ou Enxeñaría Civil, Canles e Portos.\n-Experiencia de polo menos 3 anos como xefe de produción de obra civil.\n-Dispoñibilidade para traballar na provincia de Vigo, durante a duración do proxecto (aproximadamente dous anos e medio).\n-Dispoñibilidade nacional de mobilidade.",
            condicions: "-Estabilidade: Contratar nun ambiente de traballo agradable e duradeiro.\n-Formación constante: Plans de formación adaptados á súa función.\n-Retribución flexible: transporte, restaurante, seguro de saúde e gardería.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=3&so=m.h.s"
        },
        {
            titulo: "ENXEÑEIRO DE PROCESOS ELECTROMECÁNICOS",
            publicada: "19/02/25",
            empresa: "mih360",
            localidade: "Pontevedra, GAL",
            descricion: "-Mellora e normalización de procesos.\n-Capex e o deseño do plan de transformación industrial.\n-O deseño e implantación dun sistema de mellora continua Lean.\n-Rediseñar o fluxo interno da planta e optimizar a loxística interna.\n-Participar nas actividades diarias de mantemento.",
            requisitos: "-Formación: Enxeñaría.\n-Experiencia: 3-5 anos.\n-Idiomas: inglés medio.\n-Vehículo propio para desprazarse ao traballo e residencia nunha zona próxima á cidade da Coruña, Lugo ou Santiago.",
            condicions: "-Contrato indefinido por empresa.\n-Plan de desenvolvemento profesional.\n-Salario: A convenir segundo experiencia aportada.",
            contacto: "https://www.monster.es/trabajo/buscar?q=&where=Pontevedra%2C+Galicia&page=3&so=m.h.s"
        },
        {
            titulo: "PROFESORES DE ENSEÑANZA SECUNDARIA",
            referencia: "213591",
            publicada: "17/02/25",
            finDePrazo: "10/03/25",
            organoConvocante: "Consellería de Educación, Ciencia, Universidades e Formación Profesional",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "Doutor, licenciado, enxeñeiro ou arquitecto, ou título de grao correspondente u outros títulos equivalentes a efectos de docencia",
            requisitos: "Ver convocatoria",
            prazas: {
                total: 426,
                libres: 373,
                discapacidade: 53
            },
            ambitoXeografico: "GALICIA",
            contacto: "https://www.boe.es/boe/dias/2025/02/20/pdfs/BOE-A-2025-3350.pdf"
        },
        {
            titulo: "INSPECTORES DE EDUCACIÓN",
            referencia: "213594",
            publicada: "17/02/25",
            finDePrazo: "10/03/25",
            organoConvocante: "Consellería de Educación, Ciencia, Universidades e Formación Profesional",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "Doutor, Máster Universitario, Licenciatura, Enxeñería, Arquitectura ou título equivalente.",
            requisitos: "Ver convocatoria",
            prazas: 10,
            ambitoXeografico: "GALICIA",
            contacto: "https://www.boe.es/boe/dias/2025/02/20/pdfs/BOE-A-2025-3350.pdf"
        },
        {
            titulo: "TÉCNICO FACULTATIVO",
            referencia: "213588",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "Grao que habilite para o exercicio da profesión de mestre de educación infantil ou título de Mestre coa especialidade de Educación Infantil.",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-110225-0010_es.pdf"
        },
        {
            titulo: "MESTRES",
            referencia: "213593",
            publicada: "17/02/25",
            finDePrazo: "10/03/25",
            organoConvocante: "Consellería de Educación, Ciencia, Universidades e Formación Profesional",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "Mestre/a ou o título de grao en Mestre/a de Educación Infantil ou de Educación Primaria. Título de diplomado/a en Profesorado de Educación Xeral Básica. Título de mestre/a de Enseñanza Primaria.",
            requisitos: "Ver na convocatoria",
            prazas: {
                total: 426,
                libres: 373,
                discapacidade: 53
            },
            ambitoXeografico: "GALICIA",
            contacto: "https://www.boe.es/boe/dias/2025/02/20/pdfs/BOE-A-2025-3350.pdf"
        },
        {
            titulo: "PROFESORES ESPECIALISTAS EN SECTORES SINGULARES DA FORMACIÓN PROFESIONAL",
            referencia: "213592",
            publicada: "17/02/25",
            finDePrazo: "10/03/25",
            organoConvocante: "Consellería de Educación, Ciencia, Universidades e Formación Profesional",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "Diplomatura, arquitectura técnica, enxeñería técnica ou o título de grao, licenciatura, enseñería ou arquitectura correspondente ou outros títulos de técnico superior de formación profesional declarados equivalentes, a efectos de docencia",
            requisitos: "Ver na convocatoria",
            prazas: {
                total: 80,
                libres: 70,
                discapacidade: 10
            },
            ambitoXeografico: "GALICIA",
            contacto: "https://www.boe.es/boe/dias/2025/02/20/pdfs/BOE-A-2025-3350.pdf"
        },
        {
            titulo: "AXUDANTES DE CARÁCTER FACULTATIVO. Escala técnica de análisis de laboratorio",
            referencia: "213611",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "Técnico en Farmacia E Parafarmacia, técnico en Planta Química, técnico en Operacions de Laboratorio, técnico en Cultivos Acuícolas, técnico superior en Laboratorio Clínico y Biomédico, técnico superior en Anatomía Patológica y Citodiagnóstico, técnico superior de Laboratorio de Análisis  e de Control de Calidad, técnico superior en Química Industrial, técnico superior en Fabricación de Productos Farmacéuticos, Biotecnológicos e afins, técnico superior en Acuicultura ou equivalentes.",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-120225-0002_es.pdf"
        },
        {
            titulo: "AXUDANTES DE CARÁCTER FACULTATIVO. Escala técnica de cocina",
            referencia: "213608",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "Técnico de Cociña e Gastronomía, técnico superior en Dirección de Cociña ou equivalentes",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-110225-0008_es.html"
        },
        {
            titulo: "AXUDANTES DE CARÁCTER FACULTATIVO. Escala técnica de mantemento de servicios",
            referencia: "213612",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INGRESO LIBRE",
            titulacion: "técnico de Instalacions Frigoríficas e de Climatización, técnico de Instalacions de Producción de Calor, técnico de Mantemento Electromecánico, técnico de Instalaciones Eléctricas e Automáticas, técnico de Instalaciones de Telecomunicacións, técnico de Electromecánica de Vehículos Automóviles, técnico superior de Mantenemento de Instalacións Térmicas e de Fluidos, técnico superior de Mecatrónica Industrial, técnico superior de Sistemas Electrotécnicos e Automatizados, técnico superior de Sistemas de Telecomunicacións e Informáticos, técnico superior de Automatizacións e Robótica Industrial, técnico superior de Mantenemento Electrónico, técnico superior de Electromedicina Clínica, técnico superior de Automoción ou equivalentes.",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-110225-0009_es.pdf"
        },
        {
            titulo: "TÉCNICO DE SALUD EN ATENCIÓN PRIMARIA",
            referencia: "195455",
            publicada: "30/12/21",
            finDePrazo: "Unha vez xeradas as primeiras listas, a inscripción será aberta e permanente",
            organoConvocante: "Servicio Galego de Salud (SERGAS)",
            seleccionDe: "PERSOAL ESTATUTARIO, MILITAR, OUTRO",
            via: "ESTATUTARÍA",
            titulacion: "Título universitario oficial de graduado/a ou licenciado/a en Medicina e Ciruxía",
            requisitos: null,
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2022/20220110/AnuncioG0003-301221-0001_es.pdf"
        },
        {
            titulo: "AXENTES DO SERVIZO DE INSPECCIÓN. VIXILANCIA DE CARRETERAS",
            referencia: "213606",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INTERINIDADE",
            titulacion: "Bacharelato ou Técnico",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-120225-0011_es.pdf"
        },
        {
            titulo: "AGENTES DEL SERVICIO DE INSPECCIÓN. ESPECIALIDADE DE MOVILIDAD",
            referencia: "213610",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INTERINIDADE",
            titulacion: "Bacharelato ou Técnico",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-120225-0006_es.pdf"
        },
        {
            titulo: "AXUDANTES FACULTATIVOS. Especialidade Capataz",
            referencia: "213589",
            publicada: "14/02/25",
            finDePrazo: "25/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INTERINIDADE",
            titulacion: "Técnico en Producción AgroecolóXica, técnico en Producción Agropecuaria, técnico en Aproveitamento e Conservación do Medio Natural, técnico superior en Xestión Forestal e Medio Natural, técnico en Ganadería e Asistencia en Sanidade Animal, técnico superior en Xestión e Organización de Empresas Agropecuarias ou equivalentes.",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA"
        },
        {
            titulo: "AUXILIAR TÉCNICO. Auxiliar de cociña",
            referencia: "213619",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INTERINIDADE",
            titulacion: "Graduado en educación secundaria obligatoria ou equivalente",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-120225-0004_es.pdf"
        },
        {
            titulo: "AUXILIAR TÉCNICO. Recursos naturais e forestais",
            referencia: "213618",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INTERINIDADE",
            titulacion: "Graduado en educación secundaria obligatoria ou equivalente",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-120225-0005_es.pdf"
        },
        {
            titulo: "AUXILIAR TÉCNICO. MANTENEMENTO",
            referencia: "213614",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INTERINIDADE",
            titulacion: "Graduado en educación secundaria obligatoria ou equivalente",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-120225-0008_es.pdf"
        },
        {
            titulo: "AUXILIAR TÉCNICO DE LABORATORIO",
            referencia: "213620",
            publicada: "12/02/25",
            finDePrazo: "28/02/25",
            organoConvocante: "Consellería de Facenda e Administración Pública",
            seleccionDe: "PERSOAL FUNCIONARIO",
            via: "INTERINIDADE",
            titulacion: "Graduado en educación secundaria obligatoria ou equivalente",
            requisitos: "Ver na convocatoria",
            prazas: "Bolsa de emprego",
            ambitoXeografico: "GALICIA",
            contacto: "https://www.xunta.gal/dog/Publicados/2025/20250214/AnuncioG0597-120225-0003_es.pdf"
        }
    ];

    const cursos = [
        {
            titulo: "Organización e xestión de almacéns",
            duracion: "25/03/2025 - 06/08/2025",
            centroFormativo: "Lidera Knowledge S.L.",
            localidade: "A Guarda",
            descricion: "Organizar e controlar as operacións e fluxos de mercadorías no almacén, de acordo cos procedementos establecidos e a normativa vixente, e asegurando a calidade e optimización da rede de almacén e / ou da cadea loxística.",
            horas: "408 h",
            modalidade: "Presencial",
            horario: "9:00 - 14:00",
            contacto: "692310258"
        },
        {
            titulo: "Organización e xestión de almacéns",
            duracion: "26/05/2025 - 10/09/2025",
            centroFormativo: "Informática Jaime",
            localidade: "A Guarda",
            descricion: "Organizar e controlar as operacións e fluxos de mercadorías no almacén, de acordo cos procedementos establecidos e a normativa vixente, e asegurando a calidade e optimización da rede de almacén e / ou da cadea loxística.",
            horas: "408 h",
            modalidade: "Presencial",
            horario: "15:30 - 20:30",
            contacto: "986610363"
        },
        {
            titulo: "Busca E Xestión Da Información Dixital-Nivel Básico",
            duracion: "06/03/2025 - 21/03/2025",
            centroFormativo: "Academia Trinidad",
            localidade: "Tui",
            horas: "49 h",
            modalidade: "Presencial",
            horario: "09:00 - 14:00",
            contacto: "654825395"
        },
        {
            titulo: "Busca E Xestión Da Información Dixital-Nivel Básico",
            duracion: "12/05/2025 - 27/05/2025",
            centroFormativo: "Academia Trinidad",
            localidade: "O Rosal",
            horas: "49 h",
            modalidade: "Presencial",
            horario: "09:00 - 14:00",
            contacto: "654825395"
        },
        {
            titulo: "Cociña",
            duracion: "17/03/2025 - 29/09/2025",
            centroFormativo: "Escuela profesional de hosteleria del baixo miño, s.l.",
            localidade: "O Rosal",
            descricion: "Desenvolver os procesos de preparación previa, preparación, presentación e conservación de todo tipo de alimentos e definir ofertas gastronómicas, aplicando de xeito autónomo as técnicas correspondentes, acadando a calidade e os obxectivos económicos establecidos e respectando as normas e prácticas de seguridade e hixiene na manipulación de alimentos.",
            horas: "828 h",
            modalidade: "Presencial",
            horario: "de luns a venres de 09:00 a 15:00 h",
            contacto: "986626348"
        },
        {
            titulo: "Confección e publicación de páxinas web",
            duracion: "20/05/2025 - 29/09/2025",
            centroFormativo: "Informática Jaime",
            localidade: "Tomiño",
            descricion: "Crear e publicar páxinas web que integren textos, imaxes e outros elementos, empregando idiomas de marca e editores axeitados, segundo as especificacións e condicións de 'usabilidade' dadas, e realice os procedementos de instalación e verificación das mesmas no servidor correspondente.",
            horas: "578 h",
            modalidade: "Presencial",
            horario: "15:30 - 21:30",
            contacto: "986613216"
        },
        {
            titulo: "Desenvolvemento de aplicacións con tecnoloxías web",
            duracion: "14/05/2025 - 30/09/2025",
            centroFormativo: "Informática Jaime",
            localidade: "Tomiño",
            descricion: "Desenvolvendo compoñentes de documentos e software que constitúan aplicacións informáticas en contornos distribuídos empregando tecnoloxías web, partindo dun deseño técnico xa preparado, realizando tamén a súa verificación, documentación e implementación.",
            horas: "608 h",
            modalidade: "Presencial",
            horario: "8:45 - 14:45",
            contacto: "986613216"
        },
        {
            titulo: "Dinamización, programación e desenvolvemento de accións culturais",
            duracion: "11/04/2025 - 28/08/2025",
            centroFormativo: "Informática Jaime",
            localidade: "A Guarda",
            descricion: "Dinamizar, programar e desenvolver planificación, programación e accións culturais en espazos e organizacións dedicados á creación e consumo cultural seleccionando e organizando infraestruturas, asignando funcións aos colaboradores baixo a súa responsabilidade, dinamizando proxectos culturais, establecendo accións vinculadas a estratexias de mercado e implicando asociacións culturais.",
            horas: "498 h",
            modalidade: "Presencial",
            horario: "09:00 - 14:00",
            contacto: "986610363"
        },
        {
            titulo: "Operacións auxiliares de servizos administrativos e xerais",
            duracion: "26/03/2025 - 31/07/2025",
            centroFormativo: "Informática Jaime",
            localidade: "A Guarda",
            descricion: "Distribuír, reproducir e transmitir a información e documentación requirida nas tarefas administrativas e de xestión, internas e externas, así como realizar trámites elementais para verificar datos e documentos a petición de técnicos de nivel superior con eficacia, de acordo coas instrucións ou procedementos establecidos.",
            horas: "448 h",
            modalidade: "Presencial",
            horario: "15:30 - 20:30",
            contacto: "986610363"
        },
        {
            titulo: "Operacións auxiliares de servizos administrativos e xerais",
            duracion: "21/04/2025 - 10/09/2025",
            centroFormativo: "Informática San Benito",
            localidade: "A Guarda",
            descricion: "Distribuír, reproducir e transmitir a información e documentación requirida nas tarefas administrativas e de xestión, internas e externas, así como realizar trámites elementalis para verificar datos e documentos a petición de técnicos de nivel superior con eficacia, de acordo coas instrucións ou procedementos establecidos.",
            horas: "448 h",
            modalidade: "Presencial",
            horario: "09:00 - 14:00",
            contacto: "986608920"
        },
        {
            titulo: "Servizos auxiliares de salón de peiteado",
            duracion: "26/05/2025 - 03/09/2025",
            centroFormativo: "Ondas y Perfil S.L.",
            localidade: "O Porriño",
            descricion: "Preparar o equipamento, realizar técnicas de limpeza e acondicionamento do cabelo e do coiro cabeludo e aplicar técnicas de cambio de cor e forma, baixo a supervisión do técnico responsable, en condicións de hixiene e seguridade óptimas.",
            horas: "348 h",
            modalidade: "Presencial",
            horario: "15:00 - 20:00",
            contacto: "986337567"
        },
        {
            titulo: "Operacións auxiliares de mantemento e transporte interno na industria alimentaria",
            duracion: "27/02/2025 - 15/05/2025 // 18/03/2025 - 04/06/2025",
            centroFormativo: "MOBA SKILL TRAINING S.L",
            localidade: "Tui",
            horas: "258 h",
            modalidade: "Presencial",
            horario: "16:00 - 21:00 // 09:00 - 14:00",
            contacto: "673049378"
        },
        {
            titulo: "Socorrismo en instalacións e espazos acuáticos naturais C. A. de Galicia",
            duracion: "01/04/2025 - 25/05/2025",
            centroFormativo: "AGASP",
            localidade: "A Estrada",
            descricion: "Conseguir a formación mínima que deben xuntar os/as socorristas acuáticos/as para o seu exercicio profesional no ámbito territorial da Comunidade Autónoma de Galicia e a súa inscrición no Rexistro Profesional do personal de socorrismo, información e primeiros auxilios de Galicia.",
            horas: "240 h",
            modalidade: "Presencial",
            horario: "PROBA específica: 1 de abril as 12.30 horas / Horario curso: venes: 16.00-20.00 / sábados: 10.00-18.00 / domingos: 10.00-19.30",
            contacto: "Enlance a Xunta"
        },
        {
            titulo: "Creación de aplicacións móbiles e realidade virtual sen necesidade de programación",
            duracion: "03/03/2025 – 08/04/2025",
            centroFormativo: "UNED",
            horas: "60 h",
            modalidade: "On-line",
            contacto: "913867276"
        },
        {
            titulo: "Desenvolvemento de Proxectos para o Internet das Cousas",
            duracion: "03/03/2025 – 08/04/2025",
            centroFormativo: "UNED",
            horas: "60 h",
            modalidade: "On-line",
            contacto: "913867276"
        },
        {
            titulo: "Creación de aplicacións móbiles para o Internet das Cousas sen necesidade de programación",
            duracion: "03/03/2025 – 08/04/2025",
            centroFormativo: "UNED",
            horas: "60 h",
            modalidade: "On-line",
            contacto: "913867276"
        },
        {
            titulo: "Creación de aplicacións móbiles y realidade virtual para o turismo sen necesidade de programación",
            duracion: "03/03/2025 – 08/04/2025",
            centroFormativo: "UNED",
            horas: "60 h",
            modalidade: "On-line",
            contacto: "913867276"
        },
        {
            titulo: "Prevención de Riscos Laborais - Nivel básico",
            duracion: "11/03/2025 – 09/05/2025",
            centroFormativo: "ISSGA",
            horas: "60 h",
            modalidade: "On-line",
            contacto: "Enlace a Xunta"
        }
    ];

    // Función para generar tablas de ofertas
    const generarTablaOfertas = () => {
        const ofertasContainer = document.getElementById('ofertas-container');
        if (!ofertasContainer) return; // Si no existe el contenedor, salir

        ofertas.forEach(oferta => {
            const table = document.createElement('table');

            // Título da oferta
            const tituloRow = document.createElement('tr');
            const tituloHeader = document.createElement('th');
            tituloHeader.textContent = oferta.titulo;
            tituloHeader.setAttribute('colspan', '2');
            tituloRow.appendChild(tituloHeader);
            table.appendChild(tituloRow);

            // Lista de todos los campos posibles en la oferta
            const campos = {
                'Referencia': oferta.referencia,
                'Publicada': oferta.publicada,
                'Fin de prazo': oferta.finDePrazo,
                'Órgano convocante': oferta.organoConvocante,
                'Selección de': oferta.seleccionDe,
                'Vía': oferta.via,
                'Titulación': oferta.titulacion,
                'Requisitos': oferta.requisitos,
                'Prazas': oferta.prazas,
                'Ámbito xeográfico': oferta.ambitoXeografico,
                'Empresa': oferta.empresa,
                'Localidade': oferta.localidade,
                'Descrición': oferta.descricion,
                'Condicións': oferta.condicions,
                'Contacto': oferta.contacto
            };

            // Agregar a la tabla solo los campos que tienen valor
            Object.entries(campos).forEach(([label, value]) => {
                if (value) {
                    const row = document.createElement('tr');
                    const labelCell = document.createElement('th');
                    const valueCell = document.createElement('td');

                    labelCell.textContent = label;

                    if (label === 'Contacto') {
                        const link = document.createElement('a');
                        link.href = value;
                        link.textContent = 'Ver enlace';
                        link.target = '_blank';
                        valueCell.appendChild(link);
                    } else {
                        valueCell.textContent = value;
                    }

                    row.appendChild(labelCell);
                    row.appendChild(valueCell);
                    table.appendChild(row);
                }
            });

            ofertasContainer.appendChild(table);
        });
    };

    // Función para generar tablas de cursos
    const generarTablaCursos = () => {
        const cursosContainer = document.getElementById('cursos-container');
        if (!cursosContainer) return; // Si no existe el contenedor, salir

        cursos.forEach(curso => {
            const table = document.createElement('table');

            // Título do curso
            const tituloRow = document.createElement('tr');
            const tituloHeader = document.createElement('th');
            tituloHeader.textContent = curso.titulo;
            tituloHeader.setAttribute('colspan', '2');
            tituloRow.appendChild(tituloHeader);
            table.appendChild(tituloRow);

            // Lista de todos os campos posibles no curso
            const campos = {
                'Duración': curso.duracion,
                'Centro Formativo': curso.centroFormativo,
                'Localidade': curso.localidade,
                'Descrición': curso.descricion,
                'Horas': curso.horas,
                'Modalidade': curso.modalidade,
                'Horario': curso.horario,
                'Contacto': curso.contacto
            };

            // Agregar á tabla só os campos que teñen valor
            Object.entries(campos).forEach(([label, value]) => {
                if (value) {
                    const row = document.createElement('tr');
                    const labelCell = document.createElement('th');
                    const valueCell = document.createElement('td');

                    labelCell.textContent = label;

                    if (label === 'Contacto' && value.startsWith('http')) {
                        const link = document.createElement('a');
                        link.href = value;
                        link.textContent = 'Ver enlace';
                        link.target = '_blank';
                        valueCell.appendChild(link);
                    } else {
                        valueCell.textContent = value;
                    }

                    row.appendChild(labelCell);
                    row.appendChild(valueCell);
                    table.appendChild(row);
                }
            });

            cursosContainer.appendChild(table);
        });
    };

    // Llamar a las funciones para generar las tablas
    generarTablaOfertas();
    generarTablaCursos();
});