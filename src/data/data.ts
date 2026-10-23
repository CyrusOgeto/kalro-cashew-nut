// src/data/data.ts

export type TableData = {
 columns?: string[];
 rows: string[][] | [string, string][];
};

export type Section = {
 id: string;
 title: string;
 body?: string;
 table?: TableData;
 gaps?: string[];
 subsections?: Section[];
};

export const abbreviationTable = [
 { acronym: 'TIMP', description: 'Technologies, Innovations, and Management Practices' },
 { acronym: 'GAP', description: 'Good Agricultural Practices' },
 { acronym: 'HACCP', description: 'Hazard Analysis Critical Control Points' },
 { acronym: 'ISFM', description: 'Integrated Soil Fertility Management' },
 { acronym: 'IMM', description: 'Integrated Manure Management' },
 { acronym: 'KALRO', description: 'Kenya Agricultural and Livestock Research Organization' },
 { acronym: 'ASAL', description: 'Arid and Semi-Arid Lands' },
 { acronym: 'IPM', description: 'Integrated Pest Management' },
 { acronym: 'KCSAP', description: 'Kenya Climate Smart Agriculture Project' },
 { acronym: 'NAVCDP', description: 'National Agricultural Value Chain Development Project' },
 { acronym: 'PDO', description: 'Project Development Objective' },
 { acronym: 'VMG', description: 'Vulnerable and Marginalized Groups' },
 { acronym: 'FFBS', description: 'Farmer Field and Business School' },
 { acronym: 'AIP', description: 'Agricultural Innovation Platforms' },
 { acronym: 'KEPHIS', description: 'Kenya Plant Health Inspectorate Services' },
 { acronym: 'MoALD', description: 'Ministry of Agriculture and Livestock Development' },
 { acronym: 'AFA', description: 'Agriculture and Food Authority' },
 { acronym: 'MESPT', description: 'Micro Enterprise Support Programme Trust' },
 { acronym: 'CA', description: 'Conservation Agriculture' },
 { acronym: 'IWM', description: 'Integrated Weed Management' },
 { acronym: 'PCPB', description: 'Pest Control Products Board' },
 { acronym: 'KEBS', description: 'Kenya Bureau of Standards' },
 { acronym: 'AAK', description: 'Agrochemicals Association of Kenya' },
 { acronym: 'MAP', description: 'Modified Atmosphere Packaging' },
 { acronym: 'PTO', description: 'Power Take Off' },
 { acronym: 'CIG', description: 'Common Interest Group' },
 { acronym: 'CIDP', description: 'County Integrated Development Planning' },
];

export const disclaimer = `The information presented in this inventory of Technologies, Innovations and Management Practices
(TIMPs) book is for advisory use only. Users of this book should verify site-specific details that relate
to their agro-climatic zones from their area agricultural extension officers.

© Kenya Agricultural and Livestock Research Organization 2024. All rights reserved. No part of this book may be
reproduced, stored in database systems, transcribed in any form or by any means, electronic, mechanical,
photocopying, recording or otherwise without prior written permission of the publisher.`;

