const defaultSpecialties = [
  {
    specialty: { name: 'DIAGNOSIS' },
    procedures: [
      { code: '81000065', name: 'Consulta Odontológica Inicial' },
      { code: '81000049', name: 'Consulta Odontológica de Urgência' },
      { code: '81000073', name: 'Consulta Odontológica para Avaliação técnica de Auditoria / Perícia' },
    ],
  },
  {
    specialty: { name: 'RADIOLOGY' },
    procedures: [
      { code: '81000421', name: 'Radiografia Periapical' },
      { code: '81000375', name: 'Radiografia Interproximal–Bite-Wing' },
      { code: '81000383', name: 'Radiografia Oclusal' },
      { code: '81000430', name: 'Radiografia Postero-anterior' },
      { code: '81000340', name: 'Radiografia da ATM' },
      { code: '81000405', name: 'Radiografia Panorâmicade mandíbula / maxila(ortopantomografia)' },
      { code: '81000480', name: 'Telerradiografia com  Traçado Cefalométrico' },
      { code: '81000472', name: 'Telerradiografia' },
      { code: '81000367', name: 'Radiografia da mão e punho–carpal' },
      { code: '81000308', name: 'Modelos Ortodônticos' },
      { code: '81000456', name: 'Slides' },
      { code: '81000278', name: 'Fotografia' },
      { code: '81000529', name: 'Tomografia Convencional – Linear ou Multi-Direcional' },
      { code: '81000413', name: 'Radiografia Panorâmica de Mandíbula / Maxila(ortopantomografia) com Traçado Cefalométrico' },
    ],
  },
  {
    specialty: { name: 'PREVENTION' },
    procedures: [
      { code: '84000198', name: 'Profilaxia –Polimento Coronário' },
      { code: '84000090', name: 'AplicaçãoTópica de Flúor' },
      { code: '85300047', name: 'Raspagem Supra - Gengival' },
      { code: '84000163', name: 'Controle de Biofilme(Placa Bacteriana)' },
    ],
  },
  {
    specialty: { name: 'PEDIATRICS' },
    procedures: [
      { code: '84000112', name: 'Aplicação Tópica de Verniz Fluoretado' },
      { code: '84000074', name: 'Aplicação de Selante de Fossulas e Fissuras' },
      { code: '84000058', name: 'Aplicação de Selante –Técnica Invasiva' },
      { code: '84000031', name: 'Aplicação de Cariostático' },
      { code: '84000201', name: 'Remineralizacão' },
      { code: '85100137', name: 'Restauração em Ionômero de vidro,' },
      { code: '83000135', name: 'Restauração Atraumática em dente decíduo,' },
      { code: '83000046', name: 'Coroa deAço em dente decíduo,' },
      { code: '85100013', name: 'Capeamento Pulpar direto,' },
      { code: '83000127', name: 'Pulpotomia em dente decíduo,' },
      { code: '83000151', name: 'Tratamento Endodôntico em dente decíduo' },
      { code: '83000089', name: 'Exodontia de Decíduos,' },
      { code: '81000014', name: 'Condicionamento em Odontologia,' },
      { code: '82001707', name: 'Ulectomia,' },
      { code: '87000024', name: 'Atividade Educativa para Pais e / ou cuidadores' },
    ],
  },
  {
    specialty: { name: 'DENTIST' },
    procedures: [
      { code: '85100099', name: 'Restauração de Amálgama – 1 face' },
      { code: '85100102', name: 'Restauração de Amálgama – 2 faces' },
      { code: '85100110', name: 'Restauração de Amálgama – 3 faces' },
      { code: '85100129', name: 'Restauração de Amálgama – 4 faces' },
      { code: '85100196', name: 'Restauração de Resina Fotopolimerizável – 1 faces' },
      { code: '85100200', name: 'Restauração de Resina Fotopolimerizável– 2 faces' },
      { code: '85100218', name: 'Restauração de Resina Fotopolimerizável – 3 ou 4 faces' },
      { code: '85100064', name: 'Faceta Direta em Resina Fotopolimerizável' },
      { code: '90060322', name: 'Núcleo de Preenchimento em Ionomero de Vidro' },
      { code: '85400211', name: 'Núcleo de Preenchimento' },
      { code: '90060325', name: 'Pinos de retenção(excluindo a restauração)' },
      { code: '85300020', name: 'Imobilização Dentária em Dentes Permanentes' },
      { code: '85400025', name: 'Ajuste Oclusal por Desgaste Seletiv' },
    ],
  },
  {
    specialty: { name: 'ENDODONTICS' },
    procedures: [
      { code: '85200166', name: 'Tratamento Endodôntico Unirradicular' },
      { code: '85200140', name: 'Tratamento Endodôntico Birradicular' },
      { code: '85200158', name: 'Tratamento Endodôntico Multirradicular' },
      { code: '90070413', name: 'Tratamento Endodôntico 04 condutos' },
      { code: '85200115', name: 'Retratamento Endodôntico Unirradicular' },
      { code: '85200093', name: 'Retratamento Endodôntico Birradicular' },
      { code: '85200107', name: 'Retratamento Endodôntico Multirradicular' },
      { code: '90070417', name: 'RetratamentoEndodôntico 04 condutos' },
      { code: '85200123', name: 'Tratamento de PerfuraçãoEndodontic' },
      { code: '85200077', name: 'Remoção de Núcleo Intrarradicula' },
      { code: '90070420', name: 'Capeamento Pulpar(excluindo restauração final)' },
      { code: '85200042', name: 'Pulpotomia' },
      { code: '85200018', name: 'Clareamento de Dente Desvitalizado' },
      { code: '85200026', name: 'Preparo para Núcleo Intrarradicular' },
      { code: '85200131', name: 'Tratamento Endodôntico de Dente com Rizogenese Incompleta' },
      { code: '85200034', name: 'Pulpectomia' },
    ],
  },
  {
    specialty: { name: 'PERIODONTICS' },
    procedures: [
      { code: '85300039', name: 'Raspagem Sub - Gengival / Alisamento Radicular' },
      { code: '90080511', name: 'Tratamento não cirúrgico da Periodontite avançada p / seguimento' },
      { code: '85300063', name: 'Tratamentode Obscesso Periodontal Agudo' },
      { code: '85300012', name: 'Dessensibilização Dentária - p / segmento' },
      { code: '85300055', name: 'Remoção Fatores de Retenção do Biofilme Dental e Placa Bacteriana' },
      { code: '82000921', name: 'Gengivectomia' },
      { code: '82000417', name: 'Cirurgia Periodontal a Retalho' },
      { code: '82000557', name: 'Cunha Proximal' },
      { code: '82000190', name: 'Aprofundamento / Aumento de vestíbulo' },
      { code: '82000689', name: 'Enxerto Pediculado' },
      { code: '82000662', name: 'Enxerto Gengival Livre' },
      { code: '82001073', name: 'Odonto - Secção' },
      { code: '82000069', name: 'Amputação Radicular s / Obturação Retrógrada' },
      { code: '82000050', name: 'Amputação Radicular c / Obturação Retrógrada' },
    ],
  },
  {
    specialty: { name: 'PROSTHESIS' },
    procedures: [
      { code: '90090610', name: 'Planejamento em Prótese' },
      { code: '81000243', name: 'Diagnóstico por meio de encerramento' },
      { code: '90090612', name: 'Ajuste Oclusal Protético' },
      { code: '85400556', name: 'Restauração Metálica Fundida' },
      { code: '85400513', name: 'Restauração em Cerâmica Pura –Inlay' },
      { code: '85400521', name: 'Restauração em Cerâmica Pura –Onlay' },
      { code: '85400505', name: 'Remoção de Trabalho Protético' },
      { code: '85400467', name: 'Recimentação de Trabalho Protético' },
      { code: '85400220', name: 'Núcleo  Metálico Fundido' },
      { code: '85400084', name: 'Coroa Provisóriasem Pino' },
      { code: '85400076', name: 'Coroa Provisória com Pino' },
      { code: '85400475', name: 'Reembasamentode Coroa Provisória' },
      { code: '85400092', name: 'Coroa Total Acrílica Prensada' },
      { code: '85400106', name: 'Coroa Total em Cerâmica Pura' },
      { code: '85400157', name: 'Coroa Total Metalo - Cerâmica' },
      { code: '85400173', name: 'Coroa Total Metaloplástica Resina Acrílica' },
      { code: '85400149', name: 'Coroa Total Metálica' },
      { code: '90090626', name: 'Coroa 3 / 4 ou 4 / 5' },
      { code: '85400181', name: 'Faceta em Cerâmica Pura' },
      { code: '85400335', name: 'Prótese Parcial Fixa em Metalo Cerâmica' },
      { code: '85400343', name: 'PróteseParcial Fixa em Metalo Plástica' },
      { code: '85400289', name: 'Prótese Fixa Adesiva Direta(Prov.)' },
      { code: '85400300', name: 'Prótese Fixa Adesiva Indireta Metalo - Cerâmica(até 3 elementos)' },
      { code: '85400319', name: 'Prótese Fixa Adesiva Indireta Metalo - Plástica' },
      { code: '85400394', name: 'Prótese Parcial Removível Provisória em Acrílico comou semGrampos' },
      { code: '85400386', name: 'Prótese Parcial Removível comGrampos Bilateral' },
      { code: '85400378', name: 'Prótese Parcial Removívelcom Encaixes de Precisão ou de Semi Precisão' },
      { code: '90090636', name: 'Encaixe Fêmea ou Macho por Elemento' },
      { code: '85400483', name: 'Reembasamentode Prótese Total ou Parcial –imediato(em consultório)' },
      { code: '85400408', name: 'Prótese Total' },
      { code: '85400424', name: 'Prótese Total Incolor' },
      { code: '85400416', name: 'Prótese Total Imediata' },
      { code: '85400491', name: 'Reembasamento de Prótese Total ou Parcial –imediato(em laboratório)' },
      { code: '85400203', name: 'Guia Cirúrgico para Prótese Imediata' },
      { code: '90090645', name: 'Jig ou Front - Plato' },
      { code: '85400050', name: 'Conserto em Prótese Total(em Consultório e em Laboratório)' },
      { code: '85400246', name: 'Órtese Miorrelaxante(Placa Oclusal Estabilizadora)' },
    ],
  },
  {
    specialty: { name: 'SURGERY' },
    procedures: [
      { code: '82000298', name: 'Bridectomia' },
      { code: '82000026', name: 'Acompanhamento de Tratamento / Procedimento Cirúrgico em Ontologia' },
      { code: '82000875', name: 'ExodontiaSimples de Permanente' },
      { code: '82000816', name: 'Exodontia aRetalho' },
      { code: '82000859', name: 'Exodontia de Raiz Residual' },
      { code: '82000034', name: 'Alveoloplastia' },
      { code: '82000239', name: 'Biópsia de Boca' },
      { code: '82000247', name: 'Biópsia de GlândulaSalivar' },
      { code: '82000255', name: 'Biópsia de Lábio' },
      { code: '82000263', name: 'Biópsia de Língua' },
      { code: '82000271', name: 'Biópsia de Mandíbula' },
      { code: '82000280', name: 'Biópsia de Maxila' },
      { code: '82001154', name: 'Reconstrução de Sulco Gengivo - Labial' },
      { code: '82000182', name: 'Apicetomia Unirradiculares sem Obturação Retrógrada' },
      { code: '82000174', name: 'Apicetomia UnirradicularescomObturação Retrógrada' },
      { code: '82000085', name: 'Apicetomia Birradiculares sem Obturação Retrógrada' },
      { code: '82000077', name: 'Apicetomia BirradicularescomObturação Retrógrada' },
      { code: '82000166', name: 'Apicetomia Multirradiculares sem Obturação Retrógrada' },
      { code: '82000158', name: 'Apicetomia Multirradiculares com Obturação Retrógrada' },
      { code: '82000883', name: 'Frenulectomia Labial' },
      { code: '82000905', name: 'Frenulotomia Labial' },
      { code: '82000891', name: 'Frenulectomia Lingual' },
      { code: '82000913', name: 'Frenulotomia Lingual' },
      { code: '82001545', name: 'Tratamento Cirúrgico de Bridas Constritivas da Região Buco-Maxilo-Facial' },
      { code: '82001286', name: 'Remoção de Dentes Inclusos / Impactados' },
      { code: '82001367', name: 'Remoção de Odontoma' },
      { code: '82001596', name: 'Tratamento Cirúrgico de Tumores Benignos de Tecidos Osseos / Cartinagilosos na Região Buco-Maxilo-Facial-Osteoma' },
      { code: '82000786', name: 'Exerese ou Excisão de Cistos Odontológicos' },
      { code: '82000794', name: 'Exerese ou Excisão de Mucocele' },
      { code: '82000778', name: 'Exerese ou Excisão de Cálculo Salivar' },
      { code: '82001022', name: 'Incisão e Drenagem Extra - Oral de Abscesso, Hematoma e / ou Flegmão da Região Buco-Maxilo-Facial' },
    ],
  },
  {
    specialty: { name: 'ORTHODONTICS' },
    procedures: [
      { code: '86000098', name: 'Aparelho Ortodôntico Fixo' },
      { code: '90110814', name: 'Anéis ortodônticos c / gancho' },
      { code: '86000535', name: 'Placa Lábio-Ativa(Bumper)' },
      { code: '86000055', name: 'Aparelho Extra - Bucal' },
      { code: '83000097', name: 'Mantenedor de Espaço Fixo' },
      { code: '83000100', name: 'Mantenedor de Espaço Removível' },
      { code: '86000390', name: 'Mentoneira' },
      { code: '86000551', name: 'Plano Inclinado' },
      { code: '86000560', name: 'Quadrihélice' },
      { code: '86000373', name: 'Manutenção de Aparelho Ortodôntico –Aparelho Removível' },
      { code: '86000357', name: 'Manutenção de Aparelho Ortodôntico –Aparelho Fixo' },
      { code: '86000411', name: 'Monobloco' },
      { code: '90110837', name: 'Modelo de estudos e plano de tratamento' },
      { code: '86000462', name: 'Placa Hawley' },
      { code: '86000470', name: 'Placa Hawley–com Torno Expansor' },
      { code: '86000144', name: 'Arco Lingual' },
      { code: '86000209', name: 'Contenção Fixa–por Arcada' },
      { code: '86000225', name: 'Disjuntor Palatino–Hyrax' },
      { code: '86000233', name: 'Disjuntor Palatino–Macnamara' },
      { code: '86000403', name: 'Modelador Elástico de Bimler' },
      { code: '86000179', name: 'Bionator de Balters' },
      { code: '86000110', name: 'Aparelho Ortodôntico Fixo Metálico Parcial' },
      { code: '86000195', name: 'Botão de Nance Fixo Superior' },
      { code: '86000314', name: 'Grade Palatina Fixa' },
      { code: '86000322', name: 'Grade Palatina Removível' },
      { code: '86000578', name: 'Regulador de função Frankel' },
      { code: '86000160', name: 'Barra Transpalatina Removível' },
      { code: '86000152', name: 'Barra Transpalatina Fixa' },
      { code: '86000284', name: 'Distalizador tipo Jones Jig' },
      { code: '86000330', name: 'Herbst Encapsulado' },
      { code: '86000438', name: 'Pistas Diretas de Planas' },
      { code: '86000381', name: 'Máscara Facial–Delaire e Tração Reserva' },
      { code: '86000489', name: 'Placa de Mordida Ortodôntica' },
      { code: '86000128', name: 'Aparelho Removívelcom Alças Bionator Invertida ou de Escheler' },
      { code: '86000047', name: 'Aparelho de Thurow' },
      { code: '90110863', name: 'Aparelho de Disfunção Têmpero-Mandibular(DTM)' },
      { code: '86000250', name: 'Distalizador de Hilgers' },
    ],
  },
  {
    specialty: { name: 'IMPLANTOLOGY' },
    procedures: [
      { code: '82000980', name: 'Implante Ósseo Integrado' },
      { code: '85500038', name: 'Coroa Total Metalo - Cerâmica sobre Implante' },
      { code: '82001456', name: 'Sedação Medicamentosa Ambulatorial em Odontologia' },
      { code: '85500062', name: 'Guia Cirúrgico para Implante' },
      { code: '82001049', name: 'Levantamento de Seio Maxilar com Osso Autógeno' },
      { code: '85500178', name: 'Protocolo Branemark 5 Implantes' },
      { code: '85500160', name: 'Protocolo Branemark 4 Implantes' },
      { code: '90120935', name: 'Elemento suspenso de prótese fixa em metalo ceramica–Pontico' },
    ],
  },
];

export default defaultSpecialties;
