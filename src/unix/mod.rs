#![allow(non_camel_case_types, non_snake_case)]
pub mod constants;
use self::constants::*;

use ncurses::{box_, getmouse, setlocale, LcCategory, COLORS, COLOR_PAIRS, keyname};
use ncurses::ll::{chtype, ungetch, wattroff, wattron, wattrset, MEVENT, NCURSES_ATTR_T, WINDOW};
use ncurses::ll::wmouse_trafo;

use libc::c_int;
use input::Input;

pub fn pre_init() {
    setlocale(LcCategory::all, "");
}

pub fn _attron(w: WINDOW, attributes: chtype) -> i32 {
    unsafe { wattron(w, attributes as NCURSES_ATTR_T) }
}

pub fn _attroff(w: WINDOW, attributes: chtype) -> i32 {
    unsafe { wattroff(w, attributes as NCURSES_ATTR_T) }
}

pub fn _attrset(w: WINDOW, attributes: chtype) -> i32 {
    unsafe { wattrset(w, attributes as NCURSES_ATTR_T) }
}

pub fn _COLORS() -> i32 {
    COLORS()
}

pub fn _COLOR_PAIRS() -> i32 {
    COLOR_PAIRS()
}

pub fn _draw_box(w: WINDOW, verch: chtype, horch: chtype) -> i32 {
    box_(w, verch, horch)
}

pub fn _getmouse() -> Result<MEVENT, i32> {
    let mut mevent = MEVENT {
        id: 0,
        x: 0,
        y: 0,
        z: 0,
        bstate: 0,
    };
    let error = getmouse(&mut mevent);
    if error == 0 { Ok(mevent) } else { Err(error) }
}

pub fn _keyname(code: i32) -> Option<String> {
    keyname(code)
}

pub fn _mouse_trafo(w: &mut WINDOW, y: &mut i32, x: &mut i32, to_screen: bool) {
    unsafe {
        wmouse_trafo(w, y, x, to_screen as u8);
    }
}

pub fn _resize_term(_nlines: i32, _ncols: i32) -> i32 {
    panic!("resize_term is not implemented in ncurses-rs");
}

pub fn _set_blink(_: bool) -> i32 {
    0 // Not supported
}

pub fn _set_title(_: &str) {
    //Not supported
}

/// Converts an integer returned by getch() to a Input value
pub fn to_special_keycode(i: i32) -> Input {
    assert!(
        i >= KEY_OFFSET,
        format!("Input value less than expected: {:?}", i)
    );
    let i = if i <= KEY_F15 {
        i - KEY_OFFSET
    } else {
        i - KEY_OFFSET - 48
    };
    if i as usize >= SPECIAL_KEY_CODES.len() {
        Input::Unknown(i)
    } else {
        SPECIAL_KEY_CODES[i as usize]
    }
}

pub fn _ungetch(input: &Input) -> i32 {
    let i = convert_input_to_c_int(input);
    unsafe { ungetch(i) }
}

fn convert_input_to_c_int(input: &Input) -> c_int {
    match *input {
        Input::Character(c) => c as c_int,
        Input::Unknown(i) => i,
        specialKeyCode => {
            for (i, skc) in SPECIAL_KEY_CODES.into_iter().enumerate() {
                if *skc == specialKeyCode {
                    let result = i as c_int + KEY_OFFSET;
                    if result <= KEY_F15 {
                        return result;
                    } else {
                        return result + 48;
                    }
                }
            }
            panic!("Failed to convert Input back to a c_int");
        }
    }
}

#[cfg(test)]
mod tests {
    use super::convert_input_to_c_int;
    use super::*;
    use input::Input;
    use libc::c_int;

    #[test]
    fn test_key_dl_to_special_keycode() {
        let keyDl = 0o510;
        assert_eq!(Input::KeyDL, to_special_keycode(keyDl));
    }

    #[test]
    fn test_key_f15_to_input() {
        let keyF15 = 0o410 + 15;
        assert_eq!(Input::KeyF15, to_special_keycode(keyF15));
    }

    #[test]
    fn test_key_up_to_input() {
        let keyUp = 0o403;
        assert_eq!(Input::KeyUp, to_special_keycode(keyUp));
    }

    #[test]
    fn test_convert_input_to_c_int() {
        let i = convert_input_to_c_int(&Input::Character('a'));
        assert_eq!('a' as c_int, i);
    }

    #[test]
    fn test_convert_backspace_to_c_int() {
        let i = convert_input_to_c_int(&Input::KeyBackspace);
        assert_eq!(0o407, i);
    }

    #[test]
    fn test_convert_sdl_to_c_int() {
        let i = convert_input_to_c_int(&Input::KeySDL);
        assert_eq!(0o600, i);
    }

}
