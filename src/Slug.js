export default function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâąèéëêęìíïîòóöôóùúüûñńłćźżç·/_,:;";
    var to   = "aaaaaeeeeeiiiiooooouuuunnlczz-------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

// function slugify(string) {
//   const a = 'àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœøṕŕßśșțùúüûǘẃẍÿź·/_,:;'
//   const b = 'aaaaaaaaceeeeghiiiimnnnooooooprssstuuuuuwxyz------'
//   const p = new RegExp(a.split('').join('|'), 'g')  return string.toString().toLowerCase()
//     .replace(/\s+/g, '-') // Replace spaces with -
//     .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
//     .replace(/&/g, '-and-') // Replace & with ‘and’
//     .replace(/[^\w\-]+/g, '') // Remove all non-word characters
//     .replace(/\-\-+/g, '-') // Replace multiple - with single -
//     .replace(/^-+/, '') // Trim - from start of text
//     .replace(/-+$/, '') // Trim - from end of text
// }
