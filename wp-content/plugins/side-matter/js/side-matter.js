(function($){var isResponsive=side_matter.is_responsive;var useEffects=side_matter.use_effects;var noteAdjust=side_matter.note_adjust;var htmlClass=side_matter.html_class;var isResizing;function placeNotes(){for(n=1,refCount=$('a.side-matter-ref').length;n<=refCount;n++){var ref='#ref-'+ n;var note='#note-'+ n;var refPosition=$(ref).position().top;var notePosition=$(note).position().top;var noteOffset=refPosition- notePosition- noteAdjust;var finalOffset=(noteOffset<0)?0:noteOffset;$(note).css('marginTop',finalOffset);}}
$(document).ready(function(){if(useEffects==1)$('ol.'+ htmlClass+'-list').css('opacity',0);});$(window).load(function(){for(i=1;i<=2;i++)placeNotes();if(useEffects==1)$('ol.'+ htmlClass+'-list').fadeTo(360,1);});if(isResponsive==1){$(window).resize(function(){if(useEffects==1)$('li.'+ htmlClass+'-note').fadeTo(20,0);var timeoutInterval=600;function doneResizing(){for(i=1;i<=2;i++)placeNotes();if(useEffects==1)$('li.'+ htmlClass+'-note').fadeTo(360,1);}
clearTimeout(isResizing);isResizing=setTimeout(doneResizing,timeoutInterval);});}})(jQuery);