const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    answers: Object,
    q1: String,
    q2: String,
    q3: String,
    q4: String,
    q5: String,
    q6: String,
    q7: String,
    q8: String,
    q9: String,
    q10: String,
    q11: String,
    q12: String,
    q13: String,
    q14: String,
    q15: String,
    q16: String,
    q17: String,
    q18: String,
    q19: String,
    q20: String,
    q21: String,
    q22: String,
    q23: String,
    q24: String,
    q25: String,
    q26: String,
    q27: String,
    q28: String,
    q29: String,
    q30: String,
    q31: String,
    q32: String,
    q33: String,
    q34: String,
    q35: String,
    q36: String,
    q37: String,
    q38: String,
    q39: String,
    q40: String,
    q41: String,
    q42: String,
    q43: String,
    q44: String,
    q45: String,
    q46: String,
    q47: String,
    q48: String,
    q49: String,
    q50: String,
    q51: String,
    q52: String,
    q53: String,
    q54: String,
    q55: String,
    q56: String,
    q57: String,
    q58: String,
    q59: String,
    q60: String,
    q61: String,
    q62: String,
    q63: String,
    q64: String,
    q65: String,
    q66: String,
    q67: String,
    q68: String,
    q69: String,
    q70: String,
    q71: String,
    q72: String,
    q73: String,
    q74: String,
    q75: String,
    q76: String,
    q77: String,
    q78: String,
    q79: String,
    q80: String,
    q81: String,
    q82: String,
    q83: String,
    q84: String,
    q85: String,
    q86: String,
    q87: String,
    q88: String,
    q89: String,
    q90: String,
    q91: String,
    q92: String,
    q93: String,
    q94: String,
    q95: String,
    q96: String,
    q97: String,
    q98: String,
    q99: String,
    q100: String,
    q101: String,
    q102: String,
    q103: String,
    q104: String,
    q105: String,
    q106: String,
    q107: String,
    q108: String,
    q109: String,
    q110: String,
    q111: String,
    q112: String,
    q113: String,
    q114: String,
    q115: String,
    q116: String,
    q117: String,
    q118: String,
    q119: String,
    q120: String,
    q121: String,
    q122: String,
    q123: String,
    q124: String,
    q125: String,
    q126: String,
    q127: String,
    q128: String,
    q129: String,
    q130: String,
    q131: String,
    q132: String,
    q133: String,
    q134: String,
    q135: String,
    q136: String,
    q137: String,
    q138: String,
    q139: String,
    q140: String,
    q141: String,
    q142: String,
    q143: String,
    q144: String,
    q145: String,
    q146: String,
    q147: String,
    q148: String,
    q149: String,
    q150: String,
    q151: String,
    q152: String,
    q153: String,
    q154: String,
    q155: String,
    q156: String,
    q157: String,
    q158: String,
    q159: String,
    q160: String,
    q161: String,
    q162: String,
    q163: String,
    q164: String,
    q165: String,
    q166: String,
    q167: String,
    q168: String,
    q169: String,
    q170: String,
    q171: String,
    q172: String,
    q173: String,
    q174: String,
    q175: String,
    q176: String,
    q177: String,
    q178: String,
    q179: String,
    q180: String,
    q181: String,
    q182: String,
    q183: String,
    q184: String,
    q185: String,
    q186: String,
    q187: String,
    q188: String,
    q189: String,
    q190: String,
    q191: String,
    q192: String,
    q193: String,
    q194: String,
    q195: String,
    q196: String,
    q197: String,
    q198: String,
    q199: String,
    q200: String,
    q201: String,
    q202: String,
    q203: String,
    q204: String,
    q205: String,
    q206: String,
    q207: String,
    q208: String,
    q209: String,
    q210: String,
    q211: String,
    q212: String,
    q213: String,
    q214: String,
    q215: String,
    q216: String,
    q217: String,
    q218: String,
    q219: String,
    q220: String,
    q221: String,
    q222: String,
    q223: String,
    q224: String,
    q225: String,
    q226: String,
    q227: String,
    q228: String,
    q229: String,
    q230: String,
    q231: String,
    q232: String,
    q233: String,
    q234: String,
    q235: String,
    q236: String,
    q237: String,
    q238: String,
    q239: String,
    q240: String,
    q241: String,
    q242: String,
    q243: String,
    q244: String,
    q245: String,
    q246: String,
    q247: String,
    q248: String,
    q249: String,
    q250: String,
    q251: String,
    q252: String,
    q253: String,
    q254: String,
    q255: String,
    q256: String,
    q257: String,
    q258: String,
    q259: String,
    q260: String,
    q261: String,
    q262: String,
    q263: String,
    q264: String,
    q265: String,
    q266: String,
    q267: String,
    q268: String,
    q269: String,
    q270: String,
    q271: String,
    q272: String,
    q273: String,
    q274: String,
    q275: String,
    q276: String,
    q277: String,
    q278: String,
    q279: String,
    q280: String,
    q281: String,
    q282: String,
    q283: String,
    q284: String,
    q285: String,
    q286: String,
    q287: String,
    q288: String,
    q289: String,
    q290: String,
    q291: String,
    q292: String,
    q293: String,
    q294: String,
    q295: String,
    q296: String,
    q297: String,
    q298: String,
    q299: String,
    q300: String,
    q301: String,
    q302: String,
    q303: String,
    q304: String,
    q305: String,
    q306: String,
    q307: String,
    q308: String,
    q309: String,
    q310: String,
    q311: String,
    q312: String,
    q313: String,
    q314: String,
    q315: String,
    q316: String,
    q317: String,
    q318: String,
    q319: String,
    q320: String,
    q321: String,
    q322: String,
    q323: String,
    q324: String,
    q325: String,
    q326: String,
    q327: String,
    q328: String,
    q329: String,
    q330: String,
    q331: String,
    q332: String,
    q333: String,
    q334: String,
    q335: String,
    q336: String,
    q337: String,
    q338: String,
    q339: String,
    q340: String,
    q341: String,
    q342: String,
    q343: String,
    q344: String,
    q345: String,
    q346: String,
    q347: String,
    q348: String,
    q349: String,
    q350: String,
    q351: String,
    q352: String,
    q353: String,
    q354: String,
    q355: String,
    q356: String,
    q357: String,
    q358: String,
    q359: String,
    q360: String,
    q361: String,
    q362: String,
    q363: String,
    q364: String,
    q365: String,
    q366: String,
    q367: String,
    q368: String,
    q369: String,
    q370: String,
    q371: String,
    q372: String,
    q373: String,
    q374: String,
    q375: String,
    q376: String,
    q377: String,
    q378: String,
    q379: String,
    q380: String,
    q381: String,
    q382: String,
    q383: String,
    q384: String,
    q385: String,
    q386: String,
    q387: String,
    q388: String,
    q389: String,
    q390: String,
    q391: String,
    q392: String,
    q393: String,
    q394: String,
    q395: String,
    q396: String,
    q397: String,
    q398: String,
    q399: String,
    q400: String,
    q401: String,
    q402: String,
    q403: String,
    q404: String,
    q405: String,
    q406: String,
    q407: String,
    q408: String,
    q409: String,
    q410: String,
    q411: String,
    q412: String,
    q413: String,
    q414: String,
    q415: String,
    q416: String,
    q417: String,
    q418: String,
    q419: String,
    q420: String,
    q421: String,
    q422: String,
    q423: String,
    q424: String,
    q425: String,
    q426: String,
    q427: String,
    q428: String,
    q429: String,
    q430: String,
    q431: String,
    q432: String,
    q433: String,
    q434: String,
    q435: String,
    q436: String,
    q437: String,
    q438: String,
    q439: String,
    q440: String,
    q441: String,
    q442: String,
    q443: String,
    q444: String,
    q445: String,
    q446: String,
    q447: String,
    q448: String,
    q449: String,
    q450: String,
    q451: String,
    q452: String,
    q453: String,
    q454: String,
    q455: String,
    q456: String,
    q457: String,
    q458: String,
    q459: String,
    q460: String,
    q461: String,
    q462: String,
    q463: String,
    q464: String,
    q465: String,
    q466: String,
    q467: String,
    q468: String,
    q469: String,
    q470: String,
    q471: String,
    q472: String,
    q473: String,
    q474: String,
    q475: String,
    q476: String,
    q477: String,
    q478: String,
    q479: String,
    q480: String,
    q481: String,
    q482: String,
    q483: String,
    q484: String,
    q485: String,
    q486: String,
    q487: String,
    q488: String,
    q489: String,
    q490: String,
    q491: String,
    q492: String,
    q493: String,
    q494: String,
    q495: String,
    q496: String,
    q497: String,
    q498: String,
    q499: String,
    q500: String,
    q501: String,
    q502: String,
    q503: String,
    q504: String,
    q505: String,
    q506: String,
    q507: String,
    q508: String,
    q509: String,
    q510: String,
    q511: String,
    q512: String,
    q513: String,
    q514: String,
    q515: String,
    q516: String,
    q517: String,
    q518: String,
    q519: String,
    q520: String,
    q521: String,
    q522: String,
    q523: String,
    q524: String,
    q525: String,
    q526: String,
    q527: String,
    q528: String,
    q529: String,
    q530: String,
    q531: String,
    q532: String,
    q533: String,
    q534: String,
    q535: String,
    q536: String,
    q537: String,
    q538: String,
    q539: String,
    q540: String,
    q541: String,
    q542: String,
    q543: String,
    q544: String,
    q545: String,
    q546: String,
    q547: String,
    q548: String,
    q549: String,
    q550: String,
    q551: String,
    q552: String,
    q553: String,
    q554: String,
    q555: String,
    q556: String,
    q557: String,
    q558: String,
    q559: String,
    q560: String,
    q561: String,
    q562: String,
    q563: String,
    q564: String,
    q565: String,
    q566: String,
    q567: String,
    q568: String,
    q569: String,
    q570: String,
    q571: String,
    q572: String,
    q573: String,
    q574: String,
    q575: String,
    q576: String,
    q577: String,
    q578: String,
    q579: String,
    q580: String,
    q581: String,
    q582: String,
    q583: String,
    q584: String,
    q585: String,
    q586: String,
    q587: String,
    q588: String,
    q589: String,
    q590: String,
    q591: String,
    q592: String,
    q593: String,
    q594: String,
    q595: String,
    q596: String,
    q597: String,
    q598: String,
    q599: String,
    q600: String,
    q601: String,
    q602: String,
    q603: String,
    q604: String,
    q605: String,
    q606: String,
    q607: String,
    q608: String,
    q609: String,
    q610: String,
    q611: String,
    q612: String,
    q613: String,
    q614: String,
    q615: String,
    q616: String,
    q617: String,
    q618: String,
    q619: String,
    q620: String,
    q621: String,
    q622: String,
    q623: String,
    q624: String,
    q625: String,
    q626: String,
    q627: String,
    q628: String,
    q629: String,
    q630: String,
    q631: String,
    q632: String,
    q633: String,
    q634: String,
    q635: String,
    q636: String,
    q637: String,
    q638: String,
    q639: String,
    q640: String,
    q641: String,
    q642: String,
    q643: String,
    q644: String,
    q645: String,
    q646: String,
    q647: String,
    q648: String,
    q649: String,
    q650: String,
    q651: String,
    q652: String,
    q653: String,
    q654: String,
    q655: String,
    q656: String,
    q657: String,
    q658: String,
    q659: String,
    q660: String,
    q661: String,
    q662: String,
    q663: String,
    q664: String,
    q665: String,
    q666: String,
    q667: String,
    q668: String,
    q669: String,
    q670: String,
    q671: String,
    q672: String,
    q673: String,
    q674: String,
    q675: String,
    q676: String,
    q677: String,
    q678: String,
    q679: String,
    q680: String,
    q681: String,
    q682: String,
    q683: String,
    q684: String,
    q685: String,
    q686: String,
    q687: String,
    q688: String,
    q689: String,
    q690: String,
    q691: String,
    q692: String,
    q693: String,
    q694: String,
    q695: String,
    q696: String,
    q697: String,
    q698: String,
    q699: String,
    q700: String,
    q701: String,
    q702: String,
    q703: String,
    q704: String,
    q705: String,
    q706: String,
    q707: String,
    q708: String,
    q709: String,
    q710: String,
    q711: String,
    q712: String,
    q713: String,
    q714: String,
    q715: String,
    q716: String,
    q717: String,
    q718: String,
    q719: String,
    q720: String,
    q721: String,
    q722: String,
    q723: String,
    q724: String,
    q725: String,
    q726: String,
    q727: String,
    q728: String,
    q729: String,
    q730: String,
    q731: String,
    q732: String,
    q733: String,
    q734: String,
    q735: String,
    q736: String,
    q737: String,
    q738: String,
    q739: String,
    q740: String,
    q741: String,
    q742: String,
    q743: String,
    q744: String,
    q745: String,
    q746: String,
    q747: String,
    q748: String,
    q749: String,
    q750: String,
    q751: String,
    q752: String,
    q753: String,
    q754: String,
    q755: String,
    q756: String,
    q757: String,
    q758: String,
    q759: String,
    q760: String,
    q761: String,
    q762: String,
    q763: String,
    q764: String,
    q765: String,
    q766: String,
    q767: String,
    q768: String,
    q769: String,
    q770: String,
    q771: String,
    q772: String,
    q773: String,
    q774: String,
    q775: String,
    q776: String,
    q777: String,
    q778: String,
    q779: String,
    q780: String,
    q781: String,
    q782: String,
    q783: String,
    q784: String,
    q785: String,
    q786: String,
    q787: String,
    q788: String,
    q789: String,
    q790: String,
    q791: String,
    q792: String,
    q793: String,
    q794: String,
    q795: String,
    q796: String,
    q797: String,
    q798: String,
    q799: String,
});

module.exports = mongoose.model('Answer', AnswerSchema);
