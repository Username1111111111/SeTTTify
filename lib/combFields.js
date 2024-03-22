export default function combFields(fields) {
    for (const key in fields) {
        if (key.match(/custom_int.*_value/)) {
            if (fields[key] == "") {
                fields[key] = null;
            } else {
                fields[key] = +fields[key];
            }
        } else if (key.match(/custom_date.*_value/)) {
            if (fields[key] == "") {
                fields[key] = null;
            }
        }
    }
}