export const cashewData: Section[] = [
 // ============================================================
 // 1.0 INTRODUCTION
 // ============================================================
 {
 id: '1',
 title: '1.0 Introduction',
 subsections: [
 {
 id: '1.1',
 title: '1.1 Background Information',
 body: `The Kenya Climate Smart Agriculture Project (KCSAP) is a Government of Kenya/World Bank supported project under the State Department for Crops Development in the Ministry of Agriculture and Livestock Development (MoALD). The Project Development Objective (PDO) is "to increase agricultural productivity and build resilience to climate change risks in targeted smallholder farming and pastoral communities in Kenya, and in the event of an Eligible Crisis or Emergency, to provide immediate and effective response". This objective will be achieved through utilization of climate-smart agriculture (CSA) technologies, innovations and management practices (TIMPs). Cashew TIMPs are the best for adaptation to achieve food security under a changing climate while delivering co-benefits for environmental sustainability, nutrition and livelihoods.

The KCSAP Project aims to inventorise all CSA TIMPs in the Cashew Value Chain. The overall goal is three pronged: (1) Improve efficiency in the use of land resources to produce cashew; (2) Maintain the resilience of cashew production systems and the dependent communities; and (3) Gain an understanding on how to reduce the vulnerability of communities negatively impacted by climate change in Kenya.`,
 },
 {
 id: '1.2',
 title: '1.2 Definition of Terms for Technologies, Innovations and Management Practices',
 body: `Agripreneur: An established commercial agri-entrepreneur who will be mentored and coached by a business accelerator to deliver E-extension sustainably and provide digital data on TIMPS dissemination and adoption.

Technology: Is an output of a research process which is beneficial to the target clientele (mainly farmers in our case). Technology can be commercialized and can be patented under intellectual property rights (IPR) arrangements. Examples include research outputs such as improved varieties among others.

Innovation: Is a modification of existing technology for an entirely different use from the original intended use. It is also an application of new or existing knowledge/technology in a new way or context to do something better or different. An example is a new cashew product that has not been locally explored before.

Management practice: Management practices, frequently called best management practices (BMPs), are tools that farmers can use to reduce soil and fertilizer runoff, properly manage animal waste, and protect water and air quality on their farms while achieving multiple positive environmental outcomes. These tools often improve a farmer's bottom-line by reducing operating costs. Usually a single BMP will not solve a problem, and several BMPs may be used. The term BMP only is intended to imply that the practice is the best way currently known for preventing the negative outcome. As technology advances, BMPs may be revised. The resulting recommendations are classified as management practices since they enlighten the target clientele in the area on a certain best practice(s).`,
 },
 {
 id: '1.3',
 title: '1.3 Summary of Inventory of TIMPs in the Cashew Value Chain',
 body: 'The inventory process resulted in a total of 90 Cashew TIMPs including 44 technologies, 5 innovations and 41 management practices distributed among the 11 sub-themes, as indicated in Table 1.',
 table: {
 columns: ['Commodity/VC Sub-Theme', 'Technologies', 'Innovations', 'Management Practices'],
 rows: [
 ['Improved cashew varieties', '14', '0', '0'],
 ['Cashew seed system', '2', '0', '0'],
 ['Agronomic management practices', '2', '0', '2'],
 ['Soil Fertility Management', '0', '0', '3'],
 ['Soil and Water Management', '2', '1', '10'],
 ['Cashew Crop health', '3', '1', '10'],
 ['Harvesting and Postharvest management', '4', '0', '3'],
 ['Cashew Value addition', '6', '3', '0'],
 ['Food safety management system', '0', '0', '2'],
 ['Mechanization of Cashew production activities', '11', '0', '0'],
 ['Cashew business and Marketing', '0', '0', '7'],
 ['Agricultural Policy Options', '0', '0', '4'],
 ['Overall Total', '44', '5', '41'],
 ],
 },
 },
 {
 id: '1.4',
 title: '1.4 Summary of Status of TIMPs in Cashew Value Chain',
 body: 'The inventory process resulted in a total of 53 TIMPs that are ready for up-scaling, 35 TIMPs that require validation and 2 TIMPs that require further research in the sub-themes, as indicated in Table 2.',
 table: {
 columns: ['Commodity/VC Sub-Theme', 'Ready for up-scaling', 'Require validation', 'Further Research'],
 rows: [
 ['Improved Cashew varieties', '10', '4', '0'],
 ['Cashew seed system', '2', '0', '0'],
 ['Agronomic management practices', '4', '0', '0'],
 ['Soil Fertility Management', '3', '0', '0'],
 ['Soil and Water Management', '13', '0', '0'],
 ['Cashew Crop health', '6', '8', '0'],
 ['Harvesting and Postharvest management', '1', '6', '0'],
 ['Cashew Value addition', '1', '8', '0'],
 ['Food Safety Management System', '2', '0', '0'],
 ['Mechanization of Cashew production', '6', '3', '2'],
 ['Cashew business and marketing', '5', '2', '0'],
 ['Agricultural Policy Options', '0', '4', '0'],
 ['Overall Total', '53', '35', '2'],
 ],
 },
 },
 ],
 },

 // ============================================================
 // 2.0 DETAILED CASHEW NUT VALUE CHAIN TIMPS
 // ============================================================
 {
 id: '2',
 title: '2.0 Detailed Cashew Nut Value Chain TIMPs',
 subsections: [
 // --------------------------------------------------------
 // 2.1 SUITABILITY MAPS
 // --------------------------------------------------------
 {
 id: '2.1',
 title: '2.1 Suitability Maps for Cashew Nut Production in Kenya',
 body: `Land suitability for cashew nut growing across various counties in Kenya. The map shows areas classified as highly suitable, moderately suitable, marginally suitable, and unsuitable for cashew nut production. Protected areas and water bodies are also indicated.

[Image here: Land Suitability for Cashew Nut Growing in Kenya - Map showing suitability zones across Kenyan counties with legend indicating Highly Suitable (dark green), Moderately Suitable (medium green), Marginally Suitable (light green), Unsuitable (yellow), Protected Areas (hatched), and Water Bodies (blue). Source: Kenya Soil Survey, KALRO-Kabete, Feb 2019]`,
 },

 // --------------------------------------------------------
 // 2.2 IMPROVED CASHEW VARIETIES
 // --------------------------------------------------------
 {
 id: '2.2',
 title: '2.2 Improved Cashew Varieties',
 subsections: [
 // 2.2.1 KKorosho75
 {
 id: '2.2.1',
 title: '2.2.1 Variety KKorosho75',
 table: {
 rows: [
 ['TIMP Name', 'Variety KKorosho75'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and overreliance on low yielding cashew varieties with poor kernel quality and long maturity period.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones L2-L5, LM3-LM5 in Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi (LM4), Homa Bay (LM4), Kisumu (LM4), Siaya (LM4) and Busia (LM4).
• Yields of 4.9 t/ha (70 kg per tree, per year at 5 years) and high nut and kernel weight (5g).
• Medium plant height of 5.4 m at 5 years old and spreading canopy tree habit of 7.4 m at 5 years old.
• Red and rounded apple with secondary flowering and prolonged production duration of up to 6 months.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas, with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Breeders, Agripreneurs, Extension agencies, Nursery operators, Traders, Nut and fruit processors, and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close proximity to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD, KEPHIS, NGOs (Farm Africa, Ten Senses Africa), CBOs, Farmer Groups, Service provider agencies (MESPT, banks), Agro-vets, Aggregators, Nut Processors Association of Kenya.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River, Lamu, Mombasa and Tharaka Nithi.'],
 ['Counties where TIMPs will be up-scaled', 'To be up-scaled in Lamu, Kilifi and Kwale Counties; To be validated in Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension and processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs, lifting of ban on export of raw nuts to stimulate competition`],
 ['Lessons learnt in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Ten Senses) and MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', 'Gender inclusiveness in crop research and development, capacity building of stakeholders, understanding physical and biotic environment in target ecologies, understanding community culture, preferences, and practices.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', 'Approximate cost of production per acre KES 8,257; Gross Margin of KES 33,610. Women, youth, and VMG considerations include limited access to productive resources, credit, and extension services. Opportunities exist in nursery establishment, seed sorting, potting, grafting, cottage processing, and marketing.'],
 ['E: Case studies/profiles of success stories', 'Increased uptake of KALRO cashew grafted seedlings of the new variety in Kilifi, Lamu and Tharaka Nithi Counties; technology adoption among private players and NGOs is increasing.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'The Institute Director, KALRO-ICRI Mtwapa, kalro.mtwapa@kalro.org'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to cashew powdery mildew',
 'Validation of kernel weight and kernel processing characteristics',
 'Cost benefit analysis',
 'Nutritional characteristics of the cashew apple',
 'Processing of the cashew apple',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.2 KKorosho 100
 {
 id: '2.2.2',
 title: '2.2.2 Cashew Variety KKorosho 100',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety KKorosho 100'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and overreliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut Cassava Zone; L5 Lowland Livestock Millet zone; LM5 Lower Midland Livestock Millet Zone; LM4 Marginal Cotton Zone; LM5 Livestock Millet Zone; LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay (LM4), Kisumu (LM4), Siaya (LM4) and Busia (LM4).
• Yields of 4.2t/ha (60 kg per tree per year) at 5 years.
• High nut and kernel weight of 5g.
• Medium plant height (5.4 m at 5 years old).
• Spreading canopy tree habit with canopy width of 7.9 m at 5 years old.
• Orange and angular apples.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, breeders, extension agencies, Agripreneurs, Nursery operators, Traders, Nut processors and fruit processors and consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD - extension services and regulation of on farm demonstration; KEPHIS - phytosanitary regulation and patenting of materials; NGOs and CBOs including FA (Farm Africa) Ten Senses Africa - Seedlings multiplication and technology dissemination; Farmer Groups - Adapt varieties; Service provider agencies including micro-finance agencies such as MESPT and banks - provide loans to suppliers and producers; Agro-vets - supply agrichemicals to farmers; Nut Processors Association of Kenya (NutPak) - processors and manufacturers; Aggregators - establishment of nurseries and supply of planting materials to farmers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River, Lamu.'],
 ['Counties where TIMPs will be upscaled', 'To be up-scaled in Lamu, Kilifi and Kwale Counties; To be validated in Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension, and processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs, and ban on export of raw nuts
• Campaign for attitude change`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Ten senses) and MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Approximately KES 8,257 per acre.
Estimated returns: Gross Margin KES 30,600.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds; limited access to education, training and extension services; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'The Institute Director, KALRO - ICRI Mtwapa, P.O BOX 16 - 80109 Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F.K., Menza M., Mwashumbe S., Pole F. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbindia; KEPHIS -kephisinfo@kephis.org, T. Kosium; AFA - info@afa.go.ke, T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to cashew powdery mildew',
 'Validation of kernel weight and kernel processing characteristics',
 'Cost benefit analysis',
 'Nutritional and processing characteristics of the cashew apples',
 'Validation of technology in new growing areas',
 'Requires further research on cashew apple products',
 ],
 },

 // 2.2.3 KKorosho 81
 {
 id: '2.2.3',
 title: '2.2.3 Cashew Variety KKorosho 81',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety KKorosho 81'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and overreliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut Cassava Zone; L5 Lowland Livestock Millet zone; LM5 Lower Midland Livestock Millet Zone; LM4 Marginal Cotton Zone; LM5 Livestock Millet Zone; LM4 Marginal Cotton Zone and LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi Homa Bay (LM4), Kisumu (LM4), Siaya (LM4) and Busia (LM4).
• High yields of 3.9t/ha, 55kg per tree per year at 5 years.
• High nut and kernel weight of 4g.
• Medium plant height (6.2 m at 5 years old).
• Upright and open canopy (8.9 m at 5 years old).
• Red and angular apple.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, breeders, agripreneurs, extension agencies, nursery operators, traders, nut processors and consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms - website, dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, stakeholder capacity building, functioning nurseries close to farmers and stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD - extension services and regulation of on farm demonstration; KEPHIS - phytosanitary regulation and patenting of materials; NGOs and CBOs including FA (Farm Africa) Ten Senses Africa - Seedlings multiplication and technology dissemination; Farmer Groups - Adapt varieties; Service provider agencies including micro-finance agencies such as MESPT and banks - provide loans to suppliers and producers; Agro-vets - supply agrichemicals to farmers; Nut Processors Association of Kenya (NutPak - processors and manufacturers; Aggregators - establishment of nurseries and supply of planting materials to farmers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River, Lamu.'],
 ['Counties where TIMPs will be upscaled', 'To be up-scaled in Lamu, Kilifi and Kwale Counties; To be validated in Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension, processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs
• Ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production approximately KES 21,975.
Estimated returns: Gross Margin KES 140,025.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds; limited access to education, training and extension services; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling in traditional cashew growing areas'],
 ['G: Contacts', 'The Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F.K., Menza M., Mwashumbe S., Pole F. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda; KEPHIS, kephisinfo@kephis.org; T. Kosioum; AFA - info@afa.go.ke; T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis areas for further research',
 'Nutritional and processing characteristics of the apple',
 'Validation of technology in new growing areas',
 'Requires further research on cashew apple products',
 ],
 },

 // 2.2.4 KKorosho 82
 {
 id: '2.2.4',
 title: '2.2.4 Cashew Variety KKorosho 82',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety KKorosho 82'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and overreliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut Cassava Zone; L5 Lowland Livestock Millet zone; LM5 Lower Midland Livestock Millet Zone; LM4 Marginal Cotton Zone; LM5 Livestock Millet Zone; LM4 Marginal Cotton Zone; LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi Homa Bay (LM4), Kisumu (LM4), Siaya (LM4) and Busia (LM4).
• High yields of 3.9t/ha (55kg per tree per year at 5 years).
• Very high nut and kernel weight (9.0g).
• Medium plant height of 5.7 m at 5 years old.
• Upright and compact canopy (10.3m at 5 years old).
• Yellow and angular apples.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Breeders, Agripreneurs, extension agencies, Nursery operators, Traders, Nut processors and fruits Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms - Website, Dashboards, Apps, social media short message service`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD extension services and regulation of on farm demonstration; KEPHIS - phytosanitary regulation and patenting of materials; NGOs including FA(Farm Africa), Ten Senses Africa and CBOs - Seedlings multiplication and technology dissemination; Farmer Groups - to adopt varieties; Service provider agencies including micro-finance agencies such as MESPT, banks - provide loans to suppliers and producers; Agro-vets - supply agrichemicals to farmers; Nut Processors Association of Kenya (NutPak) - processors and manufacturers; Aggregators - establishment of nurseries and supply of planting materials to farmers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River, Lamu.'],
 ['Counties where TIMPs will be upscaled', 'To be up-scaled in Lamu, Kilifi and Kwale Counties; To be validated in Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension, processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production approximately KES 21,975.
Estimated returns: Gross Margin KES 113,025.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds; limited access to education, training and extension services than men; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in node nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling in traditional cashew growing areas'],
 ['G: Contacts', 'The Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F.K., Menza M., Mwashumbe S., Pole F. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda; KEPHIS, kephisinfo@kephis.org; T. Kosiun; AFA - info@afa.go.ke; T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to cashew powdery mildew',
 'Validation of kernel weight and kernel processing characteristics',
 'Cost benefit analysis',
 'Nutritional and processing characteristics of the apple',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.5 A90
 {
 id: '2.2.5',
 title: '2.2.5 Cashew Variety A90',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety A90'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and overreliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut Cassava Zone; L5 Lowland Livestock Millet zone; LM5 Lower Midland Livestock Millet Zone; LM4 Marginal Cotton Zone; LM5 Livestock Millet Zone; LM4 Marginal Cotton Zone; LM3 Cotton Zone.
• Sites in Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi Homa Bay (LM4), Kisumu (LM4), Siaya (LM4) and Busia (LM4).
• High yields of 33 kg per tree.
• High nut and kernel weight of 7.5g.
• Low plant height (4.6m at 5 years).
• Low canopy width (6.6m at 5 years).
• Yellow and rounded apples.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Breeders, Agripreneurs, Extension agencies, Nursery operators, Traders, Nut processors and Fruit processors and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms - Website, Dashboards, Apps, Social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD - Extension services and regulation of on farm demonstration; KEPHIS - Phytosanitary regulation and patenting of materials; NGOs including FA(Farm Africa, Ten Senses Africa) and CBOs - Seedlings multiplication and technology dissemination; Farmer Groups - Adopt varieties; Service provider agencies including micro-finance agencies such as MESPT and banks - Provide loans to suppliers and producers; Agro-vets - supply agrichemicals to farmers; Aggregators - establishment of nurseries and supply of planting materials to farmers; Nut Processors Association of Kenya (NutPak) - processors and manufacturers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension, processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs
• Ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Approximate cost of production per acre KES 21,975.
Estimated returns: Gross Margin KES 67,125.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds; limited access to education, training and extension services; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in node nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', 'The Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F.K., Menza M., Mwashumbe S., Pole F. Partner organizations: Pwani University, info@pu.ac.ke. Mbinda W.; KEPHIS, kephisinfo@kephis.org; Kosiun T.; AFA - info@afa.go.ke; Yawa T.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis areas for further research',
 'Nutritional and processing characteristics of the apple',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.6 A41
 {
 id: '2.2.6',
 title: '2.2.6 Cashew Variety A41',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety A41'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and overreliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut Cassava Zone; L5 Lowland Livestock Millet zone; LM5 Lower Midland Livestock Millet Zone; LM4 Marginal Cotton Zone; LM5 Livestock Millet Zone; LM3 Cotton Zone.
• Sites in Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi Homa Bay (LM4), Kisumu (LM4), Siaya (LM4) and Busia (LM4).
• High yields (36 kg per tree).
• Medium nut and kernel weight (2.5g).
• Low plant height (4.5m at 5 years).
• Medium canopy width (4.5m at 5 years).
• Red and obliquely flattened apples.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Agripreneurs, Breeders, Extension agencies, Nursery operators, Traders, Nut and fruit processors and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms - Website, Dashboards, Apps, Social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD - Extension services and regulation of on farm demonstration; KEPHIS - Phytosanitary regulation and patenting of materials; NGOs including FA(Farm Africa, Ten Senses Africa) and CBOs - Seedlings multiplication and technology dissemination; Farmer Groups - Adopt varieties; Service provider agencies including micro-finance agencies such as MESPT and banks - Provide loans to suppliers and producers; Agro-vets - supply agrichemicals to farmers; Aggregators - establishment of nurseries and supply of planting materials to farmers; Nut Processors Association of Kenya (NutPak) - processors and manufacturers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension, processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Approximate cost of production per acre KES 21,975.
Estimated returns: Gross Margin KES 69,825.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds; limited access to education, training and extension services; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in node nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', 'The Institute Director, KALRO –ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F.K., Menza M., Mwashumbe S., Pole F. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda; KEPHIS, kephisinfo@kephis.org; T. Kosium; AFA - info@afa.go.ke; T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis areas for further research',
 'Requires further research on cashew apple products',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.7 JK90
 {
 id: '2.2.7',
 title: '2.2.7 Cashew Variety JK90',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety JK90'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and overreliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut Cassava Zone; L5 Lowland Livestock Millet zone; LM5 Lower Midland Livestock Millet Zone; LM4 Marginal Cotton Zone; LM5 Livestock Millet Zone; LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi Homa.
• High yields (35kg per tree).
• High nut and kernel weight (5g).
• Low plant height (5m at 5 years).
• Medium canopy width (8.3m at 5 years).
• Red and pyriform shaped apple.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Breeders, Agripreneurs, Extension agencies, Nursery operators, Traders, Nut processors and fruits and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms - Website, Dashboards, Apps, Social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD - Extension services and regulation of on farm demonstration; KEPHIS - Phytosanitary regulation and patenting of materials; NGOs including FA(Farm Africa, Ten Senses Africa) and CBOs - Seedlings multiplication and technology dissemination; Farmer Groups - Adopt varieties; Service provider agencies including micro-finance agencies such as MESPT and banks - Provide loans to suppliers and producers; Agro-vets - supply agrichemicals to farmers; Aggregators - establishment of nurseries and supply of planting materials to farmers; Nut Processors Association of Kenya (NutPak) - processors and manufacturers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled or validated', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension, processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), and MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Approximate cost of production per acre KES 21,975.
Estimated returns: Gross Margin KES 72,525.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds; limited access to education, training and extension services; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', 'The Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F.K., Menza M., Mwashumbe S., Pole F. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda, KEPHIS, kephisinfo@kephis.org; T. Kosium; AFA - info@afa.go.ke; T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis',
 'Areas for further research',
 'Requires further research on cashew apple products',
 ],
 },

 // 2.2.8 JK460
 {
 id: '2.2.8',
 title: '2.2.8 Cashew Variety JK460',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety JK460'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and over reliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut Cassava Zone; L5 Lowland Livestock Millet zone; LM5 Lower Midland Livestock Millet Zone; LM4 Marginal Cotton Zone; LM5 Livestock Millet Zone; LM3 Cotton Zone.
• Sites in Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi Homa.
• High yields (34kg per tree).
• Medium nut and kernel weight (2.5g).
• Medium plant height (5.3m at 5 years old).
• Medium canopy width (8.4m at 5 years old).
• Red and angular apples.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension, Breeders, Agripreneurs, Agencies, Nursery operators, Traders, Nut and fruit processors and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms - Website, Dashboards, Apps, Social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD - Extension services and regulation of on farm demonstration; KEPHIS - Phytosanitary regulation and patenting of materials; NGOs including FA(Farm Africa, Ten Senses Africa) and CBOs - Seedlings multiplication and technology dissemination; Farmer Groups - Adopt varieties; Service provider agencies including micro-finance agencies such as MESPT and banks - Provide loans to suppliers and producers; Agro-vets - supply agrichemicals to farmers; Aggregators - establishment of nurseries and supply of planting materials to farmers; Nut Processors Association of Kenya (NutPak) - processors and manufacturers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Investment in crop development (research, extension, processing)
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs, and ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Approximate cost of production per acre KES 21,975.
Estimated returns: Gross Margin KES 68,825.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds; limited access to education, training and extension services; cashew trees are considered as men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', 'The Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F.K., Menza M., Mwashumbe S., Pole F. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda; KEPHIS, kephisinfo@kephis.org; T. Kosiurn; AFA - info@afa.go.ke; T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis areas for further research',
 'Requires further research on cashew apple products',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.9 JK228
 {
 id: '2.2.9',
 title: '2.2.9 Cashew Variety JK228',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety JK228'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Decline in cashew production due to use of aged trees and over reliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• High yields (at least 34 kg per tree).
• Medium nut and kernel weight (2.5g).
• Medium plant height (5.6 m at five years old).
• Medium canopy width (9.3 m at five years old).
• Red and flattened apples.
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut-Cassava zone; L4 Cashewnut-Cassava zone; L5 Lowland Livestock-Millet zone; LM5 Lower Midland Livestock-Millet zone; LM4 Marginal Cotton zone; LM5 Livestock-Millet zone; LM4 Marginal Cotton zone; LM3 Cotton zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension agencies, Nursery operators, Traders, Nut and fruit processors and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functional nurseries in close proximity to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD, KEPHIS, NGOs including FA (Farm Africa, Ten Senses Africa), CBOs, Farmer Groups, Service provider agencies including micro-finance agencies such as MESPT, banks, agro-vets, processors and manufacturers, aggregators, Nut Processors Association of Kenya (NutPak).'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Educate farmers on importance of cashew production
• Strengthening cashew farmer organizations
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts
• Investment in crop development (research, extension, processing)`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses). MESPT has fast-tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Understanding community culture, preferences, and practices
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies
• Determining the market requirements and processing techniques`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production per acre KES 21,975.00.
Estimated returns: Gross Margin KES 69,825.00.

Gender issues: Women and youth have limited access to productive resources such as land, credit and quality seeds compared to men; limited access to education, training and extension services compared to men; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new varieties
• Technology adoption among private players and NGOs is increasing
• The number of individual farmers who have planted the variety and plantations rising`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO – ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F.K. Muniu, M. Menza, S. Mwashumbe, F. Pole. Partner organizations: Pwani University, info@pu.ac.ke. - W. Mbinda; KEPHIS - T. Kosium; AFA - T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis areas for further research',
 'Requires further research on cashew apple products',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.10 JK292
 {
 id: '2.2.10',
 title: '2.2.10 Cashew Variety JK292',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety JK292'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Decline in cashew production due to use of aged tree and over reliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• High yields (over 37 kg per tree).
• [Additional details extracted from image on page 48 - image here showing cashew variety characteristics]`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension agencies, Nursery operators, Traders, Nut and fruit processors and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functional nurseries in close proximity to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD, KEPHIS, NGOs including FA (Farm Africa, Ten Senses Africa), CBOs, Farmer Groups, Service provider agencies including micro-finance agencies such as MESPT, banks, agro-vets, processors and manufacturers, aggregators, Nut Processors Association of Kenya (NutPak).'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Educate farmers on importance of cashew production
• Strengthening cashew farmer organizations
• Investment in crop development (research, extension, processing)
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses); MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production KES 21,975.00.
Estimated returns: Gross Margin KES 77,925.00.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds compared to men; limited access to education, training and extension services compared to men; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F.K. Muniu, M. Menza, S. Mwashumbe, F. Pole. Partner organizations: Pwani University, info@pu.ac.ke - W. Mbindia; KEPHIS - T. Kosium; AFA - T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis Areas for further research',
 'Requires validation in new areas',
 'Requires further research on cashew apple products',
 ],
 },

 // 2.2.11 T83
 {
 id: '2.2.11',
 title: '2.2.11 Cashew Variety T83',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety T83'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and over reliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• Moderate yields (30 kg per tree).
• High nut and kernel weight (5g).
• Low plant height (5.2 m at five years old).
• Medium canopy width (8.2 m at five years old).
• Orange and rounded apple.
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut -Cassava zone; L5 Lowland Livestock-Millet zone; LM5 Lower Midland Livestock-Millet zone; LM4 Marginal Cotton zone; LM5 Livestock-Millet zone; LM4 Marginal Cotton Zone; LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension agencies, Nursery operators, Traders, Nut and fruit processors, agripreneurs and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD, KEPHIS, NGOs including FA (Farm Africa, Ten Senses Africa), CBOs, Farmer Groups, Service provider agencies including micro-finance agencies such as MESPT, banks, agro-vets, processors and manufacturers, aggregators, Nut Processors Association of Kenya (NutPak).'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Educate farmers on importance of cashew production
• Strengthening cashew farmer organizations
• Investment in crop development (research, extension, processing)
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses); MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production KES 21,975.00.
Estimated returns: Gross Margin KES 59,025.00.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds compared to men; limited access to education, training and extension services compared to men; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F.K. Muniu, M. Menza, S. Mwashumbe, F. Pole. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda, KEPHIS, T. Kosium, AFA T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to cashew powdery mildew',
 'Validation of kernel weight and kernel processing characteristics',
 'Cost benefit analysis Areas for further research',
 'Requires further research on cashew apple products',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.12 A47
 {
 id: '2.2.12',
 title: '2.2.12 Cashew Variety A47',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety A47'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and over reliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• High yields (34 kg per tree).
• High nut and kernel weight (6.5 g).
• Low plant height (5.1 m at five years old).
• Medium canopy width (8.6 m at five years old).
• Red and conical apple.
• Suitable in altitude of 10-1000m in agro-ecological zones L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut -Cassava zone; L5 Lowland Livestock-Millet zone; LM5 Lower Midland Livestock-Millet zone; LM4 Marginal Cotton zone; LM5 Livestock-Millet zone; LM4 Marginal Cotton Zone; LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi Homa.

[Image here: Cashew Variety A47 - Photo showing cashew apple on tree]`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension agencies, Nursery operators, Traders, Nut and fruit processors and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD, KEPHIS, NGOs including FA (Farm Africa, Ten Senses Africa), CBOs, Farmer Groups, Service provider agencies including micro-finance agencies such as MESPT, banks, agro-vets, processors and manufacturers, aggregators, Nut Processors Association of Kenya (NutPak).'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Educate farmers on importance of cashew production
• Strengthening cashew farmer organizations
• Investment in crop development (research, extension, processing)
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production KES 21,975.00.
Estimated returns: Gross Margin KES 69,825.00.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds than men; limited access to education, training and extension services than men; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F.K. Muniu, M. Menza, S. Mwashumbe, F. Pole. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbindia, KEPHIS, T. Kosioum, AFA T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis Areas for further research',
 'Requires further research on cashew apple products',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.13 JK411
 {
 id: '2.2.13',
 title: '2.2.13 Cashew Variety JK411',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety JK411'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and over reliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• High yields (36 kg per tree).
• High nut and kernel weight (5g).
• Low plant height (4.8 m at five years old).
• Low canopy width (8.5 m at five years old).
• Yellow and angular apples.
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut -Cassava zone; L5 Lowland Livestock-Millet zone; LM5 Lower Midland Livestock-Millet zone; LM4 Marginal Cotton zone; LM5 Livestock-Millet zone; LM4 Marginal Cotton Zone; LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay.`],
 ['Justification', 'A high yielding variety suitable for major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension agencies, Nursery operators, Traders, Nut and fruit processors, Consumers and agripreneurs.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD, KEPHIS, NGOs including FA (Farm Africa, Ten Senses Africa), CBOs, Farmer Groups, Service provider agencies including micro-finance agencies such as MESPT, banks, agro-vets, processors and manufacturers, aggregators, Nut Processors Association of Kenya (NutPak).'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Educate farmers on importance of cashew production
• Strengthening cashew farmer organizations
• Investment in crop development (research, extension, processing)
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production KES 21,975.00.
Estimated returns: Gross Margin KES 84,000.00.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds than men; limited access to education, training and extension services than men; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F.K. Muniu, M. Menza, S. Mwashumbe, F. Pole. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbindia, KEPHIS, T. Kosioum, AFA T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to powdery mildew',
 'Validation of net kernel weight and kernel processing characteristics',
 'Cost benefit analysis Areas for further research',
 'Requires further research on cashew apple products',
 'Validation of technology in new growing areas',
 ],
 },

 // 2.2.14 MT10
 {
 id: '2.2.14',
 title: '2.2.14 Cashew Variety MT10',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Variety MT10'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Decline in cashew production due to use of aged tree and over reliance on low yielding cashew varieties with poor kernel quality and long maturity.'],
 ['What is it? (TIMP description)', `A cashew variety with the following traits:
• High yields (36 kg per tree).
• High nut and kernel weight (4 g).
• Medium plant height (6.4 m at five years old).
• Medium canopy width (9 m at five years old).
• Red and angular apple.
• Suitable in altitude of 10-1000m in agro-ecological zones: L2 lowland Marginal Sugarcane zone; L3 Coconut Cassava zone; L4 Cashewnut -Cassava zone; L5 Lowland Livestock-Millet zone; LM5 Lower Midland Livestock-Millet zone; LM4 Marginal Cotton zone; LM5 Livestock-Millet zone; LM4 Marginal Cotton Zone; LM3 Cotton Zone.
• Sites: Kwale, Mombasa, Kilifi, Tana River, Lamu, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay.`],
 ['Justification', 'A high yielding variety suitable in major cashew growing areas and with high quality kernels and short maturity duration.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension agencies, Nursery operators, Traders, Nut and fruit processors, agripreneurs and Consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, Stakeholder capacity building, Functioning nurseries in close to farmers, Stakeholder networks.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'MoALD, KEPHIS, NGOs including FA (Farm Africa, Ten Senses Africa), CBOs, Farmer Groups, Service provider agencies including micro-finance agencies such as MESPT, banks, agro-vets, processors and manufacturers, aggregators, Nut Processors Association of Kenya (NutPak).'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be up-scaled', 'To be validated in Kilifi, Kwale, Lamu, Tana River, Taita Taveta, Kitui, Makueni, Tharaka Nithi, Homa Bay, Kisumu, Siaya and Busia.'],
 ['Challenges in development and dissemination', `• Low interest in cashewnut production
• Limited investment in the crop
• Limited publicity
• Few functional local processing facilities
• Low investment in research`],
 ['Suggestions for addressing the challenges', `• Educate farmers on importance of cashew production
• Strengthening cashew farmer organizations
• Investment in crop development (research, extension, processing)
• Supportive policies such as subsidization of processing equipment and production inputs, ban on export of raw nuts`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses); MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic Environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of production KES 21,975.00.
Estimated returns: Gross Margin KES 72,975.00.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds than men; limited access to education, training and extension services than men; cashew trees are considered men's enterprises thereby limiting women control and benefit from them; men dominate decisions on cashew at the household and community; women perform most of the weeding and processing activities.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new variety
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted the variety and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F.K. Muniu, M. Menza, S. Mwashumbe, F. Pole. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda, KEPHIS, T. Kosiium, AFA T. Yawa.'],
 ],
 },
 gaps: [
 'Evaluation for tolerance to cashew powdery mildew',
 'Validation of kernel weight and kernel processing characteristics',
 'Cost benefit analysis Areas for further research',
 'Requires further research on cashew apple products',
 'Validation of technology in new growing areas and top-working',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.3 CASHEW SEED SYSTEM
 // --------------------------------------------------------
 {
 id: '2.3',
 title: '2.3 Cashew Seed System',
 subsections: [
 {
 id: '2.3.1',
 title: '2.3.1 Cashew Propagation Through Wedge Grafting',
 table: {
 rows: [
 ['TIMP Name', 'Cashew propagation through wedge grafting'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Long maturity duration, yield variation and low production (5-7 years) for trees sown from seed while those established from grafted seedlings take 2-3 years.'],
 ['What is it? (TIMP description)', `Making of an artificial union between two plants of the same family so that they unite and grow as one plant. These parts are the rootstock and a scion. Selection of scions from suitable varieties is done during early hours in the morning. The actively growing part of the rootstock is cut and removed leaving two functional leaves. A wedge shaped vertically cut of 2-3cm is made down the stock between the two leaves. A matching wedge cut of the scion of a similar length is made. The scion is inserted to the rootstock and tied together with a grafting tape.`],
 ['Justification', 'Grafted Cashew seedlings take shorter duration of 2-3 years to mature and produce uniformly, while trees sown from seed take 5-7 years) with variable growth and production.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Nursery operators, Cashew growers, Extension agencies and Traders.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers, Availability of improved varieties (scions), Preferred varieties by farmers and processors.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'KALRO - Avail scions from improved cashew varieties and trainings; Universities - Technical backstopping; Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection; CBOs, NGO\'s - Seedlings multiplication and technology dissemination; Nursery operators - Seedlings multiplication.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River, Tharaka Nithi and Lamu.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Tana River, Tharaka Nithi and Lamu.'],
 ['Challenges in development and dissemination', `• Limited number of skilled grafters
• Limited funding
• Unpredictability of demand of cashew seedlings by farmers due to erratic weather
• Limited access to grafting tools and equipments`],
 ['Suggestions for addressing the challenges', `• Build capacity of private sector players and NGOs to help in dissemination
• Avail funds
• Involvement of agro-dealers and stockists of agricultural inputs`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Adequate capacity of growers to acquire grafted seedlings
• Geographical distribution of nursery operators and transport network
• Registered and licensed nursery operators
• Access to suitable financing by nursery operators
• Supportive policies and regulations -licences and levies`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Estimated cost: KES 34.00 per seedling.
Estimated returns: Estimated cost: KES 26.00 per seedling.

Gender issues: Increased work burden for women when grafting; Women and youth have limited access to credit for use in buying farm implements than men; Women and youth have limited access to education, training and extension services than men; Cashew trees are considered men's enterprises thereby limiting women control and benefit from them; Men dominate decisions on cashew at the household and community.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new varieties
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted new varieties and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'The Institute Director, KALRO-ICRI Mtwapa, kalro.mtwapa@kalro.org.'],
 ],
 },
 gaps: [
 'Validation of appropriate rootstocks including compatibility trials',
 'There is need to validate appropriate scion packaging and transportation methods particularly for long distances',
 'Fine-tune application as a complementary technology in coppicing and top-working',
 'Requires further research',
 ],
 },
 {
 id: '2.3.2',
 title: '2.3.2 Raising Cashew Rootstock for Grafting',
 table: {
 rows: [
 ['TIMP Name', 'Raising Cashew Rootstock for grafting'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Poor quality and weak seedlings production that take long to attain maturity.'],
 ['What is it? (TIMP description)', `Selection of healthy seeds from raising rootstock through elimination of diseased, immature, damaged and weak cashew seeds before planting potting. The process involves sorting the seeds visually, by water (flotation test) and using sandy soils (pre-germination). The pre-germinated seeds are transplanted into potting bags when the radicals (tap root) are 2.5 –3cm after 7-10 days.

[Image here: Process of raising cashew rootstock]`],
 ['Justification', 'A healthy and strong rootstock is required for successful cashew grafting. Rootstock provides anchorage and transportation of nutrients.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Nursery operators, Cashew growers, Extension agencies and Traders.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers, Availability of local cashew accessions, Preferred varieties by farmers and processors.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'KALRO - Trainings; Universities - Technical backstopping; Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection; CBOs, NGOs - Seedlings multiplication and technology dissemination; Nursery operators - Seedlings multiplication.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River, Tharaka Nithi and Lamu.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Tana River, Tharaka Nithi and Lamu.'],
 ['Challenges in development and dissemination', `• Limited number of skilled grafters
• Limited funding
• Unpredictability of demand of cashew seedlings by farmers due to erratic weather
• Limited access to grafting tools and equipments`],
 ['Suggestions for addressing the challenges', `• Build capacity of private sector players and NGOs to help in dissemination
• Avail funds
• Involvement of agro-dealers and stockists of agricultural inputs`],
 ['Lessons learned in up scaling, if any', 'Involvement of private nursery operators, other government agencies (County, KEPHIS and MoALD-AFA), Non-governmental agencies (Tens senses), MESPT has fast tracked the up scaling of the technology.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Adequate capacity to growers
• Geographical distribution of nursery operators and transport network
• Registered and licensed nursery operators
• Access to suitable financing by nursery operators
• Supportive policies and regulations –licences and levies`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Estimated cost: KES 22.00 per seedling.
Estimated returns: Estimated cost: KES 18.00 per seedling.

Gender issues: Increased work burden for women when raising rootstock; Women and youth have limited access to credit used to buy farm implements than men; Women and youth have limited access to education, training and extension services than men; Cashew trees are considered men's enterprises thereby limiting women control and benefit from them; Men dominate decisions on cashew at the household and community.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew grafted seedlings of the new varieties
• Technology adoption among private players and NGOs is increasing
• Individual farmers who have planted new varieties and plantations`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'The Institute Director, KALRO-ICRI Mtwapa, kalro.mtwapa@kalro.org.'],
 ],
 },
 gaps: [
 'Validation of appropriate rootstocks including compatibility trials',
 'There is need to validate appropriate scion packaging and transportation methods particularly for long distances',
 'Requires validation in other areas',
 'Requires further research',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.4 CASHEW AGRONOMIC MANAGEMENT PRACTICES
 // --------------------------------------------------------
 {
 id: '2.4',
 title: '2.4 Cashew Agronomic Management Practices',
 subsections: [
 {
 id: '2.4.1',
 title: '2.4.1 Cashew Spacing Recommendations',
 table: {
 rows: [
 ['TIMP Name', 'Cashew spacing recommendations'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Competition for nutrients due to overcrowding and intermingling trees.'],
 ['What is it? (TIMP description)', 'Establishment of cashew orchards at appropriate spacing of 12 metres x 12 metres in CL3, 10 metres x 10 metres in CL4.'],
 ['Justification', 'Low productivity because cashew trees are randomly planted at close spacing resulting in overcrowding and intermingling of canopy, poor light penetration and difficult to conduct management practices such as pruning and weeding. Overcrowding increases spread of pests and diseases.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of improved planting materials and extension education.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'KALRO - Trainings; Universities - Technical backstopping; Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection; CBOs, NGOs - Seedlings multiplication and technology dissemination; Nursery operators - Seedlings multiplication; Extension workers - Dissemination and technical backstopping.'],
 ['C: Current situation and future scaling up', ''],
 ['Countries where already promoted, if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Countries where TIMPs will be upscaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in development and dissemination', `• Inadequate service providers
• Land ownership challenges
• Limited extension services`],
 ['Suggestions for addressing the challenges', `• Training growers and service providers
• Streamline land tenure system
• Encourage more participation of NGOs/private partnerships`],
 ['Lessons learned in up scaling, if any', `• Availability of Cost benefit information enhances adoption
• Well-spaced trees are manageable`],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `The technology is socially acceptable and environmentally friendly because it involves planting of new trees at recommended spacing allowing for easy management and higher yields.
The returns from the new orchards with improved varieties and grafted are much higher than those from aged trees haphazardly planted.`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Costs for string and tape measure for field lay out are minimal.
Estimated returns: Cash returns: 1 tree at 8 years old yields at above 30 Kg of raw @ 150 = KES 4500/tree. Intangible benefits from trees: environmental conservation - preserving water catchments.

Gender issues: Cutting the old huge trees can increase women burden; Women and youth have limited access to productive resources such as land, credit, and quality seeds than men; Women and youth have limited access to education, training and extension services than men; Cashew trees are considered men's enterprises thereby limiting women control and benefit from them; Men dominate decisions on cashew at the household and community.

Gender related opportunities: Opportunities for women exist in the node of nursery establishment where they can operate them as business enterprises.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe; KALRO Matuga, F. Pole. Partner organizations: Pwani University, info@pu.ac.ke.S - Muti H. Saha; Coast Development Authority J. Kombe.'],
 ],
 },
 gaps: [
 'Validate spacing recommendations in new growing areas (Tharaka Nithi)',
 'Further research on appropriate intercropping systems',
 ],
 },
 {
 id: '2.4.2',
 title: '2.4.2 Cashew Pruning',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Pruning'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Interlocking canopies and excessive branching in cashew orchards.'],
 ['What is it? (TIMP description)', `Pruning involves removal of interlocking, low lying, diseased, damaged, dead and unproductive branches of a mature cashew tree; cutting of the apical bud of the young tree at 1 metre to allow the tree to spread; and removal of all branches below 0.6 m above the ground for the young trees.`],
 ['Justification', 'Pruned trees allows light penetration, reduce pest and disease incidences and result in manageable canopy and easy of harvesting.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of affordable tools and Equipments or pruning, Use of appropriate tools and equipments.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'KALRO - Trainings; Universities - Technical backstopping; Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection; CBOs, NGOs - Seedlings multiplication and technology dissemination; Nursery operators - Seedlings multiplication; Extension workers - Dissemination and technical backstopping.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMPs will be upscaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in development and dissemination', `• Inadequate service providers
• Limited Expertise in pruning
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in pruning
• Encourage more participation of NGOs/private partnerships
• Resources availed for procurement pruning equipments`],
 ['Lessons learned in up scaling, if any', 'Pruned trees are easy to manage and give more yields compared to unpruned trees.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', 'The technology requires adequate sensitization.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 500 per tree.
Estimated returns: a) Intangible benefits from trees: i) environmental conservation - preserving water catchments ii) Carbon sequestration, addressing global warming b) Enhanced financial returns due to improved productivity.

Gender issues: Limited ownership and control of land among women can limit their participation; Labour intensity in pruning tall trees can be prohibitive for women; Limited access to capital among women can limit their participation; Bias in training opportunities in favour of men on providing pruning services.

Gender related opportunities: Tree size is reduced through pruning making management operations such as spraying, and harvesting easy for women.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe F. Pole, kalro.mtwapa@kalro.org. Partner organizations: Pwani University, info@pu.ac.ke. W. Mbinda, H. Saha.'],
 ],
 },
 gaps: [
 'Validate efficacy of recommended fungicides in new growing areas (Tharaka Nithi)',
 'Requires validation in new areas',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.4.3',
 title: '2.4.3 Cashew Coppicing',
 table: {
 rows: [
 ['TIMP Name', 'Cashew coppicing'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Unproductive and old trees in the orchards.'],
 ['What is it? (TIMP description)', 'Coppicing is rejuvenating of aging and unproductive cashew trees through cutting the stump at 1.5m above the ground to allow growth of numerous active growing shoots which will start production of high quality nuts after one year.'],
 ['Justification', 'Over 90% of cashew trees are aged, of low production and are producing low quality nuts. They also act as host and sources of pests and diseases that attack newly established trees.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of improved varieties, demonstrations.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'KALRO - Trainings; Universities - Technical backstopping; Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection; CBOs, NGOs - Seedlings multiplication and technology dissemination; Nursery operators - Seedlings multiplication; Extension workers - Dissemination and technical backstopping.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, and Lamu.'],
 ['Counties where TIMPs will be upscaled', 'Kilifi, Kwale, Lamu Counties.'],
 ['Challenges in development and dissemination', `• Inadequate service providers
• Land ownership challenges
• Tree ownership challenges due to tree tenure system in some areas
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Upscale training services
• Training more experts
• Streamline land tenure system
• Encourage more participation of NGOs/private partnerships`],
 ['Lessons learned in up scaling, if any', `• Availability of Cost benefit information enhances adoption
• Gradual change of cycle of aged trees through copping is more effective`],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• The technology is socially acceptable and environmentally friendly because it involves rejuvenating aged trees
• Replacement of unproductive aged trees with new sprouted stumps
• The returns from the rejuvenated trees, are much higher than those from aged trees
• Reduces loss of cashew trees to logging since the old tree is removed leaving a stump for regeneration. The old wood obtained from coppicing can be used for timber wood fuel and other economic purposes`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Cost of coppicing- is low, 100/- per tree.
Estimated returns: Cash returns: 1 tree yields 60kg @ 100 = KES 6,000/tree. Intangible benefits from trees: i) environmental conservation-preserving water catchments; ii) Carbon sequestration, addressing global warming.

Gender issues: Limited ownership and control of land among women can limit their participation; Labour intensity in cutting old huge trees can be prohibitive for women; Limited access to capital among women can limit their participation; Bias in training opportunities in favour of men on coppicing and top-working.

Gender related opportunities: Ease of participation of women since the technology does not require extensive land area; Reduced tree sizes makes the cashew production system more amenable to intercropping thereby boosting food and nutritional security and incomes among VMGs.`],
 ['E: Case studies/profiles of success stories', `• Increased uptake of KALRO cashew rehabilitation technology
• Technology adoption among private players and NGOs is increasing`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe F. Pole, kalro.mtwapa@kalro.org. Partner organizations: Pwani University, info@pu.ac.ke.S - Muti H. Saha; Coast Development Authority J. Kombe.'],
 ],
 },
 gaps: [
 'Requires validation in new areas',
 'Requires further research',
 ],
 },
 {
 id: '2.4.4',
 title: '2.4.4 Cashew Top-Working',
 table: {
 rows: [
 ['TIMP Name', 'Cashew top-working'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Low yielding varieties in orchards.'],
 ['What is it? (TIMP description)', 'Top working is grafting of established trees, with an aim to upgrade or changing unproductive variety. The tree is cut down at 1.5 m above the ground awaiting sprouting of the shoots which are grafted with the scions of a high yielding variety. It is also a practice of conversion of the established orchard without uprooting the entire tree.'],
 ['Justification', 'Over 90% of cashew trees are local accession with low yields and low-quality nuts. These trees can be changed to high yielding trees through top working.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of improved varieties Service providers, demonstrations.'],
 ['Partners/stakeholders for scaling up and their respective roles', 'KALRO - Trainings; Universities - Technical backstopping; Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection; CBOs, NGOs - Seedlings multiplication and technology dissemination; Nursery operators - Seedlings multiplication; Extension workers - Dissemination and technical backstopping.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, and Lamu.'],
 ['Counties where TIMPs will be upscaled', 'Kilifi, Kwale, and Lamu.'],
 ['Challenges in development and dissemination', `• Inadequate service providers
• Limited grafting and top-working experts
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Upscale training services
• Training more experts in grafting
• Encourage more participation of NGOs/private partnerships`],
 ['Lessons learned in up scaling, if any', `Availability of Cost benefit information enhances adoption
Gradual change of cycle of aged trees of unknown varieties through topworking enhance production of cashewnuts`],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `The technology is socially acceptable and environmentally friendly because it involves:
i) Rejuvenating aged trees
ii) Replacement of unproductive trees with improved (grafted) ones thus the tree population remains the same
iii) The improved returns from the top worked trees, are much higher than those from aged trees
iv) There is greater demand of the improved and grafted cashew varieties`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Total cost of grafting one seedling is KES 56.00.
Estimated returns: Estimated gross margin (at farm-gate or point of grafting selling) is KES 44.00.

Gender issues: Limited ownership and control of land among women can limit their participation; Labour intensity in cutting old huge trees can be prohibitive for women; Limited access to capital among women can limit their participation; Bias in training opportunities in favour of men on coppicing and top-working.

Gender related opportunities: Ease of participation of women since the technology does not require extensive land area; Reduced tree sizes makes the cashew production system more amenable to intercropping thereby boosting food and nutritional security and incomes among VMGs.`],
 ['E: Case studies/profiles of success stories', `• Increased use of KALRO top working technology in Kwale and Kilifi counties
• Technology adoption among private players and NGOs is increasing`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe, F. Pole, kalro.mtwapa@kalro.org. Partner organizations: Pwani University, info@pu.ac.ke.S - Muti H. Saha; Coast Development Authority J. Kombe.'],
 ],
 },
 gaps: [
 'Requires validation in new areas',
 'Requires further research',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.5 SOIL FERTILITY MANAGEMENT
 // --------------------------------------------------------
 {
 id: '2.5',
 title: '2.5 Soil Fertility Management',
 subsections: [
 {
 id: '2.5.1',
 title: '2.5.1 Integrated Manure Management (IMM)',
 table: {
 rows: [
 ['TIMP Name', 'Integrated Manure Management (IMM)'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `Land degradation characterized by the declining soil fertility, low yields, increased soil moisture stress, increased soil erosion and poor soil health.
Poor manure management and handling leading to increased Green House Gases (GHG) emissions.`],
 ['What is it? (TIMP description)', 'Integrated Manure Management (IMM) is the optimal, site-specific handling of livestock manure from collection, through treatment and storage up to application to crops (cashew).'],
 ['Justification', 'Adding manure to soils enhances soil fertility and soil health that leads to increased agricultural productivity, improved soil structure and biodiversity. Given the challenge of limited access to inorganic/synthetic fertilizers by resource-poor smallholder farmers, manure has the potential to provide the limiting nutrients and improve soil health.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches used in dissemination', 'Open and field days, exchange visits and demonstration farms.'],
 ['Critical/essential factors for successful promotion', `• Training on preparation, management and use of manure
• Dissemination approach used to reach target farmers
• Model demonstration plots using cashew`],
 ['Partners/stakeholders for scaling up and their roles', `• KALRO - training
• County governments - provide extension services, farmer mobilization and policy formulation
• ILRI - technical backstopping
• NGOs - micro financing services
• AFA - value addition and processing
• Processors - value addition
• Cooperatives - marketing
• Transporters - transport services`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kajiado, Uasin Gishu, Tharaka Nithi.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Lack of model demonstration farms
• Cultural challenges – cashew training in ASAL communities is mainly received by women but men are the main decision makers on actual production of the crop
• Lack of continuity in training of extension and farmers in the skill for manure management
• Lack of proper mobilization mechanism for reaching many farmers`],
 ['Suggestions for addressing the challenges', `• Establishment of many demonstration plots by counties
• Capacity building of ASAL communities on manure management and its benefit
• Continuous capacity building of farmers and extension workers
• Use of approaches to mobilize farmer to attend demonstration forums`],
 ['Lessons learned if any', `• Proper use of manures improves soil fertility
• Use of manures enhances crop productivity
• Skills in manure preparation, storage and application contribute to soil health and high yields`],
 ['Social, environmental, policy and market conditions necessary', `• Applying manure to soils saves on purchase of inorganic fertilizer, increases crop yield and saves water
• Propagation of invasive species when the seed is ingested by the animal and passed to crop field
• Manure can harbor pathogens which can cause disease outbreaks to cashew
• Contamination of water sources by leaching of nutrients
• Organic manures when poorly handled increase GHG emissions. However, IMM provides practices that are able to minimize GHG emissions`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Purchase of 1acre equivalent manure-load (including transport costs) @ KES. 8,000/=; Labor for application @ KES. 6,000/= per acre.
Estimated returns: Based on the level of adoption, this TIMP can increase the total returns from the crop by approximately 50%.

Gender issues: Women have limited access to farm inputs such as manures than men; Women have less access to information, technology and knowledge; Women have less access to land that can be used for water pan than men; Women have limited access to education, training and extension services.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Not specified in detail.'],
 ],
 },
 gaps: [
 'Promote IMM complementary technology in counties that have not practiced it',
 'Conduct nutrient budget study on selected farms utilizing manures (including composts) in each of the cashew growing counties',
 'Requires validation in new areas',
 'Requires further research',
 ],
 },
 {
 id: '2.5.2',
 title: '2.5.2 Integrated Soil Fertility Management (ISFM)',
 table: {
 rows: [
 ['TIMP Name', 'Integrated Soil Fertility Management (ISFM)'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Declining soil fertility, low organic matter, degraded soil structure and poor soil moisture conservation for cashew production.'],
 ['What is it? (TIMP description)', 'A set of soil fertility management practices that include the use of fertilizers and locally available organic inputs to improve and maintain soil\'s potential for high crop yields. It places emphasis on the importance of using often scarce resources like fertilizer and organic inputs efficiently through techniques such as fertilizer banding (field application of fertilizer directly in area of root-zone to increase the potential for uptake) and micro dosing (applying small quantities of fertilizer with the seed at planting time and a few weeks after emergence).'],
 ['Justification', 'Integrated Soil Fertility Management (ISFM) has the ability to optimize agronomic use efficiency of the applied nutrients for improved crop productivity.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of affordable and quality manure and fertilizers
• Take into account the variability between farms, in terms of farming goals and objectives, land size, labour availability, ownership of livestock, importance of off-farm income; and
• Take into account the amount of production resources (land, capital, labour, crop residues) in which different farming families are able to invest`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension services; linking farmers to various stakeholders
• Community farmer groups; playing coordination role for ease in problem identification and dissemination`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Machakos, Busia, Siaya, Kisumu, Kakamega, Tharaka Nithi, Isiolo, Nyeri, Uasin Gishu, Elgeyo Marakwet.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Fixed mindset in some regions/cultures that organic manures cannot be applied on crops
• Misconceptions that the use of chemical fertilizers lead to loss of inherent soil fertility and soil degradation`],
 ['Suggestions for addressing the challenges', `• Awareness trainings on the role of organic manure in cashew production
• Training and awareness creation on the usefulness of fertilizer applications to clear the misconceptions about fertilizers
• For ISFM to succeed, healthy and viable germplasm/seed/seedlings, among others are required since farmers tend to re-use previous planted materials`],
 ['Lessons learned if any', `• The practice is socially acceptable and environmentally friendly
• More healthier soils with increased soil microbiota thereby enhancing nutrient availability and yields
• Increased productivity will provide supply to the markets
• Policy frameworks are available to support the promotion of this practice
• Depends on choice of the technology options integrated into this practice as influenced by the basic input costs
• Farmers who have adopted ISFM have more than doubled their yields and increased their farm-level incomes by over 50 percent`],
 ['Social, environmental, policy and market conditions necessary', `• The practice integrates participation of male and female gender roles during field activities. Female gender are disadvantaged where application of heavy loads of manure are to be incorporated in the field
• Adoption and scaling up of ISFM technologies could be affected by the ownership of the farm that are mainly male owned whereas the man does not own the technology
• Apart from the inorganic fertilizers and good seed, the practice adopts other locally available materials that saves on cost which is good for all gender in the farm household
• VMGs are physically disadvantaged for a practice that seeks to incorporate manures in the farm
• They are also resource poor and may not have the resources to purchase seed and fertilizers as required for successful implementation of the practice
• The technology if well-practiced can increase farm incomes of VMGs by up to 50%
• Affirmative action opportunity exists for VMGs in various areas as for instance in the provision of finances
• Increased production leading to increased consumption and utilization of cashew and hence improved health of VMGs`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not specified.
Estimated returns: Not specified.

Gender issues: Women have limited access to farm inputs such as manures than men; Women have less access to information, technology and knowledge; Women have less access to land that can be used for water pan than men; Women have limited access to education, training and extension services.`],
 ['E: Case studies/profiles of success stories', 'ISFM successes have been reported in other crops such as maize in Mtwapa where productivity has been improved.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO – ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: C. Ondiko, B. Muli, A. Mzingirwa, E. Gikonyo, D. Kamau, A. O. Esilaba, J. Ndufa. Partner organizations: County governments, KEFRI & NGOs.'],
 ],
 },
 gaps: [
 'Validation of the ISFM technology in counties where technology has not been tested',
 'Testing (fertilizer types, rates, frequencies) with different value chains',
 'Requires validation',
 'Requires further research',
 ],
 },
 {
 id: '2.5.3',
 title: '2.5.3 Rapid Soil Testing Services',
 table: {
 rows: [
 ['TIMP Name', 'Rapid soil testing services'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `• Conventional methods for soil testing are not affordable to farmers and take long to release results that are not reproducible
• The methods have not provided solutions for paired soil and leaf testing to determine health of soil and crop simultaneously
• Limited access to standardized soil testing services (centralized soil testing laboratories and cost)`],
 ['What is it? (TIMP description)', 'This is a method for testing soil using simplicity of light—the interaction of electromagnetic radiation with matter to characterize biochemical composition of a soil and/or plant tissue.'],
 ['Justification', 'Soil testing is the basis for good fertilizer management that maintains the productivity of soil and improves the quality of crops. It promotes more efficient fertilizer use and prevents environmental pollution from excess fertilizer application, and cost efficiency. However, limited access to soil testing services is depriving the farmers\' ability to make informed decisions with regard to soil management and fertilizer use.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension officers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of the necessary equipment for rapid the spot soil testing
• Established rapport between farmers and the technical personnel involved in soil testing
• Adequate qualified staff to cover the large number of samples from the target 24 counties before the planting season begins
• A well-designed storage system for keeping information obtained at farm level including (GPS readings, physical description of the locations, raw measured scanned data and fertilizer recommendations for cashew)
• Farmers must understand, trust, and be willing to act upon the information provided`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension services; providing the link to farmers given that agriculture is devolved
• Soil Cares; Provides soil scanners technology and capacity building in collaboration with KALRO and ICRAF
• ICRAF and iSDA tests and validates the recommendation obtained in collaboration with Soil Cares and KALRO
• Fertilizer companies; To provide fertilizer blends according to soil health status
• Agro dealers to stock required fertilizers that is readily available to farmers`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted', 'Technology has not been promoted though testing has been ongoing in a few counties.'],
 ['Counties where TIMP will be up scaled', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Soil mapping services utilising gamma-ray spectroscopy (GRS) are not sufficiently accurate to predict soil nutrient needs and therefore inappropriate for nutrient management planning
• It requires continuous updating methods to improve recommendations
• Lack of awareness on the importance of regular testing of soil quality`],
 ['Suggestions for addressing the challenges', `• There is need for further research to explore the limitations of, and opportunities for, the universal application of these technology across different soil types and/or land uses before their commercial application
• Awareness creation, intensive farmer field training (capacity building)
• Make the whole process cost-effective
• Use of scanners (spectroscopy) and less wet chemistry analysis
• Automated pipelines for updating existing recommendation methods`],
 ['Lessons learned in upscaling, if any', `• Timely affordable soil information will guide on fertilizer use
• Wrong choice and inappropriate application of fertilizers have frustrated farmers\' efforts towards increasing cashew yields`],
 ['Social, environmental, policy and market conditions necessary', `• Socially acceptable - generates income, increases food production, supplements nutritional security and promotes family cohesion
• Environmentally friendly - farmers only apply the required amounts of fertilizers hence, no excess nutrients to contaminate ground and surface water
• Supportive policy frameworks are available
• Increased productivity will provide supply to the markets`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: The cost of analyzing one soil sample still remains @ KES. 1,000/=. Transaction costs for collecting soil samples (by experts including their transport costs) and dispatch may average to KES. 1,250/=. However since more than one sample must be collected (a minimum of six samples per farm), the average cost of a sample can be estimated at KES. 7,500/= for an average farm of 3-5 acres.
Estimated returns: Dependent on the enterprise adopting the service, but estimated at least 30% of current returns.

Gender issues: By bringing services closer to the users saves time and resources to the farmers (men, women and youth). Women have less access to credit to pay for the services than men; Women have less access to information, technology and knowledge; Women have less access to land that can be used for water pan than men; Women have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Offers employment especially for the youth who could be trained as soil sampling champions and later offer the services to help the local communities.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Not specified in detail.'],
 ],
 },
 gaps: [
 'Testing paired soil and crop samples to determine nutrients in the soil and what is available to plant',
 'Determine nutrient deficiency and make recommendation for the type of fertilizer to use and at what rate',
 'Developing a fertilizer recommendation system with options for new blends',
 'Working with fertilizer companies to produce fertilizer blends packaged in smaller quantities per farmer needs',
 'Using scanners at farm level to undertake fertilizer quality analysis, including quantitative and qualitative analysis, major and trace elemental analysis, and chemical and physical analysis',
 'Updating existing soil maps with newly acquired soil data to provide current soil fertility status in the country',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.6 SOIL AND WATER MANAGEMENT
 // --------------------------------------------------------
 {
 id: '2.6',
 title: '2.6 Soil and Water Management',
 subsections: [
 {
 id: '2.6.1',
 title: '2.6.1 Contour Bunds',
 table: {
 rows: [
 ['TIMP Name', 'Contour bunds'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'The risk of soil erosion and increased run off; low soil water retention capacity in most soils.'],
 ['What is it? (TIMP description)', 'Contour bunds are stone or earthen walls built across a slope to prevent runoff. Making furrows parallel to the contours ensures that rainfall and runoff are spread evenly over a field. The earthen bund is formed by excavating a channel and creating a small ridge on the downhill side. Thus contour bunds resemble narrow channel terraces commonly referred to as "fanya chini" terraces. The technology is highly suitable for areas with unpredictable rains especially the drought-prone areas (ASALs).'],
 ['Justification', 'Contour bunds and hedgerows help to concentrate moisture into the ridge and furrow area where the crops are planted by trapping run off water from the catchment area between them. This decreases the risk of erosion. Plants with higher water requirements, such as peas or beans, can be planted on the higher side of the furrow whereas cereal crops requiring less water, such as cashew or millet, can be planted on the ridges.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Most effective approach', 'Model farm demonstration.'],
 ['Critical/essential factors for successful promotion', `• Availability of labour as the application of this practice is labour intensive
• Farmers and extension service with skills to design and construct contour bunds
• Land tenure systems that allows individual ownership`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension service providers - delivery of information to farmers, technology access, capacity building
• Community farmer groups – establishment of on-farm demonstration plots to hold farmer field schools
• KALRO – Capacity building`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenge(s) in development and dissemination', `• Increased risk of soil erosion if contours are improperly laid out
• Labour intensive and many farmers may find it difficult to implement on large scale
• Land tenure systems – communal land ownership, or lack of individual land ownership rights`],
 ['Suggestions for addressing the challenges', `• Farmers need to be supported with appropriate equipment for preparation of contour bunds for efficiency and increased output per man hour
• Training youthful farmers to be champions of contour bunds construction at the ward/village level
• Training on site specific designs and construction of contour bunds
• Fast-track land registration`],
 ['Lessons learned, if any', `• Contour bunds are largely popular due to the rapid benefits they give in terms of improved crop performance
• Existence of well-developed self-help groups can lead to successful soil and water conservation activities
• Conducting well publicized campaigns has been found to add to the success of soil and water conservation
• Similarly, when the farmers are adequately trained and sensitized on the technology, many of them would be willing to invest`],
 ['Social, environmental, policy and market conditions necessary', `• Enforce policies on soil and water conservation at the county level
• Create awareness on the importance of soil and water conservation
• Avail low-cost options for soil and water conservation
• Policies that support individual land tenure systems`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: The main input cost is the labour for contour preparation. The cost will depend on the land size and the landscape terrain/slope. However, the current market rates/cost of KES. 450/= per day holds.
Estimated returns: The returns depends on the value chain being addressed.

Gender issues: Ownership of or access to land may limit women in some regions; Making decisions on land use may limit women in some regions where decision making is men dominated; Differing accessibility of the technology and information may disadvantage different gender; The technology is labour intensive hence may disadvantage women and members who cannot procure labour services.

Gender related opportunities: Potential for employment creation for youth who can provide labour during the implementation of the technology.`],
 ['E: Case studies/profiles of success stories', `Mukethe Mbithi is a member of the Kyungu Mwethya group in Machakos:
"Before making the terraces we didn\'t have good harvests because the soil was eroded. When we put fertilizer on, the water washed it into the river and the maize grew short. But when we made terraces the soil erosion stopped and we got good crops".`],
 ['Application guidelines for users', 'A guide for selecting the right soil and water conservation practices for small-holder farming in Africa. Technical manual No. 24. World Agroforestry Center (ICRAF).'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director KALRO Kabete, E-mail: cd.narl@kalro.org; Institute Director, KALRO –ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and Scientists: KALRO: E. Mutuma; J. Wamuongo; M, Wairimu; P. Kitiem, J. Mwaura; D. Kamau and A.O. Esilaba. Partner organizations and contacts: County Governments extension offices.'],
 ],
 },
 gaps: [
 'Develop site specific designs for construction - validation in other regions',
 'Conduct trade off analysis (economic analysis) of contour bunds as a soil and water management technology in the various AEZs and along specific value chains',
 'Develop low-cost mechanized tools to ease labour demands in contour construction and maintenance',
 'Requires validation in new areas',
 ],
 },
 {
 id: '2.6.2',
 title: '2.6.2 Zai Pits',
 table: {
 rows: [
 ['TIMP Name', 'Zai Pits'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Unreliable water to sustain a crop as a result of high seasonal rainfall variability leading to total crop failures. Decreased yields leading to food insecurity.'],
 ['What is it? (TIMP description)', 'Zai Pits are planting pits typically measuring 15 - 30 cm in width, 10 - 20 cm deep and spaced 60 - 80 cm. Zai Pits harvests and stores water for prolonged crop use. Farmers plant into the pits after filling one to three handfuls of organic material such as manure, compost, or dry plant biomass. The technology is highly suitable for areas with unpredictable rains especially the drought-prone areas (ASALs). For cashew, the pits will be modified.'],
 ['Justification', 'Zai Pits have the potential to harvest and store rain water for prolonged crop use. They also contribute to improving the management of degraded lands, reducing soil erosion, vegetation loss and biodiversity as well as crop yield.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Most effective approach', 'Model farm demonstration.'],
 ['Critical/essential factors for successful promotion', `• Availability of labour as the technology is labour intensive
• Farmers and extension service with skills to design and construct Zai pits`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension services – delivery of information inputs to farmers
• Community farmer groups – establishment of on-farm demonstration plots to hold farmer field schools
• NGOs – capacity building, policy support in soil and water conservation issues`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenge(s) in development and dissemination', 'The management practice is labour intensive and many farmers may find it difficult to implement at large scale.'],
 ['Suggestions for addressing the challenges', `• Farmers need to be supported with appropriate equipment for preparation of Zai pits for efficiency and increased output per man hour
• Training youthful farmers to be champions of Zai pits construction at the ward level/village level`],
 ['Lessons learned, if any', `• The management practice has a huge potential to increase farmers\' resilience especially in ASALs
• Similarly, when the farmers are adequately trained and sensitized on the technology, many of them would be willing to invest`],
 ['Social, environmental, policy and market conditions necessary', `• Enforce policies on soil and water conservation at the county level
• Create awareness on the importance of soil and water conservation
• Avail low-cost technologies for soil and water conservation
• Policies that support individual land tenure systems
• Provide support in the establishment of the Zai pits`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: The main input cost is the labour for Zai Pit preparation. It is estimated at KES 40 to 100 per Zai Pit.
Estimated returns: Yet to be determined.

Gender issues: The technology is labour intensive and therefore may increase women labour burden; Women have less access to agricultural information, technology and knowledge; Women and youth have limited access to productive resources such as land, quality seed and credit; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Potential to create employment for youth through provision of the labour required.`],
 ['E: Case studies/profiles of success stories', `Two women groups in Kikiki, Matungulu sub-County of Machakos County through a representative Janet Ndugne reported having started using the Zai pit farming technology in 2013 after attending a farming workshop by the Institute for Culture and Ecology (ICE). "Ever since we started using Zai pits, we have seen an increase in our harvests as compared to the conventional methods of farming," she said.
Farmers in Kathonzweni, Makueni County increased dug pits from 170 to 500 pits for crop production due to initial observed benefits.
Communities in ASALs have also rehabilitated degraded lands and increased production by many folds.`],
 ['Application guidelines for users', 'A guide for selecting the right soil and water conservation practices for small-holder farming in Africa. Technical manual No. 24. World Agroforestry Center (ICRAF).'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director, KALRO Kabete E-mail: cd.narl@kalro.org; Institute Director, KALRO –ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: E. Mutuma; J. Wamuongo; M. Wairimu; P. Ketiem, J. Mwaura; D. Kamau and A.O. Esilaba. Partner organizations and contacts: County Governments extension offices.'],
 ],
 },
 gaps: [
 'Validation of the economic viability of the technology in counties where it has never been used',
 ],
 },
 {
 id: '2.6.3',
 title: '2.6.3 Bench Terraces',
 table: {
 rows: [
 ['TIMP Name', 'Bench terraces'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'The risk of soil erosion and increased run off; low soil water retention capacity in most soils.'],
 ['What is it? (TIMP description)', 'Bench terraces consist of a series of beds which are more or less level running across a slope at vertical intervals, supported by steep banks or risers (walls or bunds). The flat beds created by bench terraces enable the cultivation of crops on medium to steep slopes. The technology is highly suitable for semi-arid to humid regions of rainfall, 700mm or more; medium to steep slopes (12-47%) (Bench terraces are not recommended for slopes less than 12%); soil depth of greater than 50cm; and areas with no gullies, nor stones.'],
 ['Justification', 'Conservation of soil and moisture through construction of terraces has led to better and more reliable crop yields especially in the ASAL counties of Kenya.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of labour as the technology is labour intensive
• Farmers and extension service providers with skills to design and construct contour bunds
• Land tenure systems that allows individual ownership`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension service providers – delivery of information to farmers, technology access, capacity building
• Community farmer groups – establishment of on-farm demonstration plots to hold farmer field schools
• External service providers – capacity building and access to technology`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenge(s) in development and dissemination', `• Increased risk of soil erosion if terraces are improperly laid out
• Labour intensive during construction and maintenance and many farmers may find it difficult to implement at large scale
• Land tenure systems – communal land ownership, or lack of individual land ownership rights`],
 ['Suggestions for addressing the challenges', `• Farmers need to be supported with appropriate equipment for preparation of bench terrace for efficiency and increased output per man hour
• Training youthful farmers to be champions of making bench terraces construction at the ward level/village level
• Training on site specific designs and construction of bench terraces
• Fast track land registration`],
 ['Lessons learned, if any', `• Terracing is largely popular due to the rapid benefits it gives in terms of improved crop performance
• Existence of well-developed self-help groups can lead to successful soil and water conservation activities
• Conducting well publicized campaigns has been found to promote the success of soil and water conservation
• Similarly, when the farmers are adequately trained and sensitized on the technology, many of them would be willing to invest`],
 ['Social, environmental, policy and market conditions necessary', `• Enforce policies on soil and water conservation at the county level
• Create awareness on the importance of soil and water conservation
• Provide low-cost technologies for soil and water conservation
• Policies that support individual land tenure systems`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: The main input cost is the labour for bench preparation. The cost will depend on the land size and the landscape terrain/slope. However, the current market rates/cost of KES. 450/= per day holds.
Estimated returns: Yet to be determined.

Gender issues: Bench terrace establishment is labour intensive therefore may increase women work burden; Women have less access to agricultural information, technology and knowledge; Women and youth have limited access to productive resources such as land, quality seed and credit; Women and youth have limited access to education, training and extension services; Men dominant most decisions at the household and community levels.

Gender related opportunities: Potential to create employment for youth through provision of the labour required.`],
 ['E: Case studies/profiles of success stories', `Mukethe Mbithi is a member of the Kyungu Mwethya group in Machakos:
"Before making the bench terraces we didn\'t have good harvests because the soil was eroded. When we put fertilizer on, the water washed it into the river and the maize grew short. But when we made terraces the soil erosion stopped and we got good crops".`],
 ['Application guidelines for users', 'A guide for selecting the right soil and water conservation practices for small-holder farming in Africa. Technical manual No. 24. World Agroforestry Center (ICRAF).'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director KALRO Kabete, P.O. Box 14733-00800, NAIROBI. Tel: +254-020-2464435 Ext. 300, E-mail: cd.narl@kalro.org; Institute Director, KALRO –ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: E. Mutuma; J. Wamuongo; M. Wairimu; P. Kitiem, J. Mwaura; D. Kamau. Partner organizations and Contacts: County Governments extension offices.'],
 ],
 },
 gaps: [
 'Requires validation in new areas where it has not been practised',
 ],
 },
 {
 id: '2.6.4',
 title: '2.6.4 Fanya Juu Terraces',
 table: {
 rows: [
 ['TIMP Name', 'Fanya Juu Terraces'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'The risk of soil erosion and increased run off; low soil water retention capacity in most soils.'],
 ['What is it? (TIMP description)', `\'Fanya juu\' terraces (juu is Swahili word for \'up\') are constructed by excavating soil and throwing it up-slope to make an embankment. The embankment forms a runoff barrier and the trench (ditch) is used to retain or collect runoff. The embankments are usually stabilized with fodder grasses. Crops, such as bananas, Pawpaws, citrus and guava, are grown in the ditches. Through gradual redistribution of soils within the field, the terraces level off.
The technology is highly suitable in low annual rainfall areas (less than 700 mm); moderate slopes (less than 20%); deep soils (more than 60 cm); and hilly areas that are subject to widespread erosion.`],
 ['Justification', 'Cashew production is threatened by soil erosion and limited soil moisture. Conservation of soil and moisture through construction of terraces has led to better and more reliable crop yields especially in the ASAL counties of Kenya.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of labour as the technology is labour intensive
• Farmers and extension service with skills to design and construct contour bunds
• Land tenure systems that allows individual ownership`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension service providers – delivery of information to farmers, technology access, capacity building
• Community farmer groups – establishment of on-farm demonstration plots to hold farmer field schools
• External service providers – capacity building and access to technology`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenge(s) in development and dissemination', `• Increased risk of soil erosion if terraces are improperly laid out
• Labour intensive and many farmers may find it difficult to implement at large scale
• Land tenure systems – communal land ownership, or lack of individual land ownership rights`],
 ['Suggestions for addressing the challenges', `• Farmers need to be supported with appropriate equipment for preparation of terraces for efficiency and increased output per man hour
• Training youthful farmers to be champions of \'fanya juu\' terraces construction at the Ward level/village level
• Training on site specific designs and construction of \'fanya juu\' terraces
• Fast-track land registration`],
 ['Lessons learned, if any', `• \'Fanya juu\' terracing is popular due largely to the rapid benefits it gives in terms of soil and water conservation
• Existence of well-developed self-help groups can lead to successful soil and water conservation activities
• Conducting well publicized campaigns has been found to add to the success of soil and water conservation
• Similarly, when the farmers are adequately trained and sensitized on the technology, many of them would be willing to invest`],
 ['Social, environmental, policy and market conditions necessary', `• Enforce policies on soil and water conservation at the county level
• Create awareness on the importance of soil and water conservation
• Avail low-cost technologies for soil and water conservation
• Policies that support individual land tenure systems`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: The main input cost is the labour for terrace preparation. The cost will depend on the land size and the landscape terrain/slope.
Estimated returns: Yet to be determined.

Gender issues: The technology is labour intensive therefore may increase women labour burden; Women have less access to agricultural information, technology and knowledge; Women and youth have limited access to productive resources such as land, quality seed and credit; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Potential to create employment for youth through provision of the labour required.`],
 ['E: Case studies/profiles of success stories', `Over 50,000 smallholder farmers in lower Eastern counties of Kenya are recording a more than doubling of yields and reduced soil erosion after embracing a soil conservation scheme that involves digging of trenches in hillside to trap runaway water and soil.`],
 ['Application guidelines for users', 'A guide for selecting the right soil and water conservation practices for small-holder farming in Africa. Technical manual No. 24. World Agroforestry Center (ICRAF).'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director KALRO Kabete, P.O. Box 14733-00800, NAIROBI. E-mail: cd.narl@kalro.org; Institute Director, KALRO –ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: E. Mutuma; J. Wamuongo; M. Wairimu; P. Kitiem, J. Mwaura; D. Kamau. Partner organizations and contacts: County Governments extension service.'],
 ],
 },
 gaps: [
 'Requires validation in new areas not practised',
 ],
 },
 {
 id: '2.6.5',
 title: '2.6.5 Stone Lines',
 table: {
 rows: [
 ['TIMP Name', 'Stone lines'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'The risk of soil erosion and increased run off; low soil water retention capacity in most soils.'],
 ['What is it? (TIMP description)', 'Stone lines are stones placed along contour lines to slow down runoff. With time, the soil builds up on the upslope side of the stone line and a natural terrace is formed. The technology is suitable in gentle to moderate slopes (less than 10%); areas with low annual rainfall areas (200 - 750 mm); and stony areas.'],
 ['Justification', 'The impacts of climate change such as low and erratic rainfall continue to threaten agricultural production, food security and livelihoods especially in the ASALs. Agricultural production is threatened in many parts of the Kenya by soil erosion and limited soil moisture. Stone lines can help in the conservation of soil and moisture.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of labour as the technology is labour intensive
• Farmers and extension service with skills to design and construct stone lines
• Land tenure systems that allows individual ownership`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension service providers – delivery of information to farmers, technology access, capacity building
• Community farmer groups – Provide on farm demonstration plots to hold farmer field schools; provide collective labor
• External service providers – capacity building and access to technology`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenge(s) in development and dissemination', `• Increased risk of soil erosion if stone lines are improperly laid out
• Labour intensive and many farmers may find it difficult to implement at large scale
• Land tenure systems – communal land ownership, or lack of individual land ownership rights`],
 ['Suggestions for addressing the challenges', `• Farmers need to be supported with appropriate tools for preparation and laying of stones lines for efficiency and increased output per man hour
• Training youthful farmers to be champions of laying stone lines and maintenance
• Training on site specific designs and laying of stone lines
• Fast-track land registration`],
 ['Lessons learned, if any', `• Existence of well-developed self-help groups can lead to successful construction of stone lines
• Conducting well publicized campaigns has been found to add to the success of soil and water conservation. Similarly, when the farmers are adequately trained and sensitized on the technology, many of them would be willing to invest`],
 ['Social, environmental, policy and market conditions necessary', `• Enforce policies on soil and water conservation at the County level
• Create awareness on the importance of soil and water conservation
• Avail low-cost technologies for soil and water conservation
• Formulate policies that support individual land tenure systems`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: For each hectare, transport and other project costs amount to around KES 25,000.
Estimated returns: Yet to be determined.

Gender issues: The technology is labour intensive therefore may increase women labour burden; Women have less access to agricultural information, technology and knowledge; Women and youth have limited access to productive resources such as land, quality seed and credit; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Potential to create employment for youth through provision of the labour required.`],
 ['E: Case studies/profiles of success stories', `In Burkina Faso farmers have reported doubled cereal production when stone lines are used in combination with greater use of compost as fertilizer.
https://www.rural21.com/fileadmin/ migrated/content_uploads/Stone lines against desertification_01.pdf`],
 ['Application guidelines for users', `Stone lines are built along the contours. The lines are between 0.5 and 1.5 m high, depending on the gradient of the slope. The distance between stone lines ranges from 25 to 40 m. Each hectare needs between 30 and 50 tons of stones, which are built into contour lines about 300 m long. The stone lines slow the fast-flowing rainwater, thereby reducing erosion. This allows up to 200 more litres of water to penetrate the soil per square metre. The amount of work involved is considerable: to quarry the stone, load it onto lorries and line it on the fields.`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director KALRO Kabete, Between Nairobi School and Kabete Army barracks, P.O. Box 14733-00800, NAIROBI. E-mail: cd.narl@kalro.org; Institute Director, KALRO – ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: E. Mutuma; J. Wamuongo; M. Wairimu; P. Kitiem, J. Mwaura; D. Kamau and A.O. Esilaba. Partner organizations and contacts: County Governments extension service, NGOs.'],
 ],
 },
 gaps: [
 'Requires validation in new areas not practised',
 ],
 },
 {
 id: '2.6.6',
 title: '2.6.6 Retention Ditches',
 table: {
 rows: [
 ['TIMP Name', 'Retention ditches'],
 ['Category', 'Management practices'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'The risk of soil erosion and increased run off.'],
 ['What is it? (TIMP description)', 'Retention ditches are trenches designed to catch and retain incoming runoff and hold it until it infiltrates into the ground. They can be an alternative to waterways in high rainfall areas, but they are most often used in semi-arid areas to harvest water. The technology is suitable in semi-arid areas; permeable, deep and stable soils; and on flat or gentle sloping land.'],
 ['Justification', 'The impacts of climate change such as low and erratic rainfall continue to threaten agricultural production, food security and livelihoods especially in the ASALs. Agricultural production is threatened in many parts of the Kenya by soil erosion and limited soil moisture. Conservation of soil and moisture through construction of retention ditches has led to better and more reliable crop yields.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of labour as the technology is labour intensive
• Farmers and extension service with skills to design and construct retention ditches
• Land tenure systems that allows individual ownership`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension service providers – delivery of information to farmers, technology access, capacity building
• Community farmer groups – establishment of on-farm demonstration plots to hold farmer field schools; provide collective labor
• External service providers – capacity building and access to technology`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenge(s) in development and dissemination', `• Increased risk of soil erosion if retention ditches are improperly laid out
• Labour intensive and many farmers may find it difficult to implement at large scale
• Land tenure systems – communal land ownership, or lack of individual land ownership rights`],
 ['Suggestions for addressing the challenges', `• Farmers need to be supported with appropriate tools for digging out retention ditches for efficiency and increased output per man hour
• Training youthful farmers to be champions of digging out retention ditches
• Training on site specific designs and layout
• Fast-track land registration`],
 ['Lessons learned, if any', 'When the farmers are adequately trained and sensitized on the technology, many of them would be willing to invest.'],
 ['Social, environmental, policy and market conditions necessary', `• Enforce policies on soil and water conservation at the county level
• Create awareness on the importance of soil and water conservation
• Avail low cost technologies for soil and water conservation
• Formulate policies that support individual land tenure systems`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: The main input cost is the labour for digging retention ditches as dictated by the land size and the landscape terrain/slope. A current market price of labor of KES. 450/= per man-day applies.
Estimated returns: Yet to be determined.

Gender issues: The technology is labour intensive therefore may increase women labour burden; Women have less access to agricultural information, technology and knowledge; Women and youth have limited access to productive resources such as land, quality seed and credit; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Potential to create employment for youth through provision of the labour required.`],
 ['E: Case studies/profiles of success stories', `Over 50,000 smallholder farmers in Eastern and Central Kenya are recording a more than double of yields and reduced soil erosion after embracing a soil conservation scheme that involves digging of retention trenches in hillside to trap runaway water and soil.`],
 ['Application guidelines for users', 'A guide for selecting the right soil and water conservation practices for small-holder farming in Africa. Technical manual No. 24. World Agroforestry Center (ICRAF).'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director KALRO Kabete, P.O. Box 14733-00800, NAIROBI. Tel: +254-020-2464435 Ext. 300, E-mail: cd.narl@kalro.org; Institute Director, KALRO -ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: E. Mutuma; J. Wamuongo; M, Wairimu; P. Kitiem, J. Mwaura; D. Kamau and A.O. Esilaba. Partner organizations and contacts: County Governments extension service.'],
 ],
 },
 gaps: [],
 },
 {
 id: '2.6.7',
 title: '2.6.7 Grass Strips',
 table: {
 rows: [
 ['TIMP Name', 'Grass strips'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'The risk of soil erosion and increased run off.'],
 ['What is it? (TIMP description)', 'Grass strips are dense strips of grass painted up to a meter wide, along a contour. With time, silt builds up above the strip and benches are formed. Grass strips can be planted along ditches to stabilize them, or on the rises of bench terraces to prevent erosion. They are a popular and easy way to terrace land, especially in areas with relatively good rainfall. The technology is suitable in regions with fairly gentle slopes (0 - 6%); grass is needed for fodder; and high rainfall areas.'],
 ['Justification', 'Agricultural production is threatened in many parts of the Kenya by soil moisture stress and serious soil erosion. Conservation of soil and moisture through construction of grass strips has led to better and more reliable crop yields.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of labour
• Availability of land, apart from cropland
• Farmers and extension service with skills to design and construct grass strips
• Land tenure systems that allows individual ownership`],
 ['Partners/stakeholders for scaling up and their roles', `• County government extension service providers – delivery of information to farmers, technology access, capacity building
• Community farmer groups – Provide on farm demonstration plots to hold farmer field schools; provide collective labor
• External service providers – capacity building and access to technology`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenge(s) in development and dissemination', `• Labour intensive for maintaining and controlling grass from becoming a weed
• Reduced land area for crop production`],
 ['Suggestions for addressing the challenges', `• Farmers need to be supported with appropriate tools and suitable grass varieties
• Capacity building on the maintenance of grass strips
• Training on site specific designs and layout`],
 ['Lessons learned, if any', `• Establishment of grass strips induces a process of natural terracing on slopes as soil collects behind the grass barrier, even in the first year
• Grass strips can be very appropriate for farmers who cut and carry fodder for their animals
• Grasses are also used as mulch for crops by farmers`],
 ['Social, environmental, policy and market conditions necessary', `• Enforce policies on soil and water conservation at the County level
• Create awareness on the importance of soil and water conservation
• Avail low cost technologies for soil and water conservation`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: The main input cost is the labor for establishing grass strips. The cost will depend on the type of grass to be planted, land size and the landscape terrain/slope.
Estimated returns: Yet to be determined.

Gender issues: Limited ownership of or access to land may limit women from technology implementation; Limited power in making decisions on land use may limit women in technology adoption; The technology is labour intensive and may limit implementation by women; Differing accessibility to information between men and women because of gender norms that place access to new information and technologies in the hands of male heads of will affect adoption and scaling up; Limited access to appropriate tools and credit may limit application of technology among specific gender including Women.

Gender related opportunities: The technology is labour intensive therefore may increase women labour burden; Women have less access to agricultural information, technology and knowledge.`],
 ['E: Case studies/profiles of success stories', 'Farmers have reported improved reduced runoff and nutrient loss, soil moisture retention in the soil and generally an increased crop production following application of this widely used and readily available management practice.'],
 ['Application guidelines for users', 'A guide for selecting the right soil and water conservation practices for small-holder farming in Africa. Technical manual No. 24. World Agroforestry Center (ICRAF).'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director KALRO Kabete, Between Nairobi School and Kabete Army barracks, P.O. Box 14733-00800, NAIROBI. Tel: +254-020-2464435 Ext. 300, E-mail: cd.narl@kalro.org; Institute Director, KALRO -ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and Scientists: KALRO: E. Mutuma; J. Wamuongo; M. Wairimu; P. Kitiem, J. Mwaura; D. Kamau and A.O. Esilaba. Partner organizations and Contacts: County Governments extension service.'],
 ],
 },
 gaps: [],
 },
 {
 id: '2.6.8',
 title: '2.6.8 Tied Ridges / Ridging / Earthing',
 table: {
 rows: [
 ['TIMP Name', 'Tied ridges /Ridging /Earthing'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Crop water stresses in production; Increased water losses in the furrows.'],
 ['What is it? (TIMP description)', 'Tied ridges are small earthen ridges, 30 cm high, with an upslope furrow which accommodates water between the ridges. Technology consist of water flowing down the small trenches/furrows running parallel and infiltrates into crop root zones. Water is applied to the top end of each furrow and flows down the crop field under the influence of gravity.'],
 ['Justification', 'With limitations in soil moisture due to decreasing rainfall occasioned by climatic changes, tied ridges helps conserve soil moisture. In combination with furrow irrigation, the technology has potential to improve agricultural productivity and increase crop yields and cropping intensities. As a result, household food security, incomes and livelihoods are enhanced.'],
 ['Region promoted', 'Tana River, Garissa, and West Pokot counties.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Proximity to water sources - close to permanent water sources
• Suitable topography of area (level land)
• Technical capacity for maintenance`],
 ['Partners/stakeholders for scaling up and their roles', `• County government – capacity building
• Private sector – access to credit, capacity building
• NGOs (Kenya Red Cross (KRC), Action Aid, World Vision, and OXFAM) – capacity building, credit facilities, facilitate technology access
• National Irrigation Board – technology access and capacity building
• Water Resources Management Authority – Water resources use management`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Makueni, Machakos, Tharaka Nithi, Kakamega, Nyeri, Meru.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Can be labour intensive during establishment phase
• Poor management may lead to water use inefficiencies
• Limited access to credit may limit uptake
• Land tenure insecurity in some counties limits adoption and investments`],
 ['Recommendations for addressing the challenges', `• Enhancing farmers\' capacity to see benefits
• Capacity building farmers on establishment and maintenance of the ridges
• Enhance access to credit services
• Implement policy on land use and tenure`],
 ['Lessons learned', `• Use of tied ridges with furrow irrigation significantly increases yields
• Poor management and designs may often result in flooding of low areas
• Assessment of soil erosion and sediment is key to sustainability`],
 ['Social, environmental, policy and market conditions necessary', `• The economics of furrow irrigation needs to be well articulated
• Enhanced land quality control to mitigate against soil salinity
• Adequate policies and guidelines regarding water abstraction from the main water sources to minimize resource conflicts especially along river downstream
• Market for the crops produced under irrigation should be identified early enough to minimize losses and increase profitability from the system`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not known (Research gap).
Estimated returns: Depend on the response enterprise.

Gender issues: The technology is labour intensive therefore may increase women labour burden; Women have less access to agricultural information, technology and knowledge; Women and youth have limited access to productive resources such as land, quality seed and credit; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Potential to create employment for youth through provision of the labour required.`],
 ['E: Case studies/profiles of success stories', `There are successful models for such technology (Mwea and Perkerra irrigation schemes) where furrow irrigation systems have provided opportunities for local community to produce high value crops. A sound understanding of the roles and responsibilities of farmers and water user associations is a feature of successful system.`],
 ['Application guidelines for users', `1. Sijali I V. Drip irrigation: options for smallholder farmers in Eastern and southern Africa. 2001. RELMA Technical Handbook Series 24. Nairobi, Kenya: Regional Land Management Unit (RELMA), Swedish International Development Cooperation Agency, (Sida). 60 p. + x p.; includes Bibliography
2. FAO CSA Manual
3. FAO Irrigation Water Management: Irrigation Manual
4. GoK MoALD: Training Manual for Water Users Association and farmers`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Director, Environment & Natural Resources KALRO Secretariat; Institute Director, KALRO –ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: Mwaura J., Sijali I. Partner organizations and contacts: National Irrigation Board (NIB), Water Resources Management Authority.'],
 ],
 },
 gaps: [
 'The economic viability of the technology in different agro ecological zones need to be done',
 ],
 },
 {
 id: '2.6.9',
 title: '2.6.9 Rain Water Harvesting Systems (Roof Catchment)',
 table: {
 rows: [
 ['TIMP Name', 'Rain water harvesting systems (roof catchment)'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Water scarcity for crop and livestock use especially in the face of diminishing rainfall because of climate change.'],
 ['What is it? (TIMP description)', 'Rain water harvesting is a technique of collection and storage of rainwater into natural reservoirs or tanks, or the infiltration of surface water into subsurface aquifers (before it is lost as surface runoff). A vast number of techniques allow flexibility and adaptability to site-specific situations to best fight water scarcity and make agricultural production more resilient. One method of rainwater harvesting is rooftop harvesting and harvesting through earth dams.'],
 ['Justification', 'By collecting, storing and utilizing water agricultural purposes, farmers are able to prevent soil erosion, stabilize water supply, and reduce reliance on other water sources. Smallholder farmers can also recoup initial investment costs in water harvesting by planting high-value crops, and extending their growing season through the entire year. Technology also slows water runoff and increases yields with the additional water.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, pastoralists and agro-pastoralist.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Avail resources (human, technical and financial) to support acquisition and establishment of water harvesting systems
• Policy to support use of communal land to establish and manage the earth dams
• Policies supporting Public-Private Partnerships in water harvesting
• Sensitization of local communities to embrace the practice`],
 ['Partners/stakeholders for scaling up and their roles', `• Private sector – access to technology, access to credit, technology installation
• County government – capacity building, policy support, credit facilities
• NGOs – access to technologies, capacity building, technology installation`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted', 'Most counties are investing on water harvesting technology at community level. More is required to increase uptake at household level.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• High costs related to technology access and management
• Resource use conflicts where land is communally owned
• Limited skills in technology installation and management
• Limited community mobilization policy for water related activities
• Lack of suitable training programs in rainwater harvesting
• Lack of proper water usage and control measures
• In the case of earth dams where there is a lot of siltation, regular de-siltation is required
• Threats to sustainability of established systems because of lack of community participation in systems monitoring and maintenance
• Vandalism
• Some systems require high investment costs`],
 ['Suggestions for addressing the challenges', `• Resource mobilization through partnerships with private sector
• Engaging a participatory process during the planning and implementation of the project
• User specific training programs water harvesting technologies, maintenance and operation skills
• Cost of buying water harvesting structures is very high for most households and needs to be reviewed
• Securing systems to prevent vandalism`],
 ['Lessons learned in upscaling, if any', `• Potential to caution community against water scarcity
• Improved productivity where water harvesting has been implemented`],
 ['Social, environmental, policy and market conditions necessary', `• Devise systems that are gender sensitive – target different gender needs
• Carry out environment and social impact assessment of the technology in specific counties and cultures
• Support structures that help access to credit for technology access and maintenance
• Enact Policy frameworks to support water harvesting
• Enact policies on land tenure systems to support water harvesting`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not determined (research gap existing); Not affordable to most rural households.
Estimated returns: Needs to be determined on a case-by-case basis with respect to the farm terrain and desired scale of water harvesting.

Gender issues: The technology is labour intensive and may limit implementation by women; Once implemented the technology will reduce time used by women to fetch for water. This time may be used for other productive activities; Women have less access to information, technology and knowledge; Women and youth have limited access to the equipment used to make the water pan than men; Women have less access to land that can be used for water pan than men; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Potential to create reduce women work burden in fetching water so that they can perform other productive tasks.`],
 ['E: Case studies/profiles of success stories', `Agro-pastoralists who adopted water harvesting technology have had sustained source of income and improved livelihoods.
A typical African Water Bank rainwater harvesting system collects 400,000 to 450,000 litres of rainwater within two to three hours of steady rain. It has an artificial roof of 900 to 1,600 square metres and storage tanks. The largest tank constructed in Narok County has a capacity of 600,000 litres.
This amount of water can serve a community of 400 people for approximately 24 months without extra rain. The capacity can be added at a rate of 220,000 litres per year. The system is low cost and can be 100 percent maintained locally. It also uses local skills, labour, materials and technology. Apart from boosting access to water in arid and semi regions, rainwater harvesting contributes to...`],
 ['Application guidelines for users', `1. Handbook on Rainwater Harvesting and Storage Options
2. Manual for Rooftop Rainwater Harvesting Systems in the Republic of Yemen`],
 ['F: Status of TIMP readiness', 'Ready for upscaling; Requires further research'],
 ['G: Contacts', 'Director, Environment & Natural Resources KALRO Secretariat; Institute Director, KALRO -ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: I. Sijali, J. Mwaura and P. Ketiem. Partner organizations and contacts: County government, PPP.'],
 ],
 },
 gaps: [
 'Development of models of rain water harvesting for intensive agricultural production and household use',
 ],
 },
 {
 id: '2.6.10',
 title: '2.6.10 Conservation Agriculture (CA)',
 table: {
 rows: [
 ['TIMP Name', 'Conservation Agriculture (CA)'],
 ['Category', 'Innovation'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Land degradation characterized by the declining soil fertility, low yields, increased soil moisture stress, increased soil erosion and loss of biodiversity.'],
 ['What is it? (TIMP description)', `Conservation agriculture is management practice which maximizes on saving water on the farming by adhering to specific principles that govern it. The practices that make up this approach follow key principles that target to conserve the soil, soil moisture, and soil-nutrients, and stabilize land production while reducing production costs.
Conservation agriculture principles are: 1. Minimal soil disturbance, 2. Permanent ground cover - maintenance of a mulch of carbon-rich organic matter covering and feeding the soil (including straw and/or other crop residues including cover crops), 3. Crop rotation or sequences and associations of crops including trees, which could include nitrogen-fixing Legumes.`],
 ['Justification', `Land productivity is decreasing leading to decreased yield.
Continuous land operation continues to emit more GHGs (Carbon) responsible for the climatic changes. Conservation agriculture (CA) has potential to:
• Enhance management of soil fertility and organic matter, and improvement of the efficiency of nutrient use, helping to produce more with proportionally less fertilizer
• Rotations and crop associations that include legumes are capable of hosting nitrogen-fixing bacteria in their roots; this contributes to optimum plant growth without increased GHG emissions induced by fertilizer production
• Avoidance of tillage minimizes occurrence of net losses of carbon dioxide by microbial respiration and oxidation of the soil organic matter and builds soil structure and bio pores through soil biota and roots
• The protective soil cover of leaves, stems and stalks from the previous crop shields the soil surface from heat, wind and rain, keeps the soil cooler and reduces moisture losses by evaporation
• Helps to reduce soil compaction and plough pans and regenerates degraded lands`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension Agents, Researchers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Training on principles and benefits of CA
• Model demonstration using crops`],
 ['Partners/stakeholders for scaling up, their roles and stage of involvement', `• County Extension officers - Dissemination of information, capacity building
• NGO\'s (African Conservation Network, One Acre Fund) - Capacity Building, Dissemination of information
• CIAT, FAO – capacity building
• County Governments - Funding CA activities, support capacity building, enabling environment and supportive policies`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Bungoma, Meru, Embu, Tharaka Nithi, Laikipia, Kakamega.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Non-availability of crop residue in suitable quantities
• Competition for crop residues with other uses like wood fuel and livestock
• Land tenure (farmers reluctant to invest in CA where they do not have clear land rights)
• Limited knowledge on the incremental benefits of CA
• Limited access to CA implements`],
 ['Suggestions for addressing the challenges', `• Encourage farmers to expand biodiversity in the farms
• Enhance Public Private Partnerships (PPP) to support increased production and market access
• Improve KALRO and County government capacity to train and re-tool technical team so as to enhance uptake of the technology
• Allocation of more funds for continued research and dissemination of this technology would aid increased uptake of CA with agroforestry
• Fast-track land registration process`],
 ['Lessons learned in upscaling, if any', `• Uptake of CA technology increases with the realized incremental benefits over time
• Continuous capacity building increases CA technology uptake`],
 ['Social, environmental, policy and market conditions necessary for development and dissemination', `• Develop Integrated Herbicide Management Plan – pre-emergence and post-emergence herbicides
• Reliable technology adoption and suitable price and market access for produce under CA
• Continuous capacity building of the community on the benefits of CA technology
• County policies that support households investing in CA with inputs like implements`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Costs related to ripping services and herbicides amount to KES 5000/acre. This is apart from the normal inputs of seed and fertilizer when establishing. Generally, a knowledge gap exists.
Estimated returns: Reduction of costs associated with tillage-induced soil erosion and degradation (40% of land degradation); Returns on conserving soil exceeding 150 ton/hectare annually and associated increased productivity.

Gender issues: CA with trees is a management practice that that is friendly for all the gender categories; Reduces labor demands for women who perform most of the crop\'s production activities; Women have less access to land than men; Women and youth have limited access to the equipment used for CA than men; Women have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: CA Reduces women workload so that they can venture in other economic activities.`],
 ['E: Case studies/profiles of success stories', 'Farmers and agro-pastoralists who adopt the technology have had sustainable source of income and increased resilience.'],
 ['Application guidelines for users', `1. Okoba, B. (2018), Climate-Smart Agriculture: Training Manual for Agricultural Extension Agents in Kenya
2. Esilaba, E.O (2019), KCEP-CRAL CSA Extension Manual
3. SUSTAINET EA (2010). Technical Manual for farmers and Field Extension Service Providers: Conservation Agriculture. Sustainable Agriculture Information Initiative, Nairobi`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Director, Environment & Natural Resources KALRO Secretariat; Institute Director, KALRO -ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: E. Mutuma. Partner organizations and contacts: County government, Private Public Partnerships.'],
 ],
 },
 gaps: [
 'Identification of the most suitable diversified crop rotations and suitable crops for biomass for the different counties',
 'Development of suitable CA implements/field equipment prototypes',
 'Capacity building on the benefits and operationalization of Conservation Agriculture systems - both among extension and technical staff, and at decision-making levels',
 ],
 },
 {
 id: '2.6.11',
 title: '2.6.11 Cashew/Legume Intercropping',
 table: {
 rows: [
 ['TIMP Name', 'Cashew/Legume Intercropping'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Monoculture agricultural practices are normally accompanied by decreased yields, hence low farm returns. This arises from soil degradation and declining soil fertility that result from soil erosion. Cashew-legume intercropping will minimize surface runoff and resultant soil erosion, weeds infestation reduced by cover crops and vulnerability to crop pests as the practice helps slow down proliferation of pests leading to enhanced yields.'],
 ['What is it? (TIMP description)', `Intercropping is a multiple cropping practice involving growing two or more crops together. The most common goal of intercropping is to produce a greater yield on a given piece of land by making use of resources or ecological processes that would otherwise not be utilized by a single crop. The practice offers the potential to increase yields, enhance soil fertility and minimize the effects of climate change.
Single row intercropping: involves the component of cashew and the legumes including (Mucuna pruriens, Dolichos Lab lab, Cowpeas, Clitoria ternatea arranged in alternate single rows. Spacing - The space between the two cashew rows is 12 m and the legume is planted in between.
Strip intercropping: multiple rows, or a strip, of the legume is...`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension Agents.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Package on fertilizer rates and regimes under the practice.'],
 ['Partners/stakeholders for scaling up and their roles', `• County Extension officers - Dissemination of information, capacity building
• NGO\'s (African Conservation Network, One Acre Fund) - Capacity Building, Dissemination of information
• CIAT, FAO – capacity building
• County Governments - Funding CA activities, support capacity building, enabling environment and supportive policies`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted', 'Most counties in the medium to high rainfall areas & arid and semi-arid areas.'],
 ['County where TIMP will be up scaled', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Limited access and wide distribution of clean planting materials (intercrop varieties)
• Inadequate access of technical materials on the establishment, operations and management of intercrop management practice by farmers
• The increased effects of climate change hindering adoption
• Farmer high poverty levels coupled with illiteracy especially in deep rural areas of Kenya`],
 ['Suggestions for addressing the challenges', `• Enhance access of clean planting materials across the counties. Work closely with certified seed merchants, research institutions
• Train and sensitize farmers on the basic principles of intercropping, their benefits and types suitable to their contexts using farmer field and business schools and demonstrations
• Develop a comprehensive manual on the practice to guide the farmers during the adoption`],
 ['Lessons learned in up- scaling, if any', `• The practice is very important in pest management. Farmers can use a trap crop to attract pests, keeping them away from the main crop. Therefore, farmers can easily adopt this method to significantly cut down on pesticides input costs
• The number of ecological benefits provided by this practice can also accelerate up scaling. Intercropping promotes interactions between crops and pollinators, thus supporting biodiversity and wildlife species`],
 ['Social, environmental, policy and market conditions necessary', `• Socially accepted by both male and female gender
• The practice is environmentally friendly as it enhances biodiversity, controls erosion and minimizes use of pesticides`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: A technology which involves evaluating trade-offs from an informed or research perspective; Comparatively costly by between 25-50% depending on the legume mixes.
Estimated returns: Dependent on the value chain intercropp.

Gender issues: Women have less access to information, technology and knowledge; Women and youth have limited access to the equipment used to make the water pan than men; Women have less access to land that can be used for water pan than men; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and community levels.

Gender related opportunities: Intercropping offers good opportunities to both men and women to grow diverse crops for economic gains and at the same time offers enhanced biodiversity benefits.`],
 ['E: Case studies/profiles of success stories', 'Farmers have reported improved soil conditions, reduced runoff and nutrient loss, soil moisture retention in the soil and generally an increased crop production following application of this widely used and readily available management practice.'],
 ['Application guidelines for users', 'Crop rotation on organic farms. A planning manual. SARE 2009.'],
 ['F: Status of TIMP readiness', 'Ready for up scaling; Requires validation; Requires further research'],
 ['G: Contacts', 'Director, Environment & Natural Resources KALRO Secretariat; Institute Director, KALRO -ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: P. Ketiem, E. Mutuma, M. Okoti, D. Kamau, A.O. Esilaba. Partner organizations and contacts: County governments, KCEP-CRAL project.'],
 ],
 },
 gaps: [
 'Major information GAPS on intercropping performances in specific areas of Kenya. For example, there hasn\'t been much research on optimal levels of fertilizer use for intercropping potatoes and legumes in some areas - the need for site specific validation',
 'Little information on the interactions of various crop intercrops especially in the arid and semi-arid areas (ASALs)',
 'Limited knowledge on resource-use efficiency particularly in regions with impoverished soils (ASALs) and economies where measured benefits is greatest',
 ],
 },
 {
 id: '2.6.12',
 title: '2.6.12 Mulching',
 table: {
 rows: [
 ['TIMP Name', 'Mulching'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Accelerated loss of soil moisture-water stress in the soil. Suppression of weeds, loss of organic matter, managing salinity in ASALS.'],
 ['What is it? (TIMP description)', `The practice of covering the soil/ground with natural materials such as straw, dead leaves and compost to make more favourable conditions for plant growth, development and efficient crop production.
Benefits: retain moisture in the soil; suppress weeds; keep the soil cool; and help improve soil fertility (as the mulches decompose).`],
 ['Justification', 'Mulching facilitates retention of soil moisture and helps in control of temperature fluctuations, improves physical, chemical and biological properties of soil, as it adds nutrients to the soil and ultimately enhances the growth and yield of crops. It minimizes weed problems and nutrient loss. It also improves soil; structure directly by preventing raindrop impact and indirectly by promoting biological activity.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of plant or crop residues
• Size of the land
• Competing uses of crop residues
• Type of the crops`],
 ['Partners/stakeholders for scaling up and their roles', `• County Extension officers - Dissemination of information, capacity building
• NGO\'s (African Conservation Network, One Acre Fund) - Capacity Building, Dissemination of information
• CIAT, FAO – capacity building
• County Governments - Funding CA activities, support capacity building, enabling environment, extension services, provide link with farmers and supportive policies
• Community farmer groups; play coordination role for ease in problem identification and dissemination`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted', 'Baringo, Bonet, Kericho Tharaka Nithi, West Pokot, Nyeri, Machakos.'],
 ['County where the TIMP will be upscaled', 'Lamu.'],
 ['Challenges in dissemination', `• Lack of enough plant and crop residues due to competing uses
• Possibilities of insect build up categorized as pest or disease vectors`],
 ['Lessons learned', 'There is need to adapt to alternative mulching technologies in addition to use of organic materials like crop, plant residues, and agricultural processing wastes.'],
 ['Social, environmental, policy and market conditions necessary', `• Practice is socially acceptable
• Environmentally friendly
• Increased productivity will provide supply to the markets
• Supporting frameworks/policies are available`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: This is low cost but labour intensive during the initial application. Such costs are dependent on value chain and plant spacing; Specifics are not available hence there is a knowledge gap.
Estimated returns: Dependent on value chain but generally >100% of the initial investments.

Gender issues: Since the activity is labour intensive it may increase the labour burden for the various gender categories; The TIMP will reduce women\'s weeding time that can be used performing other productive activities.

Gender related opportunities: The TIMP can offer employment for the youths.`],
 ['E: Case studies/profiles of success stories', 'Farmers in different value chains have reported improved soil conditions, reduced runoff and nutrient loss, soil moisture retention in the soil and generally increased crop production following application of mulching technology.'],
 ['Application guidelines for users', 'A guide for selecting the right soil and water conservation practices for small-holder farming in Africa. Technical manual No. 24. World Agroforestry Center (ICRAF).'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO – ICRI Mtwapa, Kalro.Mtwapa@kalro.org; Centre Director, KALRO Kabete. Lead organization and scientists: KALRO: E. Mutuma, P. Ketiem, J. Mwaura, A. O. Esilaba, J. Wamungo. Partner organizations and contacts: County governments, Public-Private-Partnerships.'],
 ],
 },
 gaps: [
 'Research on mulching using factory/industrial wastes, including mushroom, tea, coffee, among others in different value chains is required',
 ],
 },
 {
 id: '2.6.13',
 title: '2.6.13 Drip Irrigation Systems for Small Scale Farmers',
 table: {
 rows: [
 ['TIMP Name', 'Drip irrigation systems for small scale farmers'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Increased crop water stress caused by rainfall variability in rain fed production systems.'],
 ['What is it? (TIMP description)', `The technology supplements water during shortage of rainfall in crop production systems. It allows the optimal usage of the limited water resource by dripping water slowly into the crop roots at low pressure through a number of emission points (drippers). Drip system saves water by minimizing evaporation losses and delivering water at the root zone where it is required. It also provides the opportunity for farmers to increase crop yields. It is easy to design and operate. System provides efficient fertilizer usage (fertigation) with irrigation water.

[Image here: Layout of a drip irrigation system in vegetables]`],
 ['Justification', 'Mainstreaming drip irrigation systems into crop production provides the opportunity for farmers to enhance crop resilience, increase yields and incomes.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Model Farmers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Correct field design (system installation) of the drip system to minimize water inefficiencies
• Training of farmers and extension
• Drip management skills`],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross- KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Makueni, Bonet, Kajiado, Machakos.'],
 ['County where TIMP will be promoted', 'Lamu, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Relatively high cost of drip kits for majority of poor resource farmers in ASALs
• High temperatures experienced in ASALs cause water salinity challenges
• Drip poly tubing also tend to collapse causing inadequate water conveyance along the tube
• Limited knowledge on the drip irrigation technology and its management`],
 ['Recommendations for addressing the challenges', `• Avail affordable credits to resource poor farmers and recover from produce
• Model farmer demonstration would create awareness and willingness to invest on the system
• Modification of drip system tubes in ASAL areas is required (use of PVC pipes) to manage clogging free flow of water
• Regular maintenance of the system especially the drip filters is required to flush out accumulated salts that tend to clog emitters
• Intensive farmer training is required on the management of drip irrigation system`],
 ['Lessons learned', `• Drip system increases yield, incomes and food security
• Linking farmers with markets is critical for enhancing sustainability
• Covering the soil with organic matter (crop residue or green manures) in a drip system have also helped preserve moisture and additional nutrients to the soil
• It is also important to link farmers to Micro Finance Institutions for financial needs`],
 ['Social, environmental, policy and market conditions necessary', `• Capacity building for increased awareness
• Policy support for increased investments in Drip irrigation systems
• The water quality should be known to adjust the drip systems to avoid clogging`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Two types of costs exist; investment (initial costs of equipment) and operational costs which depend on the type of value chain in question; Specifics are not in place and need to worked on.
Estimated returns: Income from drip system rises by as much as 35% stemming from the management of crop water stresses; Increased water saving means more water is available for other competing needs (domestic, livestock or industrial).

Gender issues: Women and youth have limited access to, credit to purchase the drip irrigation kits than men; Women have limited access to education, training and extension services than men.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Not specified in detail.'],
 ],
 },
 gaps: [
 'The economic impact of drip irrigation on agriculture in the regions of adoption under study',
 'Limited irrigation packages suited to small farmers - improved irrigation, agronomy, credit, technical support and assistance with marketing - to spur adoption',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.7 CASHEW CROP HEALTH
 // --------------------------------------------------------
 {
 id: '2.7',
 title: '2.7 Cashew Crop Health',
 subsections: [
 {
 id: '2.7.1',
 title: '2.7.1 Integrated Management of Powdery Mildew (Oidium anacardii F. Noack) Disease in Cashew',
 table: {
 rows: [
 ['TIMP Name', 'Integrated Management of powdery mildew (Oidium anacardii F. Noack) disease in cashew'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'In general, cashew production in Kenya suffers from low productivity due to poor powdery mildew control measures or failure to manage the disease which results in reduction of the economic lifespan of cashew trees.'],
 ['What is it? (TIMP description)', `Integrated management of powdery mildew disease of cashew nut involves the use of a combination of various control measures classified as cultural, biological and chemical control. In order to realize an effective management program for this disease, one has to start with preventive cultural practices and follow up with curative disease control measures i.e. from cultural to chemical control once symptoms are observed. The IPM package is environmentally, economically and human friendly. These management practices start with scouting / monitoring for diseases, their identification and establishment of their incidences and severity which then guide on the control measures to use among the following:
Cultural control:
• Prune trees to avoid overcrowding which creates favorable conditions for the disease
• Bury infected plant residues 2ft deep to reduce inoculum
• Field hygiene through disinfection of farm tools with Jik (50ml/litre water)
• Avoid overhead irrigation as this will spread the disease through splash
Chemical control:
• Spraying with sulphur based fungicides (e.g. Cosavet DF or Devisulph WP), or Triadimenol based products (e.g. Bayfidan 250EC) or Affair Top 800WDG according to manufacturers\' recommendation`],
 ['Justification', 'Powdery mildew attacks young panicles and flowers causing crop loss of 70 – 100%. Mature trees with potential to produce over 30 kg per tree annually end up producing less than 5 kg annually when infected. Varieties in the Country are susceptible to powdery mildew. The disease causes losses of up to 90%. Use of the Integrated Management package for controlling powdery mildew in cashew nuts, when applied timely reduces these losses significantly.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in Dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of appropriate fungicides.'],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross- KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMPs will be up scaled', 'Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Limited expertise in pruning and spraying
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in pruning and spraying
• Encourage more participation of NGOs/private partnerships
• Resources availed for procurement of motorized sprayers and fungicides
• Sensitization and training of agro-chemical dealers`],
 ['Lessons learned in up scaling', 'Availability of Cost benefit information enhances adoption.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since disease control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products
• There is need to sensitize and regulate agro-chemical dealers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer-KES 60,000 which can cover 1000 trees in a season; Cost of fungicide 5000 per season depending on severity of the disease; Labor cost @ 5000 per season.
Estimated returns: High returns expected: Uncontrolled tree-5kg or less of cashew nut, KES 250, Controlled tree 30kg of cashew per tree, KES 2750; Intangible benefits from trees: environmental conservation-preserving water catchments; Carbon sequestration, addressing global warming.

Gender issues: Limited ownership and control of land among women can limit their participation; Limited access to capital among women can limit their participation; Bias in training opportunities in favour of men on coppicing and top-working; Spraying machines are not friendly to women operators.

Gender related opportunities: Tree size is reduced through pruning makes management operations such as harvesting easy for women.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for users', `1. Cashew for Cash booklet, KALRO Mtwapa
2. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
3. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Kenya
4. Agricultural and Livestock Research Organization (KALRO) P.O. Box 57811-00200, Nairobi, Kenya. Tel: +254 (0)204183720 Email: directorgeneral@kalro.org Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, F.K. Muniu Kenya Agricultural and Livestock Research Organization (KALRO) S.L.P. 57811-00200, Nairobi, Kenya. Simu: +254 020 4183720 Barua Pepe: directorgeneral@kalro.org Tovuti: www.kalro.org`],
 ['F: Status of TIMPs readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO Mtwapa P.O. Box 16 -80109, Mtwapa Tel 0202024751 Email kalro.mtwapa@kalro.org; KALRO Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole; KALRO Kabete P.O. Box 14733-00800 cd.narl@kalro.org 0727624471; KALRO Kabete: Ruth Amata. Partner organizations: Pwani University, info@pu.ac.ke. S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Validate efficacy of recommended fungicides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.2',
 title: '2.7.2 Integrated Management of Anthracnose (Colletotrichum gloeosporioides) Disease in Cashew',
 table: {
 rows: [
 ['TIMP Name', 'Integrated Management of anthracnose (Colletotrichum gloeosporioides) disease in cashew'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Losses attributed to anthracnose disease infection which leads to poor quality and yield reduction.'],
 ['What is it? (TIMP description)', `Integrated management of anthracnose disease of cashew nut involves the use of a combination of various control measures including cultural, biological and chemical control. In order to realize an effective management program for this disease, one has to start with preventive cultural practices and follow up with curative disease control measures i.e. from cultural to chemical control once symptoms are observed. The IPM package is environmentally, economically and human friendly. These management practices start with scouting / monitoring for disease, their identification and establishment of their incidences and severity which then guide on the control measures to use among the following:

[Image here: Table extracted from page 136]`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', `• Cashew growers
• public and private extension service providers
• Researchers`],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Skilled service providers
• Availability of appropriate fungicides`],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross-KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Limited expertise in pruning and spraying
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in pruning and spraying
• Fast-track land registration
• Encourage more participation of NGOs/private partnerships
• Resources availed for procurement of motorized sprayers and fungicides
• Sensitization and training of agro-chemical dealers`],
 ['Lessons learned in up scaling', `• Availability of cost-benefit information enhances adoption
• Gradual change of cycle of aged trees through coppicing and grafting is more effective`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since disease control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer-KES 60,000 which can cover 1000 trees in a season; Cost of fungicide 5000 per season depending on severity of the disease; Labor cost @ 5000 per season.
Estimated returns: High returns expected: Uncontrolled tree-5kg or less of cashew nut, KES 250, Controlled tree 30kg of cashew per tree, KES 2750; Intangible benefits from trees: environmental conservation-preserving water catchments; Carbon sequestration, addressing global warming.

Gender issues: Limited ownership and control of land among women can limit their participation; Limited access to capital among women can limit their participation; Bias in training opportunities in favour of men on coppicing and top-working; Spraying machines are not friendly to women operators.

Gender related opportunities: Tree size is reduced through pruning makes management operations such as harvesting easy for women.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for users', `1. Cashew for Cash booklet, KALRO Mtwapa
2. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
3. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Kenya
4. Agricultural and Livestock Research Organization (KALRO) P.O. Box 57811-00200, Nairobi, Kenya. Tel: +254 (0)204183720 Email: directorgeneral@kalro.org Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, F.K. Muniu Kenya Agricultural and Livestock Research Organization (KALRO) S.L.P. 57811-00200, Nairobi, Kenya. Simu: +254 020 4183720 Barua Pepe: directorgeneral@kalro.org Tovuti: www.kalro.org`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa Kalro.Mtwapa@kalro.org Box 16-80109, Mtwapa Tel 0202024751 Email: kalro.mtwapa@kalro.org Director.icri@kalro.org. Lead organization and scientists: KALRO: Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole; KALRO: Kabete: Ruth Amata. Partner organizations and contacts: Pwani University, info@pu.ac.ke. S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Validate efficacy of recommended fungicides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.3',
 title: '2.7.3 Integrated Management of Helopeltis Bugs in Cashew',
 table: {
 rows: [
 ['TIMP Name', 'Integrated management of Helopeltis bugs in cashew'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Control of Cashew and Cotton Helopeltis to alleviate leaf deformation, dieback, scotched appearance, \'witches\' bloom which result from infestation leading to reduced yields.'],
 ['What is it? (TIMP description)', `Helopeltis bugs, also known as mosquito bugs or mird bugs, are the most important pests of cashew. These bugs are slender, delicate insects, about 7-10 mm long with long legs and antennae, the antenna being nearly twice as long as the body. The females are red and the males\' brown to yellowish red. They lay eggs inserted into the soft tissue near the tips of flowering or vegetative shoots. Nymphs (immature bugs) are yellowish in colour. Both adults and nymphs feed on young leaves, young vegetative and flowering shoots, and developing fruits. Control of Helopeltis bugs is through conservation of natural enemies and application of appropriate pesticides.

Control:
Monitor the crop regularly. Helopeltis attack occurs very suddenly and great vigilance is very important to control this pest, particularly during the rainy season or when water is available leading to flushing (production of young shoots) when Helopeltis populations normally build up. Conserve natural enemies. Weaver ants build nests on cashew trees providing good protection against this and other bug pests. Do not interplant cashew with crops that are host for Helopeltis bugs, such as cotton, sweet potato, guava and mango.

[Image here: Damage caused by the bug - Helopeltis bugs in cashew. Source: Internet]`],
 ['Justification', 'The bug is one of the serious cashew pests that can cause damage that can lead up to 40% loss. Attacked leaves are deformed and show angular lesions, particularly along the veins, which may drop off, so that the leaves appear as if attacked by biting insects. Feeding on the stalks of the tender shoots causes elongated green lesions, sometimes accompanied by exudation of gum. Severely damaged shoots die back due to the effect of bug saliva in combination with fungi, which enter the plant tissue through the feeding lesions; the subsequent development of numerous auxiliary buds causes a bunched terminal growth known as \'witches\' broom\'. In case of serious infestations the trees may appear as if scorched by fire. Bug feeding on developing apples and nuts causes brown sunken spots. The growth of trees is seriously retarded and fruit formation of attacking flowering shoots is reduced.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of appropriate pesticides.'],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross- KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration
• Youths – form spraying gangs`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Inadequate knowledge in managing Helopeltis bug
• Limited expertise in pruning and spraying
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in pruning and spraying
• Encourage more participation of NGOs/private partnerships
• Link service providers with financial institutions for acquisition of inputs
• Resources availed for procurement of motorized sprayers and fungicides
• Sensitization and training of agro-chemical dealers`],
 ['Lessons learned in up scaling', `• Availability of Cost-benefit information enhances adoption
• Gradual change of cycle of aged trees through coppicing and grafting is more effective`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since Pest control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products
• There is need to sensitize and regulate agro-chemical dealers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer-KES 60,000 and can cover over 1000 trees in a season, Cost of fungicide KES 2500 per litre.
Estimated returns: a) High returns expected: Uncontrolled tree-10kg or less of cashew nut, KES 500, Controlled tree 30kg of cashew per tree, KES 2750; b) Intangible benefits from trees: i) environmental conservation-preserving water catchments ii) Carbon sequestration, addressing global warming.

Gender issues: Women and youth have limited access to productive resources such as credit to purchase the required inputs such as chemicals than men; Women and youth have limited access to education, training and extension services than men; Women have limited access to markets as they sometimes cannot travel to far markets due to their domestic roles; Women have less access to agricultural information, technology and Knowledge.

Gender related opportunities: Opportunities for youths exists in spraying the crop.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for users', 'Leaflets and handouts.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole. Partner organizations and contacts: Pwani University, info@pu.ac.ke.S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Validate efficacy of recommended pesticides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.4',
 title: '2.7.4 Integrated Management of Coconut (Coreid) Bug (Pseudotherapus wayi) in Cashew',
 table: {
 rows: [
 ['TIMP Name', 'Integrated management of Coconut (Coreid) Bug (Pseudotherapus wayi) in cashew'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Control of coconut bug in order to reduce low production and reduced quality resulting from infestation.'],
 ['What is it? (TIMP description)', `The coconut bug is an insect of economic importance for cashew nuts. Adult bugs are reddish brown in colour and 12 to 14 mm long. Nymphs are red brown to green brown in colour and have long antennae. Bug feeding causes necrotic bruise-like depressions; a hard lump develops, which can be easily removed when the fruit is peeled. The bug sucks on the developing fruits causing pockmarks. The kernels are also affected showing spots, which lower their market value.

Control:
Conserve natural enemies - Weaver ants nest on cashew trees deterring and feeding on coconut bugs.

[Image here: Coconut bug. Source: A.M.Varela, ICIPE]`],
 ['Justification', 'The coconut bug is among the most serious coconut pests that can cause major losses. Adult bugs are brown in colour and 1.2 to 1.4 cm long. They lay eggs singly on the flowers or young nuts. Nymphs are red brown to green brown in colour and have long antenna. Adults and nymphs suck on flowers and developing fruits causing flower abortion and early nutfall. The toxic saliva of the bugs causes necrotic sunken lesions (scars) and cracks on the nuts. Attacked young nuts excrete gum. Many of the attacked young nuts fall off. Nuts older than 3 months at the time of attack may not be aborted but remain small and have scars. Yield losses are difficult to assess since many of the nuts (over 70%) fall naturally. Nuts which abort naturally, do not show scars or gummosis. Two bugs per palm can cause considerable damage. Damage is usually less serious in intercropped coconuts. The bugs also feed on cashew, mango, cocoa and guava. It is therefore important to take the necessary control measures to avoid losses caused by the coconut bug.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of appropriate pesticides.'],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross- KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration
• Youths – form spraying gangs`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Limited expertise in pruning and spraying
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in pesticide application and safety measures
• Encourage more participation of NGOs/private partnerships
• Resources availed for procurement of motorized sprayers and fungicides
• Sensitization and training of agro-chemical dealers`],
 ['Lessons learned in up scaling', `• Availability of Cost-benefit information enhances adoption
• Gradual change of cycle of aged trees through coppicing and grafting is more effective`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since pest control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products
• There is need to sensitize and regulate agro-chemical dealers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer-KES 60,000 and can cover over 1000 trees in a season, Cost of fungicide KES 2500 per litre.
Estimated returns: a) High returns expected: Uncontrolled tree - 10kg or less of cashew nut, KES 500, Controlled tree 30kg of cashew per tree, KES 2750; b) Intangible benefits from trees: i) environmental conservation - preserving water catchments ii) Carbon sequestration, addressing global warming.

Gender issues: Limited ownership and control of land among women can limit their participation; Limited access to capital among women can limit their participation; Bias in training opportunities in favour of men on coppicing and top-working; Spraying machines are not friendly to women operators.

Gender related opportunities: Conservation of natural enemies eases the burden of spraying on women; Training of service providers offers opportunities for youth of both gender.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for users', 'Leaflets and handouts.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole. Partner organizations and contacts: Pwani University, info@pu.ac.ke.S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Validate efficacy of recommended pesticides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.5',
 title: '2.7.5 Integrated Management of Cashew Weevil (Mecocorynus loripes) in Cashew',
 table: {
 rows: [
 ['TIMP Name', 'Integrated management of Cashew weevil (Mecocorynus loripes) in cashew'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Reduction in yield of cashew nuts that is caused by the tunneling and death of plants as a result of infestation by cashew weevil.'],
 ['What is it? (TIMP description)', `The cashew weevil is a large insect pest, about 20 mm long, and of a knobbed appearance. It is dark grey-brown in colour. The female weevil lays single eggs in small holes in the bark of the trunk or branches. The larvae are legless grubs, whitish in colour with a brown head. They bore through the bark and move downwards tunneling under the bark while feeding on the sapwood. Brown-black gummy substance is then seen on the trunk and main branches. Heavily attacked trees become ringed by damaged sapwood and eventually die. Neglected plantations are likely to be severely attacked. Fully-grown larvae pupate in a chamber about 2 cm below the bark.

Control:
• Cut away bark from damaged areas of lightly infested trees and kill the larvae and pupae underneath. Repeat this every month for a further six months if required
• Destroy severely infested trees. First collect and destroy all adult weevils; then fell the tree and remove the bark to expose all larval galleries; kill all larvae and pupa and burn the tree and conserve natural enemies especially weaver ants

[Image here: Adult cashew weevil. Source A. M. Varela, ICIPE]`],
 ['Justification', 'Heavy infestation kills the trees and reduces tree population and overall production. Control will improve productivity and returns to farmers.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers.'],
 ['Partners/stakeholders for scaling up and their roles', 'Extension workers, NGOs, private service providers.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Limited expertise in debarking and removal of insect growth stages lodged beneath
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in control measures
• Encourage more participation of NGOs/private partnerships
• Fast-track land registration
• Resources availed for procurement of debarking equipment`],
 ['Lessons learned in up scaling', 'Availability of Cost-benefit information enhances adoption.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since pest control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products
• There is need to sensitize and regulate agro-chemical dealers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Debarking and felling of severely infested trees can cost upto KES 1,000.00.
Estimated returns: a) High returns expected: Uncontrolled tree-10kg or less of cashew nut, KES 500, Controlled tree 30kg of cashew per tree, KES 2750; b) Intangible benefits from trees: i) environmental conservation-preserving water catchments ii) Carbon sequestration, addressing global warming.

Gender issues: Women and youth have limited access to productive resources such as credit to purchase the required inputs such as chemicals than men; Women and youth have limited access to education, training and extension services than men; Women have limited access to markets as they sometimes cannot travel to far markets due to their domestic roles; Women have less access to agricultural information, technology and knowledge.

Gender related opportunities: Opportunities for youths exists in spraying the crop.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for users', 'Leaflets and handouts.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO-ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole. Partner organizations and contacts: Pwani University, info@pu.ac.ke.S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Validate efficacy of appropriate pesticides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.6',
 title: '2.7.6 Integrated Management of Red Banded Thrips (Selenothrips rubrocinctus)',
 table: {
 rows: [
 ['TIMP Name', 'Integrated management of Red banded thrips (Selenothrips rubrocinctus)'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Control of the Red banded thrips to reduce dropping off of infested leaves, flowers and shoots, poor fruit formation and low production.'],
 ['What is it? (TIMP description)', `Adults of the red banded thrips are dark brown or blackish. Nymphs are pale yellow with a broad transverse red band on the dorsal side of the abdomen. Thrips attack older leaves, flowers and shoots. Attacked leaves drop off leaving bare shoots with few young leaves at the tip. Infestation of flowers causes poor fruit formation. Severe infestations may cause considerable damage.

Control:
The red band thrips can be effectively controlled through conservation of natural enemies. Anthocorid bugs are important in natural control of the thrips. Application of appropriate pesticides is also one of the control measures.

[Image here: Red banded thrips (Selenothrips rubrocinctus) Source: A.M. Varela, ICIPE]`],
 ['Justification', 'The red band thrips are serious pests of cashew. Their infestation may reduce raw nut production of upto 30%. The kernel weight of the nuts can also be reduced by about 50%, thereby resulting into low yields and low returns.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of appropriate fungicides.'],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross- KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration
• Youths – form spraying gangs`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Limited expertise in pest management
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in natural enemies conservation and use
• Training on effective and safe application of pesticides
• Encourage more participation of NGOs/private partnerships
• Resources availed for procurement of motorized sprayers and pesticides
• Sensitization and training of agro-chemical dealers`],
 ['Lessons learned in up scaling', `• Availability of Cost benefit information enhances adoption
• Gradual change in use of pesticides`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since pest control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products
• There is need to sensitize and regulate agro-chemical dealers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer - KES 60,000 and can cover 1000 trees in a season, Cost of pesticide approximately KES 2500 per litre.
Estimated returns: High returns expected: Uncontrolled tree-5kg of cashew nut, KES 250 Controlled tree 30kg of cashew per tree, KES 2750; b) Intangible benefits from trees: i) environmental conservation-preserving water catchments ii) Carbon sequestration, addressing global warming.

Gender issues: Women and youth have limited access to productive resources such as credit to purchase the required inputs such as chemicals than men; Women and youth have limited access to education, training and extension services than men; Women have limited access to markets as they sometimes cannot travel to far markets due to their domestic roles; Women have less access to agricultural information, technology and Knowledge.

Gender related opportunities: Opportunities for youths exists in spraying the crop.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for users', 'Leaflets and handouts.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole. Partner organizations and contacts: Pwani University, info@pu.ac.ke.S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Validate efficacy of appropriate pesticides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.7',
 title: '2.7.7 Integrated Management of Mealybugs (Pseudococcus longispinus)',
 table: {
 rows: [
 ['TIMP Name', 'Integrated management of Mealybugs (Pseudococcus longispinus)'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Control of mealybugs for reducing fruiting failure due to infestation and discoloration of nuts which result in lower nut grades that fetch low prices in the market.'],
 ['What is it? (TIMP description)', `The body of the adult female is 2 - 3.6 mm long, soft, elongate oval and somewhat flattened. The long-tailed mealybug (Pseudococcus longispinus) attacks shoots, inflorescences, apples and nuts. Affected parts appear completely white. Trees infested during the flowering stage fail to produce fruits, whereas those infested at the nut swelling stage produce discolored nuts, which result in a lower grade. However, cutting tests showed no difference in kernel outturn between clean and discolored nuts. Mealybugs have been a problem for cashew growers in Kenya as well as the neighboring Tanzania.

Control:
Conserve natural enemies - Mealybugs are usually controlled by a wide range of natural enemies. However, use of pesticides may kill these natural enemies leading to mealybug outbreaks.

[Image here: Mealybugs on leaf. Source: A.M. Varela, ICIPE]`],
 ['Justification', 'Mealybugs are among the most serious pests of greenhouse plants. Infested plants look unsightly because of the whitish cottony mass of insects and the black sooty mold fungus that develops on honeydew excretions. Mealybugs are present in the greenhouse throughout the year. The presence of ants should alert the grower to check ant trails to determine if ants are carrying mealybugs into the greenhouse. Pesticide spraying appears to be the most economical way to control mealybugs. However, the waxy coating of the mealybug makes it difficult for pesticide sprays to penetrate and kill the insect. Repeated spray applications may be necessary. Mealybugs are difficult to control by contact insecticides because of their tendency to hide in protected locations (e.g., undersides of leaves or in bracts) and form dense colonies, making contact difficult. The waxy coverings also protect them from being wetted by chemical sprays. Infestation results in fruiting failure, nut discoloration and lowering of the grade. It is therefore an economic important pest that poses a threat to cashew production and all efforts geared towards controlling it should be put in place.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of appropriate fungicides.'],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross- KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration
• Youths – form spraying gangs`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Inadequate knowledge in managing Mealybugs
• Limited Expertise in pruning and spraying
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in pruning and spraying
• Encourage more participation of NGOs/private partnerships
• Link service providers with financial institutions for acquisition of inputs
• Resources availed for procurement of motorized sprayers and fungicides
• Sensitization and training of agro-chemical dealers`],
 ['Lessons learned in up scaling', `• Availability of Cost-benefit information enhances adoption
• Gradual change in use of pesticides`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since pest control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products
• There is need to sensitize and regulate agro-chemical dealers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer-KES 60,000 and can cover 1000 trees in a season, Cost of pesticide approximately 2500 per litre.
Estimated returns: High returns expected: Uncontrolled tree-15kg of cashew nut, KES 750; Controlled tree 30kg of cashew per tree, KES 2750; b) Intangible benefits from trees: i) environmental conservation-preserving water catchments ii) Carbon sequestration, addressing global warming.

Gender issues: Limited ownership and control of land among women can limit their participation; Limited access to capital among women can limit their participation; Bias in training opportunities in favour of men on coppicing and top-working; Spraying machines are not friendly to women operators.

Gender related opportunities: Introduction of natural enemies (Weaver ants) makes pest management by use of pesticides less necessary allowing women to engage in other activities.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for Users', 'Leaflets and handouts.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO – ICRI Mtwapa, Box 16-80109-Mtwapa kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO: Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole.'],
 ],
 },
 gaps: [
 'Validate efficacy of appropriate pesticides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.8',
 title: '2.7.8 Integrated Management of Cashew Stem Girdler (Paranalepetes reticulata)',
 table: {
 rows: [
 ['TIMP Name', 'Integrated management of Cashew stem girdler (Paranalepetes reticulata)'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Control of the Cashew stem girdler to reduce damage of cashew trees.'],
 ['What is it? (TIMP description)', `Adult stem girdlers are a long horn beetles, with a body length of 25-35 mm and with antennae longer that the body. The head and the thorax are dark brown; the wing cases are orange with large black blotches giving them a reticulate appearance. The Adult beetles girdle branches from 3-8 mm in diameter leaving a V-section cut; only a narrow, central pillar round the pith zone is left, which eventually breaks off. Female beetles lay elongated eggs in transverse slits made in the bark of the girdled branch at points above the girdle. Larvae are yellow, in colour and reaches a length of 45 mm when fully grown. They mine in dead wood of the girdled branches. Pupation takes place in the dead wood. The lifecycle takes one year. This beetle is a common but usually minor pest of cashew in the Coast Province of Kenya.

Control:
Once a year (in November or December) collect and burn all girdled branches. Only the dead or dying part of the branch above the girdle needs to be collected and burnt.

[Image here: Cashew stem girdler (Paranalepetes reticulata) Source: A.M. Varela, ICIPE]`],
 ['Justification', 'The Cashew stem girdler are pests of cashew. However, neglected plantations may be severely damaged leading to death of cashew trees.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, Public and private extension service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Skilled service providers; availability of appropriate fungicides.'],
 ['Partners/stakeholders for scaling up and their roles', `• County governments; capacity building, supportive policies and frameworks
• Private sector (AMIRAN); facilitate access to technology; technology demonstration; access to credit
• NGOs (Kenya Red Cross- KRC, Action Aid, World Vision, and OXFAM); facilitate access to technology and technology demonstration
• Youths – form spraying gangs`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Inadequate service providers
• Limited expertise in pest management
• Land ownership challenges
• Limited financial capacity among growers`],
 ['Suggestions for addressing the challenges', `• Training more experts in natural enemies conservation and use
• Training on effective and safe application of pesticides
• Encourage more participation of NGOs/private partnerships
• Resources availed for procurement of motorized sprayers and pesticides
• Sensitization and training of agro-chemical dealers`],
 ['Lessons learned in up scaling', `• Availability of Cost-benefit information enhances adoption
• Gradual change in use of pesticides`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The technology requires adequate sensitization since pest control in tree crops is not extensively adopted in the Coastal region
• Care to use environmentally friendly products
• There is need to sensitize and regulate agro-chemical dealers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer-KES 60,000 and can cover 1000 trees in a season, Cost of pesticide approximately 2500 per litre.
Estimated returns: High returns expected: Uncontrolled tree-5kg of cashew nut, KES 250 Controlled tree 30kg of cashew per tree, KES 2750; b) Intangible benefits from trees: i) environmental conservation-preserving water catchments ii) Carbon sequestration, addressing global warming.

Gender issues: Women and youth have limited access to productive resources such as credit to purchase the required inputs such as chemicals than men; Women and youth have limited access to education, training and extension services than men; Women have limited access to markets as they sometimes cannot travel to far markets due to their domestic roles; Women have less access to agricultural information, technology and Knowledge.

Gender related opportunities: Opportunities for youths exists in spraying the crop.`],
 ['E: Case studies/profiles of success stories', 'Increased productivity among growers who adopted the practice in Kilifi, Kwale and Lamu Counties.'],
 ['Application guidelines for users', 'Leaflets and handouts.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: F. Muniu, M. Menza, S. Mwashumbe and F. Pole. Partner organizations and contacts: Pwani University, info@pu.ac.ke.S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Validate efficacy of appropriate pesticides in new growing areas (Tharaka Nithi)',
 'Upscale sensitization, training and regulation of agrochemical dealers for effective service provision',
 ],
 },
 {
 id: '2.7.9',
 title: '2.7.9 Integrated Weed Management',
 table: {
 rows: [
 ['TIMP Name', 'Integrated Weed Management'],
 ['Category', 'Management practices'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `Weeds pose a major challenge in cashew production. Significant yield losses in cashew production are attributed to poor weed management. Weeds compete for nutrients, soil moisture and space with the crop, harbor insect pests and create an environment conducive for disease occurrence. They cause loss of quantity and quality of nuts at harvest. Some of the major weeds in cashew production include grass weeds such as couch grass, star grass and annual weeds such as black jack, gallant soldier, Mexican marigold and wandering jew. Different weeds require various strategies for effective control, hence the advantage of combining the various management strategies.

[Image here: Common weeds affecting cashewnut production - Various weed species including Wandering Jew, Double thorn, Gallant soldier, Blackjack, Wild finger millet, Purslane, Lateweed, Goatweed, Sowthistle, Terere, Oxalis, Chickweed, Wildlettuce, Partenium, Thornapple, Asthmaweed, Wildraddish, Starbur, Eshaaga, Chinese Lantern, Tarvine, Nutsedge, Couchgrass][cite: 158-161]`],
 ['What is it? (TIMP description)', `Integrated weed management (IWM) is the management of weeds using several weed approaches such as preventive, physical control, biological control, use of biodegradable mulch, cultural, mechanical and chemical control. Physical control is the removal of weeds by manual or mechanical means, such as hand weeding or mowing. In manual weeding farmers carry out manual weeding and keep weed free fields after planting and just before flowering. Biological control is where you graze by big animals. Chemical control is where appropriate herbicides are used to control weeds. Cultural control includes the practice of crop rotation of the intercrops since various crops may influence the diversity and abundance of particular weed flora. Mechanical weed management includes use of farm equipment such as motorized weeder, which does the work much faster and is less tedious. Chemical weed management involves use of pre-emergences elective herbicides and or post-emergence selective herbicides.`],
 ['Justification', `They cause loss of quantity and quality of nuts at harvest. Majority of farmers in Kenya use manual approaches for weed management. Whereas this is effective, it is time consuming and labour intensive. Whereas manual weeding is effective it can also be ineffective when weeding is done in wet conditions because all weeds are apparently replanted. Therefore regrowth becomes a big problem. Weeds are so diverse and therefore one approach will be effective on some species and not others. Therefore you need more than one approach to keep weeds under control. Judicious use of pre- and post-emergence herbicides could be an effective time and labour saving in cashew. Post emergence is applied to control existing and actively growing weeds for effective control. Pre-emergence is control of weeds at germination stage or as they emerge from the soil. Herbicides are classified basing on their mode of application, time of application, action (contact or systematic). Contact herbicides kill the part covered and is best for annual weeds. Systemic are absorbedly the leaves or roots and then translocated through the plant system to the point of action. Selective herbicides will select and kill some plants while non-selective will kill all. It is important to confirm the registered herbicides (Pesticide Control Board Manual) that can be used by Cashew growers[cite: 161-162].`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension workers, Agrodealers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals`],
 ['Critical/essential factors promotion', `• Promote integrated weed management (IPM)
• Address environmental and safety concerns related to the use of herbicides
• Accompany the promotion with demos and field days with farmer groups and stakeholders on the effectiveness of the various weed management options using FFSB approach
• Train users on appropriate use of herbicide and safe use
• Train people on biology of weeds and weed dynamics in cropping systems
• Farmers need training on timing with regard to conservation of biodiversity Preserve pollinators for increased productivity`],
 ['Partners/stakeholders for scaling up and their respective roles', 'Agrochemical companies, Research partners (KALRO, CIAT), County extension staffs, NGOs.'],
 ['C: Current situation and future scaling up', ''],
 ['Counties where Already promoted if any', 'Kilifi.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Lamu.'],
 ['Challenges in development and dissemination', `• High cost of herbicides
• Inadequate knowledge and information on which herbicides to use and when to use them
• Myths on appropriateness of using herbicides`],
 ['Suggestion for addressing the challenges', `• Avail affordable credits and recover from proceeds of farmers\' produce
• Promotion of the product by conducting demos and field days and involvement of the stakeholders
• Developing and disseminating information to various stakeholders
• Training on integrated approaches using available methods Including appropriate herbicides and their use`],
 ['Lessons learned in up scaling', `• Integrated approaches of weed management are more effective than use of one control method. It is safe and environmentally friendly
• Continuous use of herbicide has environmental, health and social hazards`],
 ['Social, environmental, policy and market conditions necessary', `• Build capacity on an IWM approach/practice
• Have an environmental and safety plan when using herbicides
• Address the environmental and social concerns related to use of agrochemicals
• A functional agrodelayer network to supply the products when required by the farmers`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 4,000 per acre.
Estimated returns: KES 30,000 per acre.

Gender issues: Since weeding for cashews is mostly done by women and children, dissemination strategies should target women more but also take care of men to become aware of the TIMP. Make all gender understand the benefits of IWM. Empower both men and women to make a judicious decision on IWM approach. Use of IWM technology can reduce drudgery due to manual weeding and save time for other activities to women.

Gender related opportunities: Labour is reduced therefore opportunities exist for women and youth to get in other economic activities including the production, and marketing. VMG groups could be limited in accessing the knowledge resources and exposed to many threats such as insecurity and land disputes. Training VMG on IWM practices and opportunities.`],
 ['E: Case studies/profiles of success stories', 'Extension and training material available.'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Center Director KALRO Kabete P. OBox14733-00800, Nairobi; Institute Director, KALRO-ICRI Mtwapa, kalro.mtwapa@kalro.org. Lead organization and scientists: KALRO Kabete: H.Mwangi, V. Momanyi. Partner organizations and contacts: NGOs, CBOs, County Governments, KEPHIS.'],
 ],
 },
 gaps: [
 'Determine cost benefits of using motorized weeder versus other weed management strategies in cashew production',
 ],
 },
 {
 id: '2.7.10',
 title: '2.7.10 Cover Cropping for Cashew Nut Weed Management',
 table: {
 rows: [
 ['TIMP Name', 'Cover cropping for cashew nut weed management'],
 ['Category', 'Innovation'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Weed competition in cashew monocropping system is a big problem that leads to reduced yield.'],
 ['What is it? (TIMP description)', `Innovative Legume Intercropping Systems are the application of growing more than one crop in a field at the same time, as a tool to enhance agricultural production and to obtain efficient land use. Intercropping systems are defined based on the temporal and spatial arrangements of the crops. There are several intercropping systems such as mixed, strip, row intercropping patterns, Relay and Alley intercropping. In cashew, cowpea has been used as a cover crop in young orchards at a spacing of 90 cm x 60 cm between the cashew plants.

[Image here: Cover cropping with cowpea in Cashewnut Source: Stella Katini]`],
 ['Justification', 'balanced agriculture.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Extension Staff.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Conduct demos, field days with farmers groups and stakeholders.'],
 ['Partners/stakeholders for scaling up and their respective roles', `• KALRO - Research & capacity building
• Universities - Research & technical backstopping
• Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection
• CBOs, NGOs - Seedlings multiplication and technology dissemination
• seed company
• Nursery operators - Seedlings multiplication
• Extension workers - Dissemination and technical backstopping`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi.'],
 ['Counties where TIMPs will be upscaled', 'Lamu, Kilifi, Kwale.'],
 ['Challenges in development and dissemination', 'Inadequate training and limited extension staff.'],
 ['Suggestion for addressing the challenges', `• Facilitation of training of county extension staffs
• Conduct demos and field days`],
 ['Lesson learned in up scaling if any', 'Intercropping systems are knowledge intensive and require making adjustments in traditional ways of cropping. Such a change calls for intensive training and demonstration for farmers to familiarize with the technology and its benefits. There is need to adapt the technology and promote it in new environments/AEZ.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', 'A farmer learning platform is essential for training on how to deploy the cover crop technology for weed management.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 5,000 per acre.
Estimated returns: KES 30,000 per acre.

Gender issues: Complexity of the intercropping system can result in increased labour, which could impact on the women who are key players during planting and weeding; Women have less access to information, technology and knowledge; Women and youth have limited access to the equipment used to make the water pan than men; Women have less access to land that can be used for water pan than men; Women and youth have limited access to education, training and extension services than men; Men dominate most decisions at the household and Community levels.

Gender related opportunities: Intercropping offers good opportunities to both men and women to grow diverse crops for economic gains and at the same time offers enhanced biodiversity benefits.`],
 ['E: Case studies/profiles of success stories', 'MBILI-MBILI system working in Bungoma, Kakamega, Siaya, Trans Nzoia and Uasin Gishu.'],
 ['Application guidelines for users', 'Extension and training material available.'],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', 'Center Director KALRO Kabete, Waiyaki Way, P.O Box14733-00800, Nairobi. Lead organization and scientists: KALRO Kabete: H. Mwangi, V. Momanyi. Partner organizations and contacts: County Extension Staff, Farmer Groups and CBOs, NGOs.'],
 ],
 },
 gaps: [],
 },
 {
 id: '2.7.11',
 title: '2.7.11 Mulching for Weed Control in Cashew Orchards',
 table: {
 rows: [
 ['TIMP Name', 'Mulching for weed control in cashew orchards'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Weeds infestation soil moisture and loss of organic matter, in ASAL.'],
 ['What is it? (TIMP description)', `The practice of covering the soil/ground with natural or synthetic materials. Mulches can effectively control weeds from seeds that germinate near or at the soil surface. There are two types of mulches: biodegradable or natural mulches. Biodegradable include straw, dead leaves and compost to make more favourable conditions for plant growth, development and efficient crop production. The mulches should be between 2 - 4 inches deep to be effective. Nondegradable or synthetic mulches can be used in growing of climbing beans. Only black mulches should be used to control weeds.

Benefits: Organic mulches retain moisture in the soil; suppress weeds; keep the soil cool; and help improve soil fertility (as the mulches decompose) and improves microclimate hence increasing biodiversity. Synthetic mulches will solarize soils, control weeds and weed seeds, retains oil moisture and controls diseases.

[Image here: Table extracted from page 167]`],
 ['Justification', 'apply, and are reusable.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of plant or crop residues for organic mulches must take care not to introduce new weed seeds or disseminate weed seeds
• Size of the land
• Competing uses of crop residues
• Type of the crops/Synthetic material
• Cost of materials
• Disposal of synthetic material after use`],
 ['Partners/stakeholders for scaling up and their roles', `• KALRO – Research & capacity building
• Universities - Research & technical backstopping
• Kenya Plant Health Inspectorate Services (KEPHIS) - Seed inspection
• CBOs, NGOs - Seedlings multiplication and technology dissemination
• seed company
• Nursery operators - Seedlings multiplication
• Extension workers - Dissemination and technical backstopping`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted', 'Not used in cashew in Kenya. Used to some extent in Thailand.'],
 ['Counties where TIMP will be promoted', 'Lamu.'],
 ['Challenges in dissemination', `• Lack of enough plant and crop residues due to competing uses in organic mulches
• Possibilities of insect build up categorized as pest or disease vectors or weed seeds in organic mulches`],
 ['Suggestions for addressing the challenges', `• Crop diversification to increase availability of organic mulches
• Establish and follow a good integrated pest control management program for the particular beans
• Adapting alternative mulching materials like high absorbance polymers`],
 ['Lessons learned', 'There is need to adapt to alternative mulching technologies in addition to use of organic materials like crop, plant residues.'],
 ['Social, environmental, policy and market conditions necessary', `• Practice is socially acceptable
• Environmentally friendly
• Increased productivity will provide supply to the markets
• Supporting frameworks/policies are available`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Organic mulch is low cost but labour intensive during the initial application.
Estimated returns: Dependent on value chain but generally >100% of the initial investments assuming other factors are in control.

Gender issues: Since the activity is labour intensive it may increase the labour burden for the various gender categories; The TIMP will reduce women\'s weeding time that can be used to perform other productive activities.

Gender related opportunities: The TIMP can offer employment for the youths.`],
 ['E: Case studies/profiles of success stories', 'Farmers in different value chains have reported improved soil conditions, reduced runoff and nutrient loss, soil moisture retention in the soil and generally increased crop production following application of mulching technology.'],
 ['Application guidelines for users', 'Leaflets and handouts.'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Centre Director KALRO Kabete, off Waiyaki way, P.O. Box 14733-00800, NAIROBI. Tel: +254-0721822312, E-mail: cd.narl@kalro.org. Lead organization and scientists: KALRO: H. Mwangi, V. Momanyi. Partner organizations and Contacts: County governments, Public-Private-Partnerships.'],
 ],
 },
 gaps: [
 'Determine cost benefits of using biological live mulch/dead crop residues versus plastic mulch in cashew production systems',
 ],
 },
 {
 id: '2.7.12',
 title: '2.7.12 Chemical Weed Control in Cashew Orchards',
 table: {
 rows: [
 ['TIMP Name', 'Chemical Weed Control in cashew orchards'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Heavy weed infestation in beans fields.'],
 ['What is it? (TIMP description)', 'Chemical weed control refers to any technique that involves the application of herbicide to weeds or soil to control the growth or germination of the weed species. Herbicide weed control is a technology that requires knowledge on herbicides registered for cashew (PCPB Manual, 2020).'],
 ['Justification', 'Manual hand weeding is very labour intensive, scarce and expensive. Use of herbicides reduces drudgery and effects can be a timely weed control option.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers and extension agencies.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Capacity building and training on safe use of chemicals for all users.'],
 ['Partners/stakeholders for scaling up and their respective roles', `• Public and private partners - [MOALD] for extension
• Chemical companies for backstopping
• ICRISAT for technical backstopping and promotion
• FIPs (Farmer Input Promotion) for promotion
• Farmer Groups for activity implementation and promotion
• Service provider agencies including Micro-finance agencies and banks for credit provision, agro-vets for input supply
• Processors and manufacturers to create market for produce, aggregators including CARD (Community Action for Rural Development) for economy of scale sales and marketing), and others including NGOs, CBOs, and FBOs to provide specialist services like community mobilization, nutrition training among others`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted', 'Herbicide weed control can be upscaled in all the areas where cashew are being grown.'],
 ['Counties where TIMP will be upscaled', 'Herbicide weed control can be upscaled in all the areas where cashew are being grown.'],
 ['Challenges in dissemination', `• Limited knowledge and information and low literacy levels among the farmers
• Herbicide use and application requires knowledge and training on safe of herbicides
• The farmers need to understand the proper use and application of herbicides to avoid buying the wrong herbicides`],
 ['Recommendations for addressing the challenges', `• Train the agricultural extension county officers as TOTs on safe use of herbicides. This help in reaching the farmers with the information
• Herbicides like all chemicals have to be used with care to avoid environmental and social hazards
• Liaise with the Agricultural extension and environmental officers on the ground for Guidance on safe use of chemicals`],
 ['Lessons learned', `Access to and use of information on different methods of weed control will reduce drudgery and cost of weed management. It could give room to increase are under Cultivation and increase productivity.`],
 ['Social, environmental, policy and market conditions necessary', 'Sensitization of communities on alternative methods of weed control and safe use of chemicals is very necessary.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Herbicide use is cheaper than manual weed Control because it requires less labour.
Estimated returns: Not yet estimated.

Gender issues: Need to sensitize both men and women on Value of crop losses caused by weed competition; Women and children are the main sources of labour for cashew. Adoption of technology will reduce the labour burden on women and children. The children can get time for school work, while the women can engage in other Economic activities.

Gender related opportunities: Women stand to benefit in increased production due to timely operations, increased yields.`],
 ['E: Case studies/profiles of success stories', 'Weed control leaflets/manuals.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'KALRO. Lead organization and scientists: KALRO: H. Mwangi, V. Momanyi. Partner organizations and contacts: ICRISAT Nairobi; MoALD in Counties, Chemical companies.'],
 ],
 },
 gaps: [
 'Determine cost benefits of using synthetic chemicals versus other weed management strategies in cashew nut production',
 ],
 },
 {
 id: '2.7.13',
 title: '2.7.13 Mechanical Weeding in Cashew',
 table: {
 rows: [
 ['TIMP Name', 'Mechanical weeding in cashew'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Weeds in cashew cropping system. Weeds around the tree trunks give severe competition for water and nutrients with the cashew.'],
 ['What is it? (TIMP description)', `This is motorized weeding using a weeder implement to maintain weed free transplanted clean certified hardened cashew nut seedlings growing in well prepared ground with deep well drained sandy soils of pH 4.2 - 8.7.
Planting should be done in rows at 10m x 10m to facilitate inter-row weeding.
Row Weeders (Manual/ motorized) are implements used to weed between the rows. The intra-row weeds are removed by hand pulling.

[Image here: Motorized weeder (Source: cnsprayers.en.madeinchina.com)]`],
 ['Justification', 'Weeds if not controlled cause yield losses due to competition, labour, attract other pests (insects and diseases) and can adulterate the quality of the cashew produce.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers and Agricultural extension officers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Participatory Implementation, stakeholder sensitization.'],
 ['Partners/stakeholders for scaling up and their respective roles', `• Public and private partners –[MOALD] for extension
• Jua Kali artisans
• Processors and manufacturers to create market for produce, aggregators including CARD (Community Action for Rural Development) for economy of scale sales and marketing), and others including NGOs, CBOs, and FBOs to provide specialist services like community mobilization, nutrition training among others[cite: 173-174]`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where promoted', 'All counties where cashew is grown.'],
 ['Counties where TIMP will be upscaled', 'All counties growing cashew.'],
 ['Challenges in dissemination', 'Implements not readily available in the market.'],
 ['Recommendations for addressing the challenges', `• Work with Jua Kali industries for fabrication of appropriate implements
• Facilitate local manufacture of such machineries by international investors to accelerate transfer of technology to Jua Kali industries`],
 ['Lessons learned', 'Access and use of technologies will provide timely weed control which will enhance crop production.'],
 ['Social, environmental, policy and market conditions necessary', 'Sensitization of communities on the available technologies and management practices in weed management.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Basic cost of the weeder (implement is high at KES 28,000 for ordinally bean farmers, they can purchase as a group.
Estimated returns: Not yet estimated.

Gender issues: Need to sensitize both men and women on value of crop losses caused by weed competition; Women and children are the main sources of labour for this crop. Adoption of technology will reduce the labour burden on women and children. The children can get time for school work, while the women can engage in other economic activities.

Gender related opportunities: Women stand to benefit in increased production due to timely operations, increased yields. Women perform most of the crop production activities such as weeding hence the TIMP may reduce their work burden.`],
 ['E: Case studies/profiles of success stories', 'Not yet accessible to cashew farmers.'],
 ['Application guidelines for users', 'Leaflets and manuals.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ],
 },
 gaps: [
 'Determine cost-benefits of using mechanical weeding tools such as motorized weeder versus other weed management strategies in cashew nut production',
 'Power weeder is heavy so not friendly to women users. Research on gender sensitive weeders',
 ],
 },
 {
 id: '2.7.14',
 title: '2.7.14 Safe Use of Agrochemicals (Herbicides)',
 table: {
 rows: [
 ['TIMP Name', 'Safe Use of Agrochemicals (Herbicides)'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `Excessive pesticide application to crops, use of pesticides for spraying crops without wearing the right protective clothing, storage of pesticides in non-designated stores, wrong application techniques, spraying at the wrong times and against the wind direction, use of pesticides without following the guidelines provided on the labels. Inadequate enforcement of global policies and regulation on use of pesticide.`],
 ['What is it? (TIMP description)', 'Capacity building of farmers, crop protection teams on safe handling and use of pesticides right from transportation from the agro-dealers to storage in their houses, mixing procedures and their application in the field in order to ensure safety of the crop, the person handling them and the environment at large. The technology will include proper methodologies for proper pesticide disposal to minimize pollution of the environment.'],
 ['Justification', 'There have been incidences of excessive use and improper handling that lead to the spray operators inhaling the chemicals in the process of spraying. Use of inappropriate spray equipment lead to leakages thereby exposing the operators to health risks as well as contamination of the water bodies. Most of these irregularities can easily be corrected through sensitization and capacity building forums for end users to be made aware of the best practices that should be used when handling pesticides.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew farmers, Agrodealers, Spray service providers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer-to-farmer extension models
• Mass media - Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms - Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Collaboration between all partners, willingness of farmers to adhere to proper guidelines, adequate facilitation: funds, logistics (transport).'],
 ['Partners/stakeholders for scaling up and their roles', `• Ministry of Agriculture Extension Service providers at County level to conduct extension services and farmer trainings
• Individual Farmers farmer groups/CBOs to participate in the implementation of the various technologies for cashewnut production
• KALRO, CABI, AAK, PCPB, KEPHIS and Universities to develop the technologies and conduct ToTs`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where technology is already being promoted, if Any', 'Kilifi.'],
 ['Counties where TIMPS will be up scaled', 'Kilifi.'],
 ['Challenges in dissemination', `• Change of mindset in favour of current practices maybe difficult to achieve
• Illiteracy and inadequate capacity to use pesticides correctly. Most farmers cannot read and interpret the labels properly resulting to overuse or underuse of pesticides
• Use of banned pesticides from neighboring countries
• Inadequate capacity by farmers and agrochemical companies to dispose pesticides properly`],
 ['Suggestions for addressing the challenges', `• Capacity building and sensitization forums for both farmers and agro dealers using participatory approach
• Formation of youth spray teams
• Establishment of aggregation/incineration centres for used pesticide containers
• Establishment of training of Extension staff and lead farmers as TOTs
• Increase surveillance along the border points and enforce the laws`],
 ['Lessons learned in upscaling if any', `Upscaling of this technology needs young educated men and youth due to its hazardous nature. Some of the aspects of this technology need a lot of capital to actualize. For instance, the collection and incineration of pesticide containers needs a lot of money that may not be accessible by most men or youth groups. The high illiteracy levels of majority farmers may hinder the use of correct information/ knowledge in the use of pesticides in some areas.`],
 ['Social, environmental, policy and market conditions necessary', 'Organized collective marketing channels critical for benefits to be derived from practice.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 5,000 per acre.
Estimated returns: KES 35,000 per acre.

Gender issues: Technology is not safe for use by expectant women and the physically challenged individuals because of it hazardous/dangerous nature; Women have less access to credit to buy inputs such as pesticides band protective gears; Women have less access to knowledge and information on the dangers of chemicals especially on storage and disposal; Low levels of literacy and inability to read and interpret the content of the pesticides labels especially on re-entry period after spraying. This cause pesticides poisoning to men and women who spray and harvest.

Gender related opportunities: Employment opportunities for youths exist in the following areas: Offering spray calibration services to farmers as an enterprise; Surveillance/scouting to help farmers in pest and disease diagnostic services; Collection of pesticide containers and assist in the incineration processes by AAK; Owning and operating agro chemicals that stock right pesticides and offer pest and disease advisory services to farmers at the agro vet shops.`],
 ['E: Case studies/profiles of success stories', `• The AAK has trained youth spraying teams that have helped in the spraying of the farms in a few counties thus reducing cases of people being exposed to pesticides
• There are reported cases of farmers who regularly scout their crop that have reported to using less pesticides on their farm
• Some counties who have aggregation centres by AAK for collection of pesticide containers. This has led to reduction of these containers on farms
• Safe use of Pesticide campaigns by AAK, PCPB KALRO and MoALD have resulted in safer use of pesticides`],
 ['Application guidelines for users', 'Brochures developed by KALRO and CABI as reference material.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Centre Director KALRO Kabete. Lead organization and Scientists: KALRO: H. Mwangi, V. Momanyi. Partner organizations and contacts: MoALD, CABI, PCPB, AAK, KEPHIS, County Governments and Universities.'],
 ],
 },
 gaps: [],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.8 HARVESTING AND POSTHARVEST MANAGEMENT
 // --------------------------------------------------------
 {
 id: '2.8',
 title: '2.8 Harvesting and Postharvest Management',
 subsections: [
 {
 id: '2.8.1',
 title: '2.8.1 Timely Harvesting and Handling of Cashew Nuts',
 table: {
 rows: [
 ['TIMP Name', 'Timely harvesting and handling of cashew nuts'],
 ['Category', 'Management Practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Loss of nuts quality.'],
 ['What is it? (TIMP description)', `It is the process of collecting the fallen fruits and separating the apple from the fruit. To get good quality nuts, clear the area beneath the tree to facilitate the picking of the fruits; collect fallen fruits, and detach the nut from the apples, and put them in a basket or sack. Nuts should be picked off the cleared ground daily. Harvesting can be done manually or by machines[cite: 178-179].

[Image here: Manual harvesting of cashew nuts - person picking fallen cashew fruits from ground]`],
 ['Justification', 'Delay in harvesting of cashew nuts results in losses caused by mycotoxin, insects, moisture and, animals. Leaving the nuts uncollected lowers the quality (kernel becomes yellowish and higher in oil).'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, extension staff, traders, processors and researchers.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Willingness of farmers to learn
• Extension support
• Organized Farm labour`],
 ['Partners/stakeholders for scaling up and their roles', `• Agricultural Extension service-To conduct farmer sensitization, on-farm and on station demonstrations
• Farmers-To take attend the training and implement it
• Processors and traders-Buy the enhanced cashew nut produce
• Researchers - Work with farmers to implement improved harvesting methods
• NGOs dealing with cashew-Dissemination of the practices`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River, Lamu.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Tana River, Lamu.'],
 ['Challenges in dissemination', 'Lack of knowledge on appropriate harvesting technology. Perceived as time consuming.'],
 ['Suggestions for addressing the challenges', `• Awareness creation about the technology to farmers and traders
• Capacity building of farmers on appropriate harvesting
• Introduction of machinery for harvesting`],
 ['Lessons learned in up scaling if any', 'Loss of quality can be minimized through timely harvesting and handling of cashew nuts.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Awareness creation of advantages timely harvesting to all social groups
• Include all gender groups when sharing research and validation findings
• Create awareness on effect of moisture on loss of quality`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To yet determined.
Estimated returns: Reduced losses, better income and nutrition (due to utilization of saved nut).

Gender issues: In the target county, cashew is mainly cultivated by women, hence these should be targeted; The TIMP is easily adoptable after training and many farmers can use the technology since it reduces losses incurred during and after harvesting.

Gender related opportunities: The TIMP increases farm income through reduction of harvest losses. Women can capitalize on this aspect of cashew production to reduce harvest losses.`],
 ['E: Case studies/profiles of success stories', 'Clean cashew kernels and of good grades fetch good prices in areas where timely harvesting was done.'],
 ['Application guidelines for users', `1. Cashew planting guide, KALRO Mtwapa
2. Cashew for Cash booklet, KALRO Mtwapa
3. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
4. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, Muniu F.K`],
 ['F: Status of TIMP readiness', 'Require validation'],
 ['G: Contacts', 'Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Validating maturity indices of the various cashew varieties',
 'Quantification of the losses due to incorrect timing of the right maturity for harvesting different Cashew varieties',
 'Quantification of losses of cashew apple occurring during harvesting',
 ],
 },
 {
 id: '2.8.2',
 title: '2.8.2 Cashew Grading Recommendations',
 table: {
 rows: [
 ['TIMP Name', 'Cashew grading recommendations'],
 ['Category', 'Management Practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Low prices of produce due to mixed and unsorted nuts.'],
 ['What is it? (TIMP description)', `This is the separation of nuts based on size, colour, shape and moisture content and assigning a grade to the respective categories. Each of the categories may be assigned a value based on it comparative quality or grade.

[Image here: Ungraded cashew kernels - Photo showing ungraded cashew kernels]`],
 ['Justification', 'Currently no grading of raw nuts is taking place. Nuts of different qualities are sold at the same price leading to low average buying prices. Grading allows categories of comparative higher quality valued highly compared those of lower quality. Diseased nuts are picked discarded to avoid destroying others in storage.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew growers, agripreneurs, public and private extension service providers, cashew nut buyers, cashew processors.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Farmers willingness to learn and take up new ideas
• Public and private extension service to provide training
• Farmers, traders and processors willing to adopt the grading system
• Development and implementation of cashew grading regulations by the County government`],
 ['Partners/stakeholders for scaling up and their respective roles', `• Public and private extension Workers-Dissemination and technical backstopping
• Non-governmental organizations-Upscaling and financing
• Processor, traders and farmers - Adopt and implement the grading system
• County government- Oversee the grading regulations`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Counties where TIMPs will be upscaled', 'Kilifi, Kwale, Tana River and Lamu.'],
 ['Challenges in development and dissemination', 'Lack of willingness by buying agents to adopt grading as a criterion for buying nuts.'],
 ['Suggestions for addressing the challenges', `• Training farmers and players in the value chain
• Provision of physical infrastructure for grading (collection centers)
• Strengthening farmer organizations
• Encourage more participation of NGOs/private partnerships in promoting grading in procuring raw nuts
• Instituting regulations on cashew nut grading`],
 ['Lessons learned in up scaling, if any', 'Yet to be implemented.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', 'The technology is socially acceptable and environmentally friendly because it involves sale of nuts based on grade. Will give better prices for those taking care of their trees and producing high quality nuts.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Minimal costs in grading.
Estimated returns: To do.

Gender issues: Women and youth have limited access to credit to purchase the roasting equipment; Women and youth have limited access to education, training and extension services than men; Men dominate decisions on cashew at the household and community.

Gender related opportunities: Employment opportunities exist for women in cashew nuts processing[cite: 182-183].`],
 ['E: Case studies/profiles of success stories', 'Profitability was higher when the cashew nut processing factory was operational in Kilifi and nuts were purchased based on grades.'],
 ['Application guidelines for users', `1. Cashew planting guide, KALRO Mtwapa
2. Cashew for Cash booklet, KALRO Mtwapa
3. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
4. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, F.K. Muniu`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO -ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO Mtwapa: Muniu F., Mwashumbe S and Menza M.; KALRO Matuga: Pole F. Partner organizations and contacts: Pwani University, info@pu.ac.ke.S. Muti; H. Saha. Coast Development Authority, J. Kombe.'],
 ],
 },
 gaps: [
 'Develop cashew nut grading systems',
 ],
 },
 {
 id: '2.8.3',
 title: '2.8.3 Sorting and Grading',
 table: {
 rows: [
 ['TIMP Name', 'Sorting and grading'],
 ['Category', 'Management Practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Poor quality nuts due to pulp remaining on the nuts, and presence of immature, empty and sprouted nuts.'],
 ['What is it? (TIMP description)', 'Sorting involves the removal of immature, diseased, shriveled, damaged, empty and sprouted nuts. grading is the grouping of nuts according to size, shape, weight and colour.'],
 ['Justification', 'Nuts with pulp residue cause the nuts to rot leading to lower nut prices. Grading and sorting ensure removal of spoilt nuts and guarantee a high product quality.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, extensions, traders, processors.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Willingness of farmers to learn, extension support
• Farm labour must be organized in advance to make nut collection as efficient as possible
• Supporting County government grading regulations`],
 ['Partners/stakeholders for scaling up and their roles', `• Agricultural Extension Service-Farmer sensitization, On farm and on station demonstrations
• Farmer leaders - Group organization
• NGOs dealing with cashew - Dissemination of the practices`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale and Lamu.'],
 ['Counties where TIMP will be up scaled', 'Kwale, Kilifi and Lamu.'],
 ['Challenges in dissemination', `• Lack of awareness among traders and farmers on appropriate harvesting technology
• Negative attitude by farmers towards adoption of new management practices`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the technology to farmers and traders
• Capacity building of farmers on appropriate harvesting and provide data on the economic gains likely to be made through adoption of the management practices`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Awareness creation of advantages of health benefits of cashew nuts consumption
• Frequent policy review to encourage consumption of cashew nuts`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To yet determined.
Estimated returns: Reduced losses, better income and nutrition (due to utilization of saved nut).

Gender issues: In the target county, cashew is mainly cultivated by women, hence these should be targeted; The TIMP may be easily adoptable after training and many farmers can use the technology since it reduces losses incurred during and after harvesting[cite: 184-185].

Gender related opportunities: The TIMP increases farm income through reduction of harvest losses. Women can capitalize on this aspect of cashew production to reduce harvest losses.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['Application guidelines for users', 'Cashew nut harvesting leaflets and manuals.'],
 ['F: Status of TIMP readiness', 'Require validation'],
 ['G: Contacts', 'Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [],
 },
 {
 id: '2.8.4',
 title: '2.8.4 Drying of Cashew Kernel',
 table: {
 rows: [
 ['TIMP Name', 'Drying of cashew kernel'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Postharvest loss due to mycotoxin contamination of poorly dried cashew kernel.'],
 ['What is it? (TIMP description)', `It is the drying of cashew kernel in open sunshine, or in mechanized solar dryers and electricity powered dryers, which are fast and efficient. This drying reduces the moisture content to 8-10%, which is for safe storage without spoilage. Drying of cashew kernels immediately after dehushing is essential in preserving the quality of the kernels. Well dried kernels produce a rattling sound when turned on the drying rack. Dry kernels have a brown colour. It is advisable to use a moisture meter for accurate determination of moisture content.

[Image here: Greenhouse solar dryer for agricultural produce (Source: Wayua)]`],
 ['Justification', 'Well dried cashew kernels eliminate mycotoxin contamination of the cashew kernels and is important for safe storage. The dry cashew kernels can keep for eight months or more, provided that they are dried to moisture content of 10% or below, packed in sealed polythene bags and stored under dry conditions.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, extension service, traders, processors.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Willingness of farmers to learn
• Availability of extension services
• Funding availability to farmers through loans or cooperatives to enable them invest in the drying system`],
 ['Partners/stakeholders for scaling up and their roles', `• Extension services – Form farmer sensitization and on-farm and on-station demonstrations
• Farmer leaders: Assist in farmer groups organization
• NGOs dealing with cashew - For dissemination of the management practice`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Lamu.'],
 ['Counties where TIMP will be up scaled', 'Lamu.'],
 ['Challenges in dissemination', 'Lack of local availability of dryers.'],
 ['Suggestions for addressing the challenges', `• Adopting public-private-partnerships, so that the private sector can stock the dryers closer to farmers and charge a fee for their usage
• Farmer groups to be given affordable credit facilities to acquire the solar dryers`],
 ['Lessons learned in up scaling if any', `• Partnership is important in technology dissemination
• Extension training and regular monitoring are essential`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', 'Drying requires sunshine. Sun drying requires three days of full exposure to sunlight during the dry season. Greenhouse solar driers take less time.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To yet determined.
Estimated returns: Not yet determined.

Gender issues: The technology reduces postharvest losses and, therefore, women and youth can afford to produce cashew; Use of dryers will not overburden any gender in implementation and therefore have potential for adoption by both genders.

Gender related opportunities: Opportunities for youth in offering cashew nut drying services to farmers.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'Cashew drying leaflets and manuals.'],
 ['F: Status of TIMP readiness', 'Require validation'],
 ['G: Contacts', 'Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Validating greenhouse solar drying of cashew kernels in difference agro-ecological zones',
 ],
 },
 {
 id: '2.8.5',
 title: '2.8.5 Jute Sacks and Cashew Nut Stores',
 table: {
 rows: [
 ['TIMP Name', 'Jute sacks and cashew nut stores'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Postharvest losses due to inappropriate packaging and storage containers.'],
 ['What is it? (TIMP description)', `Packaging cashew in Jute bags to help prevent excessive build-up of moisture during storage and transportation. The bags are stacked in a raised platform such as wooden platform or logs to prevent moisture from entering the nuts from the floor. At least 0.5 m space should be left between stacks, between stacks and walls, and also below the roof to allow free circulation of air as well as for individuals to walk and check the condition of the sacks.

[Image here: Sack storage of cashew nut (Source: Costa and Bochi, 2017)]`],
 ['Justification', 'Good storage of cashew kernels in jute sacks maintains quality of the nut, prevents mycotoxin contamination and extends its shelf-life.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, extension service officers, traders and processors.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• The nuts to be stored should be well-dried to moisture content of 8%
• Stitch jute sacks tightly to avoid spillage
• Sell nuts within the same year of harvest to prevent quality loss`],
 ['Partners/stakeholders for scaling up and their roles', `• Extension service - Farmer sensitization and on-farm and on-station demonstrations
• Farmer leaders -Conduct farmer groups organization
• NGOs dealing with cashew nut – Assist in dissemination of the management practice`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Lamu.'],
 ['Counties where TIMP will be up scaled', 'Lamu.'],
 ['Challenges in dissemination', `Lack of jute bags close the farmers who need them
Lack of awareness on the usage good stores that keep the cashew kernel dry`],
 ['Suggestions for addressing the challenges', `• Adopting public-private-partnerships, so that the private sector can stock the jute bags closer to farmers and sell them to Farmer groups at affordable prices
• Encourage building and use of good stores that allow the stored cashew kernels to remain viable`],
 ['Lessons learned in up scaling if any', `• Partnership is important in technology dissemination
• Extension training and regular monitoring are essential`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Jute sacks need to be acceptable to the farmers and traders
• Although the sacks are imported, there should policy guidelines to ensure they are affordable
• The traders may consider recycling the bags especially where the same are returned to them by processors
• Draft plans for suitable stores made from locally available materials could be considered so that they can be cost effective`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To yet determined.
Estimated returns: Not yet determined.

Gender issues: The technology reduces postharvest losses and, therefore, women and youth can afford to produce cashew; Use of the jute bags and good stores will not overburden any gender in implementation and therefore have potential for adoption by both genders.

Gender related opportunities: Opportunities for youth in offering cashew nut packaging services to farmers.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['Application guidelines for users', 'Cashew nut drying leaflets and manuals.'],
 ['F: Status of TIMP readiness', 'Require validation'],
 ['G: Contacts', 'Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [],
 },
 {
 id: '2.8.6',
 title: '2.8.6 Zero Energy Cooler',
 table: {
 rows: [
 ['TIMP Name', 'Zero energy cooler'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'High postharvest losses (30%) due to lack of appropriate cooling.'],
 ['What is it? (TIMP description)', `[Image here: Table extracted from page 190 - Zero energy cooler details]`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, extension service, traders, processors.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Willingness of farmers to learn
• Availability of extension services
• Funding availability to farmers through loans or cooperatives to enable them invest in the cooling system`],
 ['Partners/stakeholders for scaling up and their roles', `• Extension services – Form farmer sensitization and on-farm and on-station demonstrations
• Farmer leaders: Assist in farmer groups organization
• NGOs dealing with cashew - For dissemination of the management practice`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'None.'],
 ['Counties where TIMP will be up scaled', 'Lamu.'],
 ['Challenges in dissemination', `• Inadequate skills in construction
• High labour costs in construction
• Lack of organized marketing structure for the apples and its value-added products`],
 ['Suggestions for addressing the challenges', 'None.'],
 ['Lessons learned in up scaling if any', 'None.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• The local populace should be will to learn how to make the zero-energy storage and use it
• Local artisans trained to make the cold storage shod charge reasonably to be able to earn a living from their skills
• Organized marketing channels is critical for benefits to be derived from technology`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To yet determined.
Estimated returns: Not yet determined.

Gender issues: Technology can be easily applied by all gender categories.

Gender related opportunities: All gender categories can easily use the technology to ensure cashew nut quality is maintained.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'Cashew nut leaflets and manuals.'],
 ['F: Status of TIMP readiness', 'Require validation'],
 ['G: Contacts', 'Lead organization and scientists: KALRO F. Wayua, J. Ndambuki. Partner organizations: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Cooling technologies for cashew nuts',
 ],
 },
 {
 id: '2.8.7',
 title: '2.8.7 Modified Atmosphere Packaging',
 table: {
 rows: [
 ['TIMP Name', 'Modified Atmosphere packaging'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'High postharvest losses that occur due to high perishability of cashew kernel.'],
 ['What is it? (TIMP description)', `Modified Atmospheric Packaging (MAP) is the use of barrier packaging material such as polybags that controls exchange of gas in and out of packaging containers. The packaging material allows modification of gas inside creating a suitable atmosphere to improve the shelf life of produce. The modification lowers amount of oxygen and increases gases such as carbon dioxide and nitrogen. Low levels of oxygen reduce rate of respiration and infestation by pathogens thus improving the shelf life of cashew kernel.

[Image here: Cashew kernel modified atmosphere packaging Source: internet]`],
 ['Justification', 'Cashew kernel are highly perishable, proper packaging enhances their shelf life. High respiration rate during packaging increases postharvest losses. Modified Atmosphere Packaging reduces respiration rate due to modification of gas inside the package and is a technology that should be promoted.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, extension service, traders, processors and researchers.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Willingness of farmers to learn
• Extension service support
• Funding to reach most farmers`],
 ['Partners/stakeholders for scaling up and their roles', `• Extension service - Farmer sensitization through on-farm and on-station demonstrations
• Farmer leaders - Farmer groups organization
• NGOs dealing with cashew - Funding and dissemination of the practices`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'None.'],
 ['Counties where TIMP will be up scaled', 'Lamu.'],
 ['Challenges in dissemination', 'Limited information on this technology.'],
 ['Suggestions for addressing the challenges', 'Awareness creation about the technology to farmers and traders.'],
 ['Lessons learned in up scaling if any', 'Farmer participatory approach works.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Improved dissemination of the technology among all social groups that target the farmers
• Explain to farmers the environmental benefits of this technology
• Organized marketing channels is critical for benefits to be derived from technology`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To yet determined.
Estimated returns: Not yet determined.

Gender issues: The technology can be easily practised by all gender categories - Cost may be prohibitive for some requirements.

Gender related opportunities: All gender categories can easily use the technology to ensure good cashew kernel quality is maintained.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'Leaflets and manuals.'],
 ['F: Status of TIMP readiness', 'Require validation'],
 ['G: Contacts', 'Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Validation of packaging technologies for kernels',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.9 CASHEW VALUE ADDITION
 // --------------------------------------------------------
 {
 id: '2.9',
 title: '2.9 Cashew Value Addition',
 subsections: [
 {
 id: '2.9.1',
 title: '2.9.1 Cashew Nut Drum Roaster',
 table: {
 rows: [
 ['TIMP Name', 'Cashew nut drum roaster'],
 ['Category', 'Innovation'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'Poor quality of locally processed nuts.'],
 ['What is it? (TIMP description)', 'Use of cashew shell liquid for processing cashew nut using a drum to produce clean and whole kernels.'],
 ['Justification', `There is high demand for roasted cashew nuts in the domestic market. Processing using a drum roaster ensures clean kernels and of good grades for better prices. Cottage processing through drum roasting stand to open up employment opportunities in the cashew growing areas.

[Image here: Quality grade roasted whole kernels]`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Producers, agripreneurs, traders, cottage processors.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Skilled nut processors and availability of good quality raw nuts
• Encourage participation of women and youth groups
• Capacity building on food processing`],
 ['Partners/stakeholders for scaling up and their respective roles', `• Cashew nut growers- production of raw nuts
• Extension workers-Capacity building and dissemination
• NGOs, Private service providers- Dissemination and upscaling`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale, Lamu.'],
 ['Counties where TIMPs will be upscaled', 'Kilifi, Kwale, Lamu.'],
 ['Challenges in development and dissemination', `• Low interest in training in the new processing technology among men
• Lack of specialized equipment for the trained cashew cottage processors
• Supply of mixed grade cashew kernels`],
 ['Suggestions for addressing the challenges', `• Training of women and youth groups in processing in addition to the few men willing to train
• Provision of suitable financial facilities to purchase equipment for processing
• Encourage uptake grading of cashew kernels to ensure a steady supply of the much-needed quality cashew kernels
• Encourage more participation of NGOs/private partnerships in promoting local processing`],
 ['Lessons learned in up scaling, if any', 'Poor hygiene in processing, packaging and handling needs to be addressed.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• There is need to explore sustainable energy options for cashew processing
• There is an opportunity to explore cashew nut shell as a bioenergy source in cashew processing
• Potential negative environmental effects such as greenhouse gas emissions, deforestation for wood fuel, need to be mitigated`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet determined.
Estimated returns: Not yet determined.

Gender issues: Women and youth have limited access to credit to purchase the roasting equipment; Women and youth have limited access to education, training and extension services than men; Men dominate decisions on cashew at the household and community.

Gender related opportunities: Employment opportunities exist for women in cashew nuts processing.`],
 ['E: Case studies/profiles of success stories', 'Applied successfully in Kilifi and Kwale.'],
 ['Application guidelines for users', `1. Cashew planting guide, KALRO Mtwapa
2. Cashew for Cash booklet, KALRO Mtwapa
3. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
4. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, F.K. Muniu`],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa, Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F., Menza M., Mwashumbe S.; KALRO Matuga, Pole F. Partner organizations and contacts: Pwani University, info@pu.ac.ke. W. Mbinda, Saha H.'],
 ],
 },
 gaps: [
 'Adoption of food safety standards in processing of cashew nut through drum roasting',
 'Validation of appropriate packaging methods',
 ],
 },
 {
 id: '2.9.2',
 title: '2.9.2 Roasted Cashew Nut',
 table: {
 rows: [
 ['TIMP Name', 'Roasted cashew nut'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `• Limited utilisation of Cashew nut
• High postharvest losses for cashew nut`],
 ['What is it? (TIMP description)', 'This is the cooking of cashew nuts made by roasting. This method of cooking confers a unique aroma and taste to the cooked cashews nuts.'],
 ['Justification', `Diversification of cashew nut value added food products is the best bet to enhance the consumption of cashew nut, increase demand and thus spur amplify production. Dried cashew nut can be roasted to make roasted cashew nut. Roasting cashew nut brings out the softness, flavour and improves the taste thus increasing consumption and nutrition.

[Image here: Roasted cashew nut Source: Internet]`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, farmer groups, cottage processors, traders, agripreneurs, extension service agents, KEBS, industrial and commercial processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Participatory implementation through phased out incubation
• Stakeholder capacity building and networks through continuous skill improvement
• Awareness creation of high value-added products of cashew products
• Private Public Partnerships to increase production of high-quality cashew nut products`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmer groups – Provide land for establishment of small-scale roasted cashew nut processing facility
• Extension service providers (Public and private - Help in the dissemination
• KALRO – Train trainers and provide technical backstopping on dissemination of roasted cashew nut technology
• KEBS – Standards formulation for roasted cashew nut, certification of private roasted cashew nut processors Supermarkets and retailers will provide markets for the roasted cashew nut`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kwale, Kilifi, Tana River and Lamu.'],
 ['Counties where TIMPs will be upscaled', 'Kwale, Kilifi, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Limited awareness of the product by the farmers
• Lack of processing technology at the household level
• Difficulty in understanding how to seek certificates from regulatory authorities
• Lack knowledge of necessity for standards for the product
• Limited consumer awareness of value-added cashew products`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the product to farmers, consumers and other value chain actors
• Capacity building of farmers on how to prepare the product
• Information dissemination – postharvest handling, value addition, and nutritional attributes of the product
• Involvement of regulatory agencies and policy makers in up scaling process
• Linkage to credit facility providers to promote commercialization, advocacy for standards development for value added cashew products; nutrition education to consumers`],
 ['Lessons learned in up scaling, if any', 'Roasted cashew nut is most preferred snack and fetch good prices.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• Establish the value addition cottage near the sources of cashew nut to reduce on operational costs
• Develop quality standards for cashew nut to propel its commercialization
• Farmer groups may need to align their cottage processing facilities to existing government policies`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet.
Estimated returns: Not yet.

Gender issues: Women and youth have limited access to productive resources such as land, credit, and quality seeds than men; Women and youth have limited access to education, training and extension services than men; Women tend to have limited access to markets; Women have less access to agricultural information, technology and knowledge; Men dominant most decisions at the household and community levels.

Gender related opportunities: Women and youth stand to benefit in production, use and sale of roasted cashew nut.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', `1. Cashew planting guide, KALRO Mtwapa
2. Cashew for Cash booklet, KALRO Mtwapa
3. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
4. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, F.K. Muniu`],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ],
 },
 gaps: [
 'Evaluation of cashew varieties which can be used in processing of roasted cashew nut',
 'Optimization of the roasting process',
 'Low-cost packaging materials',
 ],
 },
 {
 id: '2.9.3',
 title: '2.9.3 Cashew Nut Butter',
 table: {
 rows: [
 ['TIMP Name', 'Cashew nut butter'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `• Limited utilisation of cashew nut
• High postharvest losses for cashew nut`],
 ['What is it? (TIMP description)', `This is a spread made from baked or roasted cashew nuts that may be used on bread as well as in soups or sauces. It is creamy in flavour, and rich in protein, unsaturated fats and vitamins. It is made using After removing the cashew nuts whose shell have been removed and then roasted. The roasted product is processed into butter.

[Image here: Cashew nut butter]`],
 ['Justification', 'Diversification of cashew nut food products is a sure bet to enhancing consumption of cashew nut, enhance demand and thus spur increased production.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Traders, agripreneurs, extension service agents, cottage and large commercial processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• Establish the value addition cottage near the sources of cashew nut to reduce on operational costs
• Develop quality standards for cashew nut to propel its commercialization
• Farmer groups may need to align their cottage processing facilities to existing government policies
• Increased production of high-quality raw cashew nut`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmer groups – Provide land for establishment of small-scale roasted cashew nut processing facility
• Extension service providers (Public and private - Help in the dissemination
• KALRO – Train trainers and provide technical backstopping on dissemination of roasted cashew nut technology
• KEBS – Standards formulation for roasted cashew nut, certification of private roasted cashew nut processors Supermarkets and retailers will provide markets for the roasted cashew nut`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Not specified.'],
 ['Counties where TIMPs will be upscaled', 'Kwale, Kilifi, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Limited awareness of the product by the farmers
• Lack of processing technology at the household level
• Difficulty in understanding how to seek certificates from regulatory authorities
• Lack knowledge of necessity for standards for the product
• Limited consumer awareness of value-added cashew products`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the product to farmers, consumers and other value chain actors
• Capacity building of farmers on how to prepare the product
• Information dissemination – postharvest handling, value addition, and nutritional attributes of the product
• Involvement of regulatory agencies and policy makers in up scaling process
• Linkage to credit facility providers to promote commercialization, advocacy for standards development for value added cashew products; nutrition education to consumers`],
 ['Lessons learned in up scaling, if any', 'Cashew nut butter is easy to make thus enhance utilization of cashew.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• Establish the value addition cottage near the sources of cashew nut to reduce on operational costs
• Develop quality standards for cashew nut to propel its commercialization
• Farmer groups may need to align their cottage processing facilities to existing government policies`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet.
Estimated returns: Not yet.

Gender issues: Women and youth tend to have limited access to credit to purchase the required equipment; Women and youth have limited access to education, training and extension services than men; Women have limited access to markets than men; Women have less access to agricultural information, technology and knowledge; Men dominant most decisions at the household and community levels.

Gender related opportunities: Women and youth stand to benefit in production, use and sale of cashew nut butter.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['Application guidelines for users', `6. Cashew planting guide, KALRO Mtwapa
7. Cashew for Cash booklet, KALRO Mtwapa
8. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
9. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Website: www.kalro.org
10. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, F.K. Muniu`],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Screen for suitable cashew variety for use in butter production',
 'Undeveloped food safety plan for the small-scale farmers',
 'Gross margins',
 ],
 },
 {
 id: '2.9.4',
 title: '2.9.4 Cashew Nut Toffee',
 table: {
 rows: [
 ['TIMP Name', 'Cashew nut toffee'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `• Limited utilisation of cashew kernels
• High postharvest losses for cashew nut`],
 ['What is it? (TIMP description)', `This is a confection made from roasted and ground cashew kernels to which sugar is added.

[Image here: Cashew nut Toffee]`],
 ['Justification', 'Increased diversification of cashew nut food products stand to enhance consumption of cashew nut, enhance demand and thus spur utilization. Sweet taste cashew nut with fine flavour and texture can be processed into toffee for both commercial and domestic use[cite: 202-203].'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Traders, agripreneurs, extension service agents, cottage and large commercial processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• Establish the value addition cottage near the sources of cashew nut to reduce on operational costs
• Develop quality standards for cashew nut to propel its commercialization
• Farmer groups may need to align their cottage processing facilities to existing government policies
• Increased production of high-quality raw cashew nut`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmer groups – Provide land for establishment of small-scale roasted cashew nut processing facility
• Extension service providers (Public and private - Help in the dissemination
• KALRO – Train trainers and provide technical backstopping on dissemination of roasted cashew nut technology
• KEBS – Standards formulation for roasted cashew nut, certification of private roasted cashew nut processors, supermarkets and retailers will provide markets for the roasted cashew nut`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi.'],
 ['Counties where TIMPs will be upscaled', 'Kwale, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Limited awareness of the product by the farmers
• Lack of processing technology at the household level
• Difficulty in understanding how to seek certificates from regulatory authorities
• Lack knowledge of necessity for standards for the product
• Limited consumer awareness of value-added cashew products`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the product to farmers, consumers and other value chain actors
• Capacity building of farmers on how to prepare the product
• Information dissemination – postharvest handling, value addition, and nutritional attributes of the product
• Involvement of regulatory agencies and policy makers in up scaling process
• Linkage to credit facility providers to promote commercialization, advocacy for standards development for value added cashew products; nutrition education to consumers`],
 ['Lessons learned in up scaling, if any', 'There is a ready market for cashew toffee, it is mostly liked by school going children.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• Establish the value addition cottage facilities near the sources of cashew nut to reduce on operational costs
• Develop quality standards for cashew nut to propel its commercialization
• Farmer groups may need to align their cottage processing facilities to existing government policies`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet.
Estimated returns: Not yet.

Gender issues: Women and youth have limited access to credit to purchase the required equipment; Women and youth have limited access to education, training and extension services; Women have limited access to markets than men; Women have less access to agricultural information, technology and knowledge; Men dominant most decisions at the household and community levels.

Gender related opportunities: Women and youth stand to benefit in production, use and sale of cashew nut toffee.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', `1. Cashew planting guide, KALRO Mtwapa
2. Cashew for Cash booklet, KALRO Mtwapa
3. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
4. Cashew Nut Production, A reference handbook for farmers in Kenya, F.K. Muniu Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, F.K. Muniu
6. Cashew nut toffee production leaflets and manuals`],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Optimizing the toffee production procedures',
 'Providing data on gross margins and market demand for cashew nut toffee production',
 ],
 },
 {
 id: '2.9.5',
 title: '2.9.5 Products from Cashew Apple - Cashew Apple Juice',
 table: {
 rows: [
 ['TIMP Name', 'Cashew apple juice'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `• Limited utilization of cashew apple
• High postharvest losses for cashew apple`],
 ['What is it? (TIMP description)', `Juice prepared from ripe cashew apple.

[Image here: Cashew apple juice]`],
 ['Justification', 'Cashew apple is high in vitamin C more than mango and citrus but it is highly perishable. Through processing cashew apple into juice is a best for enhancing its consumption and increase its shelf life for improved nutrition[cite: 205-206].'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, extension agents, small-scale processors, restaurants, industrial and commercial processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• Establish the value addition cottage processing facilities near the sources of cashew nut to reduce on operational costs
• Develop quality standards for cashew nut to propel its commercialization
• Farmer groups may need to align their cottage processing facilities to existing government policies
• Increased production of high-quality raw cashew nut`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmer groups – Provide land for establishment of small-scale cashew apple juice processing facility
• Extension service providers - Help in the dissemination
• KALRO – Train trainers and provide technical backstopping on dissemination of cashew apple juice production technology
• KEBS – Standards formulation for cashew apple juice, certification of private apple juice processors
• Supermarkets, institutions and hotels - will provide markets for the cashew apple juice`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi.'],
 ['Counties where TIMPs will be up scaled', 'Kwale, Tana River and Lamu.'],
 ['Challenges in dissemination', `• Cashew apple Juice has tannin taste which takes more time to come up the final product
• Limited processing technology at the household level
• Difficulty in acquiring certificates from regulatory authorities
• Lack of established standards for the product
• Limited consumer knowledge of value-added cashew apple`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the product to farmers, consumers and other value chain actors
• Capacity building of stakeholders on how to process the product[cite: 206-207]
• Information dissemination – postharvest handling, value addition, and nutritional attributes of the product
• Involvement of regulatory agencies and policy makers in up scaling process
• Linkage to credit facility providers to promote commercialization
• Advocacy for standards development for value added cashew products; nutrition education to consumers`],
 ['Lessons learned in up scaling, if any', 'Cashew apple Juice has tannin taste which makes it not acceptable by many clients.'],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• There is need to develop quality standards for cashew apple juice to propel its commercialization
• There is need for the government to facilitate affordable credit to empower farmers take up cashew juice agribusiness`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet determined.
Estimated returns: Not yet determined.

Gender issues: Women and youth have limited access to credit to purchase the required equipment; Women and youth have limited access to education, training and extension services; Women have limited access to markets than men; Women have less access to agricultural information, technology and knowledge; Men dominant most decisions at the household and community levels.

Gender related opportunities: Women and youth stand to benefit in production, use and sale of cashew apple juice.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['Application guidelines for users', `1. Cashew planting guide, KALRO Mtwapa
2. Cashew for Cash booklet, KALRO Mtwapa
3. KALRO Cashew Nut https://play.google.com/store/apps/details?id=com.andromo.dev724321.app928007
4. Cashew Nut Production, A reference handbook for farmers in Kenya, Muniu F.K. Website: www.kalro.org
5. Ukuzaji Bora wa Mkorosho, Mwongozo wa Wakulima Nchini Kenya, Muniu F.K.
6. Cashew apple juice production leaflets and manuals`],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALF, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Fine-tuning the production protocol and packaging',
 'Determining market demand and gross margins',
 'Characterize different cashew varieties for their nutritional composition and suitability for processing various value-added products (juice, jam, flour)',
 'Determining the nutritional composition of the cashew apple juice',
 ],
 },
 {
 id: '2.9.6',
 title: '2.9.6 Cashew Apple Jam',
 table: {
 rows: [
 ['TIMP Name', 'Cashew apple jam'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `• Limited utilization of cashew apple
• Inadequate knowledge on processing of cashew apples into value added products such as the jam
• Lack of awareness by farmers on the importance of cashew apples
• High postharvest losses for cashew apple`],
 ['What is it? (TIMP description)', `Cashew apple jam is prepared from fresh ripe cashew apples. The apples are washed, peeled and then cut into small pieces and blended. The resultant pulp is then mixed with sugar/honey with other flavoring compounds and heated to boiling point which is maintained at that temperature for 5 minutes. It is then cooled and packaged. The apple jam is a high value product fetching better prices and boosting household incomes.

[Image here: Cashew Jam Source: Internet]

[Image here: The processed cashew jam ready for the market]`],
 ['Justification', `Diversification of cashew food products stands to enhance consumption and demand, thereby spurring increased production. Currently, farmers throw away the cashew apple in the field after extracting the nut. In most cashew nut producing countries the cashew apple is the most valuable product compared to the nut since it can be processed into many value-added products among them the valuable jam. It is therefore necessary to train the cashew stakeholders to process the cashew apple and earn more from what has been considered waste.`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, extension agents, small-scale processors, restaurants, industrial and commercial processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)[cite: 209-210]
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• Establish the value addition cottage processing facilities near the sources of cashew nut to reduce on operational costs
• Develop quality standards for cashew nut to propel its commercialization
• Farmer groups may need to align their cottage processing facilities to existing government policies
• Increased production of high-quality raw cashew nut`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – To increase the production of quality cashew apples
• Farmer groups – to provide land for establishment of small-scale cashew juice processing facility
• Extension service providers - Help in the dissemination and training
• KALRO – will train trainers and provide technical backstopping on dissemination of cashew apple jam production technology
• KEBS – For standards formulation for cashew apple jam, certification of private apple jam processors Supermarkets and institutions (including schools and hospitals) – to provide markets for the cashew juice
• National and County governments - to enact enabling policies`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'Kwale, Kilifi and Lamu.'],
 ['Challenges in dissemination', `• Limited awareness of the cashew jam product by farmers and local consumers
• Limited processing technology at the household level
• Difficulty in acquiring certificates from regulatory authorities
• Lack of quality standards for the product currently
• Limited consumer awareness of cashew apple value-added products`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the product to farmers, consumers and other value chain actors
• Capacity building of farmers on how to prepare the product[cite: 210-211]
• Information dissemination – postharvest handling, value addition, and nutritional attributes of the product
• Involvement of regulatory agencies and policy makers in up scaling process
• Linkage of processors to promote commercialization
• Advocacy for standards development for value added cashew products
• Sensitization of consumers on cashew apple jam nutrition benefits`],
 ['Lessons learned in up scaling, if any', `• The need to have enough cashew apples for sustainable jam processing
• Change of attitude by consumers to adopt cashew apple jam consumption`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers, respectively
• There is need to develop quality standards for cashew apple juice to propel its commercialization
• There is need for the government to facilitate affordable credit to empower farmers take up cashew juice agribusiness`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet determined.
Estimated returns: Not yet determined.

Gender issues: Women and youth have limited access to credit to purchase the required equipment; Women and youth have limited access to education, training and extension services; Women have limited access to markets; Women have less access to agricultural information, technology and knowledge; Men dominant most decisions at the household and community levels.

Gender related opportunities: Women and youth stand to benefit in production, use and sale of cashew jam.`],
 ['E: Case studies/profiles of success stories', 'Cashew apple jam has been successfully processed and traded in other countries such as Brazil and Vietnam, thereby improving the livelihoods of the farmers.'],
 ['Application guidelines for users', 'Cashew jam production leaflets and manuals.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: Mwashumbe S., Muniu F.K., Pole F.N., Wayua F., Ndambuki J. Partner organizations and contacts: Agricultural University Colleges, MoALF, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Characterizing the various cashew varieties for their apple jam production potential',
 'Optimizing the jam production procedures',
 'Providing data on gross margins and market demand for cashew jam production',
 ],
 },
 {
 id: '2.9.7',
 title: '2.9.7 Cashew Apple Wine',
 table: {
 rows: [
 ['TIMP Name', 'Cashew apple wine'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `• Limited utilization of cashew apple
• Inadequate knowledge on processing of cashew apples into value added products such as the wine
• Lack of awareness by farmers on the importance of cashew apples
• High postharvest losses for cashew apple`],
 ['What is it? (TIMP description)', `• Cashew wine is made from ripe cashew apple through fermentation process. Additional ingredients in the process include wine yeast and sugar.
• Cashew apple wine is a high value product that can be obtained from the cashew tree.

[Image here: Cashew apple wine]`],
 ['Justification', 'Diversification of cashew food products enhances consumption and demand, thereby spurring increased production. Currently, Kenyan farmers throw away the cashew apple after extracting the nut. In most of the cashew nut producing countries, the cashew apple is the most valuable product compared to the nut since it can be processed into many value-added products including the wine thereby increasing the value of the cashew nut tree. The cashew stakeholders need to be trained on how to value-add the cashew apple to make the valuable cashew apple wine for both domestic use and sale locally and internationally.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, extension agents, small-scale processors, entrepreneurs, restaurants, industrial and commercial processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Awareness creation to cashew stakeholders on the value of the cashew apple and its use in wine making
• Stakeholder capacity building and establishment of networks to share knowledge on wine making
• Promotion of cashew apple wine making while embracing the Public Private Partnerships (PPP) approach
• Increased production of high-quality cashew apples for processing into apple wine
• Development and availing quality standards for cashew apple wine`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – To increase the production of quality cashew apples
• Farmer groups – Provide land for establishment of small-scale cashew juice processing facility
• Extension service providers (Public and private) to help in the dissemination
• KALRO – Train trainers and provide technical backstopping on dissemination of cashew apple wine production technology
• KEBS – For standards formulation for cashew apple wine, certification of private apple wine processors, supermarkets and institutions to provide markets for the cashew juice
• National and County governments - to enact enabling policies`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None at the moment.'],
 ['Counties where TIMPs will be upscaled', 'Kwale, Kilifi, Lamu.'],
 ['Challenges in dissemination', `• Limited awareness of the cashew apple wine product by stakeholders
• Difficulty in acquiring certificates from regulatory authorities
• Lack of quality standards for the product
• Limited consumer awareness of cashew apple wine`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the product to cashew stakeholders
• Capacity building of farmers and other value chain actors on how to prepare the product
• Information dissemination – postharvest handling, value addition, and nutritional attributes of the product
• Involvement of regulatory agencies and policy makers in up scaling process
• Advocacy for standards development for value added cashew products`],
 ['Lessons learned in up scaling, if any', `• The need to have enough cashew apples for sustainable wine processing
• Change of attitude by consumers to adopt cashew apple wine consumption`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers of the cashew apple value added products
• There is need to develop quality standards for cashew wine to propel its commercialization
• Government may need to offer credit facilities to smallholder entrepreneurs so as they may start cottage processing of cashew apple wine for commercial purposes`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet determined.
Estimated returns: Not yet determined.

Gender issues: Women and youth have limited access to credit to purchase the required equipment; Women and youth have limited access to education, training and extension services; Women have limited access to markets; Women have less access to agricultural information, technology and knowledge; Men dominant most decisions at the household and community levels[cite: 214-215].

Gender related opportunities: Women and youth stand to benefit in production, use and sale of cashew wine.`],
 ['E: Case studies/profiles of success stories', 'Cashew apple wine has been successfully processed and traded in other countries such as Brazil and Vietnam, thereby improving the livelihoods of the farmers.'],
 ['Application guidelines for users', `1. Cashew Nut Processing manual – the basics https://www.unido.org/sites/default/files/2013-7/Cashew_nuts_final_presentation_PP_0.pdf
2. Handbook of processing of cashew nuts, A.A.T. Manirbhar Bharat, Indian Institute of Food Processing Technology Ministry of Food Processing Industries, Government of India, Pudukkottai Road, Thanjavur Tamil Nadu http://www.niftem-t.ac.in/pmfme/cnutscurmet.pdf`],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: Mwashumbe S., Muniu F.K., Pole F.N., Wayua, J. Ndambuki F. Partner organizations and contacts: Agricultural University Colleges, MoALD, NGOs, CBOs.'],
 ],
 },
 gaps: [
 'Characterizing the various cashew varieties for their wine production potential (for example, which variety produces the best wine)',
 'Optimizing the wine production procedures',
 'Providing data on gross margins and market demand for cashew wine production',
 ],
 },
 {
 id: '2.9.8',
 title: '2.9.8 Cashew Apple Flour',
 table: {
 rows: [
 ['TIMP Name', 'Cashew Apple Flour'],
 ['Category', 'Innovation'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `• Limited utilization of cashew apple
• Inadequate knowledge on processing of cashew apples into value added products such as the flour
• Lack of awareness by farmers on the importance of cashew apples
• High postharvest losses for cashew apple
• Over dependence on maize and wheat as the main source of flour`],
 ['What is it? (TIMP description)', `Flour can also be made from dried and milled cashew apple. The cashew apples are normally sorted, washed, sliced and dried at 65OC. Thereafter, it is milled to produce cashew apple powder (CAP). The CAP can be used for whole wheat flour substitution to produce composite flours in different ratios to process various food products.

[Image here: Cashew apple flour]`],
 ['Justification', 'Diversification of cashew food products enhances consumption and demand, thereby spurring increased production. Farmers discard the cashew apple in the field after extracting the nut. In most of the cashew nut producing countries in the world, the cashew apple is the most valuable product compared to the nut since it can be processed into many values added products including the high value cashew apple flour thus. For this reason cashew farmers are starting to process cashew apples into flour for blending with wheat flour.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agriprenuers, traders, extension agents, aggregators, industrial and commercial processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Awareness creation to various stakeholders on the value of the cashew apple in flour making
• Stakeholder capacity building in processing of cashew apple into flour
• Promotion of flour processing while embracing the Public Private Partnerships (PPP) approach
• Increased production of high-quality cashew apples for processing into flour
• Development and availing quality standards for cashew apple flour`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – To increase the production of quality cashew apples
• Farmer groups – Provide land for establishment of small-scale cashew flour processing facility
• Extension service providers - Help in the dissemination
• KALRO – Train trainers and provide technical backstopping on dissemination of cashew apple flour production technology
• KEBS – For standards formulation for cashew apple flour, certification of private apple flour processors, supermarkets and institutions to provide markets National and County governments - to enact enabling policies`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMPs will be upscaled', 'Kwale, Kilifi and Lamu.'],
 ['Challenges in dissemination', `• Limited awareness of the cashew flour product by farmers and consumers
• Limited processing technology at the household level
• Difficulty in acquiring certificates from regulatory authorities
• Lack of quality standards for the product
• Lack of credit facilities for processors
• Limited consumer awareness of cashew apple value-added products`],
 ['Suggestions for addressing the challenges', `• Awareness creation about the cashew flour to farmers, consumers and other value chain actors
• Capacity building of farmers on how to prepare the product
• Information dissemination – postharvest handling, value addition, and nutritional attributes of the flour
• Involvement of regulatory agencies and policy makers in up scaling process
• Linkage processors to credit facility providers to promote commercialization
• Advocacy for standards development for value added cashew products[cite: 217-218]
• Sensitization of consumers on cashew apple flour nutrition benefits`],
 ['Lessons learned in up scaling, if any', `• The need to have enough cashew apples for sustainable flour processing
• Change of attitude by consumers to adopt cashew apple flour consumption`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Target women and youth as entrepreneurs in society who are the major adopters (manufacturers) and consumers of the cashew apple value-added products
• There is need to develop quality standards for the flour to propel its commercialization
• There\'s need for the government offer credit facilities to smallholder entrepreneurs so as they may start cottage processing of cashew apple flour for commercial purposes`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet.
Estimated returns: Not yet.

Gender issues: Women and youth have limited access to credit to purchase the required equipment; Women and youth have limited access to education, training and extension services; Women have limited access to markets; Women have less access to agricultural information, technology and knowledge; Men dominant most decisions at the household and at community levels.

Gender related opportunities: Women and youth stand to benefit in production, use and sale of cashew apple flour.`],
 ['E: Case studies/profiles of success stories', 'Cashew apple flour has been successfully processed and traded in other countries such as Brazil and Vietnam, thereby improving the livelihoods of the farmers.'],
 ['Application guidelines for users', 'Cashew apple flour production leaflets and manuals.'],
 ['F: Status of TIMP readiness', 'Requires validation[cite: 218-219]'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO: S. Mwashumbe, F.K. Muniu, F.N. Pole, F. Wayua, J. Ndambuki. Partner organizations and contacts: JKUAT, Pwani University, info@pu.ac.ke, MoALD.'],
 ],
 },
 gaps: [
 'Characterizing the various cashew varieties for their cashew apple flour yield production potential',
 'Research on flour conversion ratio (Cashew apple flour conversion ratio)',
 'Research on nutritional content of cashew flour and the derived value-added cashew flour-based products',
 'Research on technological and food processing properties of cashew apple flour (water absorption capacity, rheological properties, pasting characteristics, among others.)',
 'Conduct business and economic analyses of cashew flour production and target markets for cashew flour',
 'Research on options for commercializing the product – linking with industry / off-takers (food processors, hotels, supermarkets, among others)',
 'Development of quality standards for cashew flour and cashew flour-based products',
 ],
 },
 {
 id: '2.9.9',
 title: '2.9.9 Processing Cashew Apple into Pulp',
 table: {
 rows: [
 ['TIMP Name', 'Processing cashew apple into pulp'],
 ['Category', 'Innovation'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', 'There has been limited utilization of cashew apple in the food industry. Pulping cashew apples has not been explored locally.'],
 ['What is it? (TIMP description)', 'Pulping is the extraction of pulp from cashew apple and its preservation for consumption.'],
 ['Justification', 'Cashew apple is a product in the cashew value chain that can easily be value added through processing into pulp. However, the apple has been underutilized and it is often regarded as waste.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agriprenuers, traders, cottage processors, retail shops and supermarkets, extension service, NGOs, private service providers, micro-finance institutions.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)[cite: 219-220]
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Availability of skilled pulp processors
• Availability of pulping equipment
• Availability of good quality cashew apples
• Training in food safety`],
 ['Partners/stakeholders for scaling up and their respective roles', `• Farmers – To increase the production of quality cashew apples
• Farmer groups – Provide land for establishment of small-scale cashew apple pulping processing facility
• Extension service providers - Help in the dissemination
• KALRO – Train trainers and provide technical backstopping on dissemination of cashew apple pulp production technology
• KEBS - For standards formulation for cashew apple pulp
• National and county governments - to enact enabling policies`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'Kilifi, Kwale.'],
 ['Counties where TIMPs will be upscaled', 'Lamu.'],
 ['Challenges in development and dissemination', `• Lack of skills and equipment`],
 ['Suggestions for addressing the challenges', `• Training of women and youth groups in processing
• Provision of suitable financial facilities for processing
• Encourage more participation of NGOs/private partnerships in promoting local processing`],
 ['Lessons learned in up scaling, if any', 'Poor hygiene in processing, packaging and handling needs to be addressed.'],
 ['Social, environmental, policy and market conditions necessary for development and up-Scaling', `• Cashew farmers must collect and sell the cashew apples to processors and traders
• The traders and processors need to coordinate collection of the cashew apple to ensure it does not spoil while with farmers
• Use of appropriate packaging materials
• National and counter governments enabling policies that favour agriprocessing industries`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: To be determined.

Gender issues: Women and youth have limited access to credit to purchase the cashew apple in pulp equipment; Women and youth have limited access to education, training and extension services; Men dominants decisions on cashew at the household and community.

Gender related opportunities: Employment opportunities exist for women in cashew pulp industry.`],
 ['E: Case studies/profiles of success stories', 'Not specified.'],
 ['Application guidelines for users', `1. Cashew Nut Processing manual – the basics https://www.unido.org/sites/default/files/2013-07/Cashew_nuts_final_presentation_PP_0.pdf
2. Handbook of processing of cashew nuts, A.A.T. Manirbhar Bharat, Indian Institute of Food Processing Technology Ministry of Food Processing Industries, Government of India, Pudukkottai Road, Thanjavur Tamil Nadu http://www.niftem-t.ac.in/pmfme/cnutscurmet.pdf`],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', 'Institute Director, KALRO –ICRI Mtwapa Kalro.Mtwapa@kalro.org. Lead organization and scientists: KALRO, Mtwapa: Muniu F., Menza M., Mwashumbe S. and Pole F. Partner organizations and contacts: Pwani University, info@pu.ac.ke.S. Muti; H. Saha.'],
 ],
 },
 gaps: [
 'Adoption of food safety standards in processing of cashew apple into pulp',
 'Validation of appropriate cashew pulping techniques',
 'Further research in cashew varieties and growing environment on pulp quality',
 'Nutritional quality analyses',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.10 FOOD SAFETY MANAGEMENT SYSTEM
 // --------------------------------------------------------
 {
 id: '2.10',
 title: '2.10 Food Safety Management System',
 subsections: [
 {
 id: '2.10.1',
 title: '2.10.1 Good Agricultural Practices (GAP) for Cashew Value Chain in Kenya',
 table: {
 rows: [
 ['TIMP Name', 'Good Agricultural Practices (GAP) for Cashew Value Chain in Kenya'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `Food safety has gained increased importance over the years because of its implications to health and trade. The consumer has increasingly become aware of the possibility of harm from food aided by technological advancements in the detection of biological and physical contaminants in food. The increased trade from demand for more food with the increased global population has also led to unscrupulous growers and traders using unsafe methods in production and in the other value chain processes. This not only results in unsafe low quality food but also unsustainable production systems through the misuse of resources such as land, water, manure, fertilizers, crop protection products among others. In addition, there have been concerns about the impact of crop production to environment, worker safety and produce traceability to ensure food safety and good ethical practices, both in the domestic and export market.
Implementing Good Agricultural Practices (GAP) during on-farm production and post-production processes resulting in safe agricultural products is of immense importance for ensuring a safe food supply system globally.`],
 ['What is it? (TIMP description)', `The four \'pillars\' of GAP (economic viability, environmental sustainability, social acceptability and food safety and quality) are included in most private and public sector standards, but the scope which they actually cover varies widely.
It is a systematic process of implementing a standardized production system globally designed to reassure consumers about how food is produced on the farm, pre-farm gate or on-farm standards.
It is not about a specific crop production but the process through which production takes.`],
 ['Justification', `Recent studies have shown that in Kenya, increased consumption and movement of crop produce has led to increased incidences of food borne illnesses. The evolving food industry and changes in consumer food preferences, feeding habits and practices has increased the volume of crops produce, leading to increased complexity in the distribution systems, thereby increasing the opportunities for exposure to contamination.
Additionally, increased global trade and consumer demand for pre packed food for convenience has increased the potential for microorganisms\' multiplication and the risk of exposure of diseases to the consumers. Changing social demographics in Kenya with the increase in the number of the elderly, children, pregnant women and immune compromised persons has also led to a likely exposure to food borne hazards for the vulnerable.
Good Agricultural Practices (GAP) is based on the principals of risk prevention, risk analysis, sustainable agriculture (by means of Integrated Pest Management (IPM) and Integrated Crop Management (ICM) to continuously improve farming systems. There is need for reinforcement through transparent open systems from the farm to the table, including all inputs (including fertilizers, plant protection products, water and soil) and all value chain players including providers of logistics and equipment\'s.`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'All cashew value chain players including producers, extension staff, processors, transporters and market outlet operators including wholesale and retail chains, domestic markets and farm gate handlers.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations - On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media – Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital Platforms– Website, Dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', 'Policy support from government particularly the enforcement of KS1758 fresh produce domestic scope standard and it passing the current public participation stage.'],
 ['Partners/stakeholders for scaling up and their roles', `1. Producer organizations - satisfy production requirement
2. NGO\'s – funding and dissemination of practices
3. MoALD - Extension services and regulation of on farm demonstration
4. Private extension providers – buyers of cashew production
5. PrCoG and other value chain players – support and promote the policy`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted, if any', 'None.'],
 ['Counties where TIMP will be up scaled', 'Lamu, Kilifi, Kwale.'],
 ['Challenges in dissemination', `• Lack/inadequate knowledge on the benefits GAPS
• Lack of legislative mechanisms to support the GAP, in particular the domestic scope
• The perception that GAP is oppressive rather than supportive`],
 ['Recommendations for addressing the challenges', `• Continuous training of farmers, extension staff and other value chain players
• Mechanisms to support the GAP in domestic scope`],
 ['Lessons learned in up scaling, if any', 'The low number of stakeholders aware of GAP.'],
 ['Social, environmental, policy and market conditions necessary', 'Supportive policy of national and county governments to promote adaption of GAP\'s.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: To be determined.

Gender issues: Most small-scale production systems are centered on women and hence they suffer from the detriments of poor processes; for example improper application of pesticides results in more women suffering from complications than the men in small-scale holdings. This means that adaption of GAPS will increase the benefits of good health in women and those who work more on the farm.

Gender related opportunities: Job opportunity for unskilled women and youth due to systematic method of the processes.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'KS 1758 Horticulture Code of Practice.'],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', `Officer in Charge:
1. KALRO – PTC, - info.ptc@kalro.org
2. Centre Directors; KALRO FCRI Njoro - kalro.njoro@kalro.org
3. KALRO Mtwapa; kalro.mtwapa@kalro.org
4. Director General KALRO.Director@kalro.org
Lead organization and scientists: KALRO: Nyaga, A., Ndung\'u, J., Wayua, F., Muniu, F.K., Mwashumbe, S.K., Wasilwa, L and Kirigua, V.
Partner organizations and contacts and their roles:
1. MoALD - Extension services and regulation of on farm demonstration. info@kilimo.go.ke
2. AFA – info@afa.go.ke
3. FPEAK interpretation and harmonization of standards .info@fpeak.org
4. PCPB - monitor the quality of pest control products already in the market. info@pcpb.go.ke
5. AAK – distributors of pest control products. info@aakgrow.com
6. KEPHIS - Phytosanitary regulation and patenting of materials. kephisinfo@kephis.org
7. CoG – support and promote policy in counties
8. NGO\'s and Universities – dissemination of practices`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.10.2',
 title: '2.10.2 Food Safety Management System: Hazard Analysis Critical Control Points (HACCP) Plan for Cashew Value Chain in Kenya',
 table: {
 rows: [
 ['TIMP Name', 'Food Safety Management System: Hazard Analysis Critical Control Points (HACCP) Plan for Cashew Value Chain in Kenya'],
 ['Category', 'Management Practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', `The presence of chemicals and biological hazards in the cashew value chain in Kenya have a direct effect on consumer\'s health thereby constantly increasing demand for high quality of the crop and it\'s by products from consumers and public health departments in counties. These hazards have direct economic consequences affecting families, communities and industries subsisting on the cashew value chain in Kenya. This ultimately leads to reduced productivity of the active population in the country. Biological contaminations reported on this value chain include presence of Escherichia coli (E. coli), Salmonella spp., Aspergillus flavus and Aspergillus parasiticus. The chemical hazards due to mycotoxins, heavy metal contaminations and uncontrolled pesticide use have previously been detected which has been attributed to neurological disorders, on set of cancer and birth defects to the consumers.`],
 ['What is it? (TIMP description)', `Food safety management system (FSMS) through Hazard Analysis and Critical Control Point (HACCP) in cashew is a system of food safety monitoring and control based on the systematic identification and assessment of various hazards. It is a preventive, rather than a reactive, tool that places the protection of the cashew products supply from biological, chemical and physical hazards into the hands of food management systems. The HACCP system is designed to minimize the risk of food safety hazards by identifying the hazards, establishing controls and monitoring these controls. When this HACCP concept is applied to the management of likely adverse health effects resulting from exposure to hazards in the cashew value chain, a wholesome and safe cashew products supply can be maintained improving on trade and health within and without Kenya borders.`],
 ['Justification', `The only important tool kit to assure food safety through monitoring in the cashew value chain is the Hazard Analysis and Critical Control Points (HACCP) system. This critical tool is already incorporated into the Codex Alimentarius of the world as well as into the national public health food safety legislations of Kenya. This HACCP approach can be applied to all stages of the cashew value chain process, ranging from production to processing, transportation, retail in commercial establishments and/or direct utilization by the consumer. Through its application, food safety charts in the cashew value chain will easily be identified through critical control points. This will set limitation values for monitoring so that action can be taken if the set point values of hazards are out of the defined range required. In this cashew value chain, the proposed FSMS that will be adopted, hazards would be minimized in every phase of production, harvesting, processing, distribution and consumption making cashew products safe for consumption by Kenyans. The key elements that will be used or modified to reduce hazards formation in all steps of production to consumption will be identified.`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew value chain actors from farmers, traders, agripreneurs, food vendors and consumers.'],
 ['Approaches used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations – On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media – Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms – Website, Dashboards, Apps, Social media short message services`],
 ['Critical/essential factors for successful promotion', `For successful promotion of food safety management system through HACCP in the cashew value chain:
• An expert team comprising a HACCP specialist, food scientist, microbiologist, representative of the cashew growers, public health officer, and a quality control and safety specialist from the Kenya Bureau of Standards will be formulated.
• Distribution of the printed HACCP plan to cashew value chain actors for implementation in order to reduce hazards.`],
 ['Partners/stakeholders for scaling up and their respective roles', `• Institutions with IPM and ICM programs
• Institutions responsible for legislating in food safety, regulations and sale of pesticides
• Institutions with the required analytical testing
• Training institutions with extension programs to producers and other actors on the chain
• Producers and exporters associations.- buying cashew from farmers
• County extension staff - training famers of food safety
• Universities (Public and Private) – training programs and
• NGOs – capacity building Processors and local trader – purchasing and processing the cashew`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already Promoted if any', 'Kilifi, Kwale, Muranga, Kiambu, Meru.'],
 ['Counties where TIMPs will be up scaled', 'Lamu, Kwale, Kilifi.'],
 ['Challenges in development and dissemination', 'Inadequate funds to reach value chain actors.'],
 ['Suggestions for addressing the challenges', 'Funding of dissemination platforms.'],
 ['Lessons learned in up scaling, if any', 'The value chain of cashew nut in Kenya is willing to adopt the HACCP plan if well engaged.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', 'The policies and laws in public health in place in Kenya are supportive to the use of HACCP Plan in cashew value chain.'],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: To be determined.

Gender issues: Women have high levels of illiteracy than men, hence are not educated enough to read the GAP; Women have less access to agricultural information, technology and knowledge than men; Men dominant decisions at the household and national levels.

Gender related opportunities: Employment opportunities exist for youth in cotton production and marketing through ICT.`],
 ['E: Case studies/profiles of success stories', 'Cashew processors have successfully applied for export market.'],
 ['Application guidelines for users', 'HACCP plan for Cashew.'],
 ['F: Status of TIMP Readiness', 'Ready for up scaling'],
 ['G: Contacts', `The Institute Director, KALRO – ICRI director.icri@kalro.org.
Lead organization and scientists: KALRO – Njoro, J. Ndung\'u N.; KALRO-PTC Mr. Nyaga A., KALRO – Kakamega, Wayua F.; KALRO- Njoro: Wanjiku B.
Partner organizations and contacts[cite: 227-228]:
1. MoALD, - info@kilimo.go.ke
2. AFA, - info@afa.go.ke
3. FPEAK – info@fpeak.org
4. PCPB - info@pcpb.go.ke
5. AAK - info@aakgrow.com
6. KEPHIS - kephisinfo@kephis.org
7. County governments
8. NGO\'s
9. Universities`],
 ],
 },
 gaps: [
 'Software for running the budgets',
 'Profitable opportunities',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.11 MECHANIZATION OF CASHEW PRODUCTION ACTIVITIES
 // --------------------------------------------------------
 {
 id: '2.11',
 title: '2.11 Mechanization of Cashew Production Activities',
 subsections: [
 {
 id: '2.11.1',
 title: '2.11.1 Power Tiller',
 table: {
 rows: [
 ['TIMP Name', 'Power Tiller'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `• Slow and tedious processes of seedbed preparation in a commercialized cashew farm
• Difficult to prepare a uniform fine tilled seedbed manually
• Delayed operation leading to late planting
• Drudgery leads to low acreage
• High cost of manual labour`],
 ['What is it? (TIMP description)', `It is a low powered two-wheeled agricultural implement with an 8-16hp that can be attached to implements such as a rotary tiller, disk harrow, mouldboard plough, trailer, chisel or water pump at alternate times for easing farm operations. Also referred to as a walking tractor. It can complete one hectare in two hours per operator when ploughing. This varies depending on the climatic conditions, soil types, soil moisture content, operator stamina and experience. Fuel consumption is about 15 litres per ha. Though these results may vary with the technical ability or aptitude of the operator.

[Image here: Operator using a power tiller in land preparation]`],
 ['Justification', 'It has multiple uses when coupled with other equipment such as seedbed preparation, sowing seed, spraying of fertilizer or herbicide and even irrigation. In addition, it can also be used for threshing and transporting produce. A power Tiller is ideal where the land size is small. Farm sizes less than one hectare may limit maneuverability of conventional tractors and manual Labour is slow costly and unsustainable.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of the TIMP', 'Cashew farmers, agripreneurs, extension staffs, Universities and researchers.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive research to test and validate usage of the power tiller
• A platform for interaction of Cashew value chain stakeholders
• Multiple usage, timeliness, efficiency and low cost`],
 ['Partners/stakeholders for scaling up and their roles', `KALRO -
Universities (for information) -
Machinery fabricators -
NGO supporting farmers for dissemination`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where the TIMP is already promoted if any', 'None.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Lamu and Tana River.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Lack of machines
• Lack of demonstration sites
• High initial cost for small-scale machines`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Acquisition of the machines
• Facilitation to visit demonstration site
• Build capacity through efficient agricultural production to afford the cost`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Mechanization in agriculture increases production
• Mechanization releases labour to alternative requirement areas
• Provides low-cost farm operations`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in agricultural production
• Include all gender groups in research, and validation
• Appropriate policy formulation of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 280,000.
Estimated returns: KES 180,000/ monthly gross income.

Gender issues: Gender unfriendly and expensive machines; Cashew machines should be designed for easy start and operation; Up-scaling should target all the gender; Affordability to all gender.

Gender related opportunities: Creates employment especially for youth and reduces drudgery for women farmers as well as men.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat, finger millet and rice.'],
 ['Application guidelines for users', `Demonstrations and training
User manuals`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', `The Institute Director, KALRO AMRI -Katumani; P.O. Box 340-90100 Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO: Nasirembe W., Pole F.N Egerton University.
Partner organizations: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.2',
 title: '2.11.2 4-Wheeled Tractor 50Hp',
 table: {
 rows: [
 ['TIMP Name', '4-Wheeled Tractor 50Hp'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `Slow and tedious processes of land preparation, in a commercialized cashew commodity Delayed operation lead to late planting and high cost of manual Labour.`],
 ['What is it? (TIMP description)', `Its a small sized, 4-wheeled tractor with a low powered agricultural implement of 40-55hp that can be fitted with a rotary tiller, disk harrow, mouldboard plough, trailer, chisel or water pump at alternate times for easing farm operations. It can do 4 hectares per day by one operator but can have two operators to run another 8 hours of 4 hectares coming to 8ha per day. This varies depending on the climatic conditions, soil types, soil moisture content and operator experience. Fuel consumption is about 15 litres per ha. Though these results may vary with the technical ability of the operator.

[Image here: 4-wheeled Tractor 50Hp doing land preparation]`],
 ['Justification', 'It has multiple uses when coupled with other equipment such as seedbed preparation, sowing seed, spraying fertilizer, herbicide and even irrigation. It can also be used for threshing through a power take off device and transporting produce. Farm sizes less than one hectare may limit maneuverability of conventional tractors yet manual Labour is costly and slow.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew farmers, agripreneurs and researchers.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive research to evaluate and recommend the tractor for small scale farmers
• A platform for interaction of cashew value chain stakeholders
• Multiple usage, timeliness, efficiency and low cost`],
 ['Partners/stakeholders for scaling up and their roles', `• KALRO, Universities (for information)
• Machinery dealers
• NGOs - supporting farmers for dissemination`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale, Kilifi, Lamu, Tana-River, Baringo, Machakos.'],
 ['Counties where TIMP will be up scaled', 'Machakos.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Lack of tractors
• Lack of facilitation to demonstration site
• High initial cost for small-scale machines`],
 ['Suggestions for addressing the challenges', `• Establish a 4-wheeled tractor innovation platform
• Acquisition of the machines
• Facilitation to demonstration site
• Build financial capacity through efficient agricultural production to afford the cost`],
 ['Lessons learned in up scaling if any', `• Chances of successful up-scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption
• Mechanization in agriculture increases production
• Mechanization releases labour to alternative requirement areas
• Provides low-cost farm operations`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in agricultural production
• Include all gender groups in research, and validation
• Appropriate policy formulation of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 1,780,000,00.
Estimated returns: KES 450,000/ monthly gross income.

Gender issues: Gender unfriendly and expensive to buy; Cashew machines should be designed for easy start and operation; Up-scaling should target all the gender; Affordability to all gender.

Gender related opportunities: Creates employment especially for youth and reduces drudgery for women farmers as well as men.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat, finger millet and rice.'],
 ['Application guidelines for users', `Demonstrations and training
User manuals`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', `The Institute Director KALRO AMRI -Katumani P.O. Box 340. Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO: Nasirembe W., Pole F.N, Egerton University.
Partner organizations: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.3',
 title: '2.11.3 Mouldboard Plough',
 table: {
 rows: [
 ['TIMP Name', 'Mouldboard Plough'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `• Slow and tedious processes of land preparation, in a commercialized cashew commodity
• Difficult to prepare a uniform fine tilled seedbed manually
• Delayed operation leading to late planting
• High cost of manual Labour`],
 ['What is it? (TIMP description)', `It is an agricultural implement that is generally considered to be an important tillage implement. Mouldboard ploughs are available for power tiller and tractor operation. A mouldboard plough can perform various jobs such as cutting the furrow slice, lifting the furrow slice inverting the furrow slice and pulverizing the furrow slice. It is suitable for water conservation. Ploughing accounts for more traction energy than any other field operation.

[Image here: Mouldboard Plough]`],
 ['Justification', 'High Efficiency. When well-adjusted, the plough automatically seeks the desired depth. It is versatile. The various models have different features that enable high efficiency in preparation of the land, weed control, pest control and Improve soil health.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew farmers, agripreneurs and researchers.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive Research to test, validate and promote mouldboard plough
• A platform for interaction of cashew value chain stakeholders
• Multiple usage, timeliness, efficiency and low cost`],
 ['Partners/stakeholders for scaling up and their roles', `• KALRO, Universities (for information)
• Machinery fabricators
• NGO supporting farmers for dissemination`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale, Kilifi, Lamu, Tana-River, Baringo, Machakos.'],
 ['Counties where TIMP will be up scaled', 'Kwale, Kilifi, Lamu, Tana-River.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Lack of machines
• Lack of facilitation to demonstration site
• High initial cost for small-scale machines`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Acquisition of the machines
• Facilitation to demonstration site
• Build capacity through efficient agricultural production to afford the cost`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Mechanization in agriculture increases production
• Mechanization releases labour to alternative requirement areas
• Provides low-cost farm operations`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in agricultural production
• Include all gender groups in research and validation
• Appropriate policy formulation of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 550,000.
Estimated returns: KES 180,000/ monthly gross income.

Gender issues: Gender unfriendly and expensive machines; Cashew machines should be designed for easy start and operation; Up-scaling should target all the gender; Affordability to all gender.

Gender related opportunities: Creates employment especially for youth; Reduces drudgery for women farmers as well as men.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat, finger millet and rice.'],
 ['Application guidelines for users', `Demonstrations and training
User manuals`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', `The Institute Director KALRO AMRI -Katumani P.O. Box 340 Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO, Egerton University Nasirembe W., Pole F.N.
Partner organizations: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.4',
 title: '2.11.4 Disk Harrow',
 table: {
 rows: [
 ['TIMP Name', 'Disk Harrow'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `• Slow and tedious processes of seedbed preparation, in a commercialized cashew farm and difficult in breaking clods manually
• Delayed operation leading to late planting
• Low acreage because of using manual labour
• High cost of manual labour`],
 ['What is it? (TIMP description)', `It is an implement consisting of a heavy frame set with disks on a gang which is dragged over ploughed land to break up clods, remove or burry weeds, cover weed seed and is a cultivating tool set used primarily for breaking up and smoothening the soil in preparation of a seedbed for auguring.

[Image here: Disk Harrow]`],
 ['Justification', `• Creating of a crumbly layer for planting is tedious. It is not possible to manually protect the soil surface from rapid drying. Improving both the air and water penetrability into soil manually can be too expensive.
• Manual operation will reduce microbiological processes in the soil Manual land harrowing Improves nutrient availability to plants.`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew farmers, agripreneurs and researchers.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive research to test, validate and release improved cashew varieties
• A platform for interaction of cashew value chain stakeholders
• Multiple usage, timeliness, efficiency and low cost`],
 ['Partners/stakeholders for scaling up and their roles', `• KALRO, Universities (for information)
• Machinery fabricators
• NGO - supporting farmers for dissemination`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale, Kilifi, Lamu, Tana-River, Makueni, Kitui, Baringo.'],
 ['Counties where TIMP will be up scaled', 'Machakos.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Lack of machines
• Lack of facilitation for a demonstration site
• High initial cost for small-scale machines`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Acquisition of the machines
• Build capacity through efficient agricultural production to afford the cost`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption, and this can be facilitated through innovation platforms
• Mechanization in agriculture increases production
• Mechanization releases labour to alternative requirement areas
• Provides low-cost farm operations`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in agricultural production
• Include all gender groups in research and validation
• Appropriate policy formulation of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 280,000.
Estimated returns: KES 180,000/ monthly gross income.

Gender issues: Gender unfriendly and expensive machines; Cashew machines should be designed for easy start and operation; Up-scaling should target all the gender; The machines should be affordable to both genders.

Gender related opportunities: Creates employment especially for youth; Reduces drudgery for women farmers as well as men.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat, finger millet and rice.'],
 ['Application guidelines for users', `Demonstrations and training
User manuals`],
 ['F: Status of TIMP readiness', 'Ready for up scaling'],
 ['G: Contacts', `The Institute Director KALRO AMRI -Katumani; P.O. Box 340. Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO, Nasirembe W. Egerton University.
Partner organizations: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.5',
 title: '2.11.5 Hole Drill',
 table: {
 rows: [
 ['TIMP Name', 'Hole drill'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `Manual digging increases the cost of making planting holes. It is a slow and tedious processes. It is also difficult to prepare uniformly spaced contour holes. Delayed operation leading to late planting.`],
 ['What is it? (TIMP description)', `Hole digger is a Power Take Off (PTO) driven machine that augers holes in rows at equal distances as desired mechanically and economically. It can also be used for hole making in electric poles and farm hedges. It is best suited for tree plantations. It can auger down to about 90cm deep and have a consistent diameter in just 30 seconds.

[Image here: Hole drill]`],
 ['Justification', `The auger makes a definite and uniform hole diameters and depths as desired, selected from the auger specifications. Users spend 50 times shorter a time and as little as 90ml of fuel to auger a hole. It augers as it removes detached soil forming a much neater hole, with a well-defined circumference. Holes can be made at pre-defined point by driving the compact tractor. It is easy to use.`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew farmers and researchers.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive research to evaluate and recommend the machine usage
• A platform for interaction of cashew value chain stakeholders
• Multiple usage, timeliness, efficiency and low cost`],
 ['Partners/stakeholders for scaling up and their roles', `• KALRO, Universities (for information)
• Machinery fabricators
• NGOs - for supporting farmers for dissemination`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Lamu.'],
 ['Counties where TIMP will be up scaled', 'All counties where cashew farming is an important activity[cite: 239-240].'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Lack of machines
• Lack of facilitation to demonstration sites
• High initial cost for small-scale machines`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Acquisition of the machines
• Facilitation to demonstration site
• Build capacity through efficient agricultural production to make the machines affordable`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Mechanization in agriculture increases production
• Mechanization releases labour to alternative requirement areas
• Provides low-cost farm operations`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in agricultural production
• Include all gender groups in research, and validation
• Appropriate policy formulation of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: KES 40,000 (power auger digger), KES 80,000 (Tractor mounted hole digger).
Estimated returns: KES 20,000/ monthly gross income.

Gender issues: Gender unfriendly and expensive machines; The machines should be designed for easy start and operation; Up-scaling should target all the genders; Affordable to all genders.

Gender related opportunities: Creates employment especially for youth; Reduces drudgery for women farmers as well as men.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat, finger millet and rice.'],
 ['Application guidelines for users', 'User manuals and leaflets.'],
 ['F: Status of TIMP readiness', 'Ready for upscaling'],
 ['G: Contacts', `The Institute Director KALRO AMRI –Katumani; P.O. Box 340 Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO, Nasirembe W. Egerton University.
Partner organizations and contacts: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.6',
 title: '2.11.6 Backpack Weeder',
 table: {
 rows: [
 ['TIMP Name', 'Backpack weeder'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `• Manual weeding is slower and untimely
• Manual labour is diminishing escalating its cost
• Inconsistence in basin digging when manually done
• Manual labour is costly`],
 ['What is it? (TIMP description)', `Backpack weeder is a machine that weighs about 6kgs. It is carried on your back like a backpack and its blades are directed to the weeding area. It has capability of weeding about 1 ha of land in a day which is equivalent to the amount of work done by 10 people on the same farm in a day. Apart from the issue of easy transportation, it keeps operator\'s balance and while working, the operator focuses more on eliminating weeds than stability.

[Image here: Backpack weeder]`],
 ['Justification', `• It\'s cost effective compared to Manpower
• Weeding season is the most tedious in farming and employing 10 farm workers will definitely cost more
• Easy to work with
• Tremendously increases agricultural and horticultural working area`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew Farmers and agripreneurs.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive research to test, validate and promote backpack weeder machine
• A platform for interaction of cashew value chain stakeholders`],
 ['Partners/stakeholders for scaling up and their roles', `• Machinery fabricators
• NGO supporting farmers(AGGRA)`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Not yet promoted.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Taita Taveta, Lamu and Tana River.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Relatively high cost for individual small-scale farmer
• Limited awareness of the existence of machine by the farming community`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Encourage group/co-operative ownership
• Launch and awareness campaign through demonstrations and trainings`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Products from local/indigenous crops attract huge market, yet very little is being done to promote growth`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in the community. Include all gender groups in research, and validation
• Good Policy on cost of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet determined.
Estimated returns: Not yet determined.

Gender issues: Gender unfriendly and expensive machines; Cashew machines should be designed for easy start and operation; Up-scaling should target all the gender; Affordability to all gender[cite: 242-243].

Gender related opportunities: Creates employment especially for youth; Reduces drudgery for women farmers as well as men.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat and rice.'],
 ['Application guidelines for users', `1. User manuals
2. Leaflets`],
 ['F: Status of TIMP readiness', 'Ready for upscaling'],
 ['G: Contacts', `The Institute Director KALRO AMRI -Katumani; P.O. Box 340 Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO, Nasirembe W., Pole F.N. Egerton University.
Partner organizations and contacts: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.7',
 title: '2.11.7 Motorized Sprayer',
 table: {
 rows: [
 ['TIMP Name', 'Motorized Sprayer'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `Slow and tedious processes of manual spraying of cashew; The height of the tree requires a long projectile spray which cannot be attained by a manual knapsack; Cashew has a high number of pests that invade leaf, flowers and nut.`],
 ['What is it? (TIMP description)', `A motorized sprayer is a device used to spray a liquid, where sprayers are commonly used for projection of the chemicals.
In agriculture, a sprayer is a piece of equipment that is used to apply herbicides, pesticides, and fertilizers on agricultural crops. Sprayers are man-portable units typically backpacks with spray guns. They are used to control; weeds that can harbour insects by use of herbicides, insect pests that can cause diseases by the use of insecticides as well as pesticides. Control of fungal diseases by the use of fungicides. Application of micronutrients on the plants.

[Image here: Motorized Sprayer]`],
 ['Justification', 'Pests reduce yields by up to 98% and are a major menace in agricultural production. Before cashew forms a canopy, broad leafed weeds compete with cashew seedling for nutrients and light, greatly reducing their yield. Manual sprayers are labour intensive, while spraying labour is too expensive. It has lower pressure reducing its efficiency hence a motorized knapsack comes in handy.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew Farmers and agripreneurs.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive research to test, validate and promote the motorized sprayer
• A platform for interaction of cashew value chain stakeholders
• Use by Farmers`],
 ['Partners/stakeholders for scaling up and their roles', `• Machinery fabricators
• NGO supporting farmers(AGGRA)`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Taita Taveta, Lamu.'],
 ['Counties where TIMP will be up scaled', 'counties where cashew farming is an important activity.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Relatively high cost for individual small-scale farmer
• Limited awareness of the existence of machine among some farmers`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Encourage group/co-operative ownership
• Launch and awareness campaign through demonstrations and trainings`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Products from local/indigenous crops attract huge market, yet very little is being done to promote growth`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in the community. Include all gender groups in research, and validation
• Good Policy on cost of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Motorized sprayer 55,000 KES per unit.
Estimated returns: KES 180,000.00/year.

Gender issues: Motorized sprayer designed for easy start and operation. Men have been drawn to spraying by the machine. This task was predominantly for women before the introduction of the machine.

Gender related opportunities: Creates employment at production, transportation, processing and distribution; Creates employment especially for the youth; Reduces drudgery for women farmers as well as men.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat, finger millet and rice.'],
 ['Application guidelines for users', 'User manuals and leaflets.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', `The Institute Director KALRO AMRI –Katumani; P.O. Box 340 Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO Nasirembe W Egerton University.
Partner organizations and contacts: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.8',
 title: '2.11.8 Power Tree Pruner',
 table: {
 rows: [
 ['TIMP Name', 'Power tree pruner'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `Manual pruning is slower and untimely. Manual pruning requires a ladder that increases cost of pruning and also subjecting the pruner to danger of falling. Manual labour is diminishing escalating its cost.`],
 ['What is it? (TIMP description)', `A powered pole tree pruner consists of a small chainsaw mounted on a long shaft, enabling the operator to cut through high tree branches while standing at ground level. Power pruners are used to make smaller cuts on branches or shrubs. As the name suggests, pruners are used to prune trees. Less powerful than chainsaws, the cutting diameter of power pruners will be smaller as the chain guide is shorter. A power pruner is basically a motorized version of a manual pole pruner or branch cutter.

[Image here: Power tree pruner]`],
 ['Justification', 'The machine works faster, has a low engine capacity of < 30cc. The machine is telescopic and can reach far end branches at will. Uses gasoline available in remote sites and discourages child labour.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew Farmers and agripreneurs.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `Applied and adaptive Research to test, validate and promote power tree pruner
A platform for interaction of cashew value chain stakeholders`],
 ['Partners/stakeholders for scaling up and their roles', `Machinery fabricators
NGO supporting farmers(AGGRA)`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Not yet promoted.'],
 ['Counties where TIMP will be up scaled', 'Kilifi, Kwale, Taita Taveta and Lamu.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Relatively High cost for individual small-scale farmer
• Limited awareness of the existence of machine by the farming community`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Encourage group/cooperative ownership
• Launch and awareness campaign through demonstrations and trainings`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Products from local/indigenous crops attract huge market, yet very little is being done to promote growth`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in the community. Include all gender groups in research, and validation
• Good policy on cost of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Not yet determined.
Estimated returns: Not yet determined.

Gender issues: Gender Unfriendly and expensive machines; Cashew machines should be designed for easy start and operation; Up-scaling should target all the gender; Affordability to all gender.

Gender related opportunities: Training on local use and transportation will make it more utilized. Power tree pruner is affordable and could help VMGs exploit.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat and rice.'],
 ['Application guidelines for users', `1. User manuals
2. Leaflets`],
 ['F: Status of TIMP readiness', 'Requires further research'],
 ['G: Contacts', `The Institute Director, KALRO AMRI -Katumani; P.O. Box 340. Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO, Egerton University, Nasirembe W, Pole F.N.
Partner organizations and contacts: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.9',
 title: '2.11.9 Grafting Robot',
 table: {
 rows: [
 ['TIMP Name', 'Grafting robot'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `• Lack of cashew grafted planting material
• High cost of labour
• Manual labour is diminishing
• Grafting success rate is low`],
 ['What is it? (TIMP description)', `An automated grafting robot is a machine which can implement clipping, moving, positioning, cutting, binding, and wrapping rootstock and scion saplings. Experimental results indicate that the grafting success rate of most robot is 87.3% and the binding success rate is 68.9%.

[Image here: Grafting robot]`],
 ['Justification', 'Robot automatically grafts species that guarantee rich and high-quality harvesting and are strong against diseases. By using robot technology, hand labour can be eliminated. The whole idea of grafting is to combat soil-borne diseases by using two types of rootstocks.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew Farmers and agribusiness entrepreneurs.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive research to test, validate and promote grafting robot
• A platform for interaction of cashew value chain stakeholders
• Use by Farmers`],
 ['Partners/stakeholders for scaling up and their roles', `Machinery fabricators
NGO supporting farmers (AGGRA)`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Not yet promoted.'],
 ['Counties where TIMP will be up scaled', 'Lamu, Kilifi, Kwale.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Encourage group/cooperative ownership
• Launch and awareness campaign through demonstrations and trainings`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Products from local/indigenous crops attract huge market, yet very little is being done to promote growth`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in the community. Include all gender groups in research, and validation
• Good Policy on cost of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: To be determined.

Gender issues: Cashew grafting robot designed for easy start and operation.

Gender related opportunities: Creates employment at production, transportation, processing and distribution.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat and rice.'],
 ['Application guidelines for users', 'User manuals and leaflets.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', `Lead organization and scientists: The Institute Director, KALRO AMRI -Katumani; P.O. Box 340. Machakos Email: cd.katumani@kalro.org Phone: 0711369535; 0710906600.
Partner organizations and contacts: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.10',
 title: '2.11.10 Grafting Tool',
 table: {
 rows: [
 ['TIMP Name', 'Grafting Tool'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `• Lack of cashew grafted planting material
• High cost of labour
• Normal knife is not as convenient`],
 ['What is it? (TIMP description)', `A grafting tool works perfect on hardy plants, especially on fruit trees. It has replaceable grafting cutting blades: cut, U cut and V cut, each blade with two cutter points. This tool is designed with cutting groove on cutting board. It is easy for you to prune branch into U shape, V shape. Its handles are made from ABS plastic, the rest part and blades are made from high carbon steel, chrome treated for durable sharpness[cite: 250-251].

[Image here: Grafting tool]`],
 ['Justification', `Grafting allows the gardener to provide a longer growing season and a greater diversity of plant varieties. Despite being Labour intensive, grafting is commonly undertaken as a means of vegetative propagation of woody plants for any or all of the following reasons for example imparting disease resistance or hardiness contributed by the rootstock, Seedlings grown trees will live longer than grafted trees or cutting grown trees, they are more vigorous and grow slightly larger. If a grafted tree is hit hard by frost, the graft will usually die off, but the rootstock will survive.`],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew Farmers and agribusiness entrepreneurs.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive Research to test, validate and promote grafting tool
• A platform for interaction of cashew value chain stakeholders`],
 ['Partners/stakeholders for scaling up and their roles', `Machinery fabricators
NGO supporting farmers(AGGRA)`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Not yet promoted.'],
 ['Counties where TIMP will be up scaled', 'Lamu, Kilifi, Kwale and Tana River.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Relatively High cost for individual small-scale farmer
• Limited awareness of the existence of machine by the farming community`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Products from local/indigenous crops attract huge market, yet very little is being done to promote growth`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in the community. Include all gender groups in research, and validation
• Good policy on cost of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: To be determined.

Gender issues: Cashew grafting tool is designed for easy start and operation.

Gender related opportunities: Creates employment at production, transportation, processing and distribution.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat and rice.'],
 ['Application guidelines for users', 'User manuals and leaflets.'],
 ['F: Status of TIMP readiness', 'Requires validation'],
 ['G: Contacts', `The Institute Director, KALRO AMRI -Katumani; P.O. Box 340. Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO, Egerton University, Nasirembe W., Pole F.N.
Partner organizations and contacts: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 {
 id: '2.11.11',
 title: '2.11.11 Harvesting Machine',
 table: {
 rows: [
 ['TIMP Name', 'Harvesting machine'],
 ['Category', 'Technology'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem to be addressed', `Manual harvesting is slower and untimely
High cost of labour
Manual labour is diminishing`],
 ['What is it? (TIMP description)', `It is a machine used in tree topping, overhead fruit harvesting and general overhead work. This towable boom lift offers ease of operation and transportation to your work site. Some models are fitted with a jib boom which gives the ability of up and over positioning capabilities allowing access to the most difficult work sites.

[Image here: Harvesting machine]`],
 ['Justification', 'The machine works faster, it is telescopic and can reach far end branches. It Uses gasoline as fuel. The machine is cost effective and it discourages child labour.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Cashew Farmers and agripreneurs.'],
 ['Approaches used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)`],
 ['Critical/essential factors for successful promotion', `• Applied and adaptive Research to test, validate and promote the harvesting machine
• A platform for interaction of cashew value chain stakeholders
• Use by Farmers`],
 ['Partners/stakeholders for scaling up and their roles', `• Machinery fabricators
• NGO supporting farmers (AGGRA)`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi.'],
 ['Counties where TIMP will be up scaled', 'Lamu, Tana River, Kilifi and Kwale.'],
 ['Challenges in dissemination', `• Lack of cashew innovation platforms to facilitate interaction of farmers with relevant stakeholders
• Relatively High cost for individual small-scale farmer
• Limited awareness of the existence of machine by the farming community`],
 ['Suggestions for addressing the challenges', `• Establish Cashew innovation platforms
• Encourage group/cooperative ownership
• Launch and awareness campaign through demonstrations and trainings`],
 ['Lessons learned in up scaling if any', `• Chances of successful scaling are higher when diverse value chain stakeholders collaborate in an innovation platform
• Partnership is important in technology dissemination and adoption and this can be facilitated through innovation platforms
• Products from local/indigenous crops attract huge market, yet very little is being done to promote growth`],
 ['Social, environmental, policy and market conditions necessary for development and up scaling', `• Creation of awareness on mechanization importance in the community. Include all gender groups in research, and validation
• Good Policy on cost of agricultural mechanization`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: Harvesting machine 125,000 KES per unit.
Estimated returns: Capacity 500 Kg/ hour, Fuel 1 litre /hr. (4-5 bags); Needs 3 operators per time; Weeding charges: KES 300 per bag; Requires 1 season to return the KES 125,000 purchase price.

Gender issues: Harvesting machine designed for easy start and operation. Men have been drawn to Cashew harvesting by the machine. This task was predominantly for women before the introduction of the machine.

Gender related opportunities: Creates employment at production, transportation, processing and distribution.`],
 ['E: Case studies/profiles of success stories', 'Mechanization has enabled increased production in other crops such as maize, wheat and rice.'],
 ['Application guidelines for users', `1. Demonstrations and training
2. User manuals`],
 ['F: Status of TIMP readiness', 'Requires further research'],
 ['G: Contacts', `The Institute Director, KALRO AMRI -Katumani; P.O. Box 340. Machakos Email: director.amri@kalro.org Phone: 0711369535; 0710906600.
Lead organization and scientists: KALRO, Egerton University, Nasirembe W,.
Partner organizations: Local Fabricators.`],
 ],
 },
 gaps: [],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.12 CASHEW FARMING BUSINESS AND MARKETING
 // --------------------------------------------------------
 {
 id: '2.12',
 title: '2.12 Cashew Farming Business and Marketing',
 subsections: [
 {
 id: '2.12.1',
 title: '2.12.1 Building a Business Plan',
 table: {
 rows: [
 ['TIMP Name', 'Building a business plan'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Farmers lack business plans in Cashew farming opting instead to conduct the business traditionally. This leads to low management and lack of sustainability.'],
 ['What is it? (TIMP description)', 'A cashew farming business plan is as an internal management and organizing tool, used to communicate outside ones business, or both. As a farm plan, it quantifies inputs, costs and returns.'],
 ['Justification', 'A business plan in hand would enable cashew farmers and rural entrepreneurs to create successful and sustainable business. Engagement of farmers in business planning provides market, production and financial information.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, processing industries, extension service, NGOs, research institutions.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Willingness to learn from the trainers of the key concept of good business planning
• Good trainers with ability to follow through the season
• Basic education to be able to keep quality records
• In depth understanding of the Cashew farming as a business
• Availability of current information of inputs, costs and returns
• Investments in the business must yield production of quality tradable volumes
• Availability of dependable information storage infrastructure and retrieval`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers - Adoption of\' growth strategies (including formation of producer groups, marketing associations and investments in cashew climate smart production strategies
• County extension staff - Organization of farmers and technical service delivery teams
• NGOs – Lobbying for organization of farmers into economic-operation entities for ease of service delivery
• Strengthening of the public-public partnership towards an inputs\' subsidy package to stimulate quality production and cost-effective marketing
• Research institutions –Providing improved seeds and technical backstopping`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River, Lamu, Mombasa, Taita Taveta and Tharaka Nithi.'],
 ['Counties where TIMPs will be up scaled', 'Lamu.'],
 ['Challenges in development and dissemination', `• Lack of basic education that constrains good record keeping
• Lack of Cashew farming knowledge
• Unwillingness to learn the art of making good business plans
• Lack of a culture of asking for receipts from sellers of products and services`],
 ['Suggestions for addressing the challenges', `• Selection of suitable trainees with basic education
• Train the farming community on Cashew faming using learning aids that the farmer retains as references
• Explain important of business plans in decision making
• Encourage farmers to keep receipts as proof of purchase of goods, services and own sales`],
 ['Lessons learned in up scaling if any', 'There are limited success stories in cashew business planning.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – acceptability by the farmers, group dynamics issues including leadership and information sharing under cultural networks
• Environmental conditions and enhancing natural resource management
• Observing the health safety and environmental guidelines policy
• Willingness of all stakeholders to keep and maintain good quality records`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: No done.

Gender issues: Development and dissemination – Differences in acceptance and practising of the business exist among youth, females and males based on the labour intensity of the tasks. Men and youth take lead in accessing, adopting and scaling/sharing of market related management practices.

Gender related opportunities: Production opportunities by youth, females and males in the production of cashew especially in nursery establishments and seedling production for cashew; Pests\' and diseases control (including spraying) provides employment to youth and adult males.`],
 ['E: Case studies/profiles of success stories', 'Enthusiastic growers of high yielding cashew varieties (including new clones) have been keen to share their success.'],
 ['Application guidelines for users', 'Training factsheets, extension leaf-lets, and post-harvest handling manuals are available.'],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', `Institute Director, ICRI, KALRO Mtwapa.
Lead organization and scientists: KALRO: F. Muniu, D. Kengo.`],
 ],
 },
 gaps: [
 'Adoption of business plan approach by the cashew farmers',
 ],
 },
 {
 id: '2.12.2',
 title: '2.12.2 Collective Marketing',
 table: {
 rows: [
 ['TIMP Name', 'Collective marketing'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Individual farmer marketing of cashew increases inaccessibility to markets due to low volumes and low prices.'],
 ['What is it? (TIMP description)', 'A collective marketing approach entails marketing as a group. It involves formation of a group of farmers with an objective of reducing market inaccessibility.'],
 ['Justification', 'Due to small-scale farming of cashews, marketing as a group would enable farmers to gain from economies of scale. The advantages of collective marketing are bigger volumes, uniform quality, reliable sellers, reliable buyers, continuous supply, higher price and organization[cite: 257-258].'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, processing industries, extension service, NGOs, research institutions.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Responsive producer community/organizations to market demand on the basis of quality and affordable quantities
• Availability of willing traders of the produce
• Acceptance of smallholder farmers to form production organizations
• Investments in the production of quality tradable volumes
• Acceptance of the cashew varieties by consumers
• Adaptability of the cashew varieties
• Availability of storage infrastructure`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers Adoption of farmers\' growth strategies (including formation of producer groups, marketing associations and investments in cashew climate smart production strategies
• County extension staff - Organization of farmers and technical service delivery teams
• NGOs – Lobbying for organization of farmers into economic-operation entities for ease of service delivery
• Strengthening of the public-public partnership towards an inputs\' subsidy package to stimulate quality production and cost-effective marketing
• Research institutions – Availing improved seeds and technical backstopping`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kilifi, Kwale, Tana River, Lamu, Mombasa, Taita Taveta and Tharaka Nithi.'],
 ['Counties where TIMPs will be up scaled', 'Lamu.'],
 ['Challenges in development and dissemination', `• Limited reliable market information pathways to farm-households
• Poor group dynamics that lead to poor group harmony
• Weak or non-existent stakeholder innovation platforms
• Ineffective raw cashew prices that do not reward farmers for work put in
• Limited capacity to interpret policy guidelines for a section of the value chain players
• Lack of effective subsidy instruments across the value chain`],
 ['Suggestions for addressing the challenges', `• Formation of common interest groups (CIGs) which can be grown to producer and market organizations through capacity
• Stimulate and enhance CIGs operational strategy for information sharing
• Capacity building of the groups on group dynamics, leadership and management
• Engage farmers in identifying sources of quality seed and seedlings\' production, nursery management and seedlings certification procedures
• Link farmers to innovators for participatory learning and action
• Enhance value addition, streamline marketing channels, producer organizations, capacity building for better pricing and profit maximization
• Engage stakeholders towards understanding the chain policy framework
• Provision of stimulating subsidy instruments in production, processing and marketing`],
 ['Lessons learned in up scaling if any', `There are limited success stories in cashew marketing. Prices keep fluctuating as buyers also keep changing.`],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – acceptability by the farmers, group dynamics issues including leadership and information sharing under cultural networks
• Environmental conditions and enhancing natural resource management
• Observing the health safety and environmental guidelines policy
• Leverage on government policies that encourage pooled marketing of produce`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre Therefore the returns per acre is KES 84,000 per year.

Gender issues: Development and dissemination – Differences in acceptance and practicing of the business exist among youth, females and males based on the labor intensity of the tasks. Men and youth take lead in accessing, adopting and scaling/sharing of market related management practices.

Gender related opportunities: Production opportunities by youth, females and males in the production of cashew especially in nursery establishments and seedling production for cashew; Pests\' and diseases control (including spraying) provides employment to youth and adult males.`],
 ['E: Case studies/profiles of success stories', 'High yielding cashew varieties (including new clones) available in Lamu and Mtwapa cashew mother-block.'],
 ['Application guidelines for users', 'Training factsheets, extension leaf-lets, and post-harvest handling manuals are available.'],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', `Institute Director, ICRI, KALRO Mtwapa.
Lead organization and scientists: KALRO: Muniu F., Kengo D.`],
 ],
 },
 gaps: [
 'Group dynamics',
 'Improvement in market access',
 ],
 },
 {
 id: '2.12.3',
 title: '2.12.3 Profitability Analysis',
 table: {
 rows: [
 ['TIMP Name', 'Profitability analysis'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Lack of profitability analysis by farmers, leading to lack of comparison of costs and returns, poor cashew business performance and low farmers\' income.'],
 ['What is it? (TIMP description)', 'Profitability analysis involves recording of costs and returns and therefore determination of profit which indicates the performance of the cashew agro enterprise.'],
 ['Justification', 'Profitability analysis reviews the management success and sustainability of the cashew business. It indicates areas of adjustment.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, processors, extension service.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `Production programme
Availability of data on quantities of inputs requirements, costs (purchase and transaction costs), outputs and prices`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – Defining production programme and participating in the training
• County extension staff - Capacity building of the stakeholders
• NGOs – Funding and mobilizing the farmers for capacity building
• KALRO- Conduct training of trainers`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale and Kilifi.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Tana River, Lamu, Mombasa, Taita Taveta and Tharaka Nithi.'],
 ['Challenges in development and dissemination', `• Unwillingness of the stakeholders to train
• Uneconomically small business/economic units
• Inadequate information to stakeholders on the effective cashew marketing models
• Inadequate market related learning pathways and platforms (including best-bet profit maximization models)`],
 ['Suggestions for addressing the challenges', `• Formation of CIGs and producer/market organizations to lobby farmer
• Enhancing the producer organization concept
• Establish learning pathways and platforms; the farmer field and business school (FFBS) approach`],
 ['Lessons learned in up scaling if any', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – acceptability by the farmers, group dynamics issues including leadership and information sharing under cultural networks
• Environmental conditions and enhancing natural resource management
• Observing the health safety and environmental guidelines policy`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre Therefore the returns per acre is KES 84,000 per year.

Gender issues: Women and youth have a significant contribution in cashew labour flows especially nursery/seedlings management, weeding, nuts collection and sorting. Males have an upper hand in business planning including participation in marketing workshops; Adoption and scaling – Involvement of youth, females and males.

Gender related opportunities: Implementation of production and marketing opportunities in cotton by youth, females and males.`],
 ['E: Case studies/profiles of success stories', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Application guidelines for users', 'Training factsheets, manuals and extension leaf-lets to be developed.'],
 ['F: Status of TIMP Readiness', 'Ready for up-scaling'],
 ['G: Contacts', `Institute Director, ICRI-KALRO Mtwapa.
Lead organization and scientists: KALRO: Muniu F., Kengo D.
Partner organizations and contacts: KIPPRA, Tegemeo Institute.`],
 ],
 },
 gaps: [
 'Profitable opportunities',
 'Factors affecting the profitability',
 ],
 },
 {
 id: '2.12.4',
 title: '2.12.4 Market Research',
 table: {
 rows: [
 ['TIMP Name', 'Market Research'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Lack of information that assist in effective marketing of produce among the smallholder farmers.'],
 ['What is it? (TIMP description)', 'Market research gathers information on the product buyer, demand, type required, minimum volume purchased, collective marketing volume, quality, packaging requirements, frequency of delivery, purchase price, means of payment and willing to buy from local farmers.'],
 ['Justification', 'Market research enables the smallholder farmers get vital information about the market dynamics before their participation. As a result, they prepare better in order to gain more[cite: 262-263].'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, processors and extension service.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Production programme of the crop
• Availability of data on quantities of inputs requirements, costs (purchase and transaction costs), outputs and prices
• Recent product prices in nearby markets`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – Defining production programme and participating in the training
• County extension staff - Capacity building of the stakeholders
• NGOs –Funding and mobilizing the farmers for capacity building
• KALRO - Conduct training of trainers`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale and Kilifi.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Tana River, Lamu, Mombasa, Taita Taveta and Tharaka Nithi.'],
 ['Challenges in development and dissemination', `• Unwillingness of the stakeholders to train
• Uneconomically small business/economic units
• Inadequate information to stakeholders on the effective cashew marketing models
• Inadequate market related learning pathways and platforms (including best-bet profit maximization models)`],
 ['Suggestions for addressing the challenges', `• Formation of CIGs and producer/market organizations to lobby farmer
• Enhancing the producer organization concept
• Establish learning pathways and platforms; the farmer field and business school (FFBS) approach`],
 ['Lessons learned in up scaling if any', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – acceptability by the farmers, group dynamics issues including leadership and information sharing under cultural networks
• Environmental conditions and enhancing natural resource management
• Observing the health safety and environmental guidelines policy`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre Therefore the returns per acre is KES 84,000 per year.

Gender issues: Women and youth have a significant contribution in cashew labour flows especially nursery/seedlings management, weeding, nuts collection and sorting. Males have an upper hand in business planning including participation in marketing workshops; Adoption and scaling – Involvement of youth, females and males.

Gender related opportunities: Implementation of production and marketing opportunities in cotton by youth, females and males.`],
 ['E: Case studies/profiles of success stories', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Application guidelines for users', 'Training factsheets, manuals and extension leaf-lets to be developed.'],
 ['F: Status of TIMP Readiness', 'Ready for up-scaling'],
 ['G: Contacts', `Institute Director, ICRI-KALRO Mtwapa.
Lead organization and scientists: KALRO: Muniu F., Kengo D.
Partner organizations and contacts: KIPPRA, Tegemeo Institute.`],
 ],
 },
 gaps: [
 'Market intelligence in markets',
 'Impact of market research',
 ],
 },
 {
 id: '2.12.5',
 title: '2.12.5 Contracted Production Model',
 table: {
 rows: [
 ['TIMP Name', 'Contracted production model'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Market failure in cashew production has led to low price, low production and poor quality.'],
 ['What is it? (TIMP description)', `Contract farming is the investment by the private companies, extending lines of credit to producers in the form of farming inputs and technical assistance. Under contract farming terms, contractors commit themselves to buy the entire produce at an agreed price. On the other hand, producers commit to provide the desired produce at the right quality for sale.`],
 ['Justification', 'Contract farming commits the farmer to produce a certain commodity at a certain time for an agreed price and, in return, the contractor undertakes to buy the commodity, and may provide agricultural extension and other services to producers in order to satisfy production requirements in terms of quality and quantity. The benefits of contract farming to farmers are market access, increased incomes, reduction in the risk of price fluctuations, credit and financial intermediation, timely provision of inputs, monitoring and labour incentives, reduction of production risk, introduction of higher-value crops, improved collective bargaining, household spill-over benefits and improved access to extension. A written contract farming is recommended.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, traders, processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Availability of investor with production, marketing and management know how
• Willing farmers able to adhere to contract terms to produce for the preferred contractor
• Ability of the contractor to organize for farm services and inputs in adequate amount throughout the season to achieve a crop
• Willing contracted farmers who produce under guidance for the preferred contractor for the agreed period`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – Defining production programme and participating in the training
• County extension staff - Capacity building of the stakeholders
• NGOs –Funding and mobilizing the farmers for capacity building
• KALRO - Conduct training of trainers
• Willing contracting company with the necessary resources and plans to support a sizeable group of farmers to produce for periods`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale and Kilifi.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Tana River, Lamu, Mombasa, Taita Taveta and Tharaka Nithi.'],
 ['Challenges in development and dissemination', `• Uneconomically small business/economic units
• Inadequate information to stakeholders on the effective cashew marketing models
• Lack of trust on new contractors
• Unwilling farmers with a long learn curve
• Inadequate market related learning pathways and platforms (including best-bet profit maximization models)`],
 ['Suggestions for addressing the challenges', `• Formation of CIGs and producer/market organizations
• Enhancing the producer organization concept
• Establish learning pathways and platforms; the farmer field and business school (FFBS) approach`],
 ['Lessons learned in up scaling if any', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – acceptability by the farmers, group dynamics issues including leadership and information sharing under cultural networks
• Environmental conditions and enhancing natural resource management
• Observing the health safety and environmental guidelines policy`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre Therefore the returns per acre is KES 84,000 per year.

Gender issues: Women and youth have a significant contribution in cashew labour flows especially nursery/seedlings management, weeding, nuts collection and sorting. Males have an upper hand in business planning including participation in marketing workshops; Adoption and scaling – Involvement of youth, females and males[cite: 266-267].

Gender related opportunities: Implementation of production and marketing opportunities in cotton by youth, females and males.`],
 ['E: Case studies/profiles of success stories', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Application guidelines for users', 'Training factsheets, manuals and extension leaf-lets to be developed.'],
 ['F: Status of TIMP Readiness', 'Ready for up-scaling'],
 ['G: Contacts', `Institute Director, ICRI-KALRO Mtwapa.
Lead organization and scientists: KALRO: Muniu F., Kengo D.
Partner organizations and contacts: KIPPRA, Tegemeo Institute.`],
 ],
 },
 gaps: [
 'Productivity improvement',
 'Impact of contracted production on welfare among farmers',
 'Market access among farmers',
 ],
 },
 {
 id: '2.12.6',
 title: '2.12.6 Marketing Innovation Model',
 table: {
 rows: [
 ['TIMP Name', 'Marketing Innovation model'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Farmers\' failure to apply entrepreneurship while marketing cashew leading to low prices.'],
 ['What is it? (TIMP description)', 'An entrepreneur farmer undertakes innovations and finance and business acumen in an effort to transform innovations into economic goods and ultimately profit.'],
 ['Justification', 'Marketing innovation encourages product diversification. With the diversification, Diversification develops various marketing channels Failure to apply innovation in marketing of cashew, the market outlook will be narrow[cite: 267-268].'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Production programme
• Availability of data on quantities of inputs requirements, costs (purchase and transaction costs), outputs and prices`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – Defining production programme
• County extension staff - Capacity building
• NGOs – Capacity building
• Research teams- Fine tune the innovation model`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale and Kilifi.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Tana River, Lamu, Mombasa, Taita Taveta and Tharaka Nithi.'],
 ['Challenges in development and dissemination', `• Stakeholders\' fragmentation
• Uneconomically small business/economic units
• Inadequate information to stakeholders on the effective cashew marketing models
• Inadequate market related learning pathways and platforms (including best-bet profit maximization models)`],
 ['Suggestions for addressing the challenges', `• Formation of CIGs and producer/market organizations
• Enhancing the producer organization concept
• Establish learning pathways and platforms; the farmer field and business school (FFBS) approach`],
 ['Lessons learned in up scaling if any', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – acceptability by the farmers, group dynamics issues including leadership and information sharing under cultural networks
• Environmental conditions and enhancing natural resource management
• Observing the health safety and environmental guidelines policy`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre. Therefore the returns per acre is KES 84,000 per year[cite: 268-269].

Gender issues: Women and youth have a significant contribution in cashew labor flows especially nursery/seedlings management, weeding, nuts collection and sorting. Males have an upper hand in business planning including participation in marketing workshops; Adoption and scaling – Involvement of youth, females and males.

Gender related opportunities: Implementation of production and marketing opportunities in cotton by youth, females and males.`],
 ['E: Case studies/profiles of success stories', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Application guidelines for users', 'Training factsheets, manuals and extension leaf-lets to be developed.'],
 ['F: Status of TIMP Readiness', 'Ready for up-scaling'],
 ['G: Contacts', `Institute Director, ICRI-KALRO Mtwapa.
Lead organization and scientists: KALRO: F. Muniu, D. Kengo.
Partner organizations and contacts: KIPPRA, Tegemeo Institute.`],
 ],
 },
 gaps: [
 'Further research',
 'Channels of innovation',
 'Adoption of innovation marketing',
 ],
 },
 {
 id: '2.12.7',
 title: '2.12.7 Internet/Mobile Marketing',
 table: {
 rows: [
 ['TIMP Name', 'Internet/mobile marketing'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Limited use of technologies among the smallholder farmers while linking to markets, leading to poor market access and constraints in marketing channels, skills and market information.'],
 ['What is it? (TIMP description)', 'Internet/mobile marketing refers to the online marketplace that provides buyers and sellers with an avenue platform to interact and exchange goods and services These include online platforms, tools, and content delivery systems[cite: 269-270].'],
 ['Justification', 'Internet/mobile marketing is increasingly a basic necessity for most businesses. This high adaptability of internet/mobile marketing benefit businesses by providing the farmer insights in the experiences of their consumers. With this information, farmers can attend to consumers feedback and thereby improve their produce through presentation and enhanced production.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, agripreneurs, traders, processors.'],
 ['Approaches to be used in dissemination', `• Use of on-farm demos, exhibition during field days, farmer to farmer training and agricultural shows
• Mass media (TV and radio programs, promotional materials leaflets, posters, brochures, manuals and pamphlets)
• Use of digital platforms comprising web materials, mobile telephone applications and short message services (SMS)
• Regular localized meetings
• Farmer field and business Schools (FFBS)
• Agricultural Innovation Platforms (AIP)
• Public and private agricultural extension services`],
 ['Critical/essential factors for successful promotion', `• Effective online platform acceptable to farmers, consumers and extension service
• Production programme to interest consumers on when to expect produce
• Availability of online commodity platforms on social media such as Facebook (Meta)
• Availability of data on quantities of inputs requirements, costs (purchase and transaction costs), outputs and prices`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – Defining production programme to forecast time of sales
• County extension staff - Capacity building
• NGOs – Capacity building
• Farmers CIGs – to initiate formation of online commodity platforms`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'Kwale and Kilifi.'],
 ['Counties where TIMPs will be up scaled', 'Kilifi, Kwale, Tana River, Lamu, Mombasa, Taita Taveta and Tharaka Nithi.'],
 ['Challenges in development and dissemination', `• Low internet penetration
• High costs of data for internet access
• Poor interaction of group members in the platform
• Inadequate information to stakeholders accessing the platforms`],
 ['Suggestions for addressing the challenges', `• Formation of CIGs and producer/market organizations
• Lobby for low-cost telephone to enhance internet penetration
• Lobby for telecos for low-cost data packages for internet access
• Develop clear rules to encourage good interaction of group members in the platform
• Inadequate information to stakeholders accessing the platforms`],
 ['Lessons learned in up scaling if any', 'A few groups exposed to record keeping lessons in Kwale and Kilifi could easily track their cashew business performances.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – acceptability online presence by the farmers in their commodity groups
• Environmental conditions should include specifying their produce, the produce/service they have or are requesting and their locations in the region
• Market conditions should include stating of prices of their produce per unit
• Policy campaigns should be guide by knowledge on what already exists`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre Therefore the returns per acre is KES 84,000 per year.

Gender issues: Women and youth have a significant contribution in cashew labor flows especially nursery/seedlings management, weeding, nuts collection and sorting. Males have an upper hand in business planning including participation in marketing workshops; Adoption and scaling – Involvement of youth, females and males.

Gender related opportunities: Implementation of production and marketing opportunities in cotton by youth, females and males.`],
 ['E: Case studies/profiles of success stories', 'A few groups exposed to record keeping lessons in Kwale and Kilifi easily track their cashew business performances reporting substantial substantial returns.'],
 ['Application guidelines for users', 'Training factsheets, manuals and extension leaf-lets to be developed.'],
 ['F: Status of TIMP Readiness', 'Ready for up-scaling'],
 ['G: Contacts', `Institute Director, ICRI-KALRO Mtwapa.
Lead organization and scientists: KALRO: Muniu F., Kengo D.
Partner organizations and contacts: KIPPRA, Tegemeo Institute.`],
 ],
 },
 gaps: [
 'Factors affecting mobile marketing',
 ],
 },
 ],
 },

 // --------------------------------------------------------
 // 2.13 AGRICULTURAL POLICY OPTIONS
 // --------------------------------------------------------
 {
 id: '2.13',
 title: '2.13 Agricultural Policy Options',
 subsections: [
 {
 id: '2.13.1',
 title: '2.13.1 National Agricultural Policy Strategy Framework',
 table: {
 rows: [
 ['TIMP Name', 'National Agricultural policy strategy framework'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Market failure in influencing the behaviour of cashew production.'],
 ['What is it? (TIMP description)', 'A policy towards the agricultural sector as a whole, or towards one particular interest group such as food consumers, grain producers, cashew producers or fertilizer manufacturers can be characterized as consisting of three sets of elements; objectives, instruments of policy and rules for operating instruments of policy.'],
 ['Justification', 'Agricultural policies for supporting cashew output are based at farm and market levels. The policy\'s objective is to increase cashew output. The policy\'s instruments chosen might be to raise the price of cashew received by producers, such as an import tax or a production subsidy, an instrument to reduce the cost of grain production such as an input subsidy or capital grant and an instrument which reduces returns to products which compete cashew for land, thus causing substitution of resources into cashew production.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, traders, Agripreneurs, Research institutions, Processing industries, Extension, NGOs.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations – On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media – Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms – website, dashboards, Apps, social media short message service`],
 ['Critical/essential factors for successful promotion', `• Availability of stakeholders
• Availability of agricultural policies and specific cashew-based policies
• Issues in cashew business
• Specific policy objective statement`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – Demanding cashew policies to support production and marketing[cite: 273-274]
• County extension staff - Sensitization of farmers
• NGOs – Sensitization of farmers
• Private sector (local traders and exporters) – Demanding cashew policies to support production and marketing
• Research institutions – Sensitization of stakeholders`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'None.'],
 ['Counties where TIMPs will be up scaled', 'All Counties where cashew farming is an important activity.'],
 ['Challenges in dissemination and development', `• Disorganization and scattered farmers
• Small-scale farming
• Inadequate information to stakeholders on the agricultural policies whether National or County
• Poorly established cashew value chain
• Cashew production is specific to agro-ecological zones and not all the Counties in Kenya grow cashew`],
 ['Suggestions for addressing challenges', `• Formation of producer organizations as an institution
• Policies for increasing productivity
• Sensitization of stakeholders
• strengthening cashew value chain
• Diversification of cashew`],
 ['Lessons learned in up scaling if any', 'None.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – Acceptability of the policies
• Environmental conditions – lack of a comprehensive land use policy
• Policy conditions – Lacking specific cashew policy
• Market conditions - Poor market infrastructure`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre Therefore the returns per acre is KES 84,000 per year.

Gender issues: Development and dissemination – Supporting female and male youth, both in production and marketing cashews; Adoption and scaling – Supporting female and male youth in production and marketing cashews.

Gender related opportunities: Supporting female and male youth, both in the production and marketing of cashews; Increased income by female and male youth; Increased employment by female and male youth.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'Training factsheets, manuals and power point slides are available.'],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', `The Institute Director ICRI-KALRO Mtwapa kalro.mtwapa@kalro.org.
Lead organization and scientists: KALRO: Muniu F., Kengo D.
Partner organizations: KIPPRA, - admin@kippra.or.ke Tegemeo Institute – info@tegemeo.org.`],
 ],
 },
 gaps: [
 'Adoption of policy options',
 'Equity distribution among the stakeholders',
 'Productivity levels among the smallholder farmers due to farmer-market linking models',
 'Farmer accessibility to production inputs',
 ],
 },
 {
 id: '2.13.2',
 title: '2.13.2 County Integrated Development Planning',
 table: {
 rows: [
 ['TIMP Name', 'County Integrated Development Planning'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Lack of centralizing the smallholder agency and voices in planning agricultural development issues in Kenya.'],
 ['What is it? (TIMP description)', 'The County Integrated Development Planning is building a plan for each county in Kenya to be implemented in five years. The planning process is participatory, involving the development stakeholders in the county. It is during this planning period where the issues in cashew production, marketing and processing are considered[cite: 275-276].'],
 ['Justification', 'Failure to consider cashew issues during planning would lead to omission in the development funding.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, traders, research institutions, processing industries, extension, NGOs.'],
 ['Approaches to be used in Dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations – On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media – Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms – website, dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of stakeholders
• Availability of agricultural policies and specific cashew-based policies
• Issues in cashew business promotion
• Specific policy objective statement`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – Demanding cashew policies to support production and marketing
• County extension staff - Sensitization of farmers
• NGOs – Sensitization of farmers
• Private sector (local traders and exporters) – Demanding cashew policies to support production and marketing
• Research institutions – Sensitization of stakeholders`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'None.'],
 ['Counties where TIMPs will be up scaled', 'All Counties where cashew farming is an important activity.'],
 ['Challenge in dissemination and Development', `• Disorganization and scattered farmers
• Small-scale farming
• Inadequate information to stakeholders on the agricultural policies whether National or County
• Poorly established cashew value chain
• Cashew production are specific to agro-ecological zones and not all the Counties in Kenya grow cashew`],
 ['Suggestions for addressing the challenges', `• Formation of producer organizations as an institution
• Policies for increasing productivity
• Sensitization of stakeholders
• Strengthening cashew value chain
• Diversification of cashew`],
 ['Lessons learned in up scaling if any', 'None.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – lack of acceptability of the policies
• Environmental conditions – lack of a comprehensive land use policy
• Policy conditions – Lacking specific cashew policy
• Market conditions - Poor market infrastructure`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680kg per acre, therefore the returns per acre is KES 84,000 per year.

Gender issues: Development and dissemination – Supporting females and males youth, in production and marketing cashews; Adoption and scaling – Supporting females and males youth in production and marketing of cashews.

Gender related opportunities: Supporting youth, females and males in the production and marketing of cashews; Increased income by females and males youth; Increased employment by females and males youth.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'Training factsheets, manuals and power point slides are available.'],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', `The Institute Director, ICRI-KALRO Mtwapa kalro.mtwapa@kalro.org.
Lead organization and scientists: KALRO: Muniu, F., Kengo D.
Partner organizations: KIPPRA, - admin@kippra.or.ke Tegemeo Institute – info@tegemeo.org.`],
 ],
 },
 gaps: [
 'Adoption of policy options',
 'Equity distribution among the stakeholders',
 'Productivity levels among the smallholder farmers due to farmer-market linking models',
 'Farmer accessibility to production inputs',
 ],
 },
 {
 id: '2.13.3',
 title: '2.13.3 Instruments of Policy Related to Cashew',
 table: {
 rows: [
 ['TIMP Name', 'Instruments of policy related to cashew'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Failure to implement policy objectives related to cashews instruments to achieve the policy.'],
 ['What is it? (TIMP description)', 'Policy instruments are the means to achieve policy objectives.'],
 ['Justification', 'Methods of attempting to achieve policy objectives may take a wide variety of forms. It is very likely that a particular policy instrument, although designed to have primarily an efficiency, distributive, or stability effect, will also have some impact on the other objectives.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, Traders, Agripreneurs, Processing industries, Extension, NGOs, Research institutions.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations – On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media – Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms – website, dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of policy objectives
• Availability of policy instruments`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – beneficiaries of policy instruments
• County extension staff - Sensitization of farmers
• NGOs – Sensitization of farmers
• Private sector (local traders and exporters) – beneficiaries
• Research institutions – Sensitization of stakeholders`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'None.'],
 ['Counties where TIMPs will be up scaled', 'All Counties where cashew farming is an important activity.'],
 ['Challenges in development and dissemination', `• Disorganization and scattered farmers
• Small-scale farming
• Inadequate information to stakeholders on the agricultural policies whether National or County
• Poorly established cashew value chain
• Cashews production are specific to agro-ecological zones and not all the Counties in Kenya grow cashews`],
 ['Suggestions for addressing the challenges', `• Formation of producer organizations as an institution
• Policies for increasing productivity
• Sensitization of stakeholders
• Strengthening cashew value chain
• Diversification of cashews`],
 ['Lessons learned in up scaling if any', 'None.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Social conditions – Low understanding of policy instruments
• Environmental conditions – lack of a comprehensive land use policy
• Policy conditions – Lacking specific cashew policy
• Market conditions - Poor market infrastructure`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES 50. Based on KALRO varieties of cashew, the production is 1,680 kg per acre Therefore the returns per acre is ES 84,000 per year.

Gender issues: Development and dissemination – Low cashew production by females and males youth; Adoption and scaling – Market in access by, females and males youth.

Gender related opportunities: Production-increasing by females and males youth; Increased resource use in agricultural production and processing by youth, women and men; Sustainability in cashew farming by youth, women and men.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'Training factsheets, manuals and power point slides are available.'],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', `The Institute Director, ICRI-KALRO Mtwapa kalro.mtwapa@kalro.org.
Lead organization and scientists: KALRO: Muniu F., Kengo D.
Partner organizations: KIPPRA, - admin@kippra.or.ke; Tegemeo Institute – info@tegemeo.org.`],
 ],
 },
 gaps: [
 'Validation of policy instruments',
 'Equity distribution among the stakeholders',
 'Farmer accessibility to production inputs markets',
 'Farmers\' accessibility to output markets',
 ],
 },
 {
 id: '2.13.4',
 title: '2.13.4 Policy Cycle',
 table: {
 rows: [
 ['TIMP Name', 'Policy cycle'],
 ['Category', 'Management practice'],
 ['A: Description of the technology, innovation or management practice', ''],
 ['Problem addressed', 'Why is a policy cycle an appropriate tool for developing a new policy? Policy cycle is a valuable device for new policy development. It is a tool which divides complex procedures into convenient and manageable steps. These individual steps provide a frame work and antedates any forthcoming issues related to policy development.'],
 ['What is it? (TIMP description)', 'The policy cycle is usually divided into five stages: agenda setting, formulation, implementation, and evaluation.'],
 ['Justification', 'The policy cycle creates the need for a policy based on the agricultural problem emergence/issues. The policy cycle is an idealized process that explains how policy should be drafted, implemented and assessed. It serves more as an instructive guide for those new to policy than as a practical strictly-defined process, but many organizations aim to complete policies using the policy cycle as an optimal model. The policy cycle is a valuable device for new policy development. It is a tool which divides complex procedures into convenient and manageable steps. These steps are flexible enough to incorporate any changes at the time of new policy development and as a part of continuous change once it is implemented.'],
 ['B: Assessment of dissemination and scaling up/out approaches', ''],
 ['Users of TIMP', 'Farmers, traders, agripreneurs, processing industries, extension service, NGOs, research institutions.'],
 ['Approaches to be used in dissemination', `• Farmer Field and Business School (FFBS)
• Agricultural innovation platforms (AIP)
• Demonstrations – On-farm and on station
• Agricultural shows/exhibitions/field days
• Trainings - workshops/Seminars/Meetings
• Public and private Extension Agents
• Farmer to farmer extension models
• Mass media – Electronic and print
• Publications - posters/brochures/leaflets, manuals
• Digital platforms – website, dashboards, Apps, social media short message services`],
 ['Critical/essential factors for successful promotion', `• Availability of stakeholders
• The stages of problem emergence, formulation, implementation and evaluation`],
 ['Partners/stakeholders for scaling up and their roles', `• Farmers – generate issues
• County extension staff - capacity building
• NGOs – capacity building
• Private sector (local traders and exporters) – generate issues
• Research institutions – capacity building`],
 ['C: Current situation and future scaling up', ''],
 ['Counties where already promoted if any', 'None.'],
 ['Counties where TIMPs will be up scaled', 'All Counties where cashew farming is an important activity.'],
 ['Challenges in development and dissemination', `• Disorganization and scattered farmers
• Small-scale farming
• Inadequate information to stakeholders on issues
• Poorly established cashew value chain`],
 ['Suggestions for addressing the challenges', `• formation of producer organizations as an institution
• Address issues on aggregation
• Sensitization on the roles of each policy cycle stages
• strengthening cashew value chain`],
 ['Lessons learned in up scaling if any', 'None.'],
 ['Social, environmental, policy and market conditions necessary for development and up-scaling', `• Gender inclusiveness in crop research and development
• Capacity building of stakeholders
• Understanding the physical and biotic environment in target ecologies
• Understanding community culture, preferences, and practices`],
 ['D: Economic, gender, vulnerable and marginalized groups (VMGs) considerations', `Basic costs: To be determined.
Estimated returns: At the farm level, the price per kilogram is KES50. Based on KALRO varieties of cashew, the production is 1,680 kg per acre Therefore the returns per acre is KES 84,000 per year.

Gender issues: Development and dissemination – generation of issues and implementation by the youth (females and males), in production and marketing of cashews; Adoption and scaling – generation of issues and implementation by the youth (females and males) in production and marketing of cashews.

Gender related opportunities: Incorporation of issues generated by the youth (females and males); Implementation of policy cycle.`],
 ['E: Case studies/profiles of success stories', 'None.'],
 ['Application guidelines for users', 'Training factsheets, manuals and power point slides are available.'],
 ['F: Status of TIMP Readiness', 'Requires validation'],
 ['G: Contacts', `The Institute Director, ICRI-KALRO Mtwapa kalro.mtwapa@kalro.org.
Lead organization and scientists: KALRO: Muniu F., Kengo D.
Partner organizations: KIPPRA, - admin@kippra.or.ke; Tegemeo Institute – info@tegemeo.org.`],
 ],
 },
 gaps: [
 'Analysis of policy model',
 'Impact on the new policy on cashew production and marketing',
 ],
 },
 ],
 },
 ],
 },
];
