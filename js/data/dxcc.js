/**
 * DXCC Entity Data
 * Complete list of DXCC entities with callsign prefixes
 */

export const DXCC_ENTITIES = [
  // North America
  { id: 1, name: "Canada", continent: "NA", cqZone: 5, ituZone: 9, prefixes: ["VE", "VA", "VO", "VY"], primaryPrefix: "VE", flag: "\u{1F1E8}\u{1F1E6}" },
  { id: 6, name: "Mexico", continent: "NA", cqZone: 6, ituZone: 10, prefixes: ["XE", "XF"], primaryPrefix: "XE", flag: "\u{1F1F2}\u{1F1FD}" },
  { id: 110, name: "Hawaii", continent: "OC", cqZone: 31, ituZone: 61, prefixes: ["KH6", "WH6", "NH6"], primaryPrefix: "KH6", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 291, name: "United States", continent: "NA", cqZone: 5, ituZone: 8, prefixes: ["K", "W", "N", "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AI", "AJ", "AK", "AL"], primaryPrefix: "K", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 9, name: "Alaska", continent: "NA", cqZone: 1, ituZone: 1, prefixes: ["KL7", "AL7", "NL7", "WL7"], primaryPrefix: "KL7", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 105, name: "Guam", continent: "OC", cqZone: 27, ituZone: 64, prefixes: ["KH2", "AH2", "NH2", "WH2"], primaryPrefix: "KH2", flag: "\u{1F1EC}\u{1F1FA}" },
  { id: 182, name: "Puerto Rico", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["KP3", "KP4", "NP3", "NP4", "WP3", "WP4"], primaryPrefix: "KP4", flag: "\u{1F1F5}\u{1F1F7}" },
  { id: 285, name: "US Virgin Islands", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["KP2", "NP2", "WP2"], primaryPrefix: "KP2", flag: "\u{1F1FB}\u{1F1EE}" },

  // Caribbean
  { id: 62, name: "Barbados", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["8P"], primaryPrefix: "8P", flag: "\u{1F1E7}\u{1F1E7}" },
  { id: 78, name: "Cuba", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["CM", "CO", "CL", "T4"], primaryPrefix: "CO", flag: "\u{1F1E8}\u{1F1FA}" },
  { id: 72, name: "Dominican Republic", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["HI"], primaryPrefix: "HI", flag: "\u{1F1E9}\u{1F1F4}" },
  { id: 106, name: "Haiti", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["HH"], primaryPrefix: "HH", flag: "\u{1F1ED}\u{1F1F9}" },
  { id: 82, name: "Jamaica", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["6Y"], primaryPrefix: "6Y", flag: "\u{1F1EF}\u{1F1F2}" },
  { id: 249, name: "Trinidad & Tobago", continent: "SA", cqZone: 9, ituZone: 11, prefixes: ["9Y", "9Z"], primaryPrefix: "9Y", flag: "\u{1F1F9}\u{1F1F9}" },
  { id: 8, name: "Anguilla", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["VP2E"], primaryPrefix: "VP2E", flag: "\u{1F1E6}\u{1F1EE}" },
  { id: 12, name: "Aruba", continent: "SA", cqZone: 9, ituZone: 11, prefixes: ["P4"], primaryPrefix: "P4", flag: "\u{1F1E6}\u{1F1FC}" },
  { id: 63, name: "Bahamas", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["C6"], primaryPrefix: "C6", flag: "\u{1F1E7}\u{1F1F8}" },
  { id: 52, name: "Bonaire", continent: "SA", cqZone: 9, ituZone: 11, prefixes: ["PJ4"], primaryPrefix: "PJ4", flag: "\u{1F1E7}\u{1F1F6}" },
  { id: 65, name: "British Virgin Islands", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["VP2V"], primaryPrefix: "VP2V", flag: "\u{1F1FB}\u{1F1EC}" },
  { id: 69, name: "Cayman Islands", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["ZF"], primaryPrefix: "ZF", flag: "\u{1F1F0}\u{1F1FE}" },
  { id: 79, name: "Curacao", continent: "SA", cqZone: 9, ituZone: 11, prefixes: ["PJ2"], primaryPrefix: "PJ2", flag: "\u{1F1E8}\u{1F1FC}" },
  { id: 94, name: "Guadeloupe", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["FG"], primaryPrefix: "FG", flag: "\u{1F1EC}\u{1F1F5}" },
  { id: 138, name: "Martinique", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["FM"], primaryPrefix: "FM", flag: "\u{1F1F2}\u{1F1F6}" },
  { id: 96, name: "Montserrat", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["VP2M"], primaryPrefix: "VP2M", flag: "\u{1F1F2}\u{1F1F8}" },
  { id: 177, name: "St. Kitts & Nevis", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["V4"], primaryPrefix: "V4", flag: "\u{1F1F0}\u{1F1F3}" },
  { id: 97, name: "St. Lucia", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["J6"], primaryPrefix: "J6", flag: "\u{1F1F1}\u{1F1E8}" },
  { id: 98, name: "St. Vincent", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["J8"], primaryPrefix: "J8", flag: "\u{1F1FB}\u{1F1E8}" },
  { id: 517, name: "Sint Maarten", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["PJ7"], primaryPrefix: "PJ7", flag: "\u{1F1F8}\u{1F1FD}" },
  { id: 520, name: "Saba & St. Eustatius", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["PJ5", "PJ6"], primaryPrefix: "PJ5", flag: "\u{1F1E7}\u{1F1F6}" },

  // Central America
  { id: 80, name: "Belize", continent: "NA", cqZone: 7, ituZone: 11, prefixes: ["V3"], primaryPrefix: "V3", flag: "\u{1F1E7}\u{1F1FF}" },
  { id: 76, name: "Costa Rica", continent: "NA", cqZone: 7, ituZone: 11, prefixes: ["TI", "TE"], primaryPrefix: "TI", flag: "\u{1F1E8}\u{1F1F7}" },
  { id: 86, name: "El Salvador", continent: "NA", cqZone: 7, ituZone: 11, prefixes: ["YS"], primaryPrefix: "YS", flag: "\u{1F1F8}\u{1F1FB}" },
  { id: 95, name: "Guatemala", continent: "NA", cqZone: 7, ituZone: 11, prefixes: ["TG"], primaryPrefix: "TG", flag: "\u{1F1EC}\u{1F1F9}" },
  { id: 107, name: "Honduras", continent: "NA", cqZone: 7, ituZone: 11, prefixes: ["HR", "HQ"], primaryPrefix: "HR", flag: "\u{1F1ED}\u{1F1F3}" },
  { id: 86, name: "Nicaragua", continent: "NA", cqZone: 7, ituZone: 11, prefixes: ["YN", "H7"], primaryPrefix: "YN", flag: "\u{1F1F3}\u{1F1EE}" },
  { id: 88, name: "Panama", continent: "NA", cqZone: 7, ituZone: 11, prefixes: ["HP", "H3", "3E", "3F"], primaryPrefix: "HP", flag: "\u{1F1F5}\u{1F1E6}" },

  // South America
  { id: 13, name: "Argentina", continent: "SA", cqZone: 13, ituZone: 14, prefixes: ["LU", "LO", "LP", "LQ", "LR", "LS", "LT", "LV", "LW", "AY", "AZ", "L2-L9"], primaryPrefix: "LU", flag: "\u{1F1E6}\u{1F1F7}" },
  { id: 56, name: "Bolivia", continent: "SA", cqZone: 10, ituZone: 12, prefixes: ["CP"], primaryPrefix: "CP", flag: "\u{1F1E7}\u{1F1F4}" },
  { id: 108, name: "Brazil", continent: "SA", cqZone: 11, ituZone: 15, prefixes: ["PY", "PP", "PQ", "PR", "PS", "PT", "PU", "PV", "PW", "PX", "ZV", "ZW", "ZX", "ZY", "ZZ"], primaryPrefix: "PY", flag: "\u{1F1E7}\u{1F1F7}" },
  { id: 112, name: "Chile", continent: "SA", cqZone: 12, ituZone: 14, prefixes: ["CE", "CA", "CB", "CC", "CD", "XQ", "XR", "3G"], primaryPrefix: "CE", flag: "\u{1F1E8}\u{1F1F1}" },
  { id: 116, name: "Colombia", continent: "SA", cqZone: 9, ituZone: 12, prefixes: ["HK", "HJ", "5J", "5K"], primaryPrefix: "HK", flag: "\u{1F1E8}\u{1F1F4}" },
  { id: 120, name: "Ecuador", continent: "SA", cqZone: 10, ituZone: 12, prefixes: ["HC", "HD"], primaryPrefix: "HC", flag: "\u{1F1EA}\u{1F1E8}" },
  { id: 125, name: "French Guiana", continent: "SA", cqZone: 9, ituZone: 12, prefixes: ["FY"], primaryPrefix: "FY", flag: "\u{1F1EC}\u{1F1EB}" },
  { id: 129, name: "Guyana", continent: "SA", cqZone: 9, ituZone: 12, prefixes: ["8R"], primaryPrefix: "8R", flag: "\u{1F1EC}\u{1F1FE}" },
  { id: 144, name: "Paraguay", continent: "SA", cqZone: 11, ituZone: 14, prefixes: ["ZP"], primaryPrefix: "ZP", flag: "\u{1F1F5}\u{1F1FE}" },
  { id: 136, name: "Peru", continent: "SA", cqZone: 10, ituZone: 12, prefixes: ["OA", "OB", "OC", "4T"], primaryPrefix: "OA", flag: "\u{1F1F5}\u{1F1EA}" },
  { id: 140, name: "Suriname", continent: "SA", cqZone: 9, ituZone: 12, prefixes: ["PZ"], primaryPrefix: "PZ", flag: "\u{1F1F8}\u{1F1F7}" },
  { id: 148, name: "Uruguay", continent: "SA", cqZone: 13, ituZone: 14, prefixes: ["CX", "CV", "CW"], primaryPrefix: "CX", flag: "\u{1F1FA}\u{1F1FE}" },
  { id: 156, name: "Venezuela", continent: "SA", cqZone: 9, ituZone: 12, prefixes: ["YV", "YW", "YX", "YY", "4M"], primaryPrefix: "YV", flag: "\u{1F1FB}\u{1F1EA}" },
  { id: 100, name: "Galapagos Islands", continent: "SA", cqZone: 10, ituZone: 12, prefixes: ["HC8"], primaryPrefix: "HC8", flag: "\u{1F1EA}\u{1F1E8}" },
  { id: 47, name: "Easter Island", continent: "SA", cqZone: 12, ituZone: 63, prefixes: ["CE0Y", "3G0Y", "XQ0Y", "XR0Y"], primaryPrefix: "CE0Y", flag: "\u{1F1E8}\u{1F1F1}" },
  { id: 124, name: "Falkland Islands", continent: "SA", cqZone: 13, ituZone: 16, prefixes: ["VP8"], primaryPrefix: "VP8", flag: "\u{1F1EB}\u{1F1F0}" },

  // Europe
  { id: 203, name: "Andorra", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["C3"], primaryPrefix: "C3", flag: "\u{1F1E6}\u{1F1E9}" },
  { id: 206, name: "Austria", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["OE"], primaryPrefix: "OE", flag: "\u{1F1E6}\u{1F1F9}" },
  { id: 207, name: "Belgium", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["ON", "OO", "OP", "OQ", "OR", "OS", "OT"], primaryPrefix: "ON", flag: "\u{1F1E7}\u{1F1EA}" },
  { id: 209, name: "Bosnia-Herzegovina", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["E7", "T9"], primaryPrefix: "E7", flag: "\u{1F1E7}\u{1F1E6}" },
  { id: 212, name: "Bulgaria", continent: "EU", cqZone: 20, ituZone: 28, prefixes: ["LZ"], primaryPrefix: "LZ", flag: "\u{1F1E7}\u{1F1EC}" },
  { id: 497, name: "Croatia", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["9A"], primaryPrefix: "9A", flag: "\u{1F1ED}\u{1F1F7}" },
  { id: 215, name: "Cyprus", continent: "AS", cqZone: 20, ituZone: 39, prefixes: ["5B", "C4", "H2", "P3"], primaryPrefix: "5B", flag: "\u{1F1E8}\u{1F1FE}" },
  { id: 503, name: "Czech Republic", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["OK", "OL"], primaryPrefix: "OK", flag: "\u{1F1E8}\u{1F1FF}" },
  { id: 221, name: "Denmark", continent: "EU", cqZone: 14, ituZone: 18, prefixes: ["OZ"], primaryPrefix: "OZ", flag: "\u{1F1E9}\u{1F1F0}" },
  { id: 224, name: "England", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["G", "M", "2E"], primaryPrefix: "G", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{007F}" },
  { id: 225, name: "Estonia", continent: "EU", cqZone: 15, ituZone: 29, prefixes: ["ES"], primaryPrefix: "ES", flag: "\u{1F1EA}\u{1F1EA}" },
  { id: 227, name: "Finland", continent: "EU", cqZone: 15, ituZone: 18, prefixes: ["OH", "OG", "OI", "OJ"], primaryPrefix: "OH", flag: "\u{1F1EB}\u{1F1EE}" },
  { id: 227, name: "Aland Islands", continent: "EU", cqZone: 15, ituZone: 18, prefixes: ["OH0", "OG0", "OF0"], primaryPrefix: "OH0", flag: "\u{1F1E6}\u{1F1FD}" },
  { id: 230, name: "France", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["F"], primaryPrefix: "F", flag: "\u{1F1EB}\u{1F1F7}" },
  { id: 230, name: "Germany", continent: "EU", cqZone: 14, ituZone: 28, prefixes: ["DL", "DA", "DB", "DC", "DD", "DE", "DF", "DG", "DH", "DI", "DJ", "DK", "DM", "DN", "DO", "DP", "DQ", "DR"], primaryPrefix: "DL", flag: "\u{1F1E9}\u{1F1EA}" },
  { id: 236, name: "Greece", continent: "EU", cqZone: 20, ituZone: 28, prefixes: ["SV", "SW", "SX", "SY", "SZ", "J4"], primaryPrefix: "SV", flag: "\u{1F1EC}\u{1F1F7}" },
  { id: 239, name: "Hungary", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["HA", "HG"], primaryPrefix: "HA", flag: "\u{1F1ED}\u{1F1FA}" },
  { id: 242, name: "Iceland", continent: "EU", cqZone: 40, ituZone: 17, prefixes: ["TF"], primaryPrefix: "TF", flag: "\u{1F1EE}\u{1F1F8}" },
  { id: 245, name: "Ireland", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["EI", "EJ"], primaryPrefix: "EI", flag: "\u{1F1EE}\u{1F1EA}" },
  { id: 248, name: "Italy", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["I", "IK", "IN", "IS", "IT", "IU", "IV", "IW", "IX", "IY", "IZ"], primaryPrefix: "I", flag: "\u{1F1EE}\u{1F1F9}" },
  { id: 251, name: "Latvia", continent: "EU", cqZone: 15, ituZone: 29, prefixes: ["YL"], primaryPrefix: "YL", flag: "\u{1F1F1}\u{1F1FB}" },
  { id: 254, name: "Liechtenstein", continent: "EU", cqZone: 14, ituZone: 28, prefixes: ["HB0"], primaryPrefix: "HB0", flag: "\u{1F1F1}\u{1F1EE}" },
  { id: 255, name: "Lithuania", continent: "EU", cqZone: 15, ituZone: 29, prefixes: ["LY"], primaryPrefix: "LY", flag: "\u{1F1F1}\u{1F1F9}" },
  { id: 256, name: "Luxembourg", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["LX"], primaryPrefix: "LX", flag: "\u{1F1F1}\u{1F1FA}" },
  { id: 502, name: "North Macedonia", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["Z3"], primaryPrefix: "Z3", flag: "\u{1F1F2}\u{1F1F0}" },
  { id: 259, name: "Malta", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["9H"], primaryPrefix: "9H", flag: "\u{1F1F2}\u{1F1F9}" },
  { id: 260, name: "Monaco", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["3A"], primaryPrefix: "3A", flag: "\u{1F1F2}\u{1F1E8}" },
  { id: 514, name: "Montenegro", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["4O"], primaryPrefix: "4O", flag: "\u{1F1F2}\u{1F1EA}" },
  { id: 263, name: "Netherlands", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["PA", "PB", "PC", "PD", "PE", "PF", "PG", "PH", "PI"], primaryPrefix: "PA", flag: "\u{1F1F3}\u{1F1F1}" },
  { id: 266, name: "Norway", continent: "EU", cqZone: 14, ituZone: 18, prefixes: ["LA", "LB", "LC", "LD", "LE", "LF", "LG", "LH", "LI", "LJ", "LK", "LL", "LM", "LN"], primaryPrefix: "LA", flag: "\u{1F1F3}\u{1F1F4}" },
  { id: 269, name: "Poland", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["SP", "SN", "SO", "SQ", "SR", "3Z"], primaryPrefix: "SP", flag: "\u{1F1F5}\u{1F1F1}" },
  { id: 272, name: "Portugal", continent: "EU", cqZone: 14, ituZone: 37, prefixes: ["CT", "CQ", "CR", "CS"], primaryPrefix: "CT", flag: "\u{1F1F5}\u{1F1F9}" },
  { id: 275, name: "Romania", continent: "EU", cqZone: 20, ituZone: 28, prefixes: ["YO", "YP", "YQ", "YR"], primaryPrefix: "YO", flag: "\u{1F1F7}\u{1F1F4}" },
  { id: 54, name: "European Russia", continent: "EU", cqZone: 16, ituZone: 29, prefixes: ["UA", "RA", "R1-R6", "UA1-UA6", "UB-UI"], primaryPrefix: "UA", flag: "\u{1F1F7}\u{1F1FA}" },
  { id: 15, name: "Asiatic Russia", continent: "AS", cqZone: 17, ituZone: 30, prefixes: ["UA0", "UA8", "UA9", "RA0", "R0", "R8", "R9"], primaryPrefix: "UA0", flag: "\u{1F1F7}\u{1F1FA}" },
  { id: 279, name: "San Marino", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["T7"], primaryPrefix: "T7", flag: "\u{1F1F8}\u{1F1F2}" },
  { id: 278, name: "Scotland", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["GM", "MM", "2M"], primaryPrefix: "GM", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{007F}" },
  { id: 296, name: "Serbia", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["YU", "YT"], primaryPrefix: "YU", flag: "\u{1F1F7}\u{1F1F8}" },
  { id: 504, name: "Slovakia", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["OM"], primaryPrefix: "OM", flag: "\u{1F1F8}\u{1F1F0}" },
  { id: 499, name: "Slovenia", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["S5"], primaryPrefix: "S5", flag: "\u{1F1F8}\u{1F1EE}" },
  { id: 281, name: "Spain", continent: "EU", cqZone: 14, ituZone: 37, prefixes: ["EA", "EB", "EC", "ED", "EE", "EF", "EG", "EH"], primaryPrefix: "EA", flag: "\u{1F1EA}\u{1F1F8}" },
  { id: 284, name: "Sweden", continent: "EU", cqZone: 14, ituZone: 18, prefixes: ["SM", "SA", "SB", "SC", "SD", "SE", "SF", "SG", "SH", "SI", "SJ", "SK", "SL", "7S", "8S"], primaryPrefix: "SM", flag: "\u{1F1F8}\u{1F1EA}" },
  { id: 287, name: "Switzerland", continent: "EU", cqZone: 14, ituZone: 28, prefixes: ["HB", "HE"], primaryPrefix: "HB", flag: "\u{1F1E8}\u{1F1ED}" },
  { id: 390, name: "Turkey", continent: "AS", cqZone: 20, ituZone: 39, prefixes: ["TA", "TB", "TC", "YM"], primaryPrefix: "TA", flag: "\u{1F1F9}\u{1F1F7}" },
  { id: 288, name: "Ukraine", continent: "EU", cqZone: 16, ituZone: 29, prefixes: ["UR", "US", "UT", "UU", "UV", "UW", "UX", "UY", "UZ", "EM", "EN", "EO"], primaryPrefix: "UR", flag: "\u{1F1FA}\u{1F1E6}" },
  { id: 294, name: "Vatican", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["HV"], primaryPrefix: "HV", flag: "\u{1F1FB}\u{1F1E6}" },
  { id: 295, name: "Wales", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["GW", "MW", "2W"], primaryPrefix: "GW", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{007F}" },
  { id: 522, name: "Kosovo", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["Z6"], primaryPrefix: "Z6", flag: "\u{1F1FD}\u{1F1F0}" },
  { id: 298, name: "Faroe Islands", continent: "EU", cqZone: 14, ituZone: 18, prefixes: ["OY"], primaryPrefix: "OY", flag: "\u{1F1EB}\u{1F1F4}" },
  { id: 222, name: "Greenland", continent: "NA", cqZone: 40, ituZone: 5, prefixes: ["OX"], primaryPrefix: "OX", flag: "\u{1F1EC}\u{1F1F1}" },
  { id: 257, name: "Svalbard", continent: "EU", cqZone: 40, ituZone: 18, prefixes: ["JW"], primaryPrefix: "JW", flag: "\u{1F1F8}\u{1F1EF}" },
  { id: 259, name: "Gibraltar", continent: "EU", cqZone: 14, ituZone: 37, prefixes: ["ZB", "ZG"], primaryPrefix: "ZB", flag: "\u{1F1EC}\u{1F1EE}" },
  { id: 114, name: "Canary Islands", continent: "AF", cqZone: 33, ituZone: 36, prefixes: ["EA8", "EB8", "EC8", "ED8", "EE8", "EF8"], primaryPrefix: "EA8", flag: "\u{1F1EA}\u{1F1F8}" },
  { id: 256, name: "Azores", continent: "EU", cqZone: 14, ituZone: 36, prefixes: ["CU"], primaryPrefix: "CU", flag: "\u{1F1F5}\u{1F1F9}" },
  { id: 149, name: "Madeira", continent: "AF", cqZone: 33, ituZone: 36, prefixes: ["CT3", "CQ3", "CR3", "CS3"], primaryPrefix: "CT3", flag: "\u{1F1F5}\u{1F1F9}" },
  { id: 122, name: "Balearic Islands", continent: "EU", cqZone: 14, ituZone: 37, prefixes: ["EA6", "EB6", "EC6"], primaryPrefix: "EA6", flag: "\u{1F1EA}\u{1F1F8}" },
  { id: 123, name: "Sardinia", continent: "EU", cqZone: 15, ituZone: 28, prefixes: ["IS0", "IM0"], primaryPrefix: "IS0", flag: "\u{1F1EE}\u{1F1F9}" },
  { id: 180, name: "Crete", continent: "EU", cqZone: 20, ituZone: 28, prefixes: ["SV9"], primaryPrefix: "SV9", flag: "\u{1F1EC}\u{1F1F7}" },
  { id: 181, name: "Dodecanese", continent: "EU", cqZone: 20, ituZone: 28, prefixes: ["SV5"], primaryPrefix: "SV5", flag: "\u{1F1EC}\u{1F1F7}" },
  { id: 45, name: "Mount Athos", continent: "EU", cqZone: 20, ituZone: 28, prefixes: ["SV/A"], primaryPrefix: "SV/A", flag: "\u{1F1EC}\u{1F1F7}" },
  { id: 265, name: "Northern Ireland", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["GI", "MI"], primaryPrefix: "GI", flag: "\u{1F1EC}\u{1F1E7}" },
  { id: 114, name: "Isle of Man", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["GD", "MD", "GT", "2D"], primaryPrefix: "GD", flag: "\u{1F1EE}\u{1F1F2}" },
  { id: 122, name: "Jersey", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["GJ", "MJ", "2J"], primaryPrefix: "GJ", flag: "\u{1F1EF}\u{1F1EA}" },
  { id: 106, name: "Guernsey", continent: "EU", cqZone: 14, ituZone: 27, prefixes: ["GU", "MU", "2U"], primaryPrefix: "GU", flag: "\u{1F1EC}\u{1F1EC}" },

  // Asia
  { id: 318, name: "China", continent: "AS", cqZone: 24, ituZone: 44, prefixes: ["BY", "BA", "BD", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BP", "BQ", "BR", "BS", "BT", "BU", "BV", "BW", "BX", "BZ"], primaryPrefix: "BY", flag: "\u{1F1E8}\u{1F1F3}" },
  { id: 339, name: "Hong Kong", continent: "AS", cqZone: 24, ituZone: 44, prefixes: ["VR"], primaryPrefix: "VR", flag: "\u{1F1ED}\u{1F1F0}" },
  { id: 152, name: "Macao", continent: "AS", cqZone: 24, ituZone: 44, prefixes: ["XX9"], primaryPrefix: "XX9", flag: "\u{1F1F2}\u{1F1F4}" },
  { id: 386, name: "Taiwan", continent: "AS", cqZone: 24, ituZone: 44, prefixes: ["BV", "BX", "BM", "BN", "BO", "BP", "BQ", "BU", "BW"], primaryPrefix: "BV", flag: "\u{1F1F9}\u{1F1FC}" },
  { id: 324, name: "India", continent: "AS", cqZone: 22, ituZone: 41, prefixes: ["VU", "8T", "8U", "8V", "8W", "8X", "8Y"], primaryPrefix: "VU", flag: "\u{1F1EE}\u{1F1F3}" },
  { id: 327, name: "Indonesia", continent: "OC", cqZone: 28, ituZone: 54, prefixes: ["YB", "YC", "YD", "YE", "YF", "YG", "YH", "8A", "8B", "8C", "8D", "8E", "8F", "8G", "8H", "8I"], primaryPrefix: "YB", flag: "\u{1F1EE}\u{1F1E9}" },
  { id: 333, name: "Japan", continent: "AS", cqZone: 25, ituZone: 45, prefixes: ["JA", "JE", "JF", "JG", "JH", "JI", "JJ", "JK", "JL", "JM", "JN", "JO", "JP", "JQ", "JR", "JS", "7J", "7K", "7L", "7M", "7N", "8J", "8K", "8L", "8M", "8N"], primaryPrefix: "JA", flag: "\u{1F1EF}\u{1F1F5}" },
  { id: 137, name: "South Korea", continent: "AS", cqZone: 25, ituZone: 44, prefixes: ["HL", "DS", "DT", "6K", "6L", "6M", "6N"], primaryPrefix: "HL", flag: "\u{1F1F0}\u{1F1F7}" },
  { id: 344, name: "North Korea", continent: "AS", cqZone: 25, ituZone: 44, prefixes: ["P5"], primaryPrefix: "P5", flag: "\u{1F1F0}\u{1F1F5}" },
  { id: 345, name: "Malaysia", continent: "AS", cqZone: 28, ituZone: 54, prefixes: ["9M2", "9M4", "9W2", "9W4"], primaryPrefix: "9M2", flag: "\u{1F1F2}\u{1F1FE}" },
  { id: 348, name: "Mongolia", continent: "AS", cqZone: 23, ituZone: 32, prefixes: ["JT", "JU", "JV"], primaryPrefix: "JT", flag: "\u{1F1F2}\u{1F1F3}" },
  { id: 354, name: "Philippines", continent: "OC", cqZone: 27, ituZone: 50, prefixes: ["DU", "DV", "DW", "DX", "DY", "DZ", "4D", "4E", "4F", "4G", "4H", "4I"], primaryPrefix: "DU", flag: "\u{1F1F5}\u{1F1ED}" },
  { id: 357, name: "Singapore", continent: "AS", cqZone: 28, ituZone: 54, prefixes: ["9V", "S6"], primaryPrefix: "9V", flag: "\u{1F1F8}\u{1F1EC}" },
  { id: 372, name: "Thailand", continent: "AS", cqZone: 26, ituZone: 49, prefixes: ["HS", "E2"], primaryPrefix: "HS", flag: "\u{1F1F9}\u{1F1ED}" },
  { id: 375, name: "Vietnam", continent: "AS", cqZone: 26, ituZone: 49, prefixes: ["XV", "3W"], primaryPrefix: "XV", flag: "\u{1F1FB}\u{1F1F3}" },
  { id: 363, name: "Sri Lanka", continent: "AS", cqZone: 22, ituZone: 41, prefixes: ["4S"], primaryPrefix: "4S", flag: "\u{1F1F1}\u{1F1F0}" },
  { id: 369, name: "Nepal", continent: "AS", cqZone: 22, ituZone: 42, prefixes: ["9N"], primaryPrefix: "9N", flag: "\u{1F1F3}\u{1F1F5}" },
  { id: 315, name: "Bangladesh", continent: "AS", cqZone: 22, ituZone: 41, prefixes: ["S2", "S3"], primaryPrefix: "S2", flag: "\u{1F1E7}\u{1F1E9}" },
  { id: 378, name: "Pakistan", continent: "AS", cqZone: 21, ituZone: 41, prefixes: ["AP", "6P", "6Q", "6R", "6S"], primaryPrefix: "AP", flag: "\u{1F1F5}\u{1F1F0}" },
  { id: 381, name: "Myanmar", continent: "AS", cqZone: 26, ituZone: 49, prefixes: ["XY", "XZ"], primaryPrefix: "XY", flag: "\u{1F1F2}\u{1F1F2}" },
  { id: 384, name: "Laos", continent: "AS", cqZone: 26, ituZone: 49, prefixes: ["XW"], primaryPrefix: "XW", flag: "\u{1F1F1}\u{1F1E6}" },
  { id: 312, name: "Cambodia", continent: "AS", cqZone: 26, ituZone: 49, prefixes: ["XU"], primaryPrefix: "XU", flag: "\u{1F1F0}\u{1F1ED}" },
  { id: 506, name: "East Timor", continent: "OC", cqZone: 28, ituZone: 54, prefixes: ["4W"], primaryPrefix: "4W", flag: "\u{1F1F9}\u{1F1F1}" },
  { id: 321, name: "Brunei", continent: "OC", cqZone: 28, ituZone: 54, prefixes: ["V8"], primaryPrefix: "V8", flag: "\u{1F1E7}\u{1F1F3}" },

  // Middle East
  { id: 301, name: "Afghanistan", continent: "AS", cqZone: 21, ituZone: 40, prefixes: ["YA", "T6"], primaryPrefix: "YA", flag: "\u{1F1E6}\u{1F1EB}" },
  { id: 304, name: "Bahrain", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["A9"], primaryPrefix: "A9", flag: "\u{1F1E7}\u{1F1ED}" },
  { id: 330, name: "Iran", continent: "AS", cqZone: 21, ituZone: 40, prefixes: ["EP", "EQ"], primaryPrefix: "EP", flag: "\u{1F1EE}\u{1F1F7}" },
  { id: 333, name: "Iraq", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["YI"], primaryPrefix: "YI", flag: "\u{1F1EE}\u{1F1F6}" },
  { id: 336, name: "Israel", continent: "AS", cqZone: 20, ituZone: 39, prefixes: ["4X", "4Z"], primaryPrefix: "4X", flag: "\u{1F1EE}\u{1F1F1}" },
  { id: 339, name: "Jordan", continent: "AS", cqZone: 20, ituZone: 39, prefixes: ["JY"], primaryPrefix: "JY", flag: "\u{1F1EF}\u{1F1F4}" },
  { id: 342, name: "Kuwait", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["9K"], primaryPrefix: "9K", flag: "\u{1F1F0}\u{1F1FC}" },
  { id: 354, name: "Lebanon", continent: "AS", cqZone: 20, ituZone: 39, prefixes: ["OD"], primaryPrefix: "OD", flag: "\u{1F1F1}\u{1F1E7}" },
  { id: 370, name: "Oman", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["A4"], primaryPrefix: "A4", flag: "\u{1F1F4}\u{1F1F2}" },
  { id: 376, name: "Qatar", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["A7"], primaryPrefix: "A7", flag: "\u{1F1F6}\u{1F1E6}" },
  { id: 378, name: "Saudi Arabia", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["HZ", "7Z"], primaryPrefix: "HZ", flag: "\u{1F1F8}\u{1F1E6}" },
  { id: 384, name: "Syria", continent: "AS", cqZone: 20, ituZone: 39, prefixes: ["YK"], primaryPrefix: "YK", flag: "\u{1F1F8}\u{1F1FE}" },
  { id: 391, name: "United Arab Emirates", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["A6"], primaryPrefix: "A6", flag: "\u{1F1E6}\u{1F1EA}" },
  { id: 387, name: "Yemen", continent: "AS", cqZone: 21, ituZone: 39, prefixes: ["7O"], primaryPrefix: "7O", flag: "\u{1F1FE}\u{1F1EA}" },
  { id: 309, name: "Armenia", continent: "AS", cqZone: 21, ituZone: 29, prefixes: ["EK"], primaryPrefix: "EK", flag: "\u{1F1E6}\u{1F1F2}" },
  { id: 308, name: "Azerbaijan", continent: "AS", cqZone: 21, ituZone: 29, prefixes: ["4J", "4K"], primaryPrefix: "4J", flag: "\u{1F1E6}\u{1F1FF}" },
  { id: 315, name: "Georgia", continent: "AS", cqZone: 21, ituZone: 29, prefixes: ["4L"], primaryPrefix: "4L", flag: "\u{1F1EC}\u{1F1EA}" },
  { id: 130, name: "Kazakhstan", continent: "AS", cqZone: 17, ituZone: 30, prefixes: ["UN", "UO", "UP", "UQ"], primaryPrefix: "UN", flag: "\u{1F1F0}\u{1F1FF}" },
  { id: 135, name: "Kyrgyzstan", continent: "AS", cqZone: 17, ituZone: 31, prefixes: ["EX"], primaryPrefix: "EX", flag: "\u{1F1F0}\u{1F1EC}" },
  { id: 262, name: "Tajikistan", continent: "AS", cqZone: 17, ituZone: 30, prefixes: ["EY"], primaryPrefix: "EY", flag: "\u{1F1F9}\u{1F1EF}" },
  { id: 280, name: "Turkmenistan", continent: "AS", cqZone: 17, ituZone: 30, prefixes: ["EZ"], primaryPrefix: "EZ", flag: "\u{1F1F9}\u{1F1F2}" },
  { id: 292, name: "Uzbekistan", continent: "AS", cqZone: 17, ituZone: 30, prefixes: ["UK", "UJ", "UL", "UM"], primaryPrefix: "UK", flag: "\u{1F1FA}\u{1F1FF}" },

  // Africa
  { id: 400, name: "Algeria", continent: "AF", cqZone: 33, ituZone: 37, prefixes: ["7X", "7T", "7U", "7V", "7W", "7Y"], primaryPrefix: "7X", flag: "\u{1F1E9}\u{1F1FF}" },
  { id: 402, name: "Angola", continent: "AF", cqZone: 36, ituZone: 52, prefixes: ["D2", "D3"], primaryPrefix: "D2", flag: "\u{1F1E6}\u{1F1F4}" },
  { id: 404, name: "Botswana", continent: "AF", cqZone: 38, ituZone: 57, prefixes: ["A2"], primaryPrefix: "A2", flag: "\u{1F1E7}\u{1F1FC}" },
  { id: 406, name: "Burundi", continent: "AF", cqZone: 36, ituZone: 52, prefixes: ["9U"], primaryPrefix: "9U", flag: "\u{1F1E7}\u{1F1EE}" },
  { id: 408, name: "Cameroon", continent: "AF", cqZone: 36, ituZone: 47, prefixes: ["TJ"], primaryPrefix: "TJ", flag: "\u{1F1E8}\u{1F1F2}" },
  { id: 409, name: "Cape Verde", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["D4"], primaryPrefix: "D4", flag: "\u{1F1E8}\u{1F1FB}" },
  { id: 410, name: "Central African Republic", continent: "AF", cqZone: 36, ituZone: 47, prefixes: ["TL"], primaryPrefix: "TL", flag: "\u{1F1E8}\u{1F1EB}" },
  { id: 411, name: "Chad", continent: "AF", cqZone: 36, ituZone: 47, prefixes: ["TT"], primaryPrefix: "TT", flag: "\u{1F1F9}\u{1F1E9}" },
  { id: 412, name: "Comoros", continent: "AF", cqZone: 39, ituZone: 53, prefixes: ["D6"], primaryPrefix: "D6", flag: "\u{1F1F0}\u{1F1F2}" },
  { id: 414, name: "DR Congo", continent: "AF", cqZone: 36, ituZone: 52, prefixes: ["9Q", "9R", "9S", "9T"], primaryPrefix: "9Q", flag: "\u{1F1E8}\u{1F1E9}" },
  { id: 416, name: "Republic of Congo", continent: "AF", cqZone: 36, ituZone: 52, prefixes: ["TN"], primaryPrefix: "TN", flag: "\u{1F1E8}\u{1F1EC}" },
  { id: 420, name: "Egypt", continent: "AF", cqZone: 34, ituZone: 38, prefixes: ["SU"], primaryPrefix: "SU", flag: "\u{1F1EA}\u{1F1EC}" },
  { id: 424, name: "Ethiopia", continent: "AF", cqZone: 37, ituZone: 48, prefixes: ["ET", "9E", "9F"], primaryPrefix: "ET", flag: "\u{1F1EA}\u{1F1F9}" },
  { id: 428, name: "Gabon", continent: "AF", cqZone: 36, ituZone: 52, prefixes: ["TR"], primaryPrefix: "TR", flag: "\u{1F1EC}\u{1F1E6}" },
  { id: 430, name: "Gambia", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["C5"], primaryPrefix: "C5", flag: "\u{1F1EC}\u{1F1F2}" },
  { id: 432, name: "Ghana", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["9G"], primaryPrefix: "9G", flag: "\u{1F1EC}\u{1F1ED}" },
  { id: 434, name: "Guinea", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["3X"], primaryPrefix: "3X", flag: "\u{1F1EC}\u{1F1F3}" },
  { id: 438, name: "Ivory Coast", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["TU"], primaryPrefix: "TU", flag: "\u{1F1E8}\u{1F1EE}" },
  { id: 440, name: "Kenya", continent: "AF", cqZone: 37, ituZone: 48, prefixes: ["5Y", "5Z"], primaryPrefix: "5Z", flag: "\u{1F1F0}\u{1F1EA}" },
  { id: 444, name: "Liberia", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["EL", "5L", "5M", "6Z", "A8"], primaryPrefix: "EL", flag: "\u{1F1F1}\u{1F1F7}" },
  { id: 446, name: "Libya", continent: "AF", cqZone: 34, ituZone: 38, prefixes: ["5A"], primaryPrefix: "5A", flag: "\u{1F1F1}\u{1F1FE}" },
  { id: 450, name: "Madagascar", continent: "AF", cqZone: 39, ituZone: 53, prefixes: ["5R", "6X"], primaryPrefix: "5R", flag: "\u{1F1F2}\u{1F1EC}" },
  { id: 452, name: "Malawi", continent: "AF", cqZone: 37, ituZone: 53, prefixes: ["7Q"], primaryPrefix: "7Q", flag: "\u{1F1F2}\u{1F1FC}" },
  { id: 454, name: "Mali", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["TZ"], primaryPrefix: "TZ", flag: "\u{1F1F2}\u{1F1F1}" },
  { id: 458, name: "Morocco", continent: "AF", cqZone: 33, ituZone: 37, prefixes: ["CN", "5C", "5D", "5E", "5F", "5G"], primaryPrefix: "CN", flag: "\u{1F1F2}\u{1F1E6}" },
  { id: 460, name: "Mozambique", continent: "AF", cqZone: 37, ituZone: 53, prefixes: ["C9"], primaryPrefix: "C9", flag: "\u{1F1F2}\u{1F1FF}" },
  { id: 462, name: "Namibia", continent: "AF", cqZone: 38, ituZone: 57, prefixes: ["V5"], primaryPrefix: "V5", flag: "\u{1F1F3}\u{1F1E6}" },
  { id: 464, name: "Niger", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["5U"], primaryPrefix: "5U", flag: "\u{1F1F3}\u{1F1EA}" },
  { id: 466, name: "Nigeria", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["5N", "5O"], primaryPrefix: "5N", flag: "\u{1F1F3}\u{1F1EC}" },
  { id: 468, name: "Rwanda", continent: "AF", cqZone: 36, ituZone: 52, prefixes: ["9X"], primaryPrefix: "9X", flag: "\u{1F1F7}\u{1F1FC}" },
  { id: 470, name: "Senegal", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["6W", "6V"], primaryPrefix: "6W", flag: "\u{1F1F8}\u{1F1F3}" },
  { id: 474, name: "Sierra Leone", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["9L"], primaryPrefix: "9L", flag: "\u{1F1F8}\u{1F1F1}" },
  { id: 478, name: "South Africa", continent: "AF", cqZone: 38, ituZone: 57, prefixes: ["ZS", "ZR", "ZT", "ZU", "V9"], primaryPrefix: "ZS", flag: "\u{1F1FF}\u{1F1E6}" },
  { id: 521, name: "South Sudan", continent: "AF", cqZone: 34, ituZone: 47, prefixes: ["Z8"], primaryPrefix: "Z8", flag: "\u{1F1F8}\u{1F1F8}" },
  { id: 480, name: "Sudan", continent: "AF", cqZone: 34, ituZone: 47, prefixes: ["ST"], primaryPrefix: "ST", flag: "\u{1F1F8}\u{1F1E9}" },
  { id: 482, name: "Eswatini", continent: "AF", cqZone: 38, ituZone: 57, prefixes: ["3DA"], primaryPrefix: "3DA", flag: "\u{1F1F8}\u{1F1FF}" },
  { id: 484, name: "Tanzania", continent: "AF", cqZone: 37, ituZone: 53, prefixes: ["5H", "5I"], primaryPrefix: "5H", flag: "\u{1F1F9}\u{1F1FF}" },
  { id: 486, name: "Togo", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["5V"], primaryPrefix: "5V", flag: "\u{1F1F9}\u{1F1EC}" },
  { id: 478, name: "Tunisia", continent: "AF", cqZone: 33, ituZone: 37, prefixes: ["3V", "TS"], primaryPrefix: "3V", flag: "\u{1F1F9}\u{1F1F3}" },
  { id: 490, name: "Uganda", continent: "AF", cqZone: 37, ituZone: 48, prefixes: ["5X"], primaryPrefix: "5X", flag: "\u{1F1FA}\u{1F1EC}" },
  { id: 492, name: "Zambia", continent: "AF", cqZone: 36, ituZone: 53, prefixes: ["9J"], primaryPrefix: "9J", flag: "\u{1F1FF}\u{1F1F2}" },
  { id: 494, name: "Zimbabwe", continent: "AF", cqZone: 38, ituZone: 53, prefixes: ["Z2"], primaryPrefix: "Z2", flag: "\u{1F1FF}\u{1F1FC}" },
  { id: 165, name: "Mauritius", continent: "AF", cqZone: 39, ituZone: 53, prefixes: ["3B8"], primaryPrefix: "3B8", flag: "\u{1F1F2}\u{1F1FA}" },
  { id: 167, name: "Reunion", continent: "AF", cqZone: 39, ituZone: 53, prefixes: ["FR"], primaryPrefix: "FR", flag: "\u{1F1F7}\u{1F1EA}" },
  { id: 173, name: "Seychelles", continent: "AF", cqZone: 39, ituZone: 53, prefixes: ["S7"], primaryPrefix: "S7", flag: "\u{1F1F8}\u{1F1E8}" },
  { id: 60, name: "Eritrea", continent: "AF", cqZone: 37, ituZone: 48, prefixes: ["E3"], primaryPrefix: "E3", flag: "\u{1F1EA}\u{1F1F7}" },
  { id: 219, name: "Djibouti", continent: "AF", cqZone: 37, ituZone: 48, prefixes: ["J2"], primaryPrefix: "J2", flag: "\u{1F1E9}\u{1F1EF}" },
  { id: 232, name: "Somalia", continent: "AF", cqZone: 37, ituZone: 48, prefixes: ["6O", "T5"], primaryPrefix: "6O", flag: "\u{1F1F8}\u{1F1F4}" },
  { id: 436, name: "Guinea-Bissau", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["J5"], primaryPrefix: "J5", flag: "\u{1F1EC}\u{1F1FC}" },
  { id: 418, name: "Equatorial Guinea", continent: "AF", cqZone: 36, ituZone: 47, prefixes: ["3C"], primaryPrefix: "3C", flag: "\u{1F1EC}\u{1F1F6}" },
  { id: 88, name: "Benin", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["TY"], primaryPrefix: "TY", flag: "\u{1F1E7}\u{1F1EF}" },
  { id: 422, name: "Burkina Faso", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["XT"], primaryPrefix: "XT", flag: "\u{1F1E7}\u{1F1EB}" },
  { id: 456, name: "Mauritania", continent: "AF", cqZone: 35, ituZone: 46, prefixes: ["5T"], primaryPrefix: "5T", flag: "\u{1F1F2}\u{1F1F7}" },
  { id: 442, name: "Lesotho", continent: "AF", cqZone: 38, ituZone: 57, prefixes: ["7P"], primaryPrefix: "7P", flag: "\u{1F1F1}\u{1F1F8}" },
  { id: 168, name: "Sao Tome & Principe", continent: "AF", cqZone: 36, ituZone: 47, prefixes: ["S9"], primaryPrefix: "S9", flag: "\u{1F1F8}\u{1F1F9}" },
  { id: 24, name: "Ascension Island", continent: "AF", cqZone: 36, ituZone: 66, prefixes: ["ZD8"], primaryPrefix: "ZD8", flag: "\u{1F1E6}\u{1F1E8}" },
  { id: 250, name: "St. Helena", continent: "AF", cqZone: 36, ituZone: 66, prefixes: ["ZD7"], primaryPrefix: "ZD7", flag: "\u{1F1F8}\u{1F1ED}" },
  { id: 251, name: "Tristan da Cunha", continent: "AF", cqZone: 38, ituZone: 66, prefixes: ["ZD9"], primaryPrefix: "ZD9", flag: "\u{1F1F9}\u{1F1E6}" },

  // Oceania / Pacific
  { id: 150, name: "Australia", continent: "OC", cqZone: 30, ituZone: 59, prefixes: ["VK", "AX"], primaryPrefix: "VK", flag: "\u{1F1E6}\u{1F1FA}" },
  { id: 170, name: "New Zealand", continent: "OC", cqZone: 32, ituZone: 60, prefixes: ["ZL", "ZM"], primaryPrefix: "ZL", flag: "\u{1F1F3}\u{1F1FF}" },
  { id: 32, name: "Fiji", continent: "OC", cqZone: 32, ituZone: 56, prefixes: ["3D2"], primaryPrefix: "3D2", flag: "\u{1F1EB}\u{1F1EF}" },
  { id: 168, name: "Papua New Guinea", continent: "OC", cqZone: 28, ituZone: 51, prefixes: ["P2"], primaryPrefix: "P2", flag: "\u{1F1F5}\u{1F1EC}" },
  { id: 160, name: "Samoa", continent: "OC", cqZone: 32, ituZone: 62, prefixes: ["5W"], primaryPrefix: "5W", flag: "\u{1F1FC}\u{1F1F8}" },
  { id: 190, name: "Tonga", continent: "OC", cqZone: 32, ituZone: 62, prefixes: ["A3"], primaryPrefix: "A3", flag: "\u{1F1F9}\u{1F1F4}" },
  { id: 174, name: "Vanuatu", continent: "OC", cqZone: 32, ituZone: 56, prefixes: ["YJ"], primaryPrefix: "YJ", flag: "\u{1F1FB}\u{1F1FA}" },
  { id: 161, name: "American Samoa", continent: "OC", cqZone: 32, ituZone: 62, prefixes: ["KH8", "AH8", "NH8", "WH8"], primaryPrefix: "KH8", flag: "\u{1F1E6}\u{1F1F8}" },
  { id: 176, name: "Nauru", continent: "OC", cqZone: 31, ituZone: 65, prefixes: ["C2"], primaryPrefix: "C2", flag: "\u{1F1F3}\u{1F1F7}" },
  { id: 157, name: "Kiribati", continent: "OC", cqZone: 31, ituZone: 65, prefixes: ["T3"], primaryPrefix: "T3", flag: "\u{1F1F0}\u{1F1EE}" },
  { id: 175, name: "Tuvalu", continent: "OC", cqZone: 31, ituZone: 65, prefixes: ["T2"], primaryPrefix: "T2", flag: "\u{1F1F9}\u{1F1FB}" },
  { id: 166, name: "Marshall Islands", continent: "OC", cqZone: 31, ituZone: 65, prefixes: ["V7"], primaryPrefix: "V7", flag: "\u{1F1F2}\u{1F1ED}" },
  { id: 103, name: "Guantanamo Bay", continent: "NA", cqZone: 8, ituZone: 11, prefixes: ["KG4"], primaryPrefix: "KG4", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 22, name: "Palau", continent: "OC", cqZone: 27, ituZone: 64, prefixes: ["T8"], primaryPrefix: "T8", flag: "\u{1F1F5}\u{1F1FC}" },
  { id: 163, name: "Micronesia", continent: "OC", cqZone: 27, ituZone: 65, prefixes: ["V6"], primaryPrefix: "V6", flag: "\u{1F1EB}\u{1F1F2}" },
  { id: 515, name: "Northern Mariana Islands", continent: "OC", cqZone: 27, ituZone: 64, prefixes: ["KH0", "AH0", "NH0", "WH0"], primaryPrefix: "KH0", flag: "\u{1F1F2}\u{1F1F5}" },
  { id: 123, name: "Solomon Islands", continent: "OC", cqZone: 28, ituZone: 51, prefixes: ["H4"], primaryPrefix: "H4", flag: "\u{1F1F8}\u{1F1E7}" },
  { id: 301, name: "New Caledonia", continent: "OC", cqZone: 32, ituZone: 56, prefixes: ["FK"], primaryPrefix: "FK", flag: "\u{1F1F3}\u{1F1E8}" },
  { id: 175, name: "French Polynesia", continent: "OC", cqZone: 32, ituZone: 63, prefixes: ["FO"], primaryPrefix: "FO", flag: "\u{1F1F5}\u{1F1EB}" },
  { id: 191, name: "Niue", continent: "OC", cqZone: 32, ituZone: 62, prefixes: ["E6", "ZK2"], primaryPrefix: "E6", flag: "\u{1F1F3}\u{1F1FA}" },
  { id: 182, name: "Cook Islands", continent: "OC", cqZone: 32, ituZone: 62, prefixes: ["E5", "ZK1"], primaryPrefix: "E5", flag: "\u{1F1E8}\u{1F1F0}" },
  { id: 172, name: "Norfolk Island", continent: "OC", cqZone: 32, ituZone: 60, prefixes: ["VK9N"], primaryPrefix: "VK9N", flag: "\u{1F1F3}\u{1F1EB}" },
  { id: 35, name: "Lord Howe Island", continent: "OC", cqZone: 30, ituZone: 60, prefixes: ["VK9L"], primaryPrefix: "VK9L", flag: "\u{1F1E6}\u{1F1FA}" },
  { id: 303, name: "Cocos (Keeling) Islands", continent: "OC", cqZone: 29, ituZone: 54, prefixes: ["VK9C"], primaryPrefix: "VK9C", flag: "\u{1F1E8}\u{1F1E8}" },
  { id: 38, name: "Christmas Island", continent: "OC", cqZone: 29, ituZone: 54, prefixes: ["VK9X"], primaryPrefix: "VK9X", flag: "\u{1F1E8}\u{1F1FD}" },
  { id: 158, name: "Midway Island", continent: "OC", cqZone: 31, ituZone: 61, prefixes: ["KH4"], primaryPrefix: "KH4", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 197, name: "Wake Island", continent: "OC", cqZone: 31, ituZone: 65, prefixes: ["KH9"], primaryPrefix: "KH9", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 9, name: "Baker & Howland Islands", continent: "OC", cqZone: 31, ituZone: 61, prefixes: ["KH1"], primaryPrefix: "KH1", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 138, name: "Johnston Island", continent: "OC", cqZone: 31, ituZone: 61, prefixes: ["KH3"], primaryPrefix: "KH3", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 20, name: "Palmyra & Jarvis Islands", continent: "OC", cqZone: 31, ituZone: 61, prefixes: ["KH5"], primaryPrefix: "KH5", flag: "\u{1F1FA}\u{1F1F8}" },
  { id: 123, name: "Wallis & Futuna Islands", continent: "OC", cqZone: 32, ituZone: 62, prefixes: ["FW"], primaryPrefix: "FW", flag: "\u{1F1FC}\u{1F1EB}" },
  { id: 508, name: "Tokelau", continent: "OC", cqZone: 31, ituZone: 62, prefixes: ["ZK3"], primaryPrefix: "ZK3", flag: "\u{1F1F9}\u{1F1F0}" },

  // Antarctica & Sub-Antarctic
  { id: 13, name: "Antarctica", continent: "AN", cqZone: 39, ituZone: 74, prefixes: ["KC4", "RI1ANT"], primaryPrefix: "KC4", flag: "\u{1F1E6}\u{1F1F6}" },
  { id: 234, name: "South Orkney Islands", continent: "SA", cqZone: 13, ituZone: 73, prefixes: ["VP8/O"], primaryPrefix: "VP8/O", flag: "\u{1F1E6}\u{1F1F6}" },
  { id: 241, name: "South Shetland Islands", continent: "SA", cqZone: 13, ituZone: 73, prefixes: ["VP8/S"], primaryPrefix: "VP8/S", flag: "\u{1F1E6}\u{1F1F6}" },
  { id: 238, name: "South Georgia Island", continent: "SA", cqZone: 13, ituZone: 73, prefixes: ["VP8/G"], primaryPrefix: "VP8/G", flag: "\u{1F1EC}\u{1F1F8}" },
  { id: 4, name: "Bouvet Island", continent: "AF", cqZone: 38, ituZone: 67, prefixes: ["3Y/b"], primaryPrefix: "3Y/b", flag: "\u{1F1E7}\u{1F1FB}" },
  { id: 199, name: "Heard Island", continent: "AF", cqZone: 39, ituZone: 68, prefixes: ["VK0H"], primaryPrefix: "VK0H", flag: "\u{1F1ED}\u{1F1F2}" },
  { id: 153, name: "Macquarie Island", continent: "OC", cqZone: 30, ituZone: 60, prefixes: ["VK0M"], primaryPrefix: "VK0M", flag: "\u{1F1E6}\u{1F1FA}" },
  { id: 227, name: "Kerguelen Islands", continent: "AF", cqZone: 39, ituZone: 68, prefixes: ["FT5X"], primaryPrefix: "FT5X", flag: "\u{1F1EB}\u{1F1F7}" },
  { id: 39, name: "Crozet Islands", continent: "AF", cqZone: 39, ituZone: 68, prefixes: ["FT5W"], primaryPrefix: "FT5W", flag: "\u{1F1EB}\u{1F1F7}" },
  { id: 10, name: "Amsterdam & St. Paul Islands", continent: "AF", cqZone: 39, ituZone: 68, prefixes: ["FT5Z"], primaryPrefix: "FT5Z", flag: "\u{1F1EB}\u{1F1F7}" },
  { id: 239, name: "Peter I Island", continent: "AN", cqZone: 12, ituZone: 72, prefixes: ["3Y/p"], primaryPrefix: "3Y/p", flag: "\u{1F1E6}\u{1F1F6}" },

  // Indian Ocean
  { id: 142, name: "Maldives", continent: "AS", cqZone: 22, ituZone: 41, prefixes: ["8Q"], primaryPrefix: "8Q", flag: "\u{1F1F2}\u{1F1FB}" },
  { id: 11, name: "Chagos Islands", continent: "AF", cqZone: 39, ituZone: 41, prefixes: ["VQ9"], primaryPrefix: "VQ9", flag: "\u{1F1EE}\u{1F1F4}" },
  { id: 201, name: "Andaman & Nicobar Islands", continent: "AS", cqZone: 26, ituZone: 49, prefixes: ["VU4"], primaryPrefix: "VU4", flag: "\u{1F1EE}\u{1F1F3}" },
  { id: 3, name: "Lakshadweep Islands", continent: "AS", cqZone: 22, ituZone: 41, prefixes: ["VU7"], primaryPrefix: "VU7", flag: "\u{1F1EE}\u{1F1F3}" },
  { id: 159, name: "Mayotte", continent: "AF", cqZone: 39, ituZone: 53, prefixes: ["FH"], primaryPrefix: "FH", flag: "\u{1F1FE}\u{1F1F9}" },
  { id: 99, name: "Rodrigues Island", continent: "AF", cqZone: 39, ituZone: 53, prefixes: ["3B9"], primaryPrefix: "3B9", flag: "\u{1F1F2}\u{1F1FA}" }
];

// Lookup maps - populated by initializeLookups()
export const PREFIX_TO_ENTITY = new Map();
export const ID_TO_ENTITY = new Map();
export const CONTINENT_GROUPS = new Map();
export const NAME_TO_ENTITY = new Map();

/**
 * Initialize all lookup maps for fast access
 */
export function initializeLookups() {
  DXCC_ENTITIES.forEach(entity => {
    ID_TO_ENTITY.set(entity.id, entity);
    NAME_TO_ENTITY.set(entity.name.toLowerCase(), entity);

    entity.prefixes.forEach(prefix => {
      PREFIX_TO_ENTITY.set(prefix.toUpperCase(), entity);
    });

    if (!CONTINENT_GROUPS.has(entity.continent)) {
      CONTINENT_GROUPS.set(entity.continent, []);
    }
    CONTINENT_GROUPS.get(entity.continent).push(entity);
  });
}

/**
 * Get entity by prefix
 */
export function getEntityByPrefix(prefix) {
  return PREFIX_TO_ENTITY.get(prefix.toUpperCase());
}

/**
 * Get entity by name (case insensitive)
 */
export function getEntityByName(name) {
  return NAME_TO_ENTITY.get(name.toLowerCase());
}

/**
 * Get random entity
 */
export function getRandomEntity(exclude = []) {
  const available = DXCC_ENTITIES.filter(e => !exclude.includes(e.id));
  return available[Math.floor(Math.random() * available.length)];
}

/**
 * Get entities by continent
 */
export function getEntitiesByContinent(continent) {
  return CONTINENT_GROUPS.get(continent) || [];
}

/**
 * Get all continents
 */
export function getContinents() {
  return ['NA', 'SA', 'EU', 'AF', 'AS', 'OC', 'AN'];
}

/**
 * Get continent full name
 */
export function getContinentName(code) {
  const names = {
    'NA': 'North America',
    'SA': 'South America',
    'EU': 'Europe',
    'AF': 'Africa',
    'AS': 'Asia',
    'OC': 'Oceania',
    'AN': 'Antarctica'
  };
  return names[code] || code;
}
