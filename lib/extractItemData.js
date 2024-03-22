export default function extractItemData(itemData) {
    const keysToSend = [
        'name',
        'tags',
        'custom_int1_value',
        'custom_int2_value',
        'custom_int3_value',
        'custom_string1_value',
        'custom_string2_value',
        'custom_string3_value',
        'custom_text1_value',
        'custom_text2_value',
        'custom_text3_value',
        'custom_bool1_value',
        'custom_bool2_value',
        'custom_bool3_value',
        'custom_date1_value',
        'custom_date2_value',
        'custom_date3_value',
    ];
    
    const dataToSend = {};
    keysToSend.forEach(key => {
        if (itemData[key] !== undefined) {
            dataToSend[key] = itemData[key];
        }
    });
    return dataToSend;
}