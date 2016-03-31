(function() {var implementors = {};
implementors['libc'] = ["impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.stat.html' title='libc::stat'>stat</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.utimbuf.html' title='libc::utimbuf'>utimbuf</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.timeval.html' title='libc::timeval'>timeval</a>","impl <a class='trait' href='core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='libc/struct.timespec.html' title='libc::timespec'>timespec</a>",];implementors['log'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='log/enum.LogLevel.html' title='log::LogLevel'>LogLevel</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='log/enum.LogLevelFilter.html' title='log::LogLevelFilter'>LogLevelFilter</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='log/struct.LogLocation.html' title='log::LogLocation'>LogLocation</a>",];implementors['pdcurses'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct___crt_locale_data_public.html' title='pdcurses::Struct___crt_locale_data_public'>Struct___crt_locale_data_public</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct___crt_locale_pointers.html' title='pdcurses::Struct___crt_locale_pointers'>Struct___crt_locale_pointers</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct__Mbstatet.html' title='pdcurses::Struct__Mbstatet'>Struct__Mbstatet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct__iobuf.html' title='pdcurses::Struct__iobuf'>Struct__iobuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct_Unnamed1.html' title='pdcurses::Struct_Unnamed1'>Struct_Unnamed1</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct_Unnamed2.html' title='pdcurses::Struct_Unnamed2'>Struct_Unnamed2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct__win.html' title='pdcurses::Struct__win'>Struct__win</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct_Unnamed3.html' title='pdcurses::Struct_Unnamed3'>Struct_Unnamed3</a>",];implementors['pancurses'] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct___crt_locale_data_public.html' title='pdcurses::Struct___crt_locale_data_public'>Struct___crt_locale_data_public</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct___crt_locale_pointers.html' title='pdcurses::Struct___crt_locale_pointers'>Struct___crt_locale_pointers</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct__Mbstatet.html' title='pdcurses::Struct__Mbstatet'>Struct__Mbstatet</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct__iobuf.html' title='pdcurses::Struct__iobuf'>Struct__iobuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct_Unnamed1.html' title='pdcurses::Struct_Unnamed1'>Struct_Unnamed1</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct_Unnamed2.html' title='pdcurses::Struct_Unnamed2'>Struct_Unnamed2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct__win.html' title='pdcurses::Struct__win'>Struct__win</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='struct' href='pdcurses/struct.Struct_Unnamed3.html' title='pdcurses::Struct_Unnamed3'>Struct_Unnamed3</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> for <a class='enum' href='pancurses/enum.Input.html' title='pancurses::Input'>Input</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
