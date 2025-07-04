
            (function(global){
                var DragAndDropI18N = {
                  init: function() {
                    

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "\n                            Please provide a description of the image for non-visual users.\n                            The description should provide sufficient information to allow anyone\n                            to solve the problem even without seeing the image.\n                        ": "\n                            Proporcione una descripci\u00f3n de la imagen para usuarios con discapacidad visual.\n                            La descripci\u00f3n debe proporcionar informaci\u00f3n suficiente para que cualquiera \n                            pueda resolver el problema incluso sin ver la imagen.\n                        ",
    ", draggable": ", arrastrable",
    ", draggable, grabbed": ", arrastrable, tomado",
    ", dropzone": ", zona para soltar los \u00edtems",
    "Actions": "Acciones",
    "Add a zone": "A\u00f1adir zona",
    "Add an item": "A\u00f1adir un item",
    "An error occurred. Unable to load drag and drop problem.": "Ocurri\u00f3 un error. No fue posible cargar el problema de arrastrar y soltar.",
    "An isosceles triangle with three layers of similar height. It is shown upright, so the widest layer is located at the bottom, and the narrowest layer is located at the top.": "Un tri\u00e1ngulo is\u00f3sceles con tres capas de altura similar. Se muestra vertical, por lo que la capa m\u00e1s ancha se encuentra en la parte inferior, y la capa m\u00e1s estrecha se encuentra en la parte superior.",
    "Assessment": "Evaluaci\u00f3n",
    "Background Image": "Background Image",
    "Background URL": "URL de imagen de fondo",
    "Background description": "Descripci\u00f3n del fondo",
    "Basic Settings": "Basic Settings",
    "Cancel": "Cancelar",
    "Change background": "Cambiar imagen de fondo",
    "Close": "Cerrar",
    "Continue": "Continuar",
    "Correct": "Correcto",
    "Correct! This one belongs to The Bottom Zone.": "Correct! This one belongs to The Bottom Zone.",
    "Correct! This one belongs to The Middle Zone.": "Correct! This one belongs to The Middle Zone.",
    "Correct! This one belongs to The Top Zone.": "Correct! This one belongs to The Top Zone.",
    "Correctly placed in: {zone_title}": "Ubicado correctamente en {zone_title}",
    "Correctly placed {correct_count} item.": [
      "Correctly placed {correct_count} item.",
      "Correctly placed {correct_count} items."
    ],
    "DEPRECATED. Keeps maximum score achieved by student as a weighted value.": "DEPRECATED. Keeps maximum score achieved by student as a weighted value.",
    "Defines the number of points the problem is worth.": "Define el n\u00famero de puntos que vale este problema.",
    "Defines the number of times a student can try to answer this problem. If the value is not set, infinite attempts are allowed.": "Define el n\u00famero de veces que un estudiante puede intentar responder a este problema. Si el valor no est\u00e1 establecido, se permiten intentos infinitos.",
    "Did not place {missing_count} required item.": [
      "Did not place {missing_count} required item.",
      "Did not place {missing_count} required items."
    ],
    "Display label names on the image": "Mostrar los nombres de las zonas en la imagen",
    "Display the heading \"Problem\" above the problem text?": "\u00bfMostrar la palabra \"Problema\" sobre el texto del problema?",
    "Display the title to the learner?": "\u00bfMostrar el t\u00edtulo al estudiante?",
    "Display zone borders on the image": "Mostrar los margenes de la zona en la imagen",
    "Drag and Drop": "Arrastrar y soltar",
    "Drag and Drop Problem": "Problema de Arrastrar y Soltar",
    "Drag and Drop problems consist of draggable items and dropzones. Users should select a draggable item with their keyboard and then navigate to an appropriate dropzone to drop it.": "Los problemas de arrastrar y soltar contienen elementos arrastrables y zonas. Los usuarios deben seleccionar un elemento arrastrable con el teclado y llevarlo a una zona adecuada para soltarlos.",
    "Drag the items onto the image above.": "Arrastra los elementos y ubicalos en la imagen de abajo",
    "Drop Targets": "Zonas para soltar",
    "Feedback": "Retroalimentaci\u00f3n",
    "Final attempt was used, highest score is {score}": "Se ha utilizado el \u00faltimo intento. Su puntaje m\u00e1ximo fu\u00e9 {score}",
    "Final feedback": "Retroalimentaci\u00f3n final",
    "For example, 'http://example.com/background.png' or '/static/background.png'.": "Por ejemplo, 'http://example.com/background.png' o '/static/background.png'.",
    "Generate image and zones": "Generate image and zones",
    "Generate image automatically": "Generate image automatically",
    "Go to Beginning": "Ir al comienzo",
    "Goes anywhere": "Va en cualquier parte",
    "Goes to the bottom": "Va en la parte inferior",
    "Goes to the middle": "Va en la parte media",
    "Goes to the top": "Va en la parte superior",
    "Good work! You have completed this drag and drop problem.": "Buen trabajo! Has completado este ejercicio de arrastrar y soltar",
    "Hints:": "Pistas:",
    "I don't belong anywhere": "No va en ninguna parte",
    "Incorrect": "Incorrecto",
    "Indicates whether a learner has completed the problem at least once": "Indica si un alumno ha completado el problema al menos una vez",
    "Information about current positions of items that a learner has dropped on the target image.": "Informaci\u00f3n sobre las posiciones actuales de los elementos que un alumno ha soltado en la imagen de destino.",
    "Information about zones, items, feedback, and background image for this problem. This information is derived from the input that a course author provides via the interactive editor when configuring the problem.": "Informaci\u00f3n sobre zonas, elementos, retroalimentaci\u00f3n e imagen de fondo para este problema. Esta informaci\u00f3n se deriva de la entrada que un autor de curso proporciona a trav\u00e9s del editor interactivo al configurar el problema.",
    "Introductory feedback": "Retroalimentaci\u00f3n inicial",
    "Item Bank": "Items",
    "Item background color": "Color de fondo para los items",
    "Item definitions": "Item definitions",
    "Item text color": "Color de texto para los items",
    "Items": "Items",
    "Items placed here: ": "Items placed here: ",
    "Keeps maximum score achieved by student as a raw value between 0 and 1.": "Keeps maximum score achieved by student as a raw value between 0 and 1.",
    "Keyboard Help": "Ayuda de teclado",
    "Loading drag and drop problem.": "Cargando problema de arrastrar y soltar.",
    "Max number of attempts reached": "M\u00e1ximo n\u00famero de intentos alcanzado",
    "Maximum attempts": "M\u00e1ximos intentos",
    "Maximum items per zone": "Maximum items per zone",
    "Misplaced {misplaced_count} item.": [
      "Misplaced {misplaced_count} item.",
      "Misplaced {misplaced_count} items."
    ],
    "Misplaced {misplaced_count} item. Misplaced item was returned to item bank.": [
      "Misplaced {misplaced_count} item. Misplaced item was returned to item bank.",
      "Misplaced {misplaced_count} items. Misplaced items were returned to item bank."
    ],
    "Mode": "Modo",
    "Navigate using TAB and SHIFT+TAB to the appropriate dropzone and press CTRL+M once more to drop it here.": "Navegue usando TAB y MAY\u00daS + TAB a la zona desplegable apropiada y presione CTRL + M nuevamente para dejarlo en esa zona.",
    "No items placed here": "No items placed here",
    "No, this item does not belong here. Try again.": "No. Este \u00edtem no pertenece aqu\u00ed. Intenta nuevamente",
    "Number of attempts learner used": "N\u00famero de intentos de estudiante usados",
    "Number of columns": "Number of columns",
    "Number of columns and rows.": "Number of columns and rows.",
    "Number of rows": "Number of rows",
    "Of course it goes here! It goes anywhere!": "Por supuesto que va ac\u00e1! Va en cualquier parte!",
    "Placed in: {zone_title}": "Ubicado en: {zone_title}",
    "Please check over your submission.": "Por favor revise nuevamente su env\u00edo",
    "Please check the values you entered.": "Please check the values you entered.",
    "Press CTRL+M to select a draggable item (effectively picking it up).": "Presione CTRL + M para seleccionar un elemento arrastrable (para seleccionarlo efectivamente).",
    "Press ESC if you want to cancel the drop operation (for example, to select a different item).": "Presione ESC si desea cancelar la operaci\u00f3n de soltar (por ejemplo, para seleccionar un elemento diferente).",
    "Problem": "Problema",
    "Problem Weight": "Valor del problema",
    "Problem data": "Datos del problema",
    "Problem text": "Texto del problema",
    "Provide custom image": "Provide custom image",
    "Reset": "Reiniciar",
    "Save": "Guardar",
    "Saving": "Guardando",
    "Show \"Problem\" heading": "Mostrar \"Problema\" en el encabezado",
    "Show Answer": "Mostrar Respuesta",
    "Show title": "Mostrar t\u00edtulo",
    "Size of a single zone in pixels.": "Size of a single zone in pixels.",
    "Some of your answers were not correct.": "Algunas de sus respuestas no fueron correctas.",
    "Standard": "Est\u00e1ndar",
    "Standard mode: the problem provides immediate feedback each time a learner drops an item on a target zone. Assessment mode: the problem provides feedback only after a learner drops all available items on target zones.": "Modo Est\u00e1ndar: el problema proporciona retroalimentaci\u00f3n inmediata cada vez que el estudiante suelta un elemento en una zona. Modo evaluaci\u00f3n: el problema proporciona retroalimentaci\u00f3n s\u00f3lo despu\u00e9s de que el estudiante suelte todos los elementos arrastrables en las zonas.",
    "Submission deadline has passed.": "Submission deadline has passed.",
    "Submit": "Enviar",
    "Submitting": "Enviando",
    "TAB back to the list of draggable items and repeat this process until all of the draggable items have been placed on their respective dropzones.": "Use la tecla TAB para volver a la lista de elementos arrastrables y repetir este proceso hasta que todos los elementos arrastrables est\u00e9n en sus respectivas zonas.",
    "Text color to use for draggable items (example: 'white' or '#ffffff').": "Color de texto para los elementos arrastrables (ejemplo: 'white' o '#ffffff').",
    "The Bottom Zone": "Zona inferior",
    "The Middle Zone": "Zona media",
    "The Top Zone": "Zona superior",
    "The background color of draggable items in the problem (example: 'blue' or '#0000ff').": "El color de fondo de los elementos arrastrables (ejemplo: 'blue' o '#0000ff').",
    "The description of the problem or instructions shown to the learner.": "Descripci\u00f3n del problema o instrucciones mostradas al estudiante",
    "The title of the drag and drop problem. The title is displayed to learners.": "El t\u00edtulo del problema de arrastrar y soltar. El t\u00edtulo se muestra a los alumnos.",
    "There are attempts remaining": "Todav\u00eda hay intentos pendientes",
    "There was an error with your form.": "Ha habido un error con su formulario.",
    "This is a screen reader-friendly problem.": "This is a screen reader-friendly problem.",
    "This setting limits the number of items that can be dropped into a single zone.": "This setting limits the number of items that can be dropped into a single zone.",
    "Title": "T\u00edtulo",
    "Unknown DnDv2 mode {mode} - course is misconfigured": "Modo DnDv2 desconocido {mode} - el curso est\u00e1 mal configurado",
    "Unknown Zone": "Unknown Zone",
    "Use only TAB and SHIFT+TAB to navigate between draggable items and drop zones.": "Utilice s\u00f3lo las teclas TAB y SHIFT + TAB para navegar entre los elementos arrastrables y las zonas.",
    "Use this zone to associate an item with the bottom layer of the triangle.": "Use esta zona para asociar un \u00edtem con la parte inferior del triangulo.",
    "Use this zone to associate an item with the middle layer of the triangle.": "Use esta zona para asociar un \u00edtem con la parte media del triangulo.",
    "Use this zone to associate an item with the top layer of the triangle.": "Use esta zona para asociar un \u00edtem con la parte superior del triangulo.",
    "You can complete this problem using only your keyboard by following the guidance below:": "Puede completar este problema usando \u00fanicamente su teclado y siguiendo las recomendaciones a continuaci\u00f3n:",
    "You cannot add any more items to this zone.": "You cannot add any more items to this zone.",
    "You have used {used} of {total} attempts.": "Has realizado {used} de {total} intentos.",
    "You silly, there are no zones for this one.": "No. No hay ninguna zona para este \u00edtem.",
    "Your highest score is {score}": "Su mayor puntaje ha sido {score}",
    "Zone Layout": "Zone Layout",
    "Zone Size": "Zone Size",
    "Zone borders": "Margenes de la zona",
    "Zone definitions": "Definici\u00f3n de las zonas",
    "Zone height": "Zone height",
    "Zone labels": "Etiquetas de las zonas",
    "Zone width": "Zone width",
    "Zone {num}": [
      "Zone {num}",
      "Zone {num}"
    ],
    "Zones": "Zonas",
    "do_attempt handler should only be called for assessment mode": "El hendler do_attempt s\u00f3lo debe ser llamado para el modo calificable",
    "droppable": "droppable",
    "show_answer handler should only be called for assessment mode": "El handlre show_answer s\u00f3lo debe ser llamado para el modo calificable",
    "{earned}/{possible} point (graded)": [
      "{earned}/{possible} point (graded)",
      "{earned}/{possible} points (graded)"
    ],
    "{earned}/{possible} point (ungraded)": [
      "{earned}/{possible} point (ungraded)",
      "{earned}/{possible} points (ungraded)"
    ],
    "{possible} point possible (graded)": [
      "{possible} point possible (graded)",
      "{possible} points possible (graded)"
    ],
    "{possible} point possible (ungraded)": [
      "{possible} point possible (ungraded)",
      "{possible} points possible (ungraded)"
    ]
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j \\d\\e F \\d\\e Y \\a \\l\\a\\s H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j \\d\\e F \\d\\e Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": "1",
    "MONTH_DAY_FORMAT": "j \\d\\e F",
    "NUMBER_GROUPING": "3",
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F \\d\\e Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


                  }
                };
                DragAndDropI18N.init();
                global.DragAndDropI18N = DragAndDropI18N;
            }(this));

