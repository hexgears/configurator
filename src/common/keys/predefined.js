/* eslint-disable prettier/prettier */
import _ from 'lodash';

const Category = {
  spec: 'special',
  std: 'standard',
  core: 'core',
  vis: 'visuals',
  test: 'test',
  mult: 'multimedia',
  num: 'numpad',
  i11l: 'international',
  mouse: 'mouse',
  mac: 'macros'
};

/**
 * @typedef {Object<string, any>} PredefinedKey
 * @property {string} name
 * @property {string} label
 * @property {string[]} aliases
 * @property {number} triggerDef
 * @property {number} resultDef
 * @property {string} group
 * @property {number} order
 * @property {Object} style
 * @property {Object} [data]
 */

/**
 * @returns {PredefinedKey[]}
 */
function buildKeys() {
  const c = Category;
  const keys = [
    ['key/a', 'A', null, c.core],
    ['key/b', 'B', null, c.core],
    ['key/c', 'C', null, c.core],
    ['key/d', 'D', null, c.core],
    ['key/e', 'E', null, c.core],
    ['key/f', 'F', null, c.core],
    ['key/g', 'G', null, c.core],
    ['key/h', 'H', null, c.core],
    ['key/i', 'I', null, c.core],
    ['key/j', 'J', null, c.core],
    ['key/k', 'K', null, c.core],
    ['key/l', 'L', null, c.core],
    ['key/m', 'M', null, c.core],
    ['key/n', 'N', null, c.core],
    ['key/o', 'O', null, c.core],
    ['key/p', 'P', null, c.core],
    ['key/q', 'Q', null, c.core],
    ['key/r', 'R', null, c.core],
    ['key/s', 'S', null, c.core],
    ['key/t', 'T', null, c.core],
    ['key/u', 'U', null, c.core],
    ['key/v', 'V', null, c.core],
    ['key/w', 'W', null, c.core],
    ['key/x', 'X', null, c.core],
    ['key/y', 'Y', null, c.core],
    ['key/z', 'Z', null, c.core],
    ['key/0', '0', null, c.core],
    ['key/1', '1', null, c.core],
    ['key/2', '2', null, c.core],
    ['key/3', '3', null, c.core],
    ['key/4', '4', null, c.core],
    ['key/5', '5', null, c.core],
    ['key/6', '6', null, c.core],
    ['key/7', '7', null, c.core],
    ['key/8', '8', null, c.core],
    ['key/9', '9', null, c.core],
    ['key/backsp', 'BKSP', ['BACKSPACE'], c.std],
    ['key/tab', 'TAB', null, c.std],
    ['key/enter', '↵', ['ENTER'], c.std],
    ['key/lshift', 'L⇑', ['LSHIFT', 'LEFT SHIFT', 'SHIFT'], c.std],
    ['key/rshift', 'R⇑', ['RSHIFT', 'RIGHT SHIFT'], c.std],
    ['key/lctrl', 'LCTRL', ['LCTRL', 'LEFT CTRL', 'CTRL', 'LEFT CONTROL', 'CONTROL'], c.std],
    ['key/rctrl', 'RCTRL', ['RCTRL', 'RIGHT CTRL', 'RIGHT CONTROL'], c.std],
    ['key/lalt', 'LALT', ['LALT', 'LEFT ALT', 'ALT', 'ALTERNATE', 'LEFT ALTERNATE'], c.std],
    ['key/ralt', 'RALT', ['RALT', 'RIGHT ALT', 'RIGHTT ALTERNATE'], c.std],
    ['key/pause', 'PAUSE', null, c.std],
    ['key/caps', 'CAPSLK', ['CAPSLOCK', 'CAPSLOCK'], c.std],
    ['key/esc', 'ESC', ['ESC', 'ESCAPE'], c.std],
    ['key/space', '[ ]', ['SPACE', 'SPACEBAR'], c.std],
    ['key/pgup', 'PGUP', ['PAGEUP', 'PAGE UP'], c.std],
    ['key/pgdn', 'PGDN', ['PAGEDOWN', 'PAGE DOWN'], c.std],
    ['key/end', 'END', null, c.std],
    ['key/home', 'HOME', null, c.std],
    ['key/left', '←', ['LEFT'], c.std],
    ['key/up', '↑', ['UP'], c.std],
    ['key/right', '→', ['RIGHT'], c.std],
    ['key/down', '↓', ['DOWN'], c.std],
    ['key/prsc', 'PRSC', ['PRINTSCREEN', 'PRINT SCREEN'], c.std],
    ['key/ins', 'INS', ['INSERT'], c.std],
    ['key/del', 'DEL', ['DELETE'], c.std],
    ['key/semi', ';', [';', 'SEMICOLON'], c.core, { fontSize: 16 }],
    ['key/=', '=', ['=', 'EQUALS', 'EQUAL'], c.core],
    [
      'key/lgui',
      'LGUI',
      ['LGUI', 'LEFT GUI', 'GUI', 'SUPER', 'LEFT SUPER', 'WINDOWS', 'LEFT WINDOWS', 'WIN', 'LEFT WIN'],
      c.std
    ],
    ['key/rgui', 'RGUI', ['RGUI', 'RIGHT GUI', 'RIGHT SUPER', 'RIGHT WINDOWS', 'RIGHT WIN'], c.std],
    // NOTE - This is a little confusing but the HID KEY_MENU isn't actually menu on anything
    //        what was the "Compose" key (KEY_APP) is actually the real menu key. To make this
    //        more fun the KEY_MENU 0x76 is actively destructive to keypresses. We're just going
    //        to pretend all MENU's are APPs... We've always been at war with Eastasia
    //['key/menu', 'MENU", ['MENU'], c.std],
    ['key/app', 'MENU', ['APP', 'MENU'], c.std],
    ['key/p0', 'P0', ['P0', 'KEYPAD 0'], c.num],
    ['key/p1', 'P1', ['P1', 'KEYPAD 1'], c.num],
    ['key/p2', 'P2', ['P2', 'KEYPAD 2'], c.num],
    ['key/p3', 'P3', ['P3', 'KEYPAD 3'], c.num],
    ['key/p4', 'P4', ['P4', 'KEYPAD 4'], c.num],
    ['key/p5', 'P5', ['P5', 'KEYPAD 5'], c.num],
    ['key/p6', 'P6', ['P6', 'KEYPAD 6'], c.num],
    ['key/p7', 'P7', ['P7', 'KEYPAD 7'], c.num],
    ['key/p8', 'P8', ['P8', 'KEYPAD 8'], c.num],
    ['key/p9', 'P9', ['P9', 'KEYPAD 9'], c.num],
    ['key/p*', 'P*', ['P*', 'KEYPAD ASTRIX', 'KEYPAD ASTERISK'], c.num],
    ['key/p+', 'P+', ['KEYPAD PLUS', 'P+'], c.num],
    ['key/p-', 'P-', ['P-', 'KEYPAD MINUS'], c.num],
    ['key/p.', 'P.', ['P.', 'KEYPAD PERIOD'], c.num],
    ['key/pdiv', 'P/', ['P/', 'KEYPAD SLASH'], c.num],
    ['key/pcomma', 'P,', ['P,'], c.num], // Should probably be in P. as it's actually decimal-sep
    ['key/p=', 'P=', ['P=', 'KEYPAD EQUAL'], c.num],
    ['key/pent', 'P↵', ['PENTER', 'KEYPAD ENTER'], c.num],
    ['key/f1', 'F1', null, c.std],
    ['key/f2', 'F2', null, c.std],
    ['key/f3', 'F3', null, c.std],
    ['key/f4', 'F4', null, c.std],
    ['key/f5', 'F5', null, c.std],
    ['key/f6', 'F6', null, c.std],
    ['key/f7', 'F7', null, c.std],
    ['key/f8', 'F8', null, c.std],
    ['key/f9', 'F9', null, c.std],
    ['key/f10', 'F10', null, c.std],
    ['key/f11', 'F11', null, c.std],
    ['key/f12', 'F12', null, c.std],
    ['key/f13', 'F13', null, c.std],
    ['key/f14', 'F14', null, c.std],
    ['key/f15', 'F15', null, c.std],
    ['key/f16', 'F16', null, c.std],
    ['key/f17', 'F17', null, c.std],
    ['key/f18', 'F18', null, c.std],
    ['key/f19', 'F19', null, c.std],
    ['key/f20', 'F20', null, c.std],
    ['key/f21', 'F21', null, c.std],
    ['key/f22', 'F22', null, c.std],
    ['key/f23', 'F23', null, c.std],
    ['key/f24', 'F24', null, c.std],
    ['key/nmlk', 'NMLK', ['NUMLOCK', 'NUM LOCK'], c.std],
    ['key/sclk', 'SCLK', ['SCROLLLOCK', 'SCROLL LOCK'], c.std],
    ['key/comma', ',', [',', 'COMMA'], c.core, { fontSize: 16 }],
    ['key/-', '-', ['-', 'MINUS'], c.core],
    ['key/.', '.', ['.', 'PERIOD'], c.core, { fontSize: 16 }],
    ['key/slash', '/', ['/', 'SLASH'], c.core],
    ['key/btick', '`', ['`', 'BACKTICK'], c.core, { fontSize: 16 }],
    ['key/lbr', '[', ['[', 'LBRACE', 'LEFT BRACE'], c.core],
    ['key/bslash', '\\', ['\\', 'BACKSLASH'], c.core],
    ['key/rbr', ']', [']', 'RBRACE', 'RIGHT BRACE'], c.core],
    ['key/quote', "'", ["'", 'QUOTE', 'SINGLE QUOTE'], c.core, { fontSize: 16 }],

    ['fw/clear', 'CLEAR', null, c.spec],
    ['fw/none', 'NONE', ['#:None'], c.spec],
    ['fw/nxfn', 'NEXT-ƒ', ['NEXT LAYER', '#:layerRotate(0)', 'NLayer'], c.spec],
    ['fw/pvfn', 'PREV-ƒ', ['PREV LAYER', '#:layerRotate(1)', 'PLayer'], c.spec],
    ['fw/fn1', 'ƒ1', ['#:Layer[1]', '#:LayerShift[1]', 'Layer[1]', 'FUNCTION1', '#:layerShift(1)', 'FUN1', 'FUN'], c.spec, null, 3],
    ['fw/fn2', 'ƒ2', ['#:Layer[2]', '#:LayerShift[2]', 'Layer[2]', 'FUNCTION2', '#:layerShift(2)', 'FUN2'], c.spec, null, 3],
    ['fw/fn3', 'ƒ3', ['#:Layer[3]', '#:LayerShift[3]', 'Layer[3]', 'FUNCTION3', '#:layerShift(3)', 'FUN3'], c.spec, null, 3],
    ['fw/fn4', 'ƒ4', ['#:Layer[4]', '#:LayerShift[4]', 'Layer[4]', 'FUNCTION4', '#:layerShift(4)', 'FUN4'], c.spec, null, 3],
    ['fw/fn5', 'ƒ5', ['#:Layer[5]', '#:LayerShift[5]', 'Layer[5]', 'FUNCTION5', '#:layerShift(5)', 'FUN5'], c.spec, null, 3],
    ['fw/fn6', 'ƒ6', ['#:Layer[6]', '#:LayerShift[6]', 'Layer[6]', 'FUNCTION6', '#:layerShift(6)', 'FUN6'], c.spec, null, 3],
    ['fw/fn7', 'ƒ7', ['#:Layer[7]', '#:LayerShift[7]', 'Layer[7]', 'FUNCTION7', '#:layerShift(7)', 'FUN7'], c.spec, null, 3],
    ['fw/fn8', 'ƒ8', ['#:Layer[8]', '#:LayerShift[8]', 'Layer[8]', 'FUNCTION8', '#:layerShift(8)', 'FUN8'], null, null, 3],
    ['fw/fn9', 'ƒ9', ['#:Layer[9]', '#:LayerShift[9]', 'Layer[9]', 'FUNCTION9', '#:layerShift(9)', 'FUN9'], null, null, 3],
    ['fw/fn10', 'ƒ10', ['#:Layer[10]', '#:LayerShift[10]', 'Layer[10]', 'FUNCTION10', '#:layerShift(10)', 'FUN10'], null, null, 3],
    ['fw/fn11', 'ƒ11', ['#:Layer[11]', '#:LayerShift[11]', 'Layer[11]', 'FUNCTION11', '#:layerShift(11)', 'FUN11'], null, null, 3],
    ['fw/fn12', 'ƒ12', ['#:Layer[12]', '#:LayerShift[12]', 'Layer[12]', 'FUNCTION12', '#:layerShift(12)', 'FUN12'], null, null, 3],
    ['fw/fn13', 'ƒ13', ['#:Layer[13]', '#:LayerShift[13]', 'Layer[13]', 'FUNCTION13', '#:layerShift(13)', 'FUN13'], null, null, 3],
    ['fw/fn14', 'ƒ14', ['#:Layer[14]', '#:LayerShift[14]', 'Layer[14]', 'FUNCTION14', '#:layerShift(14)', 'FUN14'], null, null, 3],
    ['fw/fn15', 'ƒ15', ['#:Layer[15]', '#:LayerShift[15]', 'Layer[15]', 'FUNCTION15', '#:layerShift(15)', 'FUN15'], null, null, 3],
    ['fw/fn16', 'ƒ16', ['#:Layer[16]', '#:LayerShift[16]', 'Layer[16]', 'FUNCTION16', '#:layerShift(16)', 'FUN16'], null, null, 3],

    ['fw/lck1', 'LOCK-1', ['#:LayerLock[1]', 'LOCK1', '#:layerLock(1)', 'LCK1', 'LCK'], c.spec, null, 2],
    ['fw/lck2', 'LOCK-2', ['#:LayerLock[2]', 'LOCK2', '#:layerLock(2)', 'LCK2'], c.spec, null, 2],
    ['fw/lck3', 'LOCK-3', ['#:LayerLock[3]', 'LOCK3', '#:layerLock(3)', 'LCK3'], c.spec, null, 2],
    ['fw/lck4', 'LOCK-4', ['#:LayerLock[4]', 'LOCK4', '#:layerLock(4)', 'LCK4'], c.spec, null, 2],
    ['fw/lck5', 'LOCK-5', ['#:LayerLock[5]', 'LOCK5', '#:layerLock(5)', 'LCK5'], c.spec, null, 2],
    ['fw/lck6', 'LOCK-6', ['#:LayerLock[6]', 'LOCK6', '#:layerLock(6)', 'LCK6'], c.spec, null, 2],
    ['fw/lck7', 'LOCK-7', ['#:LayerLock[7]', 'LOCK7', '#:layerLock(7)', 'LCK7'], c.spec, null, 2],
    ['fw/lck8', 'LOCK-8', ['#:LayerLock[8]', 'LOCK8', '#:layerLock(8)', 'LCK8'], null, null, 2],
    ['fw/lck9', 'LOCK-9', ['#:LayerLock[9]', 'LOCK9', '#:layerLock(9)', 'LCK9'], null, null, 2],
    ['fw/lck10', 'LOCK-10', ['#:LayerLock[10]', 'LOCK10', '#:layerLock(10)', 'LCK10'], null, null, 2],
    ['fw/lck11', 'LOCK-11', ['#:LayerLock[11]', 'LOCK11', '#:layerLock(11)', 'LCK11'], null, null, 2],
    ['fw/lck12', 'LOCK-12', ['#:LayerLock[12]', 'LOCK12', '#:layerLock(12)', 'LCK12'], null, null, 2],
    ['fw/lck13', 'LOCK-13', ['#:LayerLock[13]', 'LOCK13', '#:layerLock(13)', 'LCK13'], null, null, 2],
    ['fw/lck14', 'LOCK-14', ['#:LayerLock[14]', 'LOCK14', '#:layerLock(14)', 'LCK14'], null, null, 2],
    ['fw/lck15', 'LOCK-15', ['#:LayerLock[15]', 'LOCK15', '#:layerLock(15)', 'LCK15'], null, null, 2],
    ['fw/lck16', 'LOCK-16', ['#:LayerLock[16]', 'LOCK16', '#:layerLock(16)', 'LCK16'], null, null, 2],

    ['fw/lat1', 'LATCH-1', ['#:LayerLatch[1]', 'LATCH1', '#:layerLatch(1)', 'LAT1', 'LAT'], c.spec, { fontSize: 12 }, 2],
    ['fw/lat2', 'LATCH-2', ['#:LayerLatch[2]', 'LATCH2', '#:layerLatch(2)', 'LAT2'], c.spec, { fontSize: 12 }, 2],
    ['fw/lat3', 'LATCH-3', ['#:LayerLatch[3]', 'LATCH3', '#:layerLatch(3)', 'LAT3'], c.spec, { fontSize: 12 }, 2],
    ['fw/lat4', 'LATCH-4', ['#:LayerLatch[4]', 'LATCH4', '#:layerLatch(4)', 'LAT4'], c.spec, { fontSize: 12 }, 2],
    ['fw/lat5', 'LATCH-5', ['#:LayerLatch[5]', 'LATCH5', '#:layerLatch(5)', 'LAT5'], c.spec, { fontSize: 12 }, 2],
    ['fw/lat6', 'LATCH-6', ['#:LayerLatch[6]', 'LATCH6', '#:layerLatch(6)', 'LAT6'], c.spec, { fontSize: 12 }, 2],
    ['fw/lat7', 'LATCH-7', ['#:LayerLatch[7]', 'LATCH7', '#:layerLatch(7)', 'LAT7'], c.spec, { fontSize: 12 }, 2],
    ['fw/lat8', 'LATCH-8', ['#:LayerLatch[8]', 'LATCH8', '#:layerLatch(8)', 'LAT8'], null, null, 2],
    ['fw/lat9', 'LATCH-9', ['#:LayerLatch[9]', 'LATCH9', '#:layerLatch(9)', 'LAT9'], null, null, 2],
    ['fw/lat10', 'LATCH-10', ['#:LayerLatch[10]', 'LATCH10', '#:layerLatch(11)', 'LAT10'], null, null, 2],
    ['fw/lat11', 'LATCH-11', ['#:LayerLatch[11]', 'LATCH11', '#:layerLatch(11)', 'LAT11'], null, null, 2],
    ['fw/lat12', 'LATCH-12', ['#:LayerLatch[12]', 'LATCH12', '#:layerLatch(12)', 'LAT12'], null, null, 2],
    ['fw/lat13', 'LATCH-13', ['#:LayerLatch[13]', 'LATCH13', '#:layerLatch(13)', 'LAT13'], null, null, 2],
    ['fw/lat14', 'LATCH-14', ['#:LayerLatch[14]', 'LATCH14', '#:layerLatch(14)', 'LAT14'], null, null, 2],
    ['fw/lat15', 'LATCH-15', ['#:LayerLatch[15]', 'LATCH15', '#:layerLatch(15)', 'LAT15'], null, null, 2],
    ['fw/lat16', 'LATCH-16', ['#:LayerLatch[16]', 'LATCH16', '#:layerLatch(16)', 'LAT16'], null, null, 2],
    ['fw/flash', 'FLASH', ['#:flashMode()'], c.spec],
    ['fw/kro', '6/N-KRO', ['#:toggleKbdProtocol()'], c.spec, { fontSize: 11 }],
    ['fw/6kro', '6KRO', ['#:kbdProtocolBoot()'], c.spec, { fontSize: 12 }],
    ['fw/nkro', 'NKRO', ['#:kbdProtocolNKRO()'], c.spec, { fontSize: 12 }],
    ['fw/load', 'LOAD', ['#:storage_control(0)'], c.spec, { fontSize: 12 }],
    ['fw/save', 'SAVE', ['#:storage_control(1)'], c.spec, { fontSize: 12 }],
    ['fw/def', 'DEFAULTS', ['#:storage_control(2)'], c.spec, { fontSize: 11 }],

    // visualization
    ['led/dec', 'LED-',      ['#:ledControl(0, 15)'], c.vis],
    ['led/inc', 'LED+',      ['#:ledControl(1, 15)'], c.vis],
    ['led/off', 'LED OFF',   ['#:ledControl(3, 255)', '#:ledControl( 3, 0 )'], c.vis, { fontSize: 12 }],
    ['led/on', 'LED ON',     ['#:ledControl(4, 255)'], c.vis, { fontSize: 12 }],
    ['led/tog', 'LED TOG',   ['#:ledControl(5, 255)'], c.vis, { fontSize: 12 }],
    ['led/s25', 'LED 25%',   ['#:ledControl(2, 63)'], c.vis, { fontSize: 12 }],
    ['led/s50', 'LED 50%',   ['#:ledControl(2, 127)'], c.vis, { fontSize: 12 }],
    ['led/s75', 'LED 75%',   ['#:ledControl(2, 190)'], c.vis, { fontSize: 12 }],
    ['led/s100', 'LED 100%', ['#:ledControl(2, 255)'], c.vis, { fontSize: 10 }],
    ['vis/plps', 'V:PL/PS',  ['#:animation_control(0)'], c.vis],
    ['vis/ffx1', 'V:FFx1',   ['#:animation_control(1)'], c.vis],
    ['vis/play', 'V:PLAY',   ['#:animation_control(2)'], c.vis],
    ['vis/stop', 'V:STOP',   ['#:animation_control(3)'], c.vis],
    ['vis/reset', 'V:RESET', ['#:animation_control(4)'], c.vis],
    ['vis/wipe', 'V:WIPE',   ['#:animation_control(5)'], c.vis],
    ['vis/pause', 'V:PAUSE', ['#:animation_control(6)'], c.vis],
    ['vis/clear', 'V:CLEAR', ['#:animation_control(7)'], c.vis],
    ['vis/spd+', 'V:SPD+',   ['#:ledControl(7, 1)'], c.vis],
    ['vis/spd-', 'V:SPD-',   ['#:ledControl(8, 1)'], c.vis],
    ['gamma/tog', 'GAMMA', ['#:gamma(2)'], c.vis],
    ['gamma/on', 'GAM ON',   ['#:gamma(1)'], c.vis, { fontSize: 11 }],
    ['gamma/off', 'GAM OFF', ['#:gamma(0)'], c.vis, { fontSize: 11 }],
    //TODO: fade_set()

    // LED Test
    ['test/none', 'T:NONE',   ['#:ledTest(0)'], c.test],
    ['test/cnext', 'T:CHAN+',   ['#:ledTest(1)'], c.test],
    ['test/cprev', 'T:CHAN-',   ['#:ledTest(2)'], c.test],
    ['test/cflash', 'T:CFLASH',   ['#:ledTest(3)'], c.test],
    ['test/croll', 'T:CROLL',   ['#:ledTest(4)'], c.test],
    ['test/con', 'T:CON',   ['#:ledTest(5)'], c.test],
    ['test/coff', 'T:COFF',   ['#:ledTest(6)'], c.test],
    ['test/pnext', 'T:PIX+',   ['#:ledTest(10)'], c.test],
    ['test/pprev', 'T:PIX-',   ['#:ledTest(11)'], c.test],
    ['test/pflash', 'T:PFLASH',   ['#:ledTest(12)'], c.test],
    ['test/proll', 'T:PROLL',   ['#:ledTest(13)'], c.test],
    ['test/pon', 'T:PON',   ['#:ledTest(14)'], c.test],
    ['test/poff', 'T:POFF',   ['#:ledTest(15)'], c.test],
    // TODO: ScanCode pixel
    // TODO: XY pixel

    // i11n
    ['i11l/iso#', 'ISO#', ['HASH', 'NUMBER', '#'], c.i11l],
    ['i11l/iso-slash', 'ISO/', ['ISO/', 'ISO SLASH'], c.i11l],
    ['i11l/intl1', 'INTL1', ['International1', 'INTER1', 'KANJI1'], c.i11l],
    ['i11l/intl2', 'カナ', ['International2', 'INTER2', 'KANJI2', 'KANA', 'カナ'], c.i11l],
    ['i11l/intl3', '¥', ['International3', 'INTER3', 'KANJI3', 'YEN', '¥'], c.i11l],
    ['i11l/intl4', '変換', ['International4', 'INTER4', 'KANJI4', 'HENKAN', '変換'], c.i11l],
    ['i11l/intl5', '無変換', ['International5', 'INTER5', 'KANJI5', 'MUHENKAN', '無変換'], c.i11l],
    ['i11l/intl6', 'INTL6', ['International6', 'INTER6', 'KANJI6'], c.i11l],
    ['i11l/intl7', 'INTL7', ['International7', 'INTER7', 'KANJI7', 'BYTETOGGLE'], c.i11l],
    ['i11l/intl8', 'INTL8', ['International8', 'INTER8', 'KANJI8'], c.i11l],
    ['i11l/intl9', 'INTL9', ['International9', 'INTER9', 'KANJI9'], c.i11l],
    ['i11l/lang1', '한/영', ['LANG1', 'HANGULENGLISH', 'HANGUL ENGLISH', '한/영'], c.i11l],
    ['i11l/lang2', '英数/한자', ['LANG2', 'HANJA', 'EISU', '英数/한자'], c.i11l, { fontSize: 11 }],
    ['i11l/lang3', 'カタカナ', ['LANG3', 'KATAKANA', 'カタカナ'], c.i11l, { fontSize: 11 }],
    ['i11l/lang4', 'ひらがな', ['LANG4', 'HIRAGANA', 'ひらがな'], c.i11l, { fontSize: 11 }],
    ['i11l/lang5', '半角/全角', ['LANG5', 'ZENKAKUHANKAKU', 'ZENKAKU HANKAKU', '半角/全角'], c.i11l, { fontSize: 10 }],
    ['i11l/lang6', 'LANG6', ['LANG6'], c.i11l],
    ['i11l/lang7', 'LANG7', ['LANG7'], c.i11l],
    ['i11l/lang8', 'LANG8', ['LANG8'], c.i11l],
    ['i11l/lang9', 'LANG9', ['LANG9'], c.i11l],

    // mouse
    ['mouse/btn1', 'Btn 1', ['#:mouseOut( 1, 0, 0 )'], c.mouse],
    ['mouse/btn2', 'Btn 2', ['#:mouseOut( 2, 0, 0 )'], c.mouse],
    ['mouse/btn3', 'Btn 3', ['#:mouseOut( 3, 0, 0 )'], c.mouse],
    ['mouse/btn4', 'Btn 4', ['#:mouseOut( 4, 0, 0 )'], c.mouse],
    ['mouse/btn5', 'Btn 5', ['#:mouseOut( 5, 0, 0 )'], c.mouse],
    ['mouse/btn6', 'Btn 6', ['#:mouseOut( 6, 0, 0 )'], c.mouse],
    ['mouse/btn7', 'Btn 7', ['#:mouseOut( 7, 0, 0 )'], c.mouse],
    ['mouse/btn8', 'Btn 8', ['#:mouseOut( 8, 0, 0 )'], c.mouse],
    ['mouse/btn9', 'Btn 9', ['#:mouseOut( 9, 0, 0 )'], c.mouse],
    ['mouse/btn10', 'Btn 10', ['#:mouseOut( 10, 0, 0 )'], c.mouse],
    ['mouse/btn11', 'Btn 11', ['#:mouseOut( 11, 0, 0 )'], c.mouse],
    ['mouse/btn12', 'Btn 12', ['#:mouseOut( 12, 0, 0 )'], c.mouse],
    ['mouse/btn13', 'Btn 13', ['#:mouseOut( 13, 0, 0 )'], c.mouse],
    ['mouse/btn14', 'Btn 14', ['#:mouseOut( 14, 0, 0 )'], c.mouse],
    ['mouse/btn15', 'Btn 15', ['#:mouseOut( 15, 0, 0 )'], c.mouse],
    ['mouse/btn16', 'Btn 16', ['#:mouseOut( 16, 0, 0 )'], c.mouse],
    ['mouse/up1', '↑ x1', ['#:mouseOut( 0, 0, 1 )'], c.mouse],
    ['mouse/dn1', '↓ x1', ['#:mouseOut( 0, 0, -1 )'], c.mouse],
    ['mouse/lf1', '← x1', ['#:mouseOut( 0, -1, 0 )'], c.mouse],
    ['mouse/rt1', '→ x1', ['#:mouseOut( 0, 1, 0 )'], c.mouse],
    ['mouse/up5', '↑ x5', ['#:mouseOut( 0, 0, 5 )'], c.mouse],
    ['mouse/dn5', '↓ x5', ['#:mouseOut( 0, 0, -5 )'], c.mouse],
    ['mouse/lf5', '← x5', ['#:mouseOut( 0, -5, 0 )'], c.mouse],
    ['mouse/rt5', '→ x5', ['#:mouseOut( 0, 5, 0 )'], c.mouse],

    // macros
    ['mac/tilde', '~', ["#:'~'"], c.mac, { fontSize: 16 }],
    ['mac/excl', '!', ["#:'!'"], c.mac],
    ['mac/at', '@', ["#:'@'"], c.mac],
    ['mac/hash', '#', ["#:'#'"], c.mac],
    ['mac/dol', '$', ["#:'$'"], c.mac],
    ['mac/perc', '%', ["#:'%'"], c.mac],
    ['mac/hat', '^', ["#:'^'"], c.mac, { fontSize: 16 }],
    ['mac/amp', '&', ["#:'&'"], c.mac],
    ['mac/star', '*', ["#:'*'"], c.mac, { fontSize: 16 }],
    ['mac/opar', '(', ["#:'('"], c.mac],
    ['mac/cpar', ')', ["#:')'"], c.mac],
    ['mac/uscr', '_', ["#:'_'"], c.mac, { fontSize: 16 }],
    ['mac/plus', '+', ["#:'+'"], c.mac, { fontSize: 16 }],
    ['mac/obra', '{', ["#:'{'"], c.mac],
    ['mac/cbra', '}', ["#:'}'"], c.mac],
    ['mac/pipe', '|', ["#:'|'"], c.mac],
    ['mac/lt', '<', ["#:'<'"], c.mac, { fontSize: 16 }],
    ['mac/gt', '>', ["#:'>'"], c.mac, { fontSize: 16 }],
    ['mac/ques', '?', ["#:'?'"], c.mac],
    ['mac/colon', ':', ["#:':'"], c.mac, { fontSize: 16 }],
    ['mac/dquot', '"', ["#:'\"'"], c.mac, { fontSize: 16 }],

    // multimedia
    ['mult/mute', 'MUT', ['#:U"Mute" + CONS"Mute"', 'CONS:MUTE'], c.mult],
    ['mult/volup', 'VOL+', ['#:U"Volume Up" + CONS"Volume Up"', 'CONS:VOLUME UP', 'CONS:VOLUMEUP'], c.mult],
    ['mult/voldn', 'VOL-', ['#:U"Volume Down" + CONS"Volume Down"', 'CONS:VOLUME DOWN', 'CONS:VOLUMEDOWN'], c.mult],
    ['mult/plps', 'PL/PS', ['CONS:PAUSE PLAY', 'CONS:PAUSEPLAY'], c.mult],
    ['mult/play', 'PLAY', ['CONS:PLAY'], c.mult],
    ['mult/pause', 'PAUSE', ['CONS:PAUSE'], c.mult],
    ['mult/ff', 'FF', ['CONS:FAST FORWARD', 'CONS:FASTFORWARD'], c.mult],
    ['mult/rew', 'RW', ['CONS:REWIND'], c.mult],
    ['mult/next', 'NEXT', ['CONS:SCAN NEXT TRACK', 'CONS:SCANNEXTTRACK'], c.mult],
    ['mult/prev', 'PREV', ['CONS:SCAN PREVIOUS TRACK', 'CONS:SCANPREVIOUSTRACK'], c.mult],
    ['mult/stop', 'STOP', ['CONS:STOP'], c.mult],
    ['mult/eject', 'EJECT', ['CONS:EJECT'], c.mult],
    ['mult/calc', 'CALC', ['CONS:CALCULATOR'], c.mult],
    ['mult/web', 'WEB', ['CONS:INTERNET BROWSER', 'CONS:INTERNETBROWSER'], c.mult],
    ['mult/files', 'FILES', ['CONS:FILE BROWSER', 'CONS:FILEBROWSER'], c.mult],
    ['mult/scrup', 'SCRN+', ['CONS:BRIGHTNESS INCREMENT', 'CONS:BRIGHTNESSINCREMENT'], c.mult],
    ['mult/scrdn', 'SCRN-', ['CONS:BRIGHTNESS DECREMENT', 'CONS:BRIGHTNESSDECREMENT'], c.mult],
    ['mult/power', 'POWER', ['SYS:POWER DOWN', 'SYS:POWERDOWN'], c.mult],
    ['mult/sleep', 'SLEEP', ['SYS:SLEEP'], c.mult],
    ['mult/wake', 'WAKEUP', ['SYS:WAKE UP', 'SYS:WAKEUP'], c.mult]
    // other stuff...
  ];

  //@ts-ignore
  return keys.map(([name, label, aliases, group, style, triggerDef, resultDef], idx) => ({
    name,
    label,
    aliases: aliases || [label],
    group,
    order: idx,
    style: style || {},
    triggerDef: triggerDef || 0,
    resultDef: resultDef || 0
  }));
}

const keys = buildKeys();

const keymap = _.keyBy(keys, 'name');
const categorized = _.chain(keys)
  .filter('group')
  .groupBy('group')
  .value();

const aliases = keys.reduce((o, k) => {
  _.forEach(k.aliases, a => (o[a.replace(/\s/g, '').toUpperCase()] = k));
  return o;
}, {});

export { keys, keymap, categorized, aliases, Category };
