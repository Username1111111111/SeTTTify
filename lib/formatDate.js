export default function formatDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    if (isNaN(date.getTime())) {
        throw new Error('Invalid date');
    }
    
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0'); 

    return `${year}-${month}-${day}`;
